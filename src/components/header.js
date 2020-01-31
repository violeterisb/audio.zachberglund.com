import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHome, faVolumeUp, faGamepad, faFile, faAddressCard} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SvgIcon from "./SvgIcon"

library.add(fab, faHome, faVolumeUp, faGamepad, faFile, faAddressCard)

const Header = () => (
  <header>
    <div className="container">
      <div className="header-div">
      <ul>
        <li>
          <Link id="logo" className="corners btn" to="/">
            <span className="link-text"><SvgIcon /></span><span className="top-dots"/>
          </Link>
        </li>
        <li>
          <Link activeClassName="active" className="corners btn" to="/"><FontAwesomeIcon icon="home" />
          <span className="link-text"><p>Home</p></span><span className="top-dots"/>
          </Link>
        </li>
        <li>
          <Link activeClassName="active" className="corners btn" to="/games"><FontAwesomeIcon icon="gamepad" />
            <span className="link-text"><p>Games</p></span><span className="top-dots"/>
          </Link>
        </li>
        <li>
          <Link activeClassName="active" className="corners btn" to="/audio"><FontAwesomeIcon icon="volume-up" />
            <span className="link-text"><p>Audio</p></span><span className="top-dots"/>
          </Link>
        </li>
        <li>
          <Link activeClassName="active" className="corners btn" to="/contact"><FontAwesomeIcon icon="address-card" />
            <span className="link-text"><p>Contact</p></span><span className="top-dots"/>
          </Link>
        </li>
        <li>
          <a className="corners btn" href="https://twitter.com/ZachBerglund" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'twitter']} />
            <span className="link-text"></span><span className="top-dots"/>
          </a>
        </li>
      </ul>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
