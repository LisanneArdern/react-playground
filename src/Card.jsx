import * as React from 'react'
import './Card.css'

export default ({ isActive, title, question, answer, showAnswer }) => {
  return (
    <section className="Card">
      <button
        className={isActive ? 'Card__bookmark--active' : 'Card__bookmark'}
        aria-label="Bookmark card"
      ></button>
      <h2>{title}</h2>
      <p>{question}</p>
      <p className={showAnswer ? '' : 'Card__answer--hidden'}>{answer}</p>
    </section>
  )
}
