import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import placeholder from '..//assets/placeholder.png';


export default class CarouselComponent extends React.Component {


    constructor(){
      super();

    }
    render(){
      return(

        <ReactBootstrap.Carousel>
            <ReactBootstrap.Carousel.Item>
              <img width={900} height={500} alt="900x500" src={placeholder}/>
              <ReactBootstrap.Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </ReactBootstrap.Carousel.Caption>
            </ReactBootstrap.Carousel.Item>
            <ReactBootstrap.Carousel.Item>
              <img width={900} height={500} alt="900x500" src={placeholder}/>
              <ReactBootstrap.Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </ReactBootstrap.Carousel.Caption>
            </ReactBootstrap.Carousel.Item>
            <ReactBootstrap.Carousel.Item>
              <img width={900} height={500} alt="900x500" src={placeholder}/>
              <ReactBootstrap.Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </ReactBootstrap.Carousel.Caption>
            </ReactBootstrap.Carousel.Item>
          </ReactBootstrap.Carousel>
      );
    }


}
