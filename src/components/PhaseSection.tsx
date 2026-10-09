import type { Skill } from '../data/types.ts'
import { SkillCard } from './SkillCard.tsx'

type Props = {
  title: string
  blurb: string
  skills: Skill[]
  isDone: (id: string) => boolean
  onOpen: (id: string) => void
}

export function PhaseSection({ title, blurb, skills, isDone, onOpen }: Props) {
  if (skills.length === 0) return null

  return (
    <section className="phase">
      <h2 className="phase__title">{title}</h2>
      <p className="phase__blurb">{blurb}</p>
      <div className="phase__grid">
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            skill={skill}
            done={isDone(skill.id)}
            onOpen={() => onOpen(skill.id)}
          />
        ))}
      </div>
    </section>
  )
}
