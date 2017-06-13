import React, { Component } from 'react'
import './App.css'


let countDownDate = new Date("Jan 1, 2018 00:00:00").getTime();

let x = setInterval(() => {

  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days + " days " + hours + " hours "
  + minutes + " minutes " + seconds + " seconds ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);


class Countdown extends Component {
  render(){
    return (
        <div>
          <h3 id="countdown"></h3>
        </div>
    )
  }
}
export default Countdown;
