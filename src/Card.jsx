import * as React from 'react'
import './Card.css'

export default ({ isActive, title, text }) => {
  return (
    <section className="Card">
      <button
        className={isActive ? 'Card__bookmark--active' : 'Card__bookmark'}
        aria-label="Bookmark card"
      ></button>
      <h2>{title}</h2>
      <p>{text}</p>
    </section>
  )
}
