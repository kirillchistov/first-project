import { useEffect, useRef } from 'react'
import type { Skill } from '../data/types.ts'
import { tracks } from '../data/index.ts'
import { joinTitles, weeksLabel } from '../format.ts'

type Props = {
  skill: Skill
  phaseTitle: string
  done: boolean
  onClose: () => void
  onToggle: () => void
}

const FOCUSABLE =
  'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'

export function SkillDrawer({ skill, phaseTitle, done, onClose, onToggle }: Props) {
  const dialogRef = useRef<HTMLElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const onCloseRef = useRef(onClose)

  useEffect(() => {
    onCloseRef.current = onClose
  }, [onClose])

  useEffect(() => {
    const dialog = dialogRef.current
    const previouslyFocused = document.activeElement
    closeRef.current?.focus()
    document.body.classList.add('drawer-open')

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault()
        onCloseRef.current()
        return
      }
      if (event.key !== 'Tab' || !dialog) return

      const items = Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE))
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]
      if (!first || !last) return

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.classList.remove('drawer-open')
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus()
    }
  }, [skill.id])

  const names = skill.tracks.map((id) => tracks.find((track) => track.id === id)?.title ?? id)
  const meta = [phaseTitle, weeksLabel(skill.weeks)].filter(Boolean).join(' · ')

  return (
    <div className="drawer-root">
      <button type="button" className="overlay" aria-label="Close skill details" onClick={onClose} />
      <article
        className="drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="skill-title"
        ref={dialogRef}
      >
        <header className="drawer__header">
          <div>
            <p className="drawer__meta">{meta}</p>
            <h2 id="skill-title">{skill.title}</h2>
          </div>
          <button type="button" className="drawer__close" onClick={onClose} ref={closeRef}>
            Close
          </button>
        </header>
        <div className="drawer__body">
          <p className="drawer__summary">{skill.summary}</p>
          {skill.tracks.length > 1 ? (
            <p className="shared-note">
              This skill is on {joinTitles(names)}. One checkbox updates every track that includes
              it.
            </p>
          ) : null}
          <section>
            <h3>Why it matters</h3>
            <p>{skill.why}</p>
          </section>
          <section>
            <h3>Good enough</h3>
            <ul>
              {skill.goodEnough.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section>
            <h3>Practice</h3>
            <p>{skill.practice}</p>
          </section>
          {skill.stack && skill.stack.length > 0 ? (
            <section>
              <h3>Stack</h3>
              <ul className="chips">
                {skill.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}
          <section>
            <h3>Read next</h3>
            <ul className="resources">
              {skill.resources.map((resource) => (
                <li key={resource.url}>
                  <a href={resource.url} target="_blank" rel="noreferrer">
                    {resource.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <footer className="drawer__footer">
          <button
            type="button"
            className={done ? 'mark is-done' : 'mark'}
            onClick={onToggle}
          >
            {done ? 'Mark open' : 'Mark done'}
          </button>
        </footer>
      </article>
    </div>
  )
}
