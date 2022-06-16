import {Link} from 'react-router-dom'

import {Component} from 'react'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="Header_container">
        <div className="image_header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png "
            alt="wave"
            className="image_of_header"
          />
          <h1>wave</h1>
        </div>
        <ul className="item_header">
          <li className="tab_item">
            <Link to="/">Home</Link>
          </li>
          <li className="tab_item">
            <Link to="/about">about</Link>
          </li>
          <li className="tab_item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Header
