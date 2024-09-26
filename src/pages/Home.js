import '../css/Home.css';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AlertBox from '../components/AlertBox';

function Home() {
  return (
    <div>
        {/* SECTION 1 */}
        <Navbar />
        <div className='background'>
            <AlertBox />
            <div className='container'>
                <div className='discover'>
                    <p className='light-black-text'>New Arrival</p>
                    <h1 className='bold-text green-text mt-3 mb-3'>Discover Our<br/>New Collection</h1>
                    <p className='light-black-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Ut elit tellus, luctus nec ullamcorper mattis.</p>
                    <button className='btn-green mt-5'>BUY NOW</button>
                </div>
            </div>
        </div>

        {/* SECTION 2 */}
        <div className='container'>
            <div className='mt-5 mb-5 text-center'>
                <h3 className='bold-text light-black-text'>Browse The Range</h3>
                <p className='mt-2 gray-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='d-flex justify-content-between'>
                <div>
                    <img alt='diningroom' src='../images/diningroom.png'/>
                    <h4 className='mt-4 text-center semi-bold-text light-black-text'>Dining</h4>
                </div>
                <div>
                    <img alt='livingroom' src='../images/livingroom.png'/>
                    <h4 className='mt-4 text-center semi-bold-text light-black-text'>Living</h4>
                </div>
                <div>
                    <img alt='bedroom' src='../images/bedroom.png'/>
                    <h4 className='mt-4 text-center semi-bold-text light-black-text'>Bedroom</h4>
                </div>
            </div>
        </div>

        {/* SECTION 3 */}
        <div className='container'>
            <h3 className='mt-5 mb-5 text-center bold-text light-black-text'>Our Products</h3>
            <div className='mb-5 d-flex justify-content-between'>
                <ProductCard name='Slytherine' description='Stylish cafe chair' discountPrice='$91.00' price='$130.00' discount='-30%' image='../images/slytherine.png' />
                <ProductCard name='Leviosa' description='Modern dining chair' price='$149.00' image='../images/leviosa.png' />
                <ProductCard name='Lolito' description='Luxurious three-seat sofa' discountPrice='$750' price='$1500.00' discount='-50%' image='../images/lolito.png' />
                <ProductCard name='Respira' description='Spacious corner sofa' price='$1199.00' new='New' image='../images/respira.png' />
            </div>
            <div className='d-flex justify-content-between'>
                <ProductCard name='Grifo' description='Reading lamp' price='$139.00' image='../images/grifo.png' />
                <ProductCard name='Muggo' description='Lounge sofa' price='$799.00' new='New' image='../images/muggo.png' />
                <ProductCard name='Pingky' description='Three-seat fabric sofa' discountPrice='$450' price='$900.00' discount='-50%' image='../images/pingky.png' />
                <ProductCard name='Potter' description='Two-seat leather sofa' price='$1099.00' new='New' image='../images/potter.png' />
            </div>
            <div className='d-flex justify-content-center'>
                <button className='btn-white mt-5 mb-5'>Show More</button>
            </div>
        </div>
        <Footer />
    </div>
  );
}

export default Home;
