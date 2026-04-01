import React from 'react'
import { Route, Routes } from "react-router";

import About from './About';
import Product from './Product';
import Export from './Export';
import Home from './home/Home';


const Links = () => {
  return (
    <div>
      <Routes>

        <Route  path="/" element={ <Home/> } />
        <Route  path="/about" element={ <About/> } />
        <Route  path="/product" element={ <Product/> } />
        <Route  path="/export" element={ <Export/> } />
       </Routes>
    </div>
  )
}

export default Links
