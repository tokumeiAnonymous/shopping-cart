import { ReactComponent as HomeIcon } from '../Assets/house-solid.svg'
import { ReactComponent as ShopIcon } from '../Assets/bag-shopping-solid.svg'
import { ReactComponent as AccountIcon } from '../Assets/user-solid.svg'
import { ReactComponent as CartIcon } from '../Assets/cart-shopping-solid.svg'
import logoSrc from '../Assets/Shopp-e.png';
import { NavLink} from 'react-router-dom';

export default function Header() {

    return (
        <header className="header">
            {/* Routing for the links neglect warning for now*/}
            <NavLink to="/" className="header--logo">
                <img src={logoSrc} alt="Shopp-E logo"/>
            </NavLink>
            <div className="header--title">SHOPP-E</div>
            <nav>
            <ul>
                <li>
                    <NavLink id="header--home" to="/">
                        <HomeIcon width="2rem" height="2rem"/>
                    </NavLink>
                </li>
                <li>
                    <NavLink id="header--shop" to="/shop">
                        <ShopIcon width="2rem" height="2rem" />
                    </NavLink>
                </li>
                <li>
                    <NavLink id="header--cart" to="/cart">
                        <CartIcon width="2rem" height="2rem" />
                    </NavLink>
                </li>
                <li>
                    <NavLink id="header--account" to="/account">
                        <AccountIcon width="2rem" height="2rem" />
                    </NavLink>
                </li>
            </ul>
            </nav>
        </header>
    )
}
