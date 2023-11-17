import { useLocation } from 'react-router-dom';
import { useCart } from './CartContext';
import { useState } from 'react';


const Item = () => {
  const location = useLocation();
  const { itemDetails } = location.state;
  const { cart, addToCart, updateCart } = useCart();
  const [numberOfItem, setNumberOfItem] = useState(1);


  const handleAddToCart =() => {
    // check ID
    const isItemInCart = cart.some( (item) => item.id === itemDetails.id);

    if(isItemInCart){
       const updatedCart = cart.map( (item) => {
            if(numberOfItem > 1 && item.id === itemDetails.id ) {
                return {
                    ...item,
                    count: item.count + numberOfItem
                };
            } else if(item.id === itemDetails.id ){
                return {
                    ...item,
                    count: item.count + 1,
                };
            }
            return item;
       });
       updateCart(updatedCart);
    } else {
        const modifiedItemDetails = {
            ...itemDetails,
            isAdded: true,
            count: numberOfItem
        }
        addToCart( modifiedItemDetails);
    }

  }

  const handleCountChange = (event) => {
    let newCount = 0;
    newCount = parseInt(event.target.value, 10);
    setNumberOfItem(newCount);
  }
  
  return(
    <>
        <div className="itemPage flex flex-row align-item items-center justify-center">
            <div className="">
                <img src={itemDetails.image} alt="" style={{ width: 150, height: 200 }} />
            </div>
            <div className="">
                <div className="">
                    <h1 className='text-2xl mb-5'>{itemDetails.title}</h1>
                    <h1><strong>{itemDetails.price}$</strong></h1>
                </div>
                <div className="mt-5">
                    <span>Quantity: </span>
                    <input 
                        type="number" 
                        className='inputCount'
                        onChange={handleCountChange}
                     />
                </div>
                <div className="mt-10">
                    <button onClick={handleAddToCart} className='addToCart'>Add to Cart</button>
                </div>
            </div>
        </div>
    </>
  );

};

export default Item;