import CartWidget from "../CartWidget/CartWidget"
import imageLogo from "../../img/logo-negro.png"

const NavBar = () => {
        return (
                <nav className="columns">
                        <figure className="column">
                                <img src={imageLogo} alt="logo restaurant zelaya"/>
                        </figure>
                        <div className="column is-7 is-flex is-justify-content-center is-align-items-center">
                                <button className="button is-outlined is-warning"> Entradas </button>
                                <button className="button is-outlined is-warning"> Principales </button>
                                <button className="button is-outlined is-warning"> Postres </button>
                        </div>
                        <div className="column">
                                <CartWidget />
                        </div>
                </nav>
        )
}

export default NavBar