import React, { Component } from 'react'

export default class Main extends Component {
  render() {
    let person = {
        name: 'Stormy',
        age: 25,
        eyeColor: 'brown',
    }
    return (
        <h1>Hi! My name is {person.name}. I'm {person.age} years old, and I have {person.eyeColor} eyes.</h1>
    )
  }
}
