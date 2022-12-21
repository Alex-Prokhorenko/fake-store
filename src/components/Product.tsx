import {productModel} from "../models/models";

interface productProps {
    product: productModel
}

const Product = ({product}: productProps) => {
    return (
        <div>
            <p>{product.title}</p>
        </div>
    )
}

export default Product;