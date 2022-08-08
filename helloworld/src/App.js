//pulling from react api, we need export default, exporting whatever component we create, so that we can use it outside this file
//JSX, javascript xml
//JSX is a way to write html code in javascript
  //xml: extensible markup language, you can store/transmit/reuse data, doesn't do anything by itself, you need an xml formatter, need to put it into something
import React, { Component } from 'react'

//import Header component into parent component, this app.js
//import ANY component you create
import Header from './components/Header'

import Main from './components/Main'

import Footer from './components/Footer'

//we don't wanna use this for all of our code, it wouldn't be efficient, we wanna isolate different pieces of code
export default class App extends Component {
  helloThere(name){
    //must put parenthesis before html code
    return (
      <div>
        <h2>Why hello there, {name}. You like jazz?</h2>
      </div>
    )
  }
  //render is a method of the App class
  //where we're gonna enter our code
  render() {
    // let name = 'Stormy';
    return (
      //can look just like html
      //JSX
      // <h1>Hello, world! Welcome, {name}!</h1>
      // this.helloThere('Storm')
      <>
        <Header/>
        <Main/>
        {this.helloThere('Storm')}
        <Footer year={'2022'}/>
      </>
    )
  }
}

//props is shorthand for properties, you can change things dynamically with it
//set the key/value pair, then do, for our example: the year in our footer is able to be changed, in the app document, the key is 'year' and the value is '2022', in our Footer.js, instead of typing out the year, i have {this.props.year} 
//i can edit the year in app.js and it'll update automatically
