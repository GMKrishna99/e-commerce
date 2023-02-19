import React from 'react'
import './ItemCard.css'

function ItemCard({itemImg, itemPrice, itemTitle, itemDes, itemPlace, itemDate}) {
  return (
    <div className='item-card-container'>
        <div className='item-card-img'>
            <img src={itemImg} alt="item"/>
        </div>
        <div className='item-card-info'>
            <div className='item-card-price'>
            ₹ {itemPrice}/-
            </div>
        
        <div className='item-card-title'>
            {itemTitle}
         </div>  
        <div className='item-card-des'>
            {/* {itemDes} */}
        </div> 
        <div className="item-card-footer">
            <div className='item-card-place'>
                {itemPlace}
            </div>
            <div className='item-card-date'>
                {itemDate}
            </div>
        </div> 
        </div>   
    </div>
  )
}

export default ItemCard