import React, { Component } from 'react';
import Slider from 'react-slick';

import wallet from './wallet.png';
import bank from './bank.svg';
import send from './send.png';
import pay from './pay.png';
import unload from './unload.png';
import success from './success.png';

class CarouselTwo extends Component {
  render() {
    return (
      <Slider arrows={true} dots={true} infinite={true} speed={800} slidesToShow={1} slidesToScroll={1}>
        <img src={wallet} alt=""/>
        <img src={bank} alt=""/>
        <img src={send} alt=""/>
        <img src={pay} alt=""/>
        <img src={unload} alt=""/>
        <img src={success} alt=""/>
      </Slider>
    );
  }
}
export default CarouselTwo;
