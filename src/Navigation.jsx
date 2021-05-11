import * as React from 'react'
import './Navigation.css'

export default function Navigation({
  leftIsHighlighted,
  middleIsHighlighted,
  rightIsHighlighted,
}) {
  return (
    <nav className="Navigation">
      <button
        className={
          leftIsHighlighted
            ? 'Navigation__button--highlighted'
            : 'Navigation__button'
        }
      >
        Home
      </button>
      <button
        className={
          middleIsHighlighted
            ? 'Navigation__button--highlighted'
            : 'Navigation__button'
        }
      >
        About
      </button>
      <button
        className={
          rightIsHighlighted
            ? 'Navigation__button--highlighted'
            : 'Navigation__button'
        }
      >
        Imprint
      </button>
    </nav>
  )
}
