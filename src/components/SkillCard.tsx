import type { Skill } from '../data/types.ts'
import { weeksLabel } from '../format.ts'

type Props = {
  skill: Skill
  done: boolean
  onOpen: () => void
}

export function SkillCard({ skill, done, onOpen }: Props) {
  return (
    <button
      type="button"
      className={done ? 'card is-done' : 'card'}
      onClick={onOpen}
      id={`skill-${skill.id}`}
    >
      <span className="card__status">
        <span className={done ? 'mark-dot is-done' : 'mark-dot'} aria-hidden="true" />
        {done ? 'Done' : 'Not started'}
      </span>
      <span className="card__title">{skill.title}</span>
      <span className="card__summary">{skill.summary}</span>
      <span className="card__meta">{weeksLabel(skill.weeks)}</span>
    </button>
  )
}
