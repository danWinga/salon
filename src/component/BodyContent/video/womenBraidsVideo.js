import React, { Component } from 'react';

export default class womenBraidsVideo extends Component {
  render() {
    return (
        <div id="wrapper-video">			  
                            
            <video class="mfs-video" autoPlay loop muted>
                <source src="assets/video/box-braids.mp4" type="video/mp4"/>
            </video>
        
        </div>
    );
  }
}
