import React, { Component } from 'react';
import {Link }from 'react-router-dom'
import ContactVideo from '../BodyContent/video/ContactVideo';

import {Gmaps} from 'react-gmaps';
export default class contact extends Component {
    render() {
       
        
        return (
            <React.Fragment>
            <div>
                
                <div class="page-breadcrumb-wrap">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item">
                                        <Link to="/" >
                                            Home
                                        </Link>
                                            
                                                </li>
                                        <li class="breadcrumb-item active" aria-current="page">Contact</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <ContactVideo/>


               {/** <!--== Start Contact Page Content  ==-->  */} 
                <div class="contact-page-content-wrap sp-y">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="map-area-wrap">
                                    <div id="map_content" class="h-100" data-lat="23.7639212" data-lng="90.429871" data-zoom="6">
                                    <Gmaps  />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="contact-form-area">
                                    <h4>Get in touch</h4>
                                    <p>Drop us a line or give us a ring. We love to hear about your experience and are happy to answer any questions.</p>
                                    <div class="contact-form-wrap comment-area-wrapper p-0 m-0">
                                        <form  id="contact-form">
                                            <div class="form-content-wrap">
                                                <div class="form-input-item">
                                                    <label for="name" class="sr-only">Name</label>
                                                    <input type="text" id="name" name="con_name" placeholder="Name *" required/>
                                                </div>
                                                <div class="form-input-item">
                                                    <label for="email" class="sr-only">Email</label>
                                                    <input type="text" id="email" name="con_email" placeholder="Email *" required/>
                                                </div>
                                                <div class="form-input-item">
                                                    <label for="message" class="sr-only">Message *</label>
                                                    <textarea name="con_message" id="message" cols="30" rows="5" placeholder="Write Your Message *" required></textarea>
                                                </div>
                                                <div class="form-submit mt-40">
                                                    <button class="btn btn-hvr-brand">Send Us</button>
                                                    <div class="form-message"></div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/**  <!--== End Contact Page Content  ==-->*/}
        </div>
         </React.Fragment>       
            
        )
    }
}
