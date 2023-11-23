
import React, {useState} from 'react'

import ProductForm from './components/NewProducts/ProductForm';
import ProductDetails from './components/Products/ProductDetails';
import Products from './components/Products/Products';

const DUMMY_DATA = []

function App() {

  const [product , setProduct] = useState(DUMMY_DATA)

  const addProductData = (newProduct )=>{
    console.log('newProduct' + JSON.stringify(newProduct))

    setProduct((DUMMY_DATA)=>{
      return[newProduct, ...DUMMY_DATA]
    })
  }

  console.log(product)

  return (
    <>
      <ProductForm onProductData = {addProductData}></ProductForm>
      <Products items = {product}></Products>
    </>
  );
}

export default App;
