import React, { Component } from 'react';
// import Footer from './Footer';
import Slideshow from './Carousel';

export default class Homepage extends Component {
    render() {
        return(
            <div>  
            <Slideshow>
                    <h1 
                    className = "centered" 
                    style = {{position:"absolute", top:"50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                        Hello, I'm in the center!
                    </h1> 
                </Slideshow>
            </div>
        )
    }
}