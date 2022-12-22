import {productModel} from "../models/models";

interface productProps {
    product: productModel
}

const Product = ({product}: productProps) => {
    return (
        <div className='w-1/2 mx-auto border border-stone-900'>
            <p>{product.title}</p>
        </div>
    )
}

export default Product;