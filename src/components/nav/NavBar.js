import { Link } from 'react-router-dom'
import './NavBar.css'
import logo from '../asset/logo.png'

export const NavBar = () => {
  return (
    <ul className="navbar">
      <Link className="logo__link navbar__link" to="/">
        <img className="logo__img" src={logo} alt="Decoration Station Logo" />
      </Link>
      <li className="navbar__item">
        <Link className="navbar__link" to="/halloween">
          Halloween
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/christmas">
          Christmas
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/thanksgiving">
          Thanksgiving
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/new">
          New Decoration
        </Link>
      </li>
    </ul>
  )
}