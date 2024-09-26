import '../css/Footer.css';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className='footer-bg'>
        <div className='container'>
            <div className='d-flex justify-content-between pt-5 pb-5'>
                <div>
                    <img className='main-logo mb-5' alt='logo' src='/images/main_logo.svg'/>
                    <p className='light-gray-text thin-text'>400 University Drive<br/>Coral Gables, FL 33134<br/>USA</p>
                </div>
                <div>
                    <p className='light-gray-text mb-5'>Links</p>
                    <Link to={'/'}><p className='mb-3'>Home</p></Link>
                    <Link to={'/shop'}><p className='mb-3'>Shop</p></Link>
                    <p className='mb-3'>About</p>
                    <p>Contact</p>
                </div>
                <div>
                    <p className='light-gray-text mb-5'>Help</p>
                    <p className='mb-3'>Payment Options</p>
                    <p className='mb-3'>Privacy Policy</p>
                    <p>Returns</p>
                </div>
            </div>
            <p className='footer-border pt-4 pb-4'>2023 furino. All rights reverved</p>
        </div>
    </div>
  );
}

export default Footer;