import React, { Component } from 'react'
import { skillData } from '../data/skillData'

export default class Skill extends Component {
  
  state = {
    skills:skillData
  }
  
  render() {
    return (
      <div className='skillsContainer'>
        <p>Explorez mes diverses compétences et suivez mon voyage numérique !</p>
        <div className='skillsList'>
          {this.state.skills.map(skill => 
            <span key={skill.id} className='skill'>
              <img src={skill.url_picture} alt={skill.skill} />
              <br />
              {skill.skill}
            </span>
          )}
        </div>
      </div>
    )
  }
}
