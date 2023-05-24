import React from 'react'
import Header from '../Components/Header'
import Carousel from '../Components/Carousel';
import Items from '../Components/Items';
import Oferts from '../Components/Oferts'
import Galery from '../Components/Galery';
import Contatc from '../Components/Contatc';
import Social from '../Components/Social'
import Footer from '../Components/Footer';

function Home() {
  return (
      <div>
          <Header />
          <Carousel />
      <Items />
      <Oferts />
      <Galery />
      <Contatc />
      <Social />
      <Footer />
    </div>
  )
}

export default Home