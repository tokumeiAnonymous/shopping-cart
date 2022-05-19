import homeSrc from '../Assets/house-solid.svg'
import shopSrc from '../Assets/bag-shopping-solid.svg'
import accountSrc from '../Assets/user-solid.svg'
import cartSrc from '../Assets/cart-shopping-solid.svg'
import logoSrc from '../Assets/Shopp-e.png';

export default function Header() {
    return (
        <header className="header">
            {/* Routing for the links neglect warning for now*/}
            <a href="#" className="header--logo">
                <img src={logoSrc}/>
            </a>
            <div className="header--title">SHOPP-E</div>
            <ul className="header--nav">
                <li>
                    <a id="header--home" href="#"><img src={homeSrc} alt="Home" /></a>
                </li>
                <li>
                    <a id="header--shop" href="#"><img src={shopSrc} alt="Shop" /></a>
                </li>
                <li>
                    <a id="header--cart" href="#"><img src={cartSrc} alt="Cart" /></a>
                </li>
                <li>
                    <a id="header--account" href="#"><img src={accountSrc} alt="Account" /></a>
                </li>
            </ul>
        </header>
    )
}