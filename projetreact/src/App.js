import React, {Component} from 'react';
import Servers from "./Servers";
import Ajouter from "./ajouter";
import FloatingButton from "./floatingbutton"

class App extends Component{
  render() {
      return (<div className="Container">
      <Servers/>
        <FloatingButton/>
      </div>)
  }
}

export default App;
