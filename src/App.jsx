import * as React from 'react'
import Card from './Card'

const cards = [
  { title: 'Name', text: 'Lisanne', isActive: false, id: 1 },
  { title: 'Name', text: 'Isabel', isActive: true, id: 1 },
]
export default () => {
  return (
    <div className="App">
      {cards.map(({ title, text, isActive, id }) => (
        <Card key={id} title={title} text={text} isActive={isActive} />
      ))}
    </div>
  )
}
