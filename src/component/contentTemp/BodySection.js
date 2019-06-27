import React, { Component } from 'react'
//import YouTube from 'react-youtube';

export default class BodySection extends Component {
    render() {
        
        return (
            <div>
                {/** <!--== End Header Area ==--> */}
    {/** <!--== Start Hero Area ==--> */}
    {/** 
    <div class="video-bg-wrapper bg-img" data-bg="assets/img/slider/video-bg-thumb.jpg">
        <div class="video-bg player"  data-containment = "video-bg-wrapper" >
        
        <video  fluid ='true' width='100%' height= '80% !important'    
        src="assets/video/halo.mp4"  autoPlay loop muted data-containment = "video-bg-wrapper" />
                        
	
        </div>
        
        
    </div>
    */}

    <div id="wrapper-video">			  
				
		<video class="mfs-video" autoPlay loop muted>
			<source src="assets/video/halo.mp4" type="video/mp4"/>
		</video>
		
	</div>

    
    {/** <!--== End Hero Area ==--> */}
    {/** <!--== Start About Area ==--> */}


 
   {/**  <!--== End About Area ==--> */}


    <section class="after-loop">
        <div class="container col-12 ">
            <div class="col-md-6 col-lg-12">
                <div class= "section-title section-title--3 align-items-center-align mb-0" >
                <h2>Featured Hair Styles</h2>
                </div>
            </div>
        <div class="row">
            <div class="col-lg-4 col-md-8 mb-5 mb-lg-0 mx-auto">
                <a href="/themes/" class="after-loop-item card border-0 card-themes shadow-lg">
                     <div class=" col-lg-12"  id="col-pad">
                        
                        <img src="assets/images/index/hue3.jpg"  alt='xxx'   width="100%"/>
                        <i class="fal fa-paint-brush-alt"></i>
                    </div>
                </a>
            </div>
            <div class="col-lg-4 col-md-8 mb-5 mb-lg-0 mx-auto">
                <a href="/snippets/" class="after-loop-item card border-0 card-themes shadow-lg">
                    <div class=" col-lg-12"  id="col-pad">
                    <img src="assets/images/index/hue000.jpg"  alt='xxx'  width="100%"/>
                       
                    </div>
                </a>
            </div>
            <div class="col-lg-4 col-md-8 mx-auto">
                <a href="/guides/" class="after-loop-item card border-0 card-themes shadow-lg">
                   

                    <div class="col-lg-12" id="col-pad">
					 <img src="assets/images/index/hue55.jpg"  alt='xxx'  width="100%" />
					  
					</div>
                       
                   
                </a>
            </div>
        </div>
        </div>
</section>
    
                
            </div>
        )
    }
    
}
