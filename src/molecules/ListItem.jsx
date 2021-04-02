import PropTypes from 'prop-types'
import './ListItem.css'

const ListItem = ({items}) => {
  return (
    <div className='exp__list'>
      <span>{items.date}</span>
      <section>
        <h3>{items.title}</h3>
        <p className='exp__subTitle'>{items.subTitle}</p>
        <section className='exp__details'>
          <ul>
            {items.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </section>
      </section>
    </div>
  )
}

ListItem.propTypes = {
  items: PropTypes.object
}

export default ListItem;