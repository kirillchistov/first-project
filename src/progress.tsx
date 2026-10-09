import { useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { skillIds } from './data/index.ts'
import { ProgressContext, type ProgressApi, type ProgressMap } from './progress-context.ts'

const STORAGE_KEY = 'field-guide-progress-v1'

function loadProgress(): ProgressMap {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return {}
    const parsed: unknown = JSON.parse(raw)
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return {}

    const progress: ProgressMap = {}
    for (const [id, value] of Object.entries(parsed)) {
      if (value === true && skillIds.has(id)) progress[id] = true
    }
    return progress
  } catch {
    return {}
  }
}

function saveProgress(progress: ProgressMap) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  } catch {
    // Private mode and full storage should not crash the page.
  }
}

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [done, setDone] = useState<ProgressMap>(loadProgress)

  useEffect(() => {
    saveProgress(done)
  }, [done])

  const api = useMemo<ProgressApi>(() => {
    return {
      isDone: (id) => done[id] === true,
      hasAny: Object.keys(done).length > 0,
      toggle: (id) => {
        if (!skillIds.has(id)) return
        setDone((current) => {
          const next = { ...current }
          if (next[id]) delete next[id]
          else next[id] = true
          return next
        })
      },
      reset: () => {
        setDone({})
      },
    }
  }, [done])

  return <ProgressContext.Provider value={api}>{children}</ProgressContext.Provider>
}
