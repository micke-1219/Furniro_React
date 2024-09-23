import '../css/ProductCard.css';

function ProductCard(props) {
  const isDiscount = props.discount;
  const isNew = props.new;
  return (
    <div>
        <div className='product-card'>
            <div className='overlay'>
                <button className='btn-overlay'>Add To Cart</button>
                <div className='d-flex justify-content-between mt-3 ms-3 me-3'>
                    <div className='d-flex align-items-center'>
                        <img src='/images/share.svg'/>
                        <p className='ms-1'>Share</p>
                    </div>
                    <div className='d-flex align-items-center'>
                        <img src='/images/compare.svg'/>
                        <p className='ms-1'>Compare</p>
                    </div>
                    <div className='d-flex align-items-center'>
                        <img src='/images/heart_small.svg'/>
                        <p className='ms-1'>Like</p>
                    </div>
                </div>
            </div>
            {(() => {
            if (isDiscount != null) {
              return (
              <div className='badge-discount'>{props.discount}</div>
            );
            } else if (isNew != null) {
              return (
              <div className='badge-new'>{props.new}</div>
            );
            } else {
              return (null);
            }
            })()}
            <img alt='product' src={props.image}/>
            <div className='card-bg'>
                <h4 className='semi-bold-text'>{props.name}</h4>
                <p className='mt-2 mb-2 thin-text gray-text'>{props.description}</p>
                {(() => {
                if (isDiscount != null) {
                  return (
                  <div className='d-flex'>
                      <h5 className='semi-bold-text me-3'>{props.discountPrice}</h5>
                      <h5 className='old-price'>{props.price}</h5>
                  </div>
                );
                } else {
                  return (
                  <h5 className='semi-bold-text'>{props.price}</h5>
                );
                }
                })()}
            </div>
        </div>
    </div>
  );
}

export default ProductCard;