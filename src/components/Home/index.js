import {Component} from 'react'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="home_container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-blog-img.png"
          alt="home"
        />
        <h className="Home_heading">Home</h>
      </div>
    )
  }
}

export default Home
