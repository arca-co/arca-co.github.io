import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';


export default class SkillsSection extends React.Component {


    constructor(){
      super();

    }
    render(){
      return(
        <div>
        <ReactBootstrap.Col xs={12} sm ={4}>
          <ReactBootstrap.Accordion>
            <ReactBootstrap.Panel header="Collapsible Group Item #1" eventKey="1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut quam eros. In hac habitasse platea dictumst.

            </ReactBootstrap.Panel>
            <ReactBootstrap.Panel header="Collapsible Group Item #4" eventKey="2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut quam eros. In hac habitasse platea dictumst.

            </ReactBootstrap.Panel>
            </ReactBootstrap.Accordion>
        </ReactBootstrap.Col>
        <ReactBootstrap.Col xs={12} sm ={4}>
          <ReactBootstrap.Accordion>
            <ReactBootstrap.Panel header="Collapsible Group Item #2" eventKey="1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut quam eros. In hac habitasse platea dictumst.

            </ReactBootstrap.Panel>
            <ReactBootstrap.Panel header="Collapsible Group Item #5" eventKey="2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut quam eros. In hac habitasse platea dictumst.

            </ReactBootstrap.Panel>
            </ReactBootstrap.Accordion>
        </ReactBootstrap.Col>
        <ReactBootstrap.Col xs={12} sm ={4}>
          <ReactBootstrap.Accordion>
            <ReactBootstrap.Panel header="Collapsible Group Item #3" eventKey="1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut quam eros. In hac habitasse platea dictumst.

            </ReactBootstrap.Panel>
            <ReactBootstrap.Panel header="Collapsible Group Item #6" eventKey="2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut quam eros. In hac habitasse platea dictumst.

            </ReactBootstrap.Panel>
            </ReactBootstrap.Accordion>
        </ReactBootstrap.Col>
        </div>
      );
    }


}
