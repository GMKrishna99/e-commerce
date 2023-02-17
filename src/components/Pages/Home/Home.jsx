import React from 'react'
import './Home.css'
import ItemList from '../../organisms/ItemList/ItemList'
import HomeBanner from '../../molecules/HomeBanner/HomeBanner'

function Home() {
  return (
    <div>
        <HomeBanner/>
        <ItemList/>
    </div>
  )
}

export default Home