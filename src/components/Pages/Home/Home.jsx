import React from 'react'
import './Home.css'
import ItemList from '../../organisms/ItemList/ItemList'
import HomeBanner from '../../molecules/HomeBanner/HomeBanner'
import RecommendationList from '../../organisms/Recommendation/RecommendationList'

function Home() {
  return (
    <div>
        <HomeBanner/>
        <RecommendationList/>
        <ItemList/>
    </div>
  )
}

export default Home