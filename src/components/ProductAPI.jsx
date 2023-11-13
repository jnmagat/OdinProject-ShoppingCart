import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const ProductAPI = () => {
    const [ products, setProducts ] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        // fetch('https://api.escuelajs.co/api/v1/products')
        .then( response => {
            return response.json();
        })
        .then( fakeStoreAPI => {
            setProducts(fakeStoreAPI);
        });
    },[]);

    return(
            <> 
                {products.map((item)=>(

                    <Link key={item.id} to={ { pathname:`item${item.id}`} } state={{ itemDetails: item}} >
                        <div name="item" 
                        className="item bg-light flex flex-col items-center justify-center"
                        >
                            <div className=""></div>
                            <div className="">
                                <img src={item.image} alt="" className="w-50 h-50 mb-auto" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-2xl text-black pt-5"> {item.price}$ </p>
                                <p className="text-1xl text-black pt-4"><hr /> {item.title} </p>
                                {/* <p className="text-1xl text-[#78716c] pt-2">Rating: {item.rating.rate}</p> */}
                            </div>
                        </div>
                    </Link>
                    
                ))}
            </>
           
        );
}

export default ProductAPI;