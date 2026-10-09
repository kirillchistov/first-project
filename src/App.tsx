import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Filters, type StatusFilter } from './components/Filters.tsx'
import { PhaseSection } from './components/PhaseSection.tsx'
import { ProgressHeader } from './components/ProgressHeader.tsx'
import { SkillDrawer } from './components/SkillDrawer.tsx'
import { TrackSwitch } from './components/TrackSwitch.tsx'
import { getSkill, getTrack, isTrackId, phaseTitleFor } from './data/index.ts'
import type { Skill, TrackId } from './data/types.ts'
import { useProgress } from './progress-context.ts'

function emptyMessage(status: StatusFilter, query: string): string {
  const trimmed = query.trim()
  if (trimmed) return `No titles match "${trimmed}".`
  if (status === 'done') return 'Nothing on this track is marked done yet.'
  return 'Everything on this track is marked done.'
}

function skillVisible(skill: Skill, status: StatusFilter, query: string, done: boolean): boolean {
  const matchesQuery = skill.title.toLowerCase().includes(query.trim().toLowerCase())
  if (!matchesQuery) return false
  if (status === 'done') return done
  if (status === 'open') return !done
  return true
}

export function App() {
  const [searchParams, setSearchParams] = useSearchParams()
  const progress = useProgress()
  const requestedTrack = searchParams.get('track')
  const requestedSkillId = searchParams.get('skill')
  const requestedSkill = requestedSkillId ? getSkill(requestedSkillId) : undefined

  let trackId: TrackId = 'product'
  if (isTrackId(requestedTrack)) trackId = requestedTrack
  else if (requestedSkill?.tracks[0]) trackId = requestedSkill.tracks[0]

  const track = getTrack(trackId)
  const openSkill =
    requestedSkill && requestedSkill.tracks.includes(trackId) ? requestedSkill : undefined

  const [status, setStatus] = useState<StatusFilter>('all')
  const [query, setQuery] = useState('')
  const [filterTrack, setFilterTrack] = useState(trackId)
  const [confirming, setConfirming] = useState(false)

  if (filterTrack !== trackId) {
    setFilterTrack(trackId)
    setStatus('all')
    setQuery('')
    setConfirming(false)
  }

  useEffect(() => {
    document.title = `Field Guide · ${track.title}`
  }, [track.title])

  function selectTrack(next: TrackId) {
    const params = new URLSearchParams(searchParams)
    params.set('track', next)
    const skillId = params.get('skill')
    if (skillId) {
      const skill = getSkill(skillId)
      if (!skill || !skill.tracks.includes(next)) params.delete('skill')
    }
    setSearchParams(params, { replace: true })
  }

  function openSkillById(id: string) {
    const params = new URLSearchParams(searchParams)
    params.set('track', trackId)
    params.set('skill', id)
    setSearchParams(params, { replace: true })
  }

  function closeSkill() {
    const params = new URLSearchParams(searchParams)
    params.delete('skill')
    setSearchParams(params, { replace: true })
  }

  const ids = track.phases.flatMap((phase) => phase.skillIds)
  const doneCount = ids.filter((id) => progress.isDone(id)).length
  const phases = track.phases.map((phase) => ({
    ...phase,
    skills: phase.skillIds
      .map((id) => getSkill(id))
      .filter((skill): skill is Skill => skill !== undefined)
      .filter((skill) => skillVisible(skill, status, query, progress.isDone(skill.id))),
  }))
  const visibleCount = phases.reduce((count, phase) => count + phase.skills.length, 0)

  return (
    <div className="page">
      <header className="masthead">
        <div className="masthead__identity">
          <p className="eyebrow">Roadmap</p>
          <h1>Field Guide</h1>
          <p className="lede">{track.lede}</p>
        </div>
        <TrackSwitch active={trackId} onChange={selectTrack} />
      </header>
      <ProgressHeader
        trackTitle={track.title}
        done={doneCount}
        total={ids.length}
        canReset={progress.hasAny}
        confirming={confirming && progress.hasAny}
        onAskReset={() => setConfirming(true)}
        onCancelReset={() => setConfirming(false)}
        onReset={() => {
          progress.reset()
          setConfirming(false)
        }}
      />
      <Filters status={status} query={query} onStatus={setStatus} onQuery={setQuery} />
      <main>
        {visibleCount === 0 ? (
          <p className="empty">{emptyMessage(status, query)}</p>
        ) : (
          phases.map((phase) => (
            <PhaseSection
              key={phase.id}
              title={phase.title}
              blurb={phase.blurb}
              skills={phase.skills}
              isDone={progress.isDone}
              onOpen={openSkillById}
            />
          ))
        )}
      </main>
      <p className="footnote">Checks are saved in this browser only.</p>
      {openSkill ? (
        <SkillDrawer
          skill={openSkill}
          phaseTitle={phaseTitleFor(trackId, openSkill.id)}
          done={progress.isDone(openSkill.id)}
          onClose={closeSkill}
          onToggle={() => progress.toggle(openSkill.id)}
        />
      ) : null}
    </div>
  )
}
