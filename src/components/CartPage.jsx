import { useCart } from './CartContext';
import { faPlus,faMinus,faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartPage = () => {
 const { cart, updateCart, getAllAmount} = useCart();

 const handleIncrement = (itemSelected) => {
    if(itemSelected.count === 50 ) return;
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
    if(itemSelected.count === 1 ) return;
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

 const removeItem = (itemSelected) => {
    const updatedCart = cart.filter(item => item.id !== itemSelected.id);
    updateCart(updatedCart);
 }

 if(cart.length === 0) {
    return (
        <div className='emptyCart'> 
            <h1 className='text-2xl'>There are no items in this cart</h1> 
        </div>
    );
 }

  return (
    <>
    <div className="cartPage">
        <div className="cartPanel">
        { 
            cart.map( (item) => (
                <>
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
                            <div className="">
                                <button onClick={()=>removeItem(item)}>  
                                    <FontAwesomeIcon icon={faTrashCan} />
                                </button>
                            </div>
                        </div>
                </>
            ))
        }
        </div>
        <div className="checkOutPanel">
            <div className="">
                <h1 className='text-2xl'>Order Summary</h1>
            </div>
            <div className="subTotalSection">
                <h1 className='text-1xl'>Subtotal</h1>
                <h1 className='text-1xl'>{getAllAmount()}</h1>
            </div>
            <div className="checkOutButton">
                <button className='bg-orange-500 p-3 text-white rounded-md'>
                    <h1 className='text-2xl text-center'>Proceed to checkout</h1>
                </button>
            </div>
        </div> 
    </div>
    </>
  );
};

export default CartPage;