import { ReactComponent as HomeIcon } from '../Assets/Icons/house-solid.svg'
import { ReactComponent as ShopIcon } from '../Assets/Icons/bag-shopping-solid.svg'
import { ReactComponent as AccountIcon } from '../Assets/Icons/user-solid.svg'
import { ReactComponent as CartIcon } from '../Assets/Icons/cart-shopping-solid.svg'
import logoSrc from '../Assets/Icons/Logo.svg';
import { NavLink } from 'react-router-dom';

export default function Header({ cart }) {

    const count = cart.length;

    return (
        <div className="header--wrapper">
        <header className="header">
            {/* Routing for the links neglect warning for now*/}
            <NavLink to="/shopping-cart/" className="header--logo">
                <img src={logoSrc} alt="Shopp-E logo"/>
                <div className="header--title">SHOPP-E</div>
            </NavLink>
            <nav>
            <ul>
                <li>
                    <NavLink id="header--home" to="/shopping-cart/">
                        <HomeIcon width="2rem" height="2rem"/>
                    </NavLink>
                </li>
                <li>
                    <NavLink id="header--shop" to="/shopping-cart/shop">
                        <ShopIcon width="2rem" height="2rem" />
                    </NavLink>
                </li>
                <li>
                    <NavLink id="header--cart" to="/shopping-cart/cart">
                    {count > 0 && <div className='cart--counter'>{count}</div>}
                        <CartIcon width="2rem" height="2rem" />
                    </NavLink>
                </li>
                <li>
                    <NavLink id="header--account" to="/shopping-cart/account">
                        <AccountIcon width="2rem" height="2rem" />
                    </NavLink>
                </li>
            </ul>
            </nav>
        </header>
        </div>
    )
}
