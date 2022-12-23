import React, {useEffect, useState} from 'react';
import './App.css';
import Product from './components/Product';
import axios from "axios";
import {productModel} from "./models/models";


function App() {

    const[products, setProducts] = useState<productModel[]>([]);
    async function fetchProducts() {
        const response = await axios.get<productModel[]>('https://fakestoreapi.com/products?limit=5');
        setProducts(response.data);

    }
    useEffect(() =>{
        fetchProducts();
    }, []);
    return (
        <div className='App'>
            {products.map( product => <Product key={product.id} product={product}/> )}
        </div>
    );
}

export default App;
