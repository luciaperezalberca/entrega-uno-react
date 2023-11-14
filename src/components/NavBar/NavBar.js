import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
        return (
                <nav>
                        <h2> Zelaya Restaurant </h2>
                        <div>
                                <button className="button is-light is-primary"> Entradas </button>
                                <button className="button is-light is-primary"> Principales </button>
                                <button className="button is-light is-primary"> Postres </button>
                        </div>
                        <CartWidget />
                </nav>
        )
}

export default NavBar