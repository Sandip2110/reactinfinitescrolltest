import React from "react";


export default class Title2 extends React.Component {
  render() {

    var names=this.props.listOfAddedItems;
    var namesList = names.map(function(name){
      return <li>{name}</li>;
    });

    return (
      <ul>
        {namesList}
      </ul>
        
        
    );
  }
}
