import React from 'react'
import { Container } from 'react-bootstrap'
import ItemCard from '../../molecules/itemcard/ItemCard'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './ItemListBooks.css'

function ItemListBooks() {
    const [itemsBooksList, setItemsBooksList] = React.useState([]);
    React.useEffect( () => {
        axios.get("https://click-to-cart-e-commerce-default-rtdb.asia-southeast1.firebasedatabase.app/books.json")
        .then(response => {
            let itemsBooksList = [];
            for (let key in response.data){
                itemsBooksList.push({...response.data[key] , id: key})
            }
            setItemsBooksList(itemsBooksList)
        })
    }, [])
  return (
    <div>
        <Container>
            <div className="item-Book-list">
                <div className="heading"><h1>Books</h1></div>
                <div className="item-book-list-container">
                    <div className="item-book-list">
                        {
                            itemsBooksList.length === 0 
                            ? <h2>No items Found</h2>:
                            itemsBooksList.map((item , index) => (
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

export default ItemListBooks