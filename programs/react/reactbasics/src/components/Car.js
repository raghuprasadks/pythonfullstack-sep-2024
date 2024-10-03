import React, { Component } from 'react'

export default class Car extends Component {
    constructor(props){
        super(props)
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964
          };
    }

    changeColor = () => {
        console.log("change color ")
        this.setState({color: "blue"});
      }

  render() {
    return (
      <div>
        <h1>Car</h1>
        
        <p>My Car info : brand {this.state.brand} - model : {this.state.model} - color : {this.state.color}</p>
        <button type="button" onClick={this.changeColor}>Update</button>
    </div>
    )
  }
}
