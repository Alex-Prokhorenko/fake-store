import React from 'react';
import './App.css';
import Product from './components/Product';
import {product} from './data/storage';

function App() {
  return (
    <div className='App'>
      <Product product={product[0]}/>
    </div>
  );
}

export default App;
