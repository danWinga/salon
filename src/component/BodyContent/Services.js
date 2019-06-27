import React, { Component } from 'react';
import WomenBraidsVideo from '../BodyContent/video/womenBraidsVideo';
import { Link } from 'react-router-dom';

export default class Services extends Component {
  render() {
    return (
      <div>
        <div className="page-breadcrumb-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                        <Link to="/" >
                                            Home
                                        </Link>
                                            
                                                </li>
                                        <li className="breadcrumb-item active" aria-current="page">Services</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <WomenBraidsVideo/>

      
        <div className="service-area sp-top b bg-img" data-bg="assets/img/service/service-bg-2.jpg">
          <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <div className="section-title section-title--3">
                        <h2>Our Services</h2>
                        <p>A complimentary thorough consultation concerning each client’s individual needs and desires is conducted before every service. Our main goal is to make sure we meet and exceed our clients expectations.</p>
                    </div>
                </div>
            </div>
            <div className="row mtn-30">
                <div className="col-sm-6 col-lg-3">
                    {/** <!-- Start Service Item --> */}
                    <div className="service-item service-item--2">
                      <img src="assets/img/service/h-3-1.png" alt="Service"/></div>
                    {/** <!-- End Service Item --> */}
                </div>
                <div className="col-sm-6 col-lg-3">
                    {/** <!-- Start Service Item --> */}
                    <div className="service-item service-item--2">
                      <img src="assets/img/service/h-3-2.png" alt="Service"/></div>
                     {/** <!-- End Service Item --> */}
                </div>
                <div className="col-sm-6 col-lg-3">
                    {/** <!-- Start Service Item --> */}
                    <div className="service-item service-item--2">
                      <img src="assets/img/service/h-3-3.png" alt="Service"/></div>
                     {/** <!-- End Service Item --> */}
                </div>
                <div className="col-sm-6 col-lg-3">
                    {/** <!-- Start Service Item --> */}
                    <div className="service-item service-item--2">
                      <img src="assets/img/service/h-3-4.png" alt="Service"/></div>
                     {/** <!-- End Service Item --> */}
                </div>
            </div>
        </div>
    </div>

    <div className="feature-area bg-img sp-y" data-bg="assets/img/slider/home3/slide-bg.png">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <div className="section-title section-title--3">
                        <h2>Welcome to Hair Salon</h2>
                        <p>Whether it’s edgy and modern or sleek and elegant, we strive to create the perfect look for each individual client. We’re also determined to provide each and every client with the highest degree of customer service in a friendly and professional setting. We are dedicated to performing our craft exceptionally well. To sum up: we do not want any single client to believe he or she can be better served at any other salon.</p>
                    </div>
                </div>
            </div>
            <div className="row mtn-30">
                <div className="col-sm-6 col-lg-3 text-center">
                    <div className="feature-item">
                        <div className="feature-item__icon"><img src="assets/img/feature/scissors.png" alt="Salon"/></div>
                        <div className="feature-item__text">
                            <p className="mb-0">The hair cutting and styling with 10 years of experience.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3 text-center">
                    <div className="feature-item">
                        <div className="feature-item__icon"><img src="assets/img/feature/spray.png" alt="Salon"/></div>
                        <div className="feature-item__text">
                            <p className="mb-0">Update the latest technology and tendency in the world.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3 text-center">
                    <div className="feature-item">
                        <div className="feature-item__icon"><img src="assets/img/feature/hair-dry.png" alt="Salon"/></div>
                        <div className="feature-item__text">
                            <p className="mb-0">Using the best products from the top providers.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3 text-center">
                    <div className="feature-item">
                        <div className="feature-item__icon"><img src="assets/img/feature/razor.png" alt="Salon"/></div>
                        <div className="feature-item__text">
                            <p className="mb-0">Our staffs have high experience in customer service.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
  </div>
  
    );
  }
}
