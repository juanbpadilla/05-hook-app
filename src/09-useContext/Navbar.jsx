import { Link, NavLink } from 'react-router-dom'


export const Navbar = () => {
  return (    
    <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary rounded-3" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">useContext</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">

            {/* Podemos activar el link manualmente, pero ya no es necesario, el componente NavLink tiene por defecto la clase 'active' si la página está activa */}
            <NavLink 
              className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }` }
              to="/">
              Home
            </NavLink>
            <NavLink 
              className="nav-link" 
              to="/about">
              About
            </NavLink>
            <NavLink 
              className="nav-link" 
              to="/login">
              Login
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  )
}
