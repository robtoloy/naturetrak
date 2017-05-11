import React, { Component } from 'react';
import Slider from 'react-slick';

import wallet from './wallet.svg';
import bank from './bank.svg';
import send from './send.svg';
import pay from './pay.svg';
import unload from './unload.svg';
import success from './success.svg';

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
