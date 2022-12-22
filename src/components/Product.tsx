import {productModel} from "../models/models";
import {useState} from "react";

interface productProps {
    product: productModel
}

const Product = ({product}: productProps) => {

    const[description, setDescription] = useState(false);
    const handleDescription = () => {
        setDescription(!description);
    }

    return (
        <div className='p-3 w-1/2 mx-auto border border-stone-900 flex flex-col items-center'>
            <img src={product.image} alt={product.title} className='w-1/6'/>
            <p>{product.title}</p>
            <p className='font-bold'>{product.price}</p>
            <button onClick={handleDescription}
                    className='bg-red-900 text-white p-1'>{description ? 'Hide description' : 'Show description'}
            </button>
            {description && <p>{product.description}</p>}
        </div>
    )
}

export default Product;