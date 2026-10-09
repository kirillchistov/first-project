export type TrackId = 'product' | 'engineering' | 'founder'

export type Resource = {
  label: string
  url: string
}

export type Skill = {
  id: string
  title: string
  summary: string
  phase: string
  tracks: TrackId[]
  weeks: number
  why: string
  goodEnough: string[]
  practice: string
  stack?: string[]
  resources: Resource[]
}

export type Phase = {
  id: string
  title: string
  blurb: string
  skillIds: string[]
}

export type Track = {
  id: TrackId
  title: string
  lede: string
  phases: Phase[]
}
