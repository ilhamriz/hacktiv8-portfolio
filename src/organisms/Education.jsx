import PropTypes from 'prop-types'
import ListItem from '../molecules/ListItem';

const Education = ({eduList}) => {
  return (
    <div id='Education' className='container'>
      <h2>Education</h2>
      {
        eduList.map((education, idx) => (
          <ListItem items={education} key={idx}/>
        ))
      }
    </div>
  )
}

Education.propTypes = {
  eduList: PropTypes.array
}

export default Education;