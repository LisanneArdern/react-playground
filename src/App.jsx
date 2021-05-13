import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'

export default () => {
  const [size, setSize] = useState(100)
  const [radius, setRadius] = useState(0)
  const [rotate, setRotation] = useState(0)
  const [color, setColor] = useState('')

  const style = {
    width: size + 'px',
    height: size + 'px',
    borderRadius: radius + '%',
    transform: `rotate(${rotate}deg)`,
    backgroundColor: color,
  }

  return (
    <div className="App">
      <label className="label">
        Color:
        <input value={color} onChange={changeColor} type="color" />
      </label>
      <label className="label">
        Size:
        <input value={size} onChange={handleChange} type="range" max="200" />
      </label>
      <label className="label">
        Radius:
        <input value={radius} onChange={changeRadius} type="range" max="50" />
      </label>
      <label className="label">
        Rotation:
        <input
          value={rotate}
          onChange={changeRotation}
          type="range"
          max="360"
        />
      </label>
      <div style={style} className="Box" />
    </div>
  )

  function handleChange(event) {
    const input = event.target
    setSize(input.value)
  }

  function changeRadius(event) {
    const input = event.target
    setRadius(input.value)
  }

  function changeRotation(event) {
    const input = event.target
    setRotation(input.value)
  }
  function changeColor(event) {
    const input = event.target
    setColor(input.value)
  }
}
