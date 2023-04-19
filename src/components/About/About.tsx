import React from 'react'
import { Teams } from './Teams'
import { Players } from './Players'
import { Milestone } from './Milestone'

const About = () => {
  return (
    <div>
        <div className='about__'>
          <Teams />
          <Players />
          <Milestone />
        </div>
    </div>
  )
}

export default About