import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import logo from './img/logo.svg';
// import goodees from './goodees.svg';
import map from './map.svg';
import fed from './fed.svg';
import tnt from './tnt.svg';
import ttv from './ttv.svg';
import scan from './scan.svg';
import supply from './supply.svg';
import enterprise from './enterprise.svg';
import outro from './outro.svg';

import CarouselOne from './C1';
import CarouselTwo from './C2';
import Video from './video';
import Cityscape from './Cityscape';

import './App.css';

const toggleVideo = () => {
  let x = document.getElementById('ntVideo');
  x.style.display === 'block' ? x.style.display = 'none' : x.style.display = 'block';
}

class App extends Component {
  render() {
    return (
      <div>

        <div id="navButton">
          <CSSTransitionGroup
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
              <a href="#" className="menu-item"> <i className="fa fa-bar-chart" /> </a>
              <a href="#" className="menu-item"> <i className="fa fa-plus" /> </a>
              <a href="#" className="menu-item"> <i className="fa fa-heart" /> </a>
              <a href="#" className="menu-item"> <i className="fa fa-envelope" /> </a>
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
          </CSSTransitionGroup>
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
        </div>


        {/* intro section */}
        <section>
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
                <h2>A Higher Standard</h2>
                <p>Learn about NatureTrak in the cannabis industry.</p>
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
        {/* problem section */}
        <section>
          <div id="problem" className="container">
            <div className="row">
              <div className="column text-c">
                  <p className="lead">"30 states have legalized medical marijuana and of those 9 states have legalized marijuana for recreational use"</p>
                </div>
            </div>
            <div className="row">
              <div className="column">
                <img className="map" src={map} alt="" />
              </div>
            </div>
            <div className="row">
              <div className="column">
                <img className="fed" src={fed} alt="" />
              </div>
            </div>
            <div className="row">
              <div className="column">
                <blockquote><h2>Problem</h2></blockquote>
                <p className="lead">How to ease public tension by providing bulletproof transparency from seed-to-sell?</p>
              </div>
            </div>
            <div className="row">
              <div className="column">
                <p>Marijuana has operated and existed within the black market for decades and is currently considered illegal by the United States federal government. Despite this status, cannabis is governed at the state level. 30 states have legalized medical marijuana use, and of those 9 have legalized recreational use. Within the last decade, cannabis laws have evolved differently across the country.</p>
              </div>
              <div className="column">
                <p>Today, although over 58% of American’s currently approve the legalization of medical marjiuana, resistance is felt on both federal and state levels. This division is rooted in the ambiguous nature of marijuana's true application across the country, including its effectiveness in the medicinal, social, and economic stratum.</p>
              </div>
            </div>
          </div>
        </section>
        {/* problem section */}
        {/* solution section */}
        <section>
          <div id="solution" className="container">
            <div className="row">
              <div className="column column-40">
                <div className="vertical">
                  <blockquote><h2>Solution</h2></blockquote>
                  <p className="lead">A closed loop, end-to-end solution operating within the rules and regulations set forth by state and local governments.</p>
                  <h3>Track &amp; Trace</h3>
                  <p>Track &amp; Trace (TnT) is a cloud-based peer-to-peer system, where information accurately assembles upward as clean and discrete data elements. NatureTrak as a solution is anti-counterfeit, accessible and transparent to both business and the end consumer.</p>
                  <h3>Benefits</h3>
                  <div>
                    <ul>
                      <li>Visibility across supply chains</li>
                      <li>Deter illegal sales</li>
                      <li>Proof of supply</li>
                      <li>Deter theft and fraud</li>
                      <li>Regulatory compliance</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="column column-60">
                <div>
                  <img className="tnt" src={tnt} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* solution section */}
        {/* overview + component1 section */}
        <section>
          <div id="overview" className="container">
            <div className="row">
              <div className="column column-40">
                <div className="vertical">
                  <blockquote><h2>Track. Trace. Verify.</h2></blockquote>
                  <p className="lead">Cannabis Verification Solutions</p>
                  <p>Our end-to-end system tracks, traces and validates in real-time the identity, status and location of any product, business or employee through each transaction point, providing patients peace of mind, high quality, legitimatized cannabis products. The safety and security people have come to expect from other industries and goods and services is everything NatureTrak has to offer.</p>
                  <hr/>
                  <div>
                    <ul>
                      <li>Digital Patient Recommendation Card</li>
                      <li>B2B License &amp; Employee Verification</li>
                      <li>Track &amp; Trace</li>
                      <li>Proof of Origin</li>
                      <li>Logistics</li>
                      <li>Payments</li>
                      <li>Business Enterprise Platform</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="column column-60">
                <img className="ttv" src={ttv} alt="" />
              </div>
            </div>
          </div>
          <div id="component1" className="container">
            <div className="row">
              <div className="column">
                <img className="scan" src={scan} alt="" />
              </div>
            </div>
            <div className="row">
              <div className="column">
                <h3>B2B Scan</h3>
                <p><em>Business</em> and <em>Employee</em> verification throughout the supply chain at point of transaction.</p>
              </div>
              <div className="column">
                <h3>B2C Scan</h3>
                <p><em>Retailer</em> and <em>Patient</em> verification during the purchase and delivery of medical products.</p>
              </div>
            </div>
            <div className="row">
              <div className="column">
                <p>NatureTrak removes the guesswork at every business and patient level interaction. The automated digital cannabis license - a clear, simple and transparent verification solution - identifies and verifies medical marijuana businesses, employees and patients in real-time at each exchange in the value chain.</p>
              </div>
              <div className="column">
                <p>This provides the absolute minimum regulatory compliance for medical marijuana businesses. A centralized storage of all business-related activities stored and easily managed for audit.</p>
              </div>
            </div>
          </div>
        </section>
        {/* overview + component1 section */}
        {/* component2 section */}
        <section>
          <div id="component2" className="container">
            <div className="row">
              <div className="column">
                <div className="vertical">
                  <blockquote><h2>Supply Chain Management</h2></blockquote>
                  <p>TnT inventory and supply chain management that synchronized with the state’s database to maintain compliance. The is little to no hardware needed beyond a smartphone, laptop or tablet. Track, trace and report in real-time with secure, anti-counterfeit labels and unique identifiers.</p>
                  <p>This patent-pending technology ensures the scalability and security of unique labels and identifiers by managing computer nodes in a cluster.</p>
                  <hr/>
                  <h3>Benefits</h3>
                  <div>
                    <ul>
                      <li>Keep track of which node(s) generate and validate which specific labels or unique identifiers</li>
                      <li>Manages encryption and decryption of labels or unique identifiers</li>
                      <li>Can physically and virtually track an infinite number of labels or unique identifiers</li>
                      <li>Anti-counterfeit and unparalleled reliability under heavy load</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="column">
                <img className="supply" src={supply} alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* component2 section */}
        {/* component3 section */}
        <section>
          <div id="component3" className="container">
            <div className="row">
              <div className="column">
                <div className="vertical">
                  <blockquote><h2>Logistics</h2></blockquote>
                  <p>Enter an address to order for delivery or search local retailers in a filtered radius to enjoy streamlined convenience like never before. NatureTrak provides the world's leading real-time location of employees, suppliers or retailers, including filterable search results wherever you are. NatureTrak gives both businesses and consumers a secure, trusted, and transparent network of cannabis services and products right at your fingertips.</p>
                  <p>Patients can choose to search for–and order products from–marijuana localities by strain, popularity, ‘frequent and favorites’, purchase history, or price. Live udpates on orders and full history of purchases ensure localilty support to businesses with access to a fully documented product history from seed-to-sell on all products available on the market.</p>
                  <hr/>
                  <h3>Benefits</h3>
                  <p>This patent-pending technology ensures the scalability and security of unique labels and identifiers by managing computer nodes in a cluster.</p>
                  <div>
                    <ul>
                      <li><strong>On-the-Go</strong> – order anywhere based on location, business, or product</li>
                      <li><strong>Dispatch Deliveries</strong> – view instantly the nearest driver time and distance</li>
                      <li><strong>Real-time Tracking</strong> – real-time visibility on delivery status to retailers, consumers or both, as well as employee location</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="carousel1" className="mocks">
                <CarouselOne />
              </div>
            </div>
          </div>
        </section>
        {/* component3 section */}
        {/* component4 section */}
        <section>
          <div id="component4" className="container">
            <div className="row">
              <div className="column">
                <div className="vertical">
                  <blockquote><h2>Payments</h2></blockquote>
                  <p className="lead">Proprietary BSA/AML Compliance Program custom tailored to each state’s marijuana regulations.</p>
                  <p>NatureTrak powered by Goodees takes responsibility for all regulatory compliance, which includes conducting rigorous State Regulatory Compliance Assessments, BSA/AML compliance, “Know Your Customer” due diligence, transaction due diligence, filing currency transaction reports (CTRs) and filing “Marijuana Limited” Suspicious Activity Reports (SARs).</p>
                  <p>All compliance is satisfied by one robust cannabis verification solution. NatureTrak powered by Goodees satisfies state BSA/AML compliance obligations by conducting their due diligence and are not independently responsible for regulatory compliance with regard to registered clients.</p>
                  <p>The Board of Equalization Chair Fiona Ma, Cannabis Safe Payment Act - to make it safer and simpler for cannabis business owners to pay state fees and taxes, encouraging compliance with state laws and providing support for business owners. Specifically, businesses will be able to make cash tax and fee payments at many more locations, including state agencies and local county tax collectors who agree to participate.</p>
                  <hr/>
                  <h3>Benefits</h3>
                  <div id="benefitsRow" className="row">
                    <div className="column">
                      <div>
                        <ul>
                          <li>Safe and secure paperless payments</li>
                          <li>Prepaid stored value wallet</li>
                          <li>Merchant invoicing and bill pay</li>
                          <li>Invoice via email, SMS, and social media</li>
                          <li>QR code scan for in person payments</li>
                        </ul>
                      </div>
                    </div>
                    <div className="column">
                      <div>
                        <ul>
                          <li>Send and receive money</li>
                          <li>Load, unload and top up features</li>
                          <li>Load from check, debit card or bank</li>
                          <li>Unload via ACH or debit card</li>
                          <li>Cannabis compliance consulting</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="carousel2" className="mocks">
                <CarouselTwo />
              </div>
            </div>
          </div>
        </section>
        {/* component4 section */}
        {/* component5 section */}
        <section>
          <div id="component5" className="container">
            <div className="row">
              <div className="column column-33">
                <div className="vertical">
                  <blockquote><h2>Enterprise</h2></blockquote>
                  <p className="lead">One scan. Endless reporting.</p>
                  <p><strong>Cannabusiness License Audit</strong> – a complete history of business activities, employees and partners.</p>
                  <p><strong>The Enterprise Solution</strong> – a centralized location for essential cannabis logistics, business documents, government certified records, asset management, and monitoring of real-time business activities–from employee operations, transactions, and inventory analytics.</p>
                </div>
              </div>
              <div className="column column-80">
                <img className="enterprise" src={enterprise} alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* component5 section */}
        {/* outro section */}
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
