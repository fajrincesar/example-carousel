import React, { Component } from 'react';
import Header from './penting/Header';
import Carousel from './penting/Carousel';
import Content from './penting/Content';
import Footer from './penting/Footer';

class App extends Component {
  render() {
    return(
      <div>
        <Header />
        <Carousel />
        <Content />
        <Footer /> 
      </div>
    );
  }
}

export default App;
