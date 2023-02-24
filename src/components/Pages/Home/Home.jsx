import React from 'react'
import './Home.css'
import ItemList from '../../organisms/ItemList/ItemList'
import HomeBanner from '../../molecules/HomeBanner/HomeBanner'
import RecommendationList from '../../organisms/Recommendation/RecommendationList'
import ItemListBooks from '../../organisms/ItemListBooks/ItemListBooks'
import ItemListGames from '../../organisms/ItemListGames/ItemListGames'
import ItemListMobiles from '../../organisms/ItemListMobiles/ItemListMobiles'
import ItemListGym from '../../organisms/ItemListGym/ItemListGym'
import ItemListTv from '../../organisms/ItemListTv/ItemListTv'
import ItemListLaptop from '../../organisms/ItemListLaptop/ItemListLaptop'

function Home() {
  return (
    <div>
        <HomeBanner/>
        <RecommendationList/>
        <ItemList/>
        <ItemListBooks/>
        <ItemListTv/>
        <ItemListMobiles/>
        <ItemListLaptop/>
        <ItemListGym/>
        <ItemListGames/>
    </div>
  )
}

export default Home