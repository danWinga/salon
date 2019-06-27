import React, { Component } from 'react'

export default class KidsBraidVideo extends Component {
    render() {
        return (
            <div id="wrapper-video">			  
                            
                <video class="mfs-video" autoPlay loop muted>
                    <source src="assets/video/fronts.mp4" type="video/mp4"/>
                </video>
        
        </div>
        )
    }
}
