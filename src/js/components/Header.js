import React from "react";

import Title from "./Header/Title";
import Title1 from "./Header/Title1";
import Title2 from "./Header/Title2";
import chart from "chart.js";

export default class Header extends React.Component {

   constructor() {
    super();
      this.state = {
      name:"Hello World" , 
      arr:[] 
    }
   }
  changed (e){
    var newName= e.target.value;
    this.setState({
      name:newName
    });
  }

  addValue(){
    var oldArray=this.state.arr;
    oldArray.push(this.state.name);
    this.setState({
      arr:oldArray,
      name:""
    })
  }
  
remove(elementIndex){
  var cuttedOutElement = this.state.arr.splice(elementIndex, 1);

  this.setState({
    arr:this.state.arr,
    name:""
  })
}


  render() {
    var names=this.state.arr;
    var namesList = names.map(function(name, index){
      return <li key={index}>{name} <button onClick={this.remove.bind(this, index)}> Remove </button></li>;
    }.bind(this));
    
    var myLineChart = new Chart(ctx, {
      type: 'line',
      data: [20,40,10],
      
    });

    



    return (
      <div> 
        <input value={this.state.name} onChange={this.changed.bind(this)} />
        <button onClick={this.addValue.bind(this)}>Add</button>
        <ul>
          {namesList}
        </ul>
        <br> {myLineChart}</br>

      </div>
    );
  }
}
