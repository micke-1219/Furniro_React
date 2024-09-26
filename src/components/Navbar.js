import '../css/Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
        <div className='container d-flex justify-content-between py-4'>
            <img className='main-logo' alt='logo' src='/images/main_logo.svg'/>
            <div className='navbar-links d-flex align-items-center'>
                <Link to={'/'}><p className='me-6'>Home</p></Link>
                <Link to={'/shop'}><p className='me-6'>Shop</p></Link>
                <p className='me-6'>About</p>
                <p>Contact</p>
            </div>
            <div className='d-flex align-items-center'>
                <img className='me-5' alt='user' src='/images/user.svg'/>
                <img className='me-5' alt='search' src='/images/magnifying_glass.svg'/>
                <img className='me-5' alt='like' src='/images/heart.svg'/>
                <img alt='cart' src='/images/shopping_cart.svg'/>
            </div>
        </div>
    </div>
  );
}

export default Navbar;