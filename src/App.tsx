import React from 'react';
import './App.css';
import Product from "./components/Product";
import {product} from './data/storage';

function App() {
  return (
    <div className='App'>
      <Product key={product[0].id} title={product[0].title}/>
    </div>
  );
}

export default App;
