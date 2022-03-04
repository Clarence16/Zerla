import React from 'react'
import { Carousel } from 'react-bootstrap'

const ImageSlider = () => {
  return (
    <Carousel interval={3000}>
      <Carousel.Item>
        <img
          className="d-block w-100 photo"
          src="./pics/bun.jpg"
        />
      <Carousel.Caption>
        <h3>Welcome to Zerla Bakery</h3>
        <p>Where Freshness is our Guarantee</p>
       </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 photo"
        src="./pics/cupCakes2.jpg"
      />
      <Carousel.Caption>
        <h3>Zerla Bakery</h3>
        <p>Where Freshness is our Guarantee</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 photo"
        src="./pics/dough.jpg"
      />
      <Carousel.Caption>
          <h3>Zerla Bakery</h3>
          <p>Where Freshness is our Guarantee</p>
      </Carousel.Caption>
    </Carousel.Item>
</Carousel>
  )
}

export default ImageSlider