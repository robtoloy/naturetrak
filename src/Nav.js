import React, { Component } from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import Scroll from 'react-scroll'

import logo from './img/logo.svg'

let Link      = Scroll.Link;
let Events    = Scroll.Events;
let scroll    = Scroll.animateScroll;
let scrollSpy = Scroll.scrollSpy;

class Nav extends Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }
  componentDidMount() {
    Events.scrollEvent.register('begin', () => {
      console.log('begin', arguments);
    });
    Events.scrollEvent.register('end', () => {
      console.log('end', arguments);
    });
    scrollSpy.update();
  }
  scrollTo() {
    scroll.scrollTo(100);
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  render() {
    return (
      <div>
        <div id="navButton">
          <div className="logo">
            <CSSTransitionGroup
              transitionName="cityFade"
              transitionAppear={true}
              transitionAppearTimeout={1000}
              transitionEnter={false}
              transitionLeave={false}>
              <img src={logo} alt="" />
            </CSSTransitionGroup>
          </div>

          {/*}<CSSTransitionGroup
            transitionName="cityFade"
            transitionAppear={true}
            transitionAppearTimeout={1000}
            transitionEnter={false}
            transitionLeave={false}>

            <nav className="menu">
              <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open" />
              <label className="menu-open-button" htmlFor="menu-open">
                <span className="hamburger hamburger-1" />
                <span className="hamburger hamburger-2" />
                <span className="hamburger hamburger-3" />
              </label>
              <Link to="target1" className="menu-item"
                spy={true}
                smooth={true}
                duration={500}
                offset={-50} >
                  <i className="fa fa-bank"></i>
                  <h4>1</h4>
              </Link>
              <Link to="target2" className="menu-item"
                spy={true}
                smooth={true}
                duration={500}
                offset={-30} >
                  <i className="fa fa-cloud"></i>
                  <h4>2</h4>
              </Link>
              <Link to="target3" className="menu-item"
                spy={true}
                smooth={true}
                duration={500}
                offset={-30} >
                  <i className="fa fa-thumbs-up"></i>
                  <h4>3</h4>
              </Link>
              <Link to="target4" className="menu-item"
                spy={true}
                smooth={true}
                duration={800}
                offset={-30} >
                  <i className="fa fa-user-circle"></i>
                  <h4>4</h4>
              </Link>
            </nav>

            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs>
                <filter id="popMenu">
                  <fegaussianblur in="SourceGraphic" result="blur" stdDeviation={10} />
                  <fecolormatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                  <fegaussianblur in="goo" stdDeviation={3} result="shadow" />
                  <fecolormatrix in="shadow" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2" result="shadow" />
                  <feoffset in="shadow" dx={1} dy={1} result="shadow" />
                  <fecomposite in2="shadow" in="goo" result="goo" />
                  <fecomposite in2="goo" in="SourceGraphic" result="mix" />
                </filter>
                <filter id="goo">
                  <fegaussianblur in="SourceGraphic" result="blur" stdDeviation={10} />
                  <fecolormatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                  <fecomposite in2="goo" in="SourceGraphic" result="mix" />
                </filter>
              </defs>
            </svg>
          </CSSTransitionGroup>*/}
        </div>
      </div>
    );
  }
}

export default Nav;
