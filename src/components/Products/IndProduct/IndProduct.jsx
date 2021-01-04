import React from 'react';
import './IndProductcss.css';
// import bootstrap from 'bootstrap';


const IndProduct = ({products, cart, handleUpdateToCartQty}) => {
    // console.log(window.location.pathname)
    // console.log(products)
    const slash = /[/]/g
    const removeSlash = window.location.pathname.replace(slash, '');
  
    const product = products.find((x) => x.id === removeSlash);
    if (!product) {
        return <div> Product Not Found</div>;
    }
    
    const regex = /(<([^>]+)>)/ig;
    const description = product.description.replace(regex, '');

   const lineItems = cart.line_items;
    const thisItem = lineItems.find((x) => {
        // let chosenItem = [];
        if (x.product_id === removeSlash) {
            return x;
        }
    })

  

    

    
        
       
       
    

    return (
        <div className='container'>
            <div className = 'margin'/>
            <div className='row'>
                <div className='col-5 image'>
                    <img src={product.media.source} alt={product.name} style={{width: '100%'}} className='image' />
                </div>
                <div className='col info-position'>
                <div className='content'>
                <ul>
                    <li>
                        <h1>{product.name}</h1>
                    </li>
                    {/* <li>
                    <Rating
                        rating={product.rating}
                        numReviews={product.numReviews}
                    ></Rating>
                    </li> */}
                    <li>
                        <div>
                            <div className='product-page-price'>{product.price.formatted_with_symbol}</div>
                        </div>
                    </li>
                    <li>
                        Description:
                        <p>{description}</p>
                    </li>
                </ul>
                </div>
                <div className='add-to-basket'>
                <ul>
                    <li>
                        <div className='increament-btn'>
                        <div>
                            {product.quantity > 0 ? (
                            <span className="success">In Stock</span>
                            ) : (
                            <span className="error">Unavailable</span>
                            )}
                        </div>
                        <div className='plus-minus'>
                            <button className='btn-decor' onClick={() => handleUpdateToCartQty(thisItem.id, thisItem.quantity - 1)}>-</button>
                            <div className='product-qty'>{thisItem.quantity}</div>
                            <button className='btn-decor' onClick={() => handleUpdateToCartQty(thisItem.id, thisItem.quantity + 1)}>+</button>            
                        </div>
                        </div>
                    </li>
                    <li className='d-flex justify-content-center'>
                        <button className="primary block black-btn" >Add to Cart</button>
                    </li>
                </ul>
                </div>
                </div>
            </div>
        </div>
    )
}

export default IndProduct
