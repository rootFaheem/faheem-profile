import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import Landing from  './components/Landing/Landing';

class App extends Component {
  render() {
    return (
      <div>  
        <Toolbar />
        <main style={{marginTop: "56px"}}>
          <Landing/>
        </main>
        
      </div>
    );
  }
}

export default App;
