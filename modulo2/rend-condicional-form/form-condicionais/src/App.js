import React, { Component } from 'react';
import './App.css';
import Etapa1 from './components/etapa1';
import Etapa2 from './components/etapa2';
import EtapaFinal from './components/etapafinal';
import Etapa3 from './components/etapa3';

class App extends Component {
  state = {
    etapa : 1,
  }

  proximaEtapa = ()=>{
    this.setState({etapa: this.state.etapa+1})
  }
  renderizaEtapa = ()=>{
    switch (this.state.etapa) {
      case 1:
        return <Etapa1/>
        break;
      case 2:
        return  <Etapa2/>
        break;
      case 3:
        return  <Etapa3/>
        break;
      case 4:
        return  <EtapaFinal/>
        break;
      default:
        
    }
    
  }
 


  render() {
    
    return (
      <div className="App">
       {this.renderizaEtapa()}
       {this.state.etapa < 4 ?  <button onClick={this.proximaEtapa}>proxima etapa</button> : "" }
      </div>
    );
  }
}

export default App;
