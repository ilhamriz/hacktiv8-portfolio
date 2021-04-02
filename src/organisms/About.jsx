import Sosmed from '../molecules/Sosmed'
import PropTypes from 'prop-types'
import './About.css'

const About = ({biodata}) => {
  return (
    <div id='About' className='container'>
      <h1>{biodata.name},<br />{biodata.profession}</h1>
      <section className='about__contact'>
        <a href={`tel:${biodata.contact}`}><span>{biodata.contact}</span></a>
        <a href={`mailto:${biodata.email}`}><span>{biodata.email}</span></a>
      </section>
      <p>{biodata.summary}</p>
      <Sosmed />
    </div>
  )
}

About.propTypes = {
  biodata: PropTypes.object
}

export default About;