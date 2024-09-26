import '../css/Shop.css';
import Navbar from '../components/Navbar';
import TopBanner from '../components/TopBanner';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import CustomerService from '../components/CustomerService';

function Shop() {
  return (
    <div>
        {/* SECTION 1 */}
        <Navbar />
        <TopBanner currentPage='Shop' />
        <div className='filter-section mb-5'>
            <div className='container d-flex justify-content-between py-3'>
                <div className='d-flex align-items-center'>
                    <img className='me-3' src='../images/filter.svg'/>
                    <img className='me-3' src='../images/show_grid.svg'/>
                    <img className='me-5' src='../images/show_list.svg'/>
                    <img className='me-5' src='../images/line.svg'/>
                    <p className='thin-text'>Showing 1-16 of 32 results</p>
                </div>
                <div className='sort-section d-flex align-items-center'>
                    <p className='me-3'>Show</p>
                    <p className='white-background me-3'>16</p>
                    <p className='me-3'>Sort By</p>
                    <p className='white-background'>Default</p>
                </div>
            </div>
        </div>

        {/* SECTION 2 */}
        <div className='container'>
            <div className='mb-5 d-flex justify-content-between'>
                <ProductCard name='Slytherine' description='Stylish cafe chair' discountPrice='$91.00' price='$130.00' discount='-30%' image='../images/slytherine.png' />
                <ProductCard name='Leviosa' description='Modern dining chair' price='$149.00' image='../images/leviosa.png' />
                <ProductCard name='Lolito' description='Luxurious three-seat sofa' discountPrice='$750' price='$1500.00' discount='-50%' image='../images/lolito.png' />
                <ProductCard name='Respira' description='Spacious corner sofa' price='$1199.00' new='New' image='../images/respira.png' />
            </div>
            <div className='mb-5 d-flex justify-content-between'>
                <ProductCard name='Grifo' description='Reading lamp' price='$139.00' image='../images/grifo.png' />
                <ProductCard name='Muggo' description='Lounge sofa' price='$799.00' new='New' image='../images/muggo.png' />
                <ProductCard name='Pingky' description='Three-seat fabric sofa' discountPrice='$450' price='$900.00' discount='-50%' image='../images/pingky.png' />
                <ProductCard name='Potter' description='Two-seat leather sofa' price='$1099.00' new='New' image='../images/potter.png' />
            </div>
            <div className='mb-5 d-flex justify-content-between'>
                <ProductCard name='Slytherine' description='Stylish cafe chair' discountPrice='$91.00' price='$130.00' discount='-30%' image='../images/slytherine.png' />
                <ProductCard name='Leviosa' description='Modern dining chair' price='$149.00' image='../images/leviosa.png' />
                <ProductCard name='Lolito' description='Luxurious three-seat sofa' discountPrice='$750' price='$1500.00' discount='-50%' image='../images/lolito.png' />
                <ProductCard name='Respira' description='Spacious corner sofa' price='$1199.00' new='New' image='../images/respira.png' />
            </div>
            <div className='mb-5 d-flex justify-content-between'>
                <ProductCard name='Grifo' description='Reading lamp' price='$139.00' image='../images/grifo.png' />
                <ProductCard name='Muggo' description='Lounge sofa' price='$799.00' new='New' image='../images/muggo.png' />
                <ProductCard name='Pingky' description='Three-seat fabric sofa' discountPrice='$450' price='$900.00' discount='-50%' image='../images/pingky.png' />
                <ProductCard name='Potter' description='Two-seat leather sofa' price='$1099.00' new='New' image='../images/potter.png' />
            </div>
            <div className='mb-5 d-flex justify-content-center'>
                <p className='pagination-link-selected'>1</p>
                <p className='ms-3 me-3 pagination-link'>2</p>
                <p className='pagination-link'>Next</p>
            </div>
        </div>

        {/* SECTION 3 */}
        <CustomerService />
        <Footer />
    </div>
  );
}

export default Shop;