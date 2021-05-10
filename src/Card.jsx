import * as React from 'react'
import './Card.css'

export default ({ isActive }) => {
  return (
    <section className="Card">
      <div
        className={isActive ? 'Card__bookmark--active' : 'Card__bookmark'}
      ></div>
      <h2>Title</h2>
      <p>Lorem ipsum dolor sit.</p>
    </section>
  )
}
