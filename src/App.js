import React, { Component } from 'react';
import Cronometro from './Componentes/cronometro/'
//https:sujeitoprogramador.com/rn-api/?api=post

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      nutri: []
    }
  }

  componentDidMount(){

    let url = 'https:sujeitoprogramador.com/rn-api/?api=posts'
    fetch('url')
    .then((r)=> r.json())
    .then((json)=>{
      let state = this.state
      state.nutri = json
      this.setState(state)
      console.log(json)
    })
  }



  render() {
    return (
      <div>
        <Cronometro/>
      </div>
    )
  }
}
export default App;
