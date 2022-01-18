import React  from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import WebMobileServices from './components/WebMobileServices'
import ScrollToTop from './components/ScrollToTop'
import ContactUs from './components/ContactUs'
import CaseStudies from './components/CaseStudies'
import DataopsServices from './components/DataopsServices'
import DevopsServices from './components/DevopsServices'
import IndustriesWeWork from './components/IndustriesWeWork'
import OurBlog from './components/OurBlog'
import PredictiveAnalytics from './components/PredictiveAnalytics'
import OcrHyperAutomation from './components/OcrHyperAutomation'
import MobilityData from './components/MobilityData'
import AboutUs from './components/AboutUs'
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import CloudServices from './components/CloudServices'
import Careers from './components/Careers'
import CareerDesApp from './components/Jobdescriptions'
import ApplyAppProfile from './components/applyformjob'


// import './styles/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/typography.css'; 
import './styles/vizion-style.css';
import './styles/responsive.css';
import CookieConsent from "react-cookie-consent";

// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js';
import ReactDOM from 'react-dom';
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

function App() {
  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/602f4efa918aa26127406482/1euscp130';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();

  return (
    <Router basename ="/">
        <ScrollToTop />
          <Header></Header>
          
          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/web-mobile-services" component={WebMobileServices} />
          <Route path="/contact-us" component={ContactUs} /> 
          <Route path="/case-studies" component={CaseStudies} /> 
          <Route path="/dataops-services" component={DataopsServices} /> 
          <Route path="/devops-services" component={DevopsServices} /> 
          <Route path="/cloud-services" component={CloudServices} /> 
          <Route path="/industries-we-work" component={IndustriesWeWork} /> 
          <Route path="/our-blog" component={OurBlog} /> 
          <Route path="/predictive-analytics" component={PredictiveAnalytics} /> 
          <Route path="/ocr-hyperautomation" component={OcrHyperAutomation} /> 
          <Route path="/mobility-data" component={MobilityData} /> 
          <Route path="/about-us" component={AboutUs} /> 
          <Route exact path="/careers" component={Careers} />
          <Route exact path="/apply/:id" component={ApplyAppProfile} />



          
          <Route
              exact
              path="/job-desc/:id"
              component={CareerDesApp}
            /> 
          
          </Switch>
          <CookieConsent
              style	={{ width:"50%", left:"25%", bottom:"10px" }}
              location="bottom"
              buttonText="I Understand"
              cookieName="myAwesomeCookieName2"
              buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
              expires={150}

            >
            This website uses our own and third-party cookies to enhance your user experience and our services. 
          </CookieConsent>
        <Footer></Footer>
      </Router>
  );
}

// ReactDOM.render(<Data_1/>, document.querySelector('root'));

export default App;
