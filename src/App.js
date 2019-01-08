import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';

class App extends Component {
  render() {
    return (
      <div>  
        <Toolbar />
        <main style={{marginTop: "56px"}}>
          <p>This is main content</p>
        </main>
        
      </div>
    );
  }
}

export default App;
