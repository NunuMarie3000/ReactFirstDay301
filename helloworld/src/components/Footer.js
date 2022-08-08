import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <h4>&copy; Stormy Weather Creations, {this.props.year}</h4>
    )
  }
}
