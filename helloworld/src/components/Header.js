//best practice to capitalize all component files
import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <>
        <header>
            <nav>
                <a href='#'>Home</a>
                <a href='#'>About</a>
                <a href='#'>Contact</a>
            </nav>
        </header>

      </>
    )
  }
}
