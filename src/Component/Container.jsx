import React from 'react'
import styled from './container.module.css'


function Container({children}) {
  return (
    <div className={styled.container}>
      {children}
    </div>
    
  )
}

export default Container
