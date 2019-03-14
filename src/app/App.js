import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import List from './List'



class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Header />
          <List />
        </div>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
