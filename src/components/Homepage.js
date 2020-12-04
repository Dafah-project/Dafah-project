import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Cards from './Cards';
export default class HomepageNew extends Component {
    render() {
        return(
          // Jumbotron
          <div>
          <div className= "jumbotron vertical-center text-center text-white" style = {{backgroundColor:"#E65100", opacity: "90%", height: "200px", backgroundPosition: "left center"}}>
            <div>
            <p  className = "vertical-center" style = {{ fontSize: "32px" ,letterSpacing: "10px" }}>DAFAH</p>
            <p className ="lead" style = {{ fontSize: "16px" ,fontStyle: "italic", letterSpacing: "2px" }}>"You give but little when you give of your possessions. It is when you give of yourself that you truly give.</p>
            <p className="lead" style = {{ fontSize: "12px" ,letterSpacing: "2px" }}> -Khalil Jubran </p>
            </div>
          </div>
          {/* Carousel */} 
          <Carousel style = {{alignItems: "center", height: "500px", position: "relative"}}>
          <Carousel.Item interval={2000}>
              <img
              className="d-block w-100 img-responsive"
              src="https://www.qrf.org/sites/default/files/styles/teaser_wide/public/2019-05/get-involved.jpg?itok=BULI2uFv"
              alt="First slide"
              // style = {{position: "absolute"}}
              // width="300" height="700"
              />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
              <img
              className="d-block w-100 img-responsive"
              src="https://www.unicef.org/syria/sites/unicef.org.syria/files/styles/hero_desktop/public/032.jpg?itok=ydXo-Suyhttps://roomtoread.blob.core.windows.net/cache-v8/3/4/a/8/0/c/34a80c07911f88e426c21b04cf4bd154da834827.jpg"
              alt="Third slide"
              // width="100%" height="700"
              />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
              <img
              className="d-block w-100 img-responsive"
              src="https://www.altamane.org/wp-content/uploads/2017/12/egypt_child-protection-system_jean-luc-marchina_2015_Print_165028-1.jpg"
              alt="Third slide"
              // width="100%" height="700"
              />         
          </Carousel.Item>
        </Carousel>
        <br/>
        <br/>
        <br/>
        
       
        
    
        </div>
        )
    }
}