import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import logo from './logo.svg';
import * as ReactBootstrap from 'react-bootstrap';
//require('./App.scss');
import SectionHead from './components/SectionHead';
import CarouselComponent from './components/CarouselComponent';
import SkillsSection from './components/SkillsSection';

const fillerText =  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet mi at placerat placerat. Donec ut est at nisl dapibus consequat ut nec turpis. Vivamus pulvinar nisi a leo ultricies aliquam. Nulla imperdiet ut nulla vitae cursus. Morbi risus est, viverra tempor nibh ac, porta pellentesque leo. Duis consectetur mi ac nisi porta laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi vehicula pretium justo, eget malesuada turpis ullamcorper a.';

class App extends Component {


  render() {
    return (
      <div className="mainContent">
      <NavBar />
      <section>
          <h1>
            Company Tagline Here
          </h1>
          <h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut quam eros. In hac habitasse platea dictumst.
          </h6>
      </section>
      <section>
          <SectionHead title={"About Us"} />
            <ReactBootstrap.Col xs={12} sm={4}>

             <AboutColumn title="Design Focused" content={fillerText} />
            </ReactBootstrap.Col>
            <ReactBootstrap.Col xs={12} sm={4} >
              <AboutColumn title="Data Driven" content={fillerText} />
            </ReactBootstrap.Col>
            <ReactBootstrap.Col xs={12} sm={4} >
              <AboutColumn title="User Foxused" content={fillerText} />
            </ReactBootstrap.Col>
      </section>
      <section>
          <SectionHead title={"Services"} />
          <ReactBootstrap.Col xs={12} sm ={12}>
              <CarouselComponent />
          </ReactBootstrap.Col>

      </section>
      <section>
          <SectionHead title={"Skills"} />
          <SkillsSection />
      </section>
      <section>
          <SectionHead title={"Contact Us"} />
          <form>

            <input type="text" name="firstname" placeholder="First Name Last Name" /><br/>
            <input type="text" name="email" placeholder="Email" /><br/>
            <input type="text" name="subject" placeholder="Subject" /><br/>
            <input type="textbox" name="emailbody" placeholder="Message" /><br/>
            <input type="submit" value="Send Message"/>



          </form>

      </section>
      </div>

    );
  }
}

function AboutColumn(props){

  return(
        <div>

            <h3>{props.title}</h3>

            {props.content}

        </div>)

}

// Navbar?
function NavBar(props){
  return(<div className="persistentNav">
              <a>Arca Consulting</a>
              <a href="#home">Home</a>
              <a href="#aboutus">About Us</a>
              <a href="#services">Services</a>
              <a href="#skills">Skills</a>
              <a href="#contactus">Contact Us</a>

          </div>);

}


export default App;
