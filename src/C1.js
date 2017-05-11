import React, { Component } from 'react';
import Slider from 'react-slick';

import marketplace from './marketplace.svg';
import checkout from './checkout.svg';
import status from './status.svg';

class CarouselOne extends Component {
  render() {
    return (
      <Slider arrows={true} dots={true} infinite={true} speed={800} slidesToShow={1} slidesToScroll={1}>
        <img src={marketplace} alt=""/>
        <img src={checkout} alt=""/>
        <img src={status} alt=""/>
      </Slider>
    );
  }
}
export default CarouselOne;
