import './Navbar.css'

export const Navbar = () => {
  return (
    <div className='nav'>
      <div className='nav__logo'>EV-Solution </div>
      <ul className='nav__menu'>
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className='nav-contact'>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar