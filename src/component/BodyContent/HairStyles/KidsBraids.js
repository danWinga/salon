import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import KidsBraidVideo from '../../BodyContent/video/KidsBraidVideo'

export default class KidsBraids extends Component {
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
                                        <Link to="/hairStyle" >
                                            Hair Styles
                                        </Link>
                                            
                                                </li>
                                        <li className="breadcrumb-item active" aria-current="page">Kids's Braids</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <KidsBraidVideo/>

                <div id="wrapper-no-padding-white">		
                    <div className="container-fluid" id="add-padding">
						<div className="col-md-6 col-lg-12">
							<div className= "section-title section-title--3 align-items-center-align mb-0" >
							<h2>Kid's Braid Styles Gallery</h2>
                        </div>
                    </div>
                    
                            <div className="row">				
                            
                                <div className="col-lg-4" id="col-pad">							
                                    <div className="Kids-b">
                                        <group>
                                        <h2 className="Image-Title">{""}</h2>
                                        <p className="Image-Caption"></p>
                                        </group>
                                    </div>							
                                </div>		
                                
                                <div className="col-lg-4" id="col-pad">								
                                    <div className="Kids-c">
                                        <group>
                                        <h2 className="Image-Title">{""}</h2>
                                        <p className="Image-Caption"></p>
                                        </group>
                                    </div>							
                                </div>					
                                            
                                
                                <div className="col-lg-4" id="col-pad">							
                                    <div className="Kids-a">
                                        <group>	
                                        <h2 className="Image-Title">{""}</h2>
                                        <p className="Image-Caption"></p>
                                        </group>
                                    </div>							
					</div>
												
				 
				</div>
				

		
				

		
				<div className="row">				
	
					<div className="col-lg-6" id="col-pad">					
						<div className="Kids-d">
							<group>
							<h2 className="Image-Title">{""}</h2>
							<p className="Image-Caption"></p>
							</group>
						</div>						
					</div>
									
					<div className="col-lg-6" id="col-pad">					
						<div className="Kids-e">
							<group>
							<h2 className="Image-Title">{""}</h2>
							<p className="Image-Caption"></p>
							</group>
						</div>						
					</div>				
				 
				</div>

		</div>
	</div>

            </div>
        )
    }
}
