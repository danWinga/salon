import React, { Component } from 'react'
import { Link } from 'react-router-dom';
//import logo from 'assets/img/logo.png';

class HeaderSection extends Component {
    render () {
        return (
            
        <header className="header-area">
        {/** <!-- Start Header Config Area --> */}
        <div className="header-config-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-lg-6 d-none d-md-block">
                        <div className="header-config-content">
                            <ul className="config-nav nav">
                                <li className="config-item">
                                <Link to="/" >
                                My Accounts
                                        </Link>
                                    <ul className="config-option">
                                        <li>
                                        <Link to="/" >
                                        Edit Profile
                                        </Link>
                                        </li>
                                        <li>
                                            
                                            <Link to="/" >
                                            Change Password
                                        </Link>
                                            </li>
                                    </ul>
                                </li>
                                <li className="config-item"><Link to="/" >Language: English</Link>
                                    <ul className="config-option">
                                        <li><Link to="/" >Language: Bengali</Link></li>
                                        <li><Link to="/" >Language: Hindi</Link></li>
                                        <li><Link to="/" >Language: Urdu</Link></li>
                                    </ul>
                                </li>
                                <li className="config-item"><Link to="/" >Currency: USD</Link>
                                    <ul className="config-option">
                                        <li><Link to="/" >Currency: AUD</Link></li>
                                        <li><Link to="/" >Currency: BDT</Link></li>
                                        <li><Link to="/" >Currency: CAD</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-6">
                        <div className="header-config-buttons">
                            <ul className="media-icons nav">
                                <li className="btn-cart"><Link to="/cart" ><i className="ion-bag"></i> <span>Shopping Cart:</span> <strong className="amount">$0.00</strong></Link></li>
                                <li><Link to="/" ><i className="ion-social-facebook"></i></Link></li>
                                <li><Link to="/" ><i className="ion-social-linkedin"></i></Link></li>
                                <li><Link to="/" ><i className="ion-social-instagram"></i></Link></li>
                                <li><Link to="/" ><i className="ion-social-vimeo"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/** <!-- End Header Config Area --> 
        <!-- Start Header Navigation Area -->*/}
        <div className="header-nav-area">
            <div className="container">
                <div className="row align-items-center position-relative">
                    <div className="col-8 col-lg-2 col-xl-3">
                        {/*<!-- Start Logo Wrapper -->*/}
                        <div className="logo-wrap">
                        
                            <img src="assets/img/logo.png" alt="logo"  className="navbar-band" />
                            {/** <a href="index.html"><img src="assets/img/logo.png" alt="Logo"></Link> */}
                       
                    
                            
                        </div>
                       {/* <!-- End Logo Wrapper -->*/}
                    </div>
                    <div className="col-lg-9 position-static col-xl-8 d-none d-lg-block">
                       {/**  <!-- Start Site Navigation --> */}
                        <nav className="site-navigation">
                            <ul className="main-nav nav">
                                <li className="has-submenu active">
                                        <Link to="/" >
                                            Home
                                        </Link>
                                    
                                </li>
                                <li className="has-submenu full-width"><Link to="/womenBraids" >Hair Styles</Link>
                                    <ul className="submenu-nav submenu-nav--mega">
                                        <li className="mega-item" id="d-none"><Link to="/womenBraids" >Women's Braids Style</Link>
                                            <div className="mega-thumb">
                                                
                                                <img src="./assets/img/extra/megamenu.jpg" alt="Mega"/>

                                                </div>
                                        </li>
                                        <li className="mega-item"><Link to="/" >Braids</Link>
                                            <ul>
                                                <li><Link to="/womenBraids" ><i className="fa fa-cubes"></i>Women's Braids Style</Link></li>
                                                <li><Link to="/mensBraids" ><i className="fa fa-image"></i>Men's Braids Style</Link></li>
                                                <li><Link to="/kidsBraids" ><i className="fa fa-th-large"></i>Kids's Braids Style</Link></li>
                                                <li><Link to="/" ><i className="fa fa-puzzle-piece"></i>Other style</Link></li>
                                                
                                            </ul>
                                        </li>
                                        <li className="mega-item"><Link to="/mensBraids" >Weaves</Link>
                                            <ul>
                                                <li><Link to="/womenBraids" ><i className="fa fa-html5"></i>Men's Braids Style</Link></li>
                                                <li><Link to="/mensBraids" ><i className="fa fa-desktop"></i>Men's Weave Style</Link></li>
                                                <li><Link to="/kidsBraids" ><i className="fa fa-minus"></i>Men's Locs</Link></li>
                                                
                                            </ul>
                                        </li>
                                        <li className="mega-item"><Link to="/" >Locs</Link>
                                            <ul>
                                                <li><Link to="/locs" ><i className="fa fa-shopping-cart"></i> Instant Locs </Link></li>
                                                <li><Link to="/locs" ><i className="fa fa-table"></i>Twist ,Style & Repair</Link></li>
                                                <li><Link to="/locs" ><i className="fa fa-home"></i> Starter Locs </Link></li>
                                                <li><Link to="/locs" ><i className="fa fa-minus"></i> Faux Locs </Link></li>
                                              
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="has-submenu"><Link to="/aboutUs" >Who Area We</Link>
                                    <ul className="submenu-nav">
                                        
                                        <li><Link to="/" >Our Team</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/services" >Services</Link></li>
                                
                                <li className="has-submenu"><Link to="/shop" >Shop</Link>
                                    <ul className="submenu-nav">
                                        <li><Link to="/shop" >Product Page</Link></li>
                                        <li><Link to="/productDetails" >Product Details</Link></li>
                                        <li><Link to="/Cart" >Cart</Link></li>
                                        <li><Link to="/Checkout" >Checkout</Link></li>
                                    </ul>
                                </li>
                                
                                <li><Link to="/contact" >Contact</Link></li>
                            </ul>
                        </nav>
                        {/** <!-- End Site Navigation --> */}
                    </div>
                    <div className="col-4 col-lg-1">
                        {/** <!-- Start Search Box Area --> */}
                        <div className="search-box-wrap">
                            <ul className="search-box-inner nav">
                                <li><Link to="/"  className="btn-search"><i className="ion-search"></i> <i className="ion-close"></i></Link>
                                    <div className="header-search-box">
                                        <form>
                                            <div className="search-box-content">
                                                <label for="search" className="sr-only"></label>
                                                <input 
                                                    placeholder="type here and hit enter"
                                                    ref={input => this.search = input}
                                                    onChange={this.handleInputChange}
                                                id="search" />
                                            </div>
                                        </form>
                                    </div>
                                </li>
                                <li className="d-lg-none"><Link to="/" className="btn-menu"><i className="ion-navicon"></i></Link></li>
                            </ul>
                        </div>
                        {/** <!-- End Search Box Area --> */}
                    </div>
                </div>
            </div>
        </div>
        {/** <!-- End Header Navigation Area --> */}
        </header>
        )
    }
}

export default HeaderSection