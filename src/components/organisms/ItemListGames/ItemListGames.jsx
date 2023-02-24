import React from 'react'
import { Container } from 'react-bootstrap'
import ItemCard from '../../molecules/itemcard/ItemCard'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './ItemListGames.css'

function ItemListGames() {
    const [itemsGamesList, setItemsGamesList] = React.useState([]);
    React.useEffect( () => {
        axios.get("https://click-to-cart-e-commerce-default-rtdb.asia-southeast1.firebasedatabase.app/games.json")
        .then(response => {
            let itemsGamesList = [];
            for (let key in response.data){
                itemsGamesList.push({...response.data[key] , id: key})
            }
            setItemsGamesList(itemsGamesList)
        })
    }, [])
  return (
    <div>
        <Container>
            <div className="item-game-list">
                <div className="heading"><h1>PS-5 Games</h1></div>
                <div className="item-game-list-container">
                    {
                        itemsGamesList.length === 0
                        ? <h2>No items Found</h2>:
                        itemsGamesList.map((item , index) => (
                            <Link to={`/product/${item.id}`} key={index}>
                            <ItemCard
                                itemImg={item.itemImg}
                                itemPrice={item.itemPrice}
                                itemTitle={item.itemTitle}
                                itemDes={item.itemDes}
                                itemPlace={item.itemPlace}
                                itemDate={item.itemDate}
                            />
                            </Link>
                        ))
                    }
                </div>
            </div>
        </Container>
    </div>
  )
}

export default ItemListGames