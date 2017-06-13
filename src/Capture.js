import React, { Component } from 'react'

import './App.css'

let didScroll;
let lastScrollTop = 0;
let delta = 5;
let capture = document.getElementById('capture');
let navbarHeight = capture.outerHeight();

window.scroll((e)=>{
  didScroll = true;
});

setInterval(()=>{
  if(didScroll){
    hasScrolled();
    didScroll = false;
  }
}, 250);

hasScrolled: ()=>{
  let st = this.scrollTop();
  if(Math.abs(lastScrollTop - st) <= delta)
    return;
  if(st > lastScrollTop && st > navbarHeight){
    capture.removeClass('nav-down').addClass('nav-up');
  } else {
    if(st + window.height() < document.height()){
      capture.removeClass('nav-up').addClass('nav-down');
    }
  }
  lastScrollTop = st;
}
