export type StatusFilter = 'all' | 'open' | 'done'

type Props = {
  status: StatusFilter
  query: string
  onStatus: (status: StatusFilter) => void
  onQuery: (query: string) => void
}

const options: { id: StatusFilter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'open', label: 'Still open' },
  { id: 'done', label: 'Done' },
]

export function Filters({ status, query, onStatus, onQuery }: Props) {
  return (
    <div className="filters">
      <div className="filters__status" role="group" aria-label="Filter by status">
        {options.map((option) => {
          const selected = option.id === status
          return (
            <button
              key={option.id}
              type="button"
              className={selected ? 'filter is-selected' : 'filter'}
              aria-pressed={selected}
              onClick={() => onStatus(option.id)}
            >
              {option.label}
            </button>
          )
        })}
      </div>
      <label className="search">
        <span className="sr-only">Search skills by title</span>
        <input
          type="search"
          value={query}
          placeholder="Search titles"
          onChange={(event) => onQuery(event.target.value)}
        />
      </label>
    </div>
  )
}
