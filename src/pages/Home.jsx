import React from 'react'
import Banner from "../components/Home/Banner/Banner"
import Categories from '../components/Home/Categories/Categories'
import TechHome from '../components/Home/TechHome/TechHome'
import Popular from '../components/Home/Popular/Popular'
import Choices from '../components/Home/Choices/Choices'
import Brend from '../components/Home/Brend/Brend'
import MarketApp from '../components/Home/UMarketApp/MarketApp'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Categories/>
      <Popular/>
      <TechHome/>
      <Choices/>
      <Brend/>
      <MarketApp/>
    </div>
  )
}

export default Home