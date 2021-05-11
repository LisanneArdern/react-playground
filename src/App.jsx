import * as React from 'react'
import Card from './Card'

const cards = [
  {
    title: 'Age',
    question: 'How old are you?',
    answer: '26 years old',
    isActive: false,
    showAnswer: true,
    id: 1,
  },
  {
    title: 'Home',
    question: 'Where are you from?',
    answer: 'Hamburg',
    isActive: true,
    showAnswer: false,
    id: 2,
  },
]
export default () => {
  return (
    <div className="App">
      {cards.map(({ title, question, answer, isActive, showAnswer, id }) => (
        <Card
          key={id}
          title={title}
          question={question}
          answer={answer}
          isActive={isActive}
          showAnswer={showAnswer}
        />
      ))}
    </div>
  )
}
