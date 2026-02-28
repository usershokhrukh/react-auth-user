import React from 'react'
import TopHeader from './componenets/TopHeader'
import Navbar from './componenets/Navbar'
import Intro from './componenets/Intro'
import Catalog from './componenets/Catalog'
import NewPrices from './componenets/NewPrices'
import Products from './componenets/Products'
import NewProducts from './componenets/NewProducts'
import AllProducts from './componenets/AllProducts'
import Footer from './componenets/Footer'
import Deliver from './componenets/Deliver'
import "./assets/style/general.scss"

const App = () => {
  return (
    <div>
      <TopHeader/>
      <Navbar/>
      <Intro/>
      <Catalog/>
      <NewPrices/>
      <Products/>
      <NewProducts/>
      <AllProducts/>
      <Deliver/>
      <Footer/>
    </div>
  )
}

export default App