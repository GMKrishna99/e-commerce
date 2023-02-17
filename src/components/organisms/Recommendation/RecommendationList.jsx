import React from 'react'
import './RecommendationList.css'
import axios from 'axios';
import { Container } from 'react-bootstrap';
import ItemCard from '../../molecules/itemcard/ItemCard';
import { Link } from 'react-router-dom';

function RecommendationList() {
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
            <section className="recommendation-section">

                    <h4>Recommendations</h4>
            <div className="recommendation-list">
                <div className="recommendation-list-slider">
                {
              itemsList.length === 0 
              ? <h2>No items Found</h2>:
              itemsList.map((item , index) => (
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
            </section>
        </Container>
    </div>
  )
}

export default RecommendationList