import React , {useEffect} from 'react'
import './ProductDetail.css'
import { useParams } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';

function ProductDetail({addToCart}) {
    let { id } = useParams();
    const [productDetails, setProductDetails] = React.useState('');
    useEffect(() => {
        axios.get(`https://react-app-37960-default-rtdb.asia-southeast1.firebasedatabase.app/c2c/${id}.json`)
        .then(response => {
          console.log(response.data);
          setProductDetails(response.data)
        })
    }, [])

  return (
    <Container>
      {
        productDetails === ''
        ? 'Loading...'
        : (
            <Row className='product-detail-row'>
              <Col className='product-detail-col-l'>
                <img className='product-detail_img' src={productDetails.itemImg} alt="" />
              </Col>
              <Col className='product-detail-col-r'>
                <h1>{productDetails.itemTitle}</h1>
                <p className='product-detail_desc'>{productDetails.itemDes}</p>
                <div className='product-detail_price'>
                  <div className="product-detail_price_main">
                    <p className='product-detail_price_current'>
                      ₹ {productDetails.itemPrice * 0.8}
                    </p>
                    <p className='product-detail_price_original'>
                      ₹ {productDetails.itemPrice }
                    </p>
                    <p className='product-detail_price_discount'>
                      15% off
                    </p>
                  </div>
                  <div className="product-detail_price_sub">
                    <p>
                      inclusive of all taxes
                    </p>
                  </div>
                </div>

                <div className='product-detail_features'>
                  <ul>
                    <li>
                    Built for sustainability, 3 years of Android OS & 3 years of monthly security updates.
                    </li>
                    <li>
                    Body made with 100% recycled aluminum and 65% recycled plastic.</li>
                    <li>
                    Features a breathtaking 6.43” FHD+ AMOLED 90Hz display.
                    Our best PureView photography experience yet with a 50MP OIS camera and AI technology. Capture stunning ultrawide-angle landscapes and vibrant snaps after sundown.
                    </li>
                    <li>
                    2-day battery life will keep you going and going, with super-fast 33W charging support
                    </li>
                    <li>
                    For and on behalf of HMD Mobile India Private Limited, Pioneer Urban Square Complex, No 510 5th Floor, Tower C, Golf Course Extension Road, Sector 62, Gurgaon, Haryana, 122102, India
                    </li>
                  </ul>
                </div>

                <div className='product-detail_btns'>
                  <button className='product-detail_btn product-detail_btn_buy'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    Buy Now
                  </button>
                  <button className='product-detail_btn product-detail_btn_add'
                    onClick={() => addToCart(productDetails)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </Col>
            </Row>
          )
      }
    </Container>
  )
}

export default ProductDetail