import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class FooterSection extends Component {
    render() {
        return (
            <React.Fragment>
                <footer className="footer-area bg-img" data-bg="assets/img/extra/footer_bg.png">
                <div className="footer-widget-area">
                    <div className="container">
                        <div className="row mtn-40">
                            <div className="col-sm-6 col-lg-3">
                            <div className="widget-item">
                                <h4 className="widget-title">About Us</h4>
                                <div className="widget-body">
                                    <p>Dan was founded in 2008 with the mission of providing hair care services with a professional but casual atmosphere.</p>
                                    <div className="social-icons mt-20">
                                        <Link to="/">
                                            <i className="fa fa-facebook"></i>
                                        </Link>
                                        <Link to="/">
                                        <i className="fa fa-twitter"></i>
                                        </Link>
                                        
                                        <Link to="/"><i className="fa fa-instagram"></i>
                                        </Link>
                                        </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                            <div className="widget-item">
                                <h4 className="widget-title">Keep in touch</h4>
                                <div className="widget-body">
                                    <div className="keepintouch">
                                        <p><i className="ion-android-call"></i>(+254) 72475 3301</p>
                                        <p><i className="ion-email"></i>
                                        <Link to="/mailto:your@example.com">your@saloon.com</Link></p>
                                        <p><i className="ion-map"></i>Nairobi CBD, Kenya</p>
                                        <p><i className="ion-printer"></i>(+254) 9200 5700</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                            <div className="widget-item">
                                <h4 className="widget-title">Customer Care</h4>
                                <div className="widget-body">
                                    <ul className="widget-list">
                                        <li><Link to="/contact">Contact Us</Link></li>
                                        <li><Link to="/contact">Delivery Information</Link></li>
                                        <li><Link to="/contact">Returns Policy</Link></li>
                                        <li><Link to="/contact">Privacy & Security</Link></li>
                                        <li><Link to="/contact">Work With Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                            <div className="widget-item">
                                <h4 className="widget-title">Working hours</h4>
                                <div className="widget-body">
                                    <div className="working-hours">
                                     <strong>Mon – Thurs:</strong> 10:00 AM – 8:00 PM
                                    
                                    <p className="text-left"> <strong>Thurs – Fri:</strong> 10:00 AM – 7:00 PM</p>
                                    <p className="text-left">   <strong>Saturday:</strong> 12:00 - 17:30</p>
                                     <hr></hr>
                                    <strong>Sunday:</strong> CLOSED 
                                                                             
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                            <div className="copyright-content">
                                <p className="mb-0">© winga. All right reserved 2019.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </footer>
                {/** <!-- Scroll Top Button --> */}
                <button className="btn-scroll-top"><i className="ion-chevron-up"></i></button>
                {/** <!--== Start Quick View Modal ==--> */}
                <div className="modal fade" id="quickViewModal" tabindex="-1">
                <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                            <div className="row">
                                {/** <!-- Start Product Thumbnail Area --> */}
                                <div className="col-md-6">
                                    <div className="product-thumb-area">
                                        <div className="product-details-thumb-slider">
                                        <figure className="port-details-thumb-item" data-thumb="assets/img/product/prod-details-1.jpg"><img src="assets/img/product/prod-details-1.jpg" alt="Product Details"/></figure>
                                        <figure className="port-details-thumb-item" data-thumb="assets/img/product/prod-details-2.jpg"><img src="assets/img/product/prod-details-2.jpg" alt="Product Details"/></figure>
                                        <figure className="port-details-thumb-item" data-thumb="assets/img/product/prod-details-3.jpg"><img src="assets/img/product/prod-details-3.jpg" alt="Product Details"/></figure>
                                        <figure className="port-details-thumb-item" data-thumb="assets/img/product/prod-details-4.jpg"><img src="assets/img/product/prod-details-4.jpg" alt="Product Details"/></figure>
                                        </div>
                                    </div>
                                </div>
                                {/**
                                    <!-- End Product Thumbnail Area -->
                                <!-- Start Product Info Area -->
                                */}
                                <div className="col-md-6">
                                    <div className="product-details-info-content-wrap">
                                        <div className="prod-details-info-content">
                                        <h2 className="h4">Anti-Humidty Hair Spray</h2>
                                        <div className="price-group"><del className="old-price">$99.00</del> <span className="price">$69.99</span></div>
                                        <p>If you’ve ever missed a shot because your phone just didn’t focus fast enough, or your pictures are coming out blurry with your point-and-shoot model, step up to faster autofocus, more features, and higher quality results with a digital SLR camera, or DSLR, from Best Buy.</p>
                                        <div className="product-config mt-30">
                                            {/**  <!-- Start Color Choose Option --> */}
                                            <div className="config-item">
                                                <h5 className="config-name">Color: <b>Black</b></h5>
                                                <ul className="config-list nav">
                                                    <li className="active"><img src="assets/img/color/black.jpg" alt="Black"/></li>
                                                    <li><img src="assets/img/color/yellow.jpg" alt="Yellow"/></li>
                                                </ul>
                                            </div>
                                            {/**
                                                    <!-- End Color Choose Option -->
                                                    <!-- Start Size Select Option -->
                                            */}
                                            <div className="config-item">
                                                <h5 className="config-name">Size: <b>Small</b></h5>
                                                <ul className="config-list nav">
                                                    <li className="active"><span>S</span></li>
                                                    <li><span>M</span></li>
                                                    <li><span>L</span></li>
                                                    <li><span>XL</span></li>
                                                </ul>
                                            </div>
                                            {/**  <!-- End Size Select Option --> */}
                                        </div>
                                        <div className="product-action mt-30">
                                            <div className="action-top d-sm-flex">
                                                <div className="pro-qty mr-3 mb-30 mb-sm-0">
                                                    <label for="quantity" className="sr-only">Quantity</label>
                                                    <input type="text" id="quantity" title="Quantity"  value="1"/>
                                                </div>
                                                <button className="btn btn-hvr-brand">Add Cart</button>
                                            </div>
                                        </div>
                                        <div className="prod-details-footer mt-30">
                                            <div className="prod-details-footer__item">
                                                <div className="footer-item-left">
                                                    <h5 className="item-head"><i className="fa fa-tags"></i> Categories:</h5>
                                                </div>
                                                <div className="footer-item-right">
                                                    <ul className="cate-list nav">
                                                    <li><Link to="/">Design</Link></li>
                                                    <li><Link to="/">Interior</Link></li>
                                                    <li><Link to="/">Multi</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="prod-details-footer__item">
                                                <div className="footer-item-left">
                                                    <h5 className="item-head"><i className="fa fa-share-alt"></i> Share:</h5>
                                                </div>
                                                <div className="footer-item-right">
                                                    <div className="share-item"><Link to="/"><i className="fa fa-facebook"></i></Link> <Link to="/"><i className="fa fa-twitter"></i></Link> <Link to="/"><i className="fa fa-google-plus"></i></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                {/** <!-- End Product Info Area --> */}
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                {/**
                        <!--== End Quick View Modal ==-->
                        <!-- Start Responsive Menu Wrapper -->
                */}
                <aside className="off-canvas-wrapper off-canvas-menu">
                <div className="off-canvas-overlay"></div>
                <div className="off-canvas-inner">
                    {/** <!-- Start Off Canvas Content --> */}
                    <div className="off-canvas-content">
                        <div className="off-canvas-header">
                            <div className="logo">
                            <a href="index.html"><img src="assets/img/logo.png" alt="Logo"/></a>
                            </div>
                            <div className="close-btn">
                            <button className="btn-close"><i className="ion-close"></i></button>
                            </div>
                        </div>
                        <div className="res-mobile-menu mobile-menu"></div>
                        <div className="mobile-menu res-site-config"></div>
                    </div>
                </div>
                </aside>
            </React.Fragment>




                
        
        )
    }
}
