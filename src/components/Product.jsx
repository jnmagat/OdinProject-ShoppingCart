import { Link } from "react-router-dom";

const Product = (props) => {
    const products = [...props.products];
    return(
        <> 
            <div className="grid-container">
                {products.map((item)=>(

                    <Link key={item.id} to={ { pathname:`item${item.id}`} } state={{ itemDetails: item}} >
                        <div 
                            name="item" 
                            className="item bg-light flex flex-col items-center justify-center"
                        >
                            <div className=""></div>
                            <div className="">
                                <img src={item.image} alt="" className="w-50 h-50 mb-auto" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-2xl text-black pt-5"> {item.price}$ </p>
                                <p className="text-1xl text-black pt-4"><hr /> {item.title} </p>
                            </div>
                        </div>
                    </Link>

                ))}

            </div>
        </>
    );
}

export default Product;