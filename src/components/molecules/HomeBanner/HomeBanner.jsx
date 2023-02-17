import Carousel from 'react-bootstrap/Carousel';
import B1 from '../../../../src/assets/banner images/B-1.jpg'
import B2 from '../../../../src/assets/banner images/B-2.jpg'
import B3 from '../../../../src/assets/banner images/B-3.webp'
import './HomeBanner.css'

function HomeBanner() {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={B1}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={B2}
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={B3}
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeBanner;