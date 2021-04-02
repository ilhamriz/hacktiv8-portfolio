import PropTypes from 'prop-types'
import SkillList from '../molecules/SkillList';
import './Skills.css'

const Skills = ({skills}) => {
  return (
    <div id='Skills' className='container'>
      <h2>Tools & Skills</h2>
      <div className="skills__container">
        {
          skills.map((skill, idx) => (
            <SkillList skills={skill} key={idx}/>
          ))
        }
      </div>
    </div>
  )
}

Skills.propTypes = {
  skills: PropTypes.array
}

export default Skills;