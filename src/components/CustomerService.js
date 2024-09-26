import '../css/CustomerService.css';

function CustomerService() {
  return (
    <div className='customer-service d-flex align-items-center'>
        <div className='container d-flex justify-content-between'>
            <div className='d-flex align-items-center'>
                <img className='me-2' src='../images/trophy.svg'/>
                <div>
                    <h5 className='semi-bold-text'>High Quality</h5>
                    <p className='gray-text'>Crafted from top materials</p>
                </div>
            </div>
            <div className='d-flex align-items-center'>
                <img className='me-2' src='../images/guarantee.svg'/>
                <div>
                    <h5 className='semi-bold-text'>Warranty Protection</h5>
                    <p className='gray-text'>Over 2 years</p>
                </div>
            </div>
            <div className='d-flex align-items-center'>
                <img className='me-2' src='../images/shipping.svg'/>
                <div>
                    <h5 className='semi-bold-text'>Free Shipping</h5>
                    <p className='gray-text'>Order over 50$</p>
                </div>
            </div>
            <div className='d-flex align-items-center'>
                <img className='me-2' src='../images/customer_support.svg'/>
                <div>
                    <h5 className='semi-bold-text'>24/7 Support</h5>
                    <p className='gray-text'>Dedicated Support</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default CustomerService;