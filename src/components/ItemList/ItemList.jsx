import React from 'react'
import { Container } from 'react-bootstrap'
import ItemCard from '../itemcard/ItemCard'
import './ItemList.css'
import axios from 'axios';

function ItemList() {
  const [itemsList, setItemsList] = React.useState([]);
   React.useEffect( () => {
     axios.get("https://react-app-37960-default-rtdb.asia-southeast1.firebasedatabase.app/c2c.json")
      .then(response => {
        let itemsList = [];
        for (let key in response.data){
          itemsList.push(response.data[key])
        }
        setItemsList(itemsList)
      })  
  }, [])
  return (
    <div>
      <Container>
        <div className="item-list">
            {
              itemsList.length === 0 
              ? <h2>No items Found</h2>:
              itemsList.map((item , index) => (
                <ItemCard
                  itemImg={item.itemImg}
                  itemPrice={item.itemPrice}
                  itemTitle={item.itemTitle}
                  itemDes={item.itemDes}
                  itemPlace={item.itemPlace}
                  itemDate={item.itemDate}
                />
              ))
            }
        </div>
      </Container>
    </div>
  )
}

export default ItemList