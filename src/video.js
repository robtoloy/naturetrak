import React, { Component } from 'react';
import ReactPlayer from 'react-player';


const vidStyles = {
  margin: '0 auto'
};

class Video extends Component {
  render () {
    return (
      <div>
        <ReactPlayer controls={true} url='https://youtu.be/T-cljn4vnTc' style={vidStyles} />
      </div>
    );
  }
}
export default Video;
