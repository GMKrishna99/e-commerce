import React from 'react'
import { Badge, Container } from 'react-bootstrap'
import './Cart.css'

function Cart({ cartList, removeFromCart }) {
  console.log(cartList)
  return (
    <Container>
      <div className='cart'>
        <div className="cart-header">
          <h3>Cart List</h3>
        </div>
        {
          cartList.length === 0
            ? (
              <div className="cart-empty">
                <h5>Your cart is Empty</h5>
              </div>
            )
            : (
              <div className="cart-body">
                <div className="cart-list">
                  {
                    cartList.map((item, index) => {
                      return (
                        <div className="cart-list-item position-relative" key={index}>
                          <div className="cart-list-item-image">
                            <img src={item.itemImg} alt="" />
                          </div>
                          <div className="cart-list-item-detail">
                            <p className="cart-list-item-name">{item.itemTitle}</p>
                            <p className="cart-list-item-price"> ₹ {item.itemPrice} /-</p>
                            <p className='delivery'>Delivery With in 2 days</p>
                          </div>
                          <div className="cart-list-item-delete position-absolute top-0 end-0 "
                            onClick={() => removeFromCart(item)}
                          >
                            <span class="badge" id='remove'>X</span>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>

                <div className="cart-summary">
                  <h5>Purchase Summary</h5>
                  <div className="cart-summary-item">
                    {
                      cartList.map((item, index) => {
                        return (
                          <div className="cart-summary-item-list" key={index}>
                            <p className='title'>{item.itemTitle}</p>
                            <p className='price'>₹ {item.itemPrice}</p>
                          </div>
                        )
                      })
                    }
                  </div>
                  <div className="cart-summary-sub-total">
                    <p>Sub Total</p>
                    <p>₹ {cartList.reduce((acc, item) => acc + Number(item.itemPrice), 0)}</p>
                  </div>
                  <div className="cart-summary-options">
                    <div className="cart-summary-item-list cart-summary-options-shipping">
                      <p>Shipping cost</p>
                      <p>₹ 0</p>
                    </div>
                    <div className="cart-summary-item-list cart-summary-options-coupon">
                      <p>Coupon</p>
                      <p>₹ 0</p>
                    </div>
                    <div className="cart-summary-item-list cart-summary-options-tax">
                      <p>Tax</p>
                      <p>₹ 0</p>
                    </div>
                  </div>
                  <div className="cart-summary-total">
                    <p className='total'>Total</p>
                    <p className='price'>₹ {cartList.reduce((acc, item) => acc + Number(item.itemPrice), 0)}</p>
                  </div>
                  <div className="cart-summary-checkout">
                    <button className="cart-summary-checkout_btn">Checkout</button>
                  </div>

                </div>
              </div>
            )
        }

      </div>
    </Container>
  )
}

export default Cart