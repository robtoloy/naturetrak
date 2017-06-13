import React, { Component } from 'react'
import Scroll from 'react-scroll'
// import headerScroll from 'header-scroll-up'

// import goodees from './goodees.svg';
import map from './img/map.svg'
import fed from './img/fed.svg'
import tnt from './img/tnt.svg'
import ttv from './img/ttv.svg'
import scan from './img/scan.svg'
import supply from './img/supply.svg'
import enterprise from './img/enterprise.svg'
import outro from './img/outro.svg'

import Nav from './Nav'
import CarouselOne from './C1'
import CarouselTwo from './C2'
import Video from './video'
import Countdown from './Countdown'
import Cityscape from './Cityscape'

import './App.css'

let Element = Scroll.Element;

const toggleVideo = () => {
  let x = document.getElementById('ntVideo');
  x.style.display === 'block' ? x.style.display = 'none' : x.style.display = 'block';
}

class App extends Component {
  render() {
    return (
      <div>

        <Nav/>

        {/* intro section */}
        <section id="hero">
          <div id="intro">
            <div className="row">
              <div id="introGraphic" className="column">
                <Cityscape />
              </div>
            </div>
          </div>
        </section>
        {/* intro section */}
        {/* video section */}
        <section>
          <div id="video" className="container">
            <div className="row">
              <div id="videoInfo" className="column">
                <h2>Cannabis Should Be Easy</h2>
                <p>Learn how we want to make the change for the better.</p>
                <button onClick={toggleVideo}>
                  Watch
                </button>
              </div>
            </div>
            <div id="ntVideo" className="row fadeIn">
              <div className="column">
                <Video />
              </div>
            </div>
          </div>
        </section>
        {/* video section */}


        {/* outro section */}
        <Element name="target4"/>
        <section>
            <div id="outro" className="container">
              <div className="row">
                <div id="outroInfo" className="column">
                  <h1 className="outroHeader">Interested?</h1>
                  <p>Sign up today and stay tuned for the latest release or take a survey below.</p>
                    <div>
                      {/* Begin MailChimp Signup Form */}
                      <style type="text/css" dangerouslySetInnerHTML={{__html: "\n\t#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width:100%;}\n\t/* Add your own MailChimp form style overrides in your site stylesheet or in this style block.\n\t   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */\n" }} />
                      <div id="mc_embed_signup">
                        <form action="//naturetrak.us15.list-manage.com/subscribe/post?u=acb5eee66a857bd8300c6e0a1&id=6fefeee5dc" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                          <div id="mc_embed_signup_scroll">
                            <input type="email" defaultValue="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required />
                            <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_acb5eee66a857bd8300c6e0a1_6fefeee5dc" tabIndex={-1} defaultValue="" /></div>
                            <div className="clear">
                              <input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
                            </div>
                          </div>
                        </form>
                      </div>
                      {/*End mc_embed_signup*/}
                    </div>
                </div>
                <div className="column">
                  <img className="outro" src={outro} alt="" />
                </div>
              </div>
            </div>
          </section>
        {/* outro section */}
      </div>
    );
  }
}

export default App;
