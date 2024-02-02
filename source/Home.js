import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className='home_container'>

        <img 
        className='home_image'
        src= "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684200_.jpg"
        alt=""/>

        <div className='home_row'>
            <Product title='Pigeon Amaze Plus Electric Kettle 1.5 L, Stainless Steel Body'
            price={599}
            image="https://m.media-amazon.com/images/I/51DGcy8eBCL._SY450_.jpg"
            rating={4}/>
            <Product title='Pigeon 2 Slice Auto Pop up Toaster.'
            price={1194}
            image="https://m.media-amazon.com/images/I/51UUCl+PPjL._SY450_.jpg"
            rating={4}/>
        </div>
        <div className='home_row'>
        <Product title='Noise Pulse 2 Max 1.85" Display, Bluetooth Calling Smart Watch, 10 Days Battery'
            price={1099}
            image="https://m.media-amazon.com/images/I/71Q8czKqSIL._SX425_.jpg"
            rating={3}/>
        <Product title="Samsung Galaxy M14 5G (Smoky Teal,6GB,128GB)|50MP Triple Cam"
            price={11999}
            image="https://m.media-amazon.com/images/I/818VqDSKpCL._SX466_.jpg"
            rating={4}/>
        <Product title='Morphy Richards 5L Digital Air Fryer For Home'
            price={6953}
            image="https://m.media-amazon.com/images/I/71FCj05wWqL._SY679_.jpg"
            rating={5}/>
        </div>
        <div className='home_row'>
        <Product title='HP OMEN Gaming Laptop, Intel Core i7-14700HX (14th Gen), 8GB RTX 4070 GPU, 16.1-inch (40.9 cm), 140W, FHD, IPS, 165Hz, 300 nits, 16GB DDR5, 1TB SSD, RGB Backlit KB (MSO, Black, 2.32 kg), wf1026TX'
            price={173990}
            image="https://m.media-amazon.com/images/I/71Zr0zC9fjL._SX425_.jpg"
            rating={5}/>
        </div>
      </div>
    </div>
  );
}

export default Home
