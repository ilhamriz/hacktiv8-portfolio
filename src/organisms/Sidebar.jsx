import Scrollspy from "react-scrollspy";
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import { photo } from '../images';
import "./Sidebar.css";

const Sidebar = ({ navItems }) => {
  return (
    <div className="Sidebar">
      <img src={photo} alt='' />

      <Scrollspy
        items={navItems}
        currentClassName="is-current"
      >
        {
          navItems.map((navItem, idx) => (
            <li key={idx}>
              <Link to={`${navItem}`} smooth={true} duration={1000}>{navItem}</Link>
            </li>
          ))
        }
      </Scrollspy>
    </div>
  );
}

Sidebar.propTypes = {
  navItems: PropTypes.array
}

export default Sidebar;