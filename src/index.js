// Code React 

/**  Author Massinissa  */

// alert ('salut je suis sur le serveur 3000')

import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

var url = 'https://paris.demo.netdevices.fr/data'
class App extends React.Component {

    constructor(propos) {
        super(propos)
        this.state = {}
    }
    // recuperation de la liste des items  
    componentDidMount() {
        fetch(url)
            .then(d => d.json())
            .then(d => {
                this.setState({
                    datanetdevice: d
                })
            })
    }

    // redirection vers la page detail des items
    test = event => {
        url = ('https://paris.demo.netdevices.fr/details?id=' + event)
        this.componentDidMount();
    };

    test2 = event => {
        url = ('https://paris.demo.netdevices.fr/data')
        this.componentDidMount();
    };
     
    render() {
        
        if (!this.state.datanetdevice) return <p> Chargement des items... </p>
        else {

        if (url === "https://paris.demo.netdevices.fr/data") {
         
            // iteration sur le tableau récupérer afin d'éviter la repetition et pouvoir 
            // ajouter des données à l'url du site
            let Netdata = this.state.datanetdevice
            let Netdatatitle = Netdata.map(item => <button onClick={e => this.test(item.id)}> {item.title}</button>)

            return (
                <div>
                    <span > Liste des élements : </span> 
                     {Netdatatitle}
                </div>
            )
        }

        // Détail d'un item
        else return (

            <div>
                <span> Détail de l'élement : </span>
                <p>   Mon numéro d'id est :  {this.state.datanetdevice.id}       </p>
                <p>   Ma discription est :  {this.state.datanetdevice.description}       </p>
                <button onClick={e => this.test2()}> Retour </button>
            </div>
        )
      }
    }

}


ReactDom.render(
    <App />,
    document.getElementById('root')
);

