import React, { Component } from 'react';

import logo from './logo.svg';
import map from './map.svg';
import business from './business.svg';
import fed from './fed.svg';
import consumer from './consumer.svg';
import tnt from './tnt.svg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div id="main-container">

          <div className="block-fluid section1">
            <div className="block1">
              <img src={logo} className="intro-logo" alt="logo" />
              <h3>Powered by Goodees here</h3>
              <div className="space30"></div>
              <h3>Cannabis Verification Solutions</h3>
              <p>Jontae James</p>
              <p>Co-Founder</p>
            </div>
          </div>

          <div className="xs-mb-100"></div>

          <div className="block-cont">
            <h2 className="text-c">Of the 30 states that have legalized medical marijuana, 9 have legalized recreational use</h2>
            <img src={map} alt="us-marijuana-legality map" />
          </div>

          <div className="xs-mb-100"></div>

          <div className="block-cont section2">
            <h2 className="text-c title">How to ease public tension by providing bulletproof transparency from seed-to-sell?</h2>

            <div className="xs-mb-50"></div>
            <div className="row">
              <div className="one-third">
                <img src={business} alt="Business graphic" />
                <h4 className="caps">Business</h4>
              </div>
              <div className="one-third">
                <img src={fed} alt="Federal government graphic" />
                <h4 className="caps">Government</h4>
              </div>
              <div className="one-third">
                <img src={consumer} alt="Consumer leisure graphic" />
                <h4 className="caps">Consumer</h4>
              </div>
            </div>

            <div className="xs-mb-25"></div>
            <div className="row">
              <div className="one-full">
                <h2 className="caps">Problem</h2>
              </div>
              <div className="one-half">
                <p>Marijuana has operated and existed within the black market for decades and is currently considered illegal by the United States federal government. Despite this status, cannabis is governed at the state level. 30 states have legalized medical marijuana use, and of those 9 have legalized recreational use.</p>
              </div>
              <div className="one-half">
                <p>Cannabis law can present themselves as confusing and are have been evolving differently across the country. Although over 58% of American’s approve of the legalization of cannabis there is still a vast majority against it for obvious reasons.</p>
              </div>
            </div>
          </div>

          <div className="xs-mb-100"></div>

          <div className="block-cont section3">
            <h2 className="text-c title">A closed loop, end-to-end solution operating within the rules and regulations set forth by state and local governments.</h2>

            <div className="xs-mb-25 w100"></div>
            <div className="two-fifth">
              <div className="caps">Track &amp; Trace</div>
              <p>Track &amp; Trace (TnT) is a cloud-based peer-to-peer system, where information accurately assembles upward as clean and discrete data elements. NatureTrak as a solution is anti-counterfeit, accessible and transparent to both business and the end consumer.</p>
              <hr/>
              <div className="caps">Benefits</div>
              <p>
                <ul>
                  <li>Visibility across supply chains</li>
                  <li>Deter illegal sales</li>
                  <li>Proof of origin</li>
                  <li>Deter theft and fraud</li>
                  <li>Regulatory compliance</li>
                </ul>
              </p>
            </div>
            <div className="three-fifth">
              <img src={tnt} alt="Track-n-Trace graphic" />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
