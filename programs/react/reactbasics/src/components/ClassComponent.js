import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(){
        super()
        this.state ={color:'red'}
        //console.log("constructor")
    }
  render() {
    return (
      <div>
        <h1>ClassComponent</h1>
        <h2>Color : {this.state.color}</h2>
        </div>
    )
  }
}
