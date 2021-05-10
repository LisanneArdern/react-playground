import * as React from 'react'
import Header from './Header'

export default () => {
  return (
    <div>
      <Header>Home</Header>
      <Header isBackButtonVisible>Settings</Header>
      <Header>Profile</Header>
    </div>
  )
}
