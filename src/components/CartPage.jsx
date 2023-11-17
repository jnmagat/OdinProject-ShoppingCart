import { useCart } from './CartContext';
import { useState } from 'react';
import { faPlus,faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartPage = () => {
 const { cart, updateCart} = useCart();
//  const [count, setCount] = useState(0);

 const handleIncrement = (itemSelected) => {
    const updatedCart = cart.map( (item) => {
        if(item.id === itemSelected.id){
           return {
                ...item,
                count: itemSelected.count + 1
            };
        }
        return item;
    });
    updateCart(updatedCart);
 };


 const handleDecrement = (itemSelected) => {
    if(itemSelected.count === 0 ) return;
    const updatedCart = cart.map( (item) => {
        if(item.id === itemSelected.id){
           return {
                ...item,
                count: itemSelected.count - 1
            };
        }
        return item;
    });
    updateCart(updatedCart);
 };

 console.log(cart);

  return (
    <>
     {
     cart.map( (item) => (
        <>
            <div className="cartPage">
                <div className="cartItem">
                    <div className="">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="">
                        <h1>{item.title}</h1>
                    </div>
                    <div className="">    
                        <div className="itemQuantity">
                            <button onClick={()=>handleDecrement(item)}>
                                <FontAwesomeIcon icon={faMinus} />
                            </button>
                                <span className='text-2xl'>{item.count}</span>
                            <button onClick={()=>handleIncrement(item)}>  
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
     ))
     }
    </>
  );
};

export default CartPage;