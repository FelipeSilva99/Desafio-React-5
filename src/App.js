import React, { Component } from 'react';
import './App.css';

class App extends Component{
  state = {
    info: 'Poetas Brasileiros',
    autores:['Fernando Pessoa','Machado de Assis','Clarice Lispector','Jorge Amado','Chico Buarque','Cecília Meireles']
  }
  
  render(){
    return(
      <div className="App">
      {this.state.autores.map((item)=>(
        <h2>{item}</h2>
      ))}
    </div>
  );
  }
}

export default App;
