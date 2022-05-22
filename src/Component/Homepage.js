import fashionSale from '../Assets/Promo/Fashion sale.png';
import flashSale from '../Assets/Promo/Flash sale.png';
import summerSale from '../Assets/Promo/Summer sale.png';
import voucher from '../Assets/Promo/Voucher code.png';
import { NavLink } from 'react-router-dom';

export default function Homepage() {
    return (
        <main className='home'>
            <div className='home--first'>
                <img id='home--fashion' src={fashionSale} alt=' Fashion Sale ' />
                <NavLink to='/shop' className='home--shop--link'>
                    Shop now!
                </NavLink>
            </div>
            <div className='home--second'>
                <img id='home--flash' src={flashSale} alt=' Flash Sale ' />
                <img id='home--summer' src={summerSale} alt=' Summer Sale ' />
                <img id='home--voucher' src={voucher} alt=' Voucher Code ' />
            </div>
        </main>
    )
}