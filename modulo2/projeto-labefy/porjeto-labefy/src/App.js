import React from 'react';
import { CreatList } from './Components/CreatList';

export class App extends React.Component {
  state = {
    paginas: "home"
  }
  render(){

    return(
      <div className="App">
      <h1>ola mundo</h1>
      <CreatList/>
      </div>
    )
  }  
}
  
   


