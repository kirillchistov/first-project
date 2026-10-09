import type { TrackId } from '../data/types.ts'
import { tracks } from '../data/index.ts'

type Props = {
  active: TrackId
  onChange: (track: TrackId) => void
}

export function TrackSwitch({ active, onChange }: Props) {
  return (
    <div className="track-switch" role="radiogroup" aria-label="Track">
      {tracks.map((track) => {
        const selected = track.id === active
        return (
          <button
            key={track.id}
            type="button"
            role="radio"
            aria-checked={selected}
            className={selected ? 'track-switch__option is-selected' : 'track-switch__option'}
            onClick={() => onChange(track.id)}
          >
            {track.title}
          </button>
        )
      })}
    </div>
  )
}
