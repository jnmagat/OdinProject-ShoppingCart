import ProductAPI from "./ProductAPI";

const Product = () => {
    return(
        <>
            <div style={{ height: '100vh' }}>
                <div className="grid-container">
                    <ProductAPI/>
                </div>
            </div>
        </>
    );
}

export default Product;