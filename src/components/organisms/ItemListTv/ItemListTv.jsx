import React from 'react'
import './ItemListTv.css'
import { Container } from 'react-bootstrap'
import ItemCard from '../../molecules/itemcard/ItemCard'
import axios from 'axios';
import { Link } from 'react-router-dom';

function ItemListTv() {
  const [itemsList, setItemsList] = React.useState([]);
  React.useEffect( () => {
    axios.get("https://click-to-cart-e-commerce-default-rtdb.asia-southeast1.firebasedatabase.app/tv.json")
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
         <div className="item-list-tv-container">
         <div className="heading"><h1>Television</h1></div>
       <div className="item-list-tv">
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
     </Container>
   </div>
 )
}

export default ItemListTv