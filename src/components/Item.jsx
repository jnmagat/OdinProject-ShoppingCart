import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Item = () => {
  const location = useLocation();
  const { itemDetails } = location.state;
  const [items,setItems] = useState([]);

  function addToCart() {
    setItems(
        ...items,
        itemDetails
    );
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
                    <input type="number" className='inputCount' />
                </div>
                <div className="mt-10">
                    <button onClick={addToCart} className='addToCart'>Add to Cart</button>
                </div>
            </div>
        </div>
    </>
  );

};

export default Item;