import { percent } from '../format.ts'

type Props = {
  trackTitle: string
  done: number
  total: number
  canReset: boolean
  confirming: boolean
  onAskReset: () => void
  onCancelReset: () => void
  onReset: () => void
}

export function ProgressHeader({
  trackTitle,
  done,
  total,
  canReset,
  confirming,
  onAskReset,
  onCancelReset,
  onReset,
}: Props) {
  const value = percent(done, total)

  return (
    <div className="progress">
      <p className="progress__count">
        <span className="progress__track">{trackTitle}</span>
        <span>
          {done} of {total}
        </span>
      </p>
      <div
        className={value === 100 ? 'meter is-complete' : 'meter'}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
        aria-label={`${trackTitle} progress`}
      >
        <span style={{ width: `${value}%` }} />
      </div>
      <p className="progress__percent">{value}%</p>
      {confirming ? (
        <div className="confirm">
          <p>Clear every check on all three tracks?</p>
          <button type="button" className="confirm__clear" onClick={onReset}>
            Clear
          </button>
          <button type="button" className="confirm__cancel" onClick={onCancelReset}>
            Cancel
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="reset"
          onClick={onAskReset}
          disabled={!canReset}
        >
          Reset progress
        </button>
      )}
    </div>
  )
}
