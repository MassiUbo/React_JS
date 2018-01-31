// Code React 

/**  Author Massinissa  */

// alert ('salut je suis sur le serveur 3000')

import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import Request from 'react-http-request';

const url = 'https://paris.demo.netdevices.fr/data'
class App extends React.Component {
    
    constructor(propos) {
        super(propos)
        this.state= {}
    }
// recuperation de la liste des items  
componentDidMount(){
      fetch(url)
      .then( d => d.json())
      .then(d=>{
          this.setState({
              datanetdevice:d
          })
      })
  }

  // redirection vers la page detail des items
  test = event => {
      
    window.open('https://paris.demo.netdevices.fr/details?id='+event)
      
  };

    render()
{ 
    // affichage resultat recus
    console.log(this.state.datanetdevice)

  if (!this.state.datanetdevice) return <p>Chargement des items...</p>
    return (
<div> 
          <span > Liste des élements : </span>
          <button onClick={e => this.test(this.state.datanetdevice[0].id)} > {this.state.datanetdevice[0].title}  </button>
          <br></br>
          <button  onClick={e => this.test(this.state.datanetdevice[1].id)}> {this.state.datanetdevice[1].title}</button>
          <br></br>
          <button  onClick={e => this.test(this.state.datanetdevice[2].id)}> {this.state.datanetdevice[2].title}</button>
          <br></br>
          <button onClick={ e => this.test(this.state.datanetdevice[3].id)}> {this.state.datanetdevice[1].title}</button>     
</div>      
    )
}
}


ReactDom.render (
    <App />, 
    document.getElementById('root')
);