import React from 'react'
import { Container } from 'react-bootstrap'
import ItemCard from '../../molecules/itemcard/ItemCard'
import './ItemList.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

function ItemList() {
  const [itemsList, setItemsList] = React.useState([]);
   React.useEffect( () => {
     axios.get("https://click-to-cart-e-commerce-default-rtdb.asia-southeast1.firebasedatabase.app/new-releases.json")
      .then(response => {
        let itemsList = [];
        for (let key in response.data){
          itemsList.push({...response.data[key] , id: key})
        }
        setItemsList(itemsList)
      })  
  }, [])
  return (
    <div>
      <Container>
          <div className="itemlist-container">
          <div className="heading"><h1>New Arrivals</h1></div>
        <div className="list-item-container">
        <div className="item-list">
            {
              itemsList.length === 0 
              ? <h2>No items Found</h2>:
              itemsList.map((item , index) => (
                <Link to={`/product/${item.id}`} key={index}>
                <ItemCard
                  itemImg={item.itemImg}
                  itemPrice={item.itemPrice}
                  itemTitle={item.itemTitle}
                />
                </Link>
              ))
            }
        </div>
        </div>
          </div>
      </Container>
    </div>
  )
}

export default ItemList