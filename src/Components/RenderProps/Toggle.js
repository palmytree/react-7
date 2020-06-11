import React, { useState } from 'react'
import styleHoc from '../HOCS/styleHoc'

const Toggle = props => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={props.style}>
      {isOpen && props.children}
      <button onClick={() => setIsOpen(!isOpen)}>Show/Hide</button>
    </div>
  )
}

export default styleHoc(Toggle)
