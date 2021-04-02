import ListItem from '../molecules/ListItem';
import PropTypes from 'prop-types'

const Experience = ({expList}) => {
  return (
    <div id='Experience' className='container'>
      <h2>Experience</h2>
      {
        expList.map((exp, idx) => (
          <ListItem items={exp} key={idx}/>
        ))
      }
    </div>
  )
}

Experience.propTypes = {
  expList: PropTypes.array
}

export default Experience;