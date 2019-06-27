import React from 'react';
//import logo from './logo.svg';
import './App.css';
import './default.css';


import { Switch, Route } from 'react-router-dom';

import HeaderSection from './component/contentTemp/HeaderSection';

import FooterSection from './component/contentTemp/FooterSection';
import Home from './component/BodyContent/Home';
import Default from './component/BodyContent/Default'
import Contact from './component/BodyContent/contact'
import WomenBraids from './component/BodyContent/HairStyles/WomenBraids'
import KidsBraids from './component/BodyContent/HairStyles/KidsBraids'
import MensBraids from './component/BodyContent/HairStyles/MensBraids'
import Locs from './component/BodyContent/HairStyles/Locs'
import Services from './component/BodyContent/Services'
import AboutUs from './component/BodyContent/AboutUs'


function App() {
  return (
    <div className="App">
      <div className="header-top-text">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <div className="header-top-text-content">
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    

    <React.Fragment>
        <HeaderSection/>

       {/** <BodySection/> */} 

        <Switch>
            <Route  exact path="/"  component={Home} />
            <Route  exact path="/womenBraids"  component={WomenBraids} />
            <Route  exact path="/kidsBraids" component={KidsBraids}/>
            <Route  exact path="/mensBraids" component={MensBraids}/>
            <Route  exact path="/locs" component={Locs}/>
            <Route  exact path="/contact"  component={Contact} />
            <Route  exact path="/services"  component={Services} />
            <Route  exact path="/aboutUs"  component={AboutUs} />
            <Route  component={Default} />
          </Switch>

        
        <FooterSection/> 
          
    </React.Fragment>


    
    </div>
  );
}

export default App;
