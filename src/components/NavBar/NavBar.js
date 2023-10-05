import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className= "NavBar" >
            <Link to='/'>
                <h3>Tienda Tirana</h3>
            </Link>
            <div className='Categories'>
                <NavLink to={`/category/playeras`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}></NavLink>
                <NavLink to={`/category/gorras`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}></NavLink>
                <NavLink to={`/category/accesorios`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}></NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar