export function weeksLabel(weeks: number): string {
  return weeks === 1 ? 'About 1 week' : `About ${weeks} weeks`
}

export function percent(done: number, total: number): number {
  if (total === 0) return 0
  return Math.round((done / total) * 100)
}

export function joinTitles(titles: string[]): string {
  if (titles.length <= 1) return titles[0] ?? ''
  if (titles.length === 2) return `${titles[0]} and ${titles[1]}`
  return `${titles.slice(0, -1).join(', ')}, and ${titles[titles.length - 1]}`
}
