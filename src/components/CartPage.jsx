import { useCart } from './CartContext';

const CartPage = () => {
 const { cart } = useCart();
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
                </div>
            </div>
        </>
     ))
     }
    </>
  );
};

export default CartPage;