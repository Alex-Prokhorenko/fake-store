
interface productProps {
    title: string
}

const Product = ({title}: productProps) => {
    return (
        <div>
            <p>{title}</p>
        </div>
    )
}

export default Product;