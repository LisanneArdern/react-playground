import * as React from 'react'
import Card from './Card'

const cards = [
  {
    title: 'Geography',
    question: 'What is the capital of Venzuela?',
    answer: 'Caracas',
    isActive: false,
    showAnswer: true,
    tags: ['Americas', 'Cities'],
    id: 1,
  },
  {
    title: 'Biography',
    question: 'How many pairs of chromosomes do humans have?',
    answer: '23 pairs',
    isActive: true,
    showAnswer: false,
    tags: ['Human', 'Body', 'Genetics'],
    id: 2,
  },
]
export default () => {
  return (
    <div className="App">
      {cards.map(
        ({ title, question, answer, isActive, showAnswer, tags, id }) => (
          <Card
            key={id}
            title={title}
            question={question}
            answer={answer}
            isActive={isActive}
            showAnswer={showAnswer}
            tags={tags}
          />
        )
      )}
    </div>
  )
}
