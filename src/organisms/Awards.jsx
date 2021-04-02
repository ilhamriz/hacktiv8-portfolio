import PropTypes from 'prop-types'
import AwardList from '../atoms/AwardList'

const Awards = ({awards}) => {
  return (
    <div id='Awards' className='container'>
      <h2>Awards</h2>
      {awards.map((award, idx) => (
        <AwardList key={idx} list={award}/>
      ))}
    </div>
  )
}

Awards.propTypes = {
  awards: PropTypes.array
}

export default Awards

