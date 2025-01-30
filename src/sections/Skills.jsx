import React, { Component } from 'react'
import { skillData } from '../data/skillData'

export default class Skill extends Component {
  
  state = {
    skills:skillData
  }
  
  render() {
    return (
      <div className='skillsContainer'>
        <p>Voici un aperçu de mon stack technologique (et bien plus encore !)</p>
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
