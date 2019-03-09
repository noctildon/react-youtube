import React from 'react'
import Rainbow from '../hoc/Rainbow'

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique nulla iste voluptatibus expedita libero. Eveniet sapiente magnam repellat nisi assumenda soluta nulla accusantium facere voluptas odio, dicta exercitationem iure ipsam!</p>
    </div>
  )
}

// Rainbow是high order component,可以對About渲染
export default Rainbow(About)