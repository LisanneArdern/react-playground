import * as React from 'react'
import Button from './Button'
import Pagination from './Pagination'
export default () => {
  return (
    <div>
      <Pagination isLeftDisabled text="1/34" />
      <Pagination isRightDisabled text="2/34" />
      <Pagination isLeftDisabled text="34/34" />
      <Button isActive={true}>Active</Button>
      <Button>Not Active</Button>
    </div>
  )
}
