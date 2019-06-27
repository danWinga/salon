import React, { Component } from 'react'
import {Link } from 'react-router-dom'



export default class Home extends Component {
    render() {
        return (
            <div>
            


                <div id="wrapper-video">			  
                            
                    <video className="mfs-video" autoPlay loop muted>
                        <source src="assets/video/halo.mp4" type="video/mp4"/>
                    </video>
                    
                </div>


                    {/** <!--== End Hero Area ==--> */}
                    {/** <!--== Start About Area ==--> */}



                    {/**  <!--== End About Area ==--> */}


            <section className="after-loop">
                <div className="container col-12 ">
                    <div className="col-md-6 col-lg-12">
                        <div className= "section-title section-title--3 align-items-center-align mb-0" >
                        <h2>Featured Hair Styles</h2>
                        </div>
                    </div>
                <div className="row">
                    <div className="col-lg-4 col-md-8 mb-5 mb-lg-0 mx-auto">
                    <Link to="/kidsBraids"  className="after-loop-item card border-0 card-themes shadow-lg btn " >
                            <div className=" col-lg-12"  id="col-pad">
                                
                                <img src="assets/images/index/hue3.jpg"  alt='xxx'   width="100%"/>
                                
                                     
                            </div>
                            
                            <button type="button" class="btn btn-outline-warning ">
                           STITCH BRAIDS  
                            </button>
                           
                            
                                        
                            </Link>
                       
                        
                    </div>
                    <div className="col-lg-4 col-md-8 mb-5 mb-lg-0 mx-auto">
                    <Link to="/womenBraids"  className="after-loop-item card border-0 card-themes shadow-lg btn " >
                            <div className=" col-lg-12"  id="col-pad">
                            <img src="assets/images/index/hue000.jpg"  alt='xxx'  width="100%"/>
                            
                            </div>
                       
                            <button type="button" class="btn btn-outline-warning ">
                                    BANTOU KNOTS 
                            </button>
                    </Link>
                    </div>

                    <div className="col-lg-4 col-md-8 mb-5 mb-lg-0 mx-auto">
                    <Link to="/womenBraids"  className="after-loop-item card border-0 card-themes shadow-lg btn " >
                            <div className=" col-lg-12"  id="col-pad">
                                <img src="assets/images/index/hue55.jpg"  alt='xxx'  width="100%" />
                            
                            </div>

                            <button type="button" class="btn btn-outline-warning  ">
                                    HALO BRAIDS
                            </button>
                            
                        
                        </Link>
                    </div>
                </div>
                </div>
            </section>

            
        </div>
        )
    }
}
