import React from "react";


export default class SectionHead extends React.Component {


    constructor(){
      super();
      this.title = "Default";
    }
    render(){
      return(
        <div className="sectionHead">
          <h2>{this.props.title}</h2>
        </div>
      );
    }


}
