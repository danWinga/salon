import React, { Component } from 'react';
import WomenBraidsVideo from '../BodyContent/video/womenBraidsVideo';
import { Link } from 'react-router-dom';


export default class AboutUs extends Component {
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
                                        <li className="breadcrumb-item active" aria-current="page">About Us</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <WomenBraidsVideo/>
                <div className="container " id="add-padding">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="page-tittle-content">
                            <div className="page-tittle-inner section-title section-title--3 align-items-center-align mb-0">
                                <h2>About Us</h2></div>
                        </div>
                    </div>
                </div>
            </div>

            {/** <!--== Start About Page Content  ==--> */}
    <div className="about-page-content">
        <div className="container">
            <div className="row mb-100 mb-sm-30">
                
            <div className="row align-items-center">
                <div className="col-md-6 col-lg-4">
                    <div className="about-thumb"><img src="assets/img/about/home-3-about.jpg" alt="About"/></div>
                </div>
                <div className="col-md-6 col-lg-8">
                    <div className="about-txt">
                        <div className="section-title section-title--3 left-align mb-0">
                            
                            <p>Whether it’s edgy and modern or sleek and elegant, we strive to create the perfect look for each individual client. We’re also determined to provide each and every client with the highest degree of customer service in a friendly and professional setting. We are dedicated to performing our craft exceptionally well. To sum up: we do not want any single client to believe he or she can be better served at any other salon.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/** <!--== End About Page Content  ==--> */}
   
        </div>
        
      </div>
    );
  }
}
