import React from "react";


export default class Footer extends React.Component {
  constructor(){
    super();
    this.state = {
      customImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2000px-Unofficial_JavaScript_logo_2.svg.png"
    }
  }
  imageUrlChanged(event){
    var newValue = event.target.value;
    this.setState({
      customImageUrl: newValue
    });
    //this.state.customImageUrl = newValue;
  }
  render() {
    return (
      <footer>
        footer2 {this.props.titleaa}
        <input value={this.state.customImageUrl} onChange={this.imageUrlChanged.bind(this)} />
        <img src={this.state.customImageUrl} style={{width: "200px", height: "200px"}} />
      </footer>
    );
  }
}
