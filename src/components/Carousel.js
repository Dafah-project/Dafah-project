import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

export default class Slideshow extends Component {

    render() {
        return(
          <div>                
          <Carousel>
          <Carousel.Item interval={2000}>
              <img
              className="d-block w-100 img-responsive"
              src="https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/20-11-2019_UNICEF-I212395_childrens-day.jpg/image1170x530cropped.jpg"
              alt="First slide"
              width="100%" height="700"
              />
                <div className = "carousel-caption" style = {{padding:"10rem"}}>
                    <h1>DAFAH</h1>
                    <p className = "lead" style = {{backgroundColor: "grey darken-4", opacity: "70%"}}>"You give but little when you give of your possessions.
                    It is when you give of yourself that you truly give."</p>
                    <br />
                    <p className = "lead">-Khalil Jubran</p>
                    <div className = "btn btn-primary">Add Item Here</div>
                </div>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
              <img
              className="d-block w-100 img-responsive"
              src="https://www.unicef.org/syria/sites/unicef.org.syria/files/styles/hero_desktop/public/032.jpg?itok=ydXo-Suy"
              alt="Third slide"
              width="100%" height="700"
              />
              <div className = "carousel-caption text white bg-dark" style = {{padding:"20rem", opacity:"70%", fontFamily: "Century Gothic"}}>
                  <p className = "lead" style = {{fontSize: "100px", color: "white", opacity: "100%"}}>DAFAH</p>
                  <p className = "lead">"You give but little when you give of your possessions.
                  It is when you give of yourself that you truly give."</p>
                  <br />
                  <p className = "lead">-Khalil Jubran</p>
                  <button type="button" className="btn btn-primary btn-lg btn-block" onClick = {() => {window.location = "/AddItems"}}>Add Item</button>

              </div>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
              <img
              className="d-block w-100 img-responsive"
              src="https://www.unicef.org/syria/sites/unicef.org.syria/files/styles/media_banner/public/UNICEF_2019_27-Mar_Idlib_North-UNICEF-tents-school-in-ALAmal-camp_Ahmad-AlAhmad_GR0B4683_wide.jpg?itok=NvTOLSdO"
              alt="Third slide"
              width="100%" height="700"
              />
              <div className = "carousel-caption" style = {{padding:"10rem", backgroundColor: "grey darken-4", opacity: "70%"}}>
                  <h1>DAFAH</h1>
                  <p className = "lead">"You give but little when you give of your possessions.
                  It is when you give of yourself that you truly give."</p>
                  <br />
                  <p className = "lead">-Khalil Jubran</p>
                  <div className = "btn btn-primary">Add Item</div>
              </div>            
          </Carousel.Item>
        </Carousel>
        </div>
        )
    }
}

// {/* <div className= "jumbotron">
// <h1 className= "display-4">Hello, world!</h1>
// <p className ="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
// <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
// <p className="lead"> Hello there
// </p>
// </div> */}