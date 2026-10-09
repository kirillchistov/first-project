import { createContext, useContext } from 'react'

export type ProgressMap = Record<string, true>

export type ProgressApi = {
  isDone: (id: string) => boolean
  toggle: (id: string) => void
  reset: () => void
  hasAny: boolean
}

export const ProgressContext = createContext<ProgressApi | null>(null)

export function useProgress(): ProgressApi {
  const value = useContext(ProgressContext)
  if (!value) throw new Error('useProgress must be used within ProgressProvider')
  return value
}
