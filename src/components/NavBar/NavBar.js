import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Tienda Tirana</h3>
            <div>
                <button>Playeras</button>
                <button>Gorras</button>
                <button>Accesorios</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar