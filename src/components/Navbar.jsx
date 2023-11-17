import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "./CartContext";

const Navbar = () => {

    const { getAllItem } = useCart();

    // console.log(getAllItem());

    return(
        <>
            <nav className="flex items-center align-center justify-between p-4 bg-gray-900">
                <div className="w-15 h-10">
                    <img src="/src/assets/JNM.png" alt="User Avatar" className="w-full h-full rounded-full" />
                </div>
                <ul className="flex space-x-20 font-bold text-white">
                    <li>
                       <Link to="/home" className="text-1xl">Home</Link>
                    </li>
                    <li>
                       <Link to="/market" className="text-1xl">Market</Link>
                    </li>
                </ul>
                <div className="text-white text-2xl">
                    <Link to="/cart">
                        <FontAwesomeIcon icon={faCartShopping} />
                        {
                            getAllItem() ? (
                                <span className='badge badge-warning' id='lblCartCount'> {getAllItem()}</span>
                            ) : (
                                <span className='badge badge-warning' id='lblCartNoCount'>&nbsp;&nbsp; </span>
                            )
                        }
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default Navbar