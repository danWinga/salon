import React, { Component } from 'react';

export default class MensBraidVideo extends Component {
  render() {
    return (
        <div id="wrapper-video">			  
                            
            <video className="mfs-video" autoPlay loop muted>
                <source src="assets/video/star.mp4" type="video/mp4"/>
            </video>

        </div>
    );
  }
}
