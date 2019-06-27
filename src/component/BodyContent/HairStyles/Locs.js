import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MensBraidVideo from '../video/MensBraidVideo'

export default class Locs extends Component {
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
                                        <li className="breadcrumb-item active" aria-current="page">Locs</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <MensBraidVideo/>

        <div id="wrapper-no-padding-white">		
                <div className="container-fluid" id="add-padding">
                        <div className="col-md-6 col-lg-12">
                                <div className= "section-title section-title--3 align-items-center-align mb-0" >
                                    <h2>Locs Styles Gallery</h2>
                                </div>
                        </div>	
                
                        <div className="row">				
                            
                        
                            <div className="col-lg-6" id="col-pad">
                            
                                <div className="locs-a">
                                    <group>	
                                    <h2 className="Image-Title">{""}</h2>
                                    <p className="Image-Caption"></p>						
                                    </group>
                                </div>
                                
                            </div>
                            
                        
                        
                            <div className="col-lg-6" id="col-pad">	
                            
                                <div className="locs-b">
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
    );
  }
}
