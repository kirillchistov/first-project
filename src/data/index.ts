import type { Skill, Track, TrackId } from './types.ts'
import { engineeringPhases, engineeringSkills } from './engineering.ts'
import { founderPhases, founderSkills } from './founder.ts'
import { productPhases, productSkills } from './product.ts'

const allSkills: Skill[] = [...productSkills, ...engineeringSkills, ...founderSkills]

export const tracks: Track[] = [
  {
    id: 'product',
    title: 'Product',
    lede: 'Judgment you can show in a hiring loop: frame a problem, choose a bet, and write it so a team can build.',
    phases: productPhases,
  },
  {
    id: 'engineering',
    title: 'Engineering',
    lede: 'A fullstack stack aimed at a junior-to-mid role: TypeScript, React, Node.js, Express, and Postgres.',
    phases: engineeringPhases,
  },
  {
    id: 'founder',
    title: 'Founder',
    lede: 'The short path to one product in a user’s hands. Skills shared with the other tracks use the same checkbox.',
    phases: founderPhases,
  },
]

function assertCatalog(skills: Skill[], trackList: Track[]): Map<string, Skill> {
  const byId = new Map<string, Skill>()

  for (const skill of skills) {
    if (byId.has(skill.id)) throw new Error(`Duplicate skill id: ${skill.id}`)
    if (skill.tracks.length === 0) throw new Error(`Skill has no tracks: ${skill.id}`)
    if (skill.weeks < 1) throw new Error(`Skill needs a week estimate: ${skill.id}`)
    if (skill.goodEnough.length !== 3) {
      throw new Error(`Skill needs 3 good-enough points: ${skill.id}`)
    }
    if (skill.resources.length === 0) throw new Error(`Skill needs a resource: ${skill.id}`)
    byId.set(skill.id, skill)
  }

  const listed = new Map<TrackId, Set<string>>()

  for (const track of trackList) {
    const ids = new Set<string>()
    for (const phase of track.phases) {
      for (const id of phase.skillIds) {
        const skill = byId.get(id)
        if (!skill) throw new Error(`Unknown skill ${id} on ${track.id}`)
        if (!skill.tracks.includes(track.id)) {
          throw new Error(`Skill ${id} is listed on ${track.id} but does not include that track`)
        }
        if (ids.has(id)) throw new Error(`Skill ${id} is repeated on ${track.id}`)
        ids.add(id)
      }
    }
    listed.set(track.id, ids)
  }

  for (const skill of skills) {
    for (const trackId of skill.tracks) {
      if (!listed.get(trackId)?.has(skill.id)) {
        throw new Error(`Skill ${skill.id} claims ${trackId} but that track does not list it`)
      }
    }
  }

  return byId
}

const skillById = assertCatalog(allSkills, tracks)

const trackById = new Map<TrackId, Track>(tracks.map((track) => [track.id, track]))

export const skillIds: ReadonlySet<string> = new Set(skillById.keys())

export function getSkill(id: string): Skill | undefined {
  return skillById.get(id)
}

export function getTrack(id: TrackId): Track {
  const track = trackById.get(id)
  if (!track) throw new Error(`Unknown track: ${id}`)
  return track
}

export function phaseTitleFor(trackId: TrackId, skillId: string): string {
  const track = trackById.get(trackId)
  const phase = track?.phases.find((item) => item.skillIds.includes(skillId))
  return phase?.title ?? ''
}

export function isTrackId(value: string | null): value is TrackId {
  return value === 'product' || value === 'engineering' || value === 'founder'
}
