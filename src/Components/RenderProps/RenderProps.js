import React from 'react'
import Toggle from './Toggle'
import ToggleRenderProps from './ToggleRenderProps'
import '../style.css'

const RenderProps = props => {
  return (
    <section className='advanced-react-section'>
      <h1>
        Render Props
        <a
          href='https://reactjs.org/docs/render-props.html'
          rel='noopener'
          target='__blank'>
          Docs
        </a>
      </h1>
      <Toggle darkMode>
        <div>
          I got an A on my oragami assignment when I turned my paper into my
          teacher
        </div>
      </Toggle>
      <ToggleRenderProps
        render={({ isOpen, setIsOpen }) => (
          <div>
            {isOpen && <div>Let us go to space</div>}
            <button onClick={() => setIsOpen(!isOpen)}>Show/Hide</button>
          </div>
        )}
      />
    </section>
  )
}
export default RenderProps
