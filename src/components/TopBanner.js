import '../css/TopBanner.css';
import { Link } from "react-router-dom";

function TopBanner(props) {
  const currentPage = props.currentPage;
  return (
    <div className='top-banner d-flex justify-content-center align-items-center'>
        <div className='text-center'>
            <img alt='logo' src='/images/furniro_logo.svg'/>
            <h1 className='mb-3'>Shop</h1>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to={'/'}><p>Home</p></Link></li>
                    <li class="breadcrumb-item active" aria-current="page">{props.currentPage}</li>
                </ol>
            </nav>
        </div>
    </div>
  );
}

export default TopBanner;