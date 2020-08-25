import React from 'react'
import {useStateValue} from './StateProvider';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
            <div class="checkout__left">
                {/* <img 
                    className="checkout__ad" 
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg" 
                    alt="ad" /> */}
                {basket?.length ===0 ?(
                    <div>
                        <h2>Your Shopping basket is empty</h2>
                        <p></p>
                    </div>
                ):(
                    <div>
                        <h2 className="checkout__title">
                            Your Shopping basket
                        </h2>
                        {/* List all of the checkout products */}
                        
                        {basket.map(item=>(
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                )}
            </div>
            {basket.length > 0 && (
                <div class="checkout_right">
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout
