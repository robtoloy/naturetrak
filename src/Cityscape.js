import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import city from './city-mobile.svg';

import './App.css';

class Cityscape extends Component {
  render(){
    return (
      <div>
        <CSSTransitionGroup
        transitionName="cityFade"
        transitionAppear={true}
        transitionAppearTimeout={1000}
        transitionEnter={false}
        transitionLeave={false}>
          <ReactSVG path={city} />
        </CSSTransitionGroup>
      </div>
    )
  }
}
Cityscape.propTypes = {
  style: PropTypes.object
};
export default Cityscape;
