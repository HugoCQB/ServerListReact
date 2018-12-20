import React, {Component} from 'react';
import Servers from "./components/Servers";
import Ajouter from "./components/ajouter";
import FloatingButton from "./components/floatingbutton"
import TButton from "./components/teste"


class App extends Component{
  render() {
      return (<div className="Container">
      <Servers/>
        <FloatingButton/>
      </div>)
  }
}

export default App;
