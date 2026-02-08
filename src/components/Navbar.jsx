import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    return <div className='navbar-box'>
        <p>E-commerce</p>
        <nav>
            <NavLink className="link" to="/">Home</NavLink>
            <NavLink className="link" to="/prodotti">Prodotti</NavLink>
            <NavLink className="link" to="/chisiamo">Chi Siamo</NavLink>
        </nav>
    </div>
}

export default Navbar;