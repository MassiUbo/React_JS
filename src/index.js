// Code React 

/**  Author Massinissa  */

// alert ('salut je suis sur le serveur 3000')

import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import Request from 'react-http-request';

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
        // affichage resultat recus
        console.log(this.state.datanetdevice)

        if (!this.state.datanetdevice) return <p>Chargement des items...</p>
        if (url === "https://paris.demo.netdevices.fr/data") {

            // iteration sur le tableau afin d'éviter la repetition et pouvoir 
            // Ajout des données à l'url du site va pas affecter le code
            let Netdata = this.state.datanetdevice
            let Netdatatitle = Netdata.map(item =><li> {item.title}</li>)
            let Netdatatid= Netdata.map(item2 => item2.id)

            return (
                <div>
                    <span > Liste des élements : </span>
              

                    <button onClick={e => this.test(this.state.datanetdevice[0].id)} > {this.state.datanetdevice[0].title}  </button>
                    <br></br>
                    <button onClick={e => this.test(this.state.datanetdevice[1].id)}> {this.state.datanetdevice[1].title}</button>
                    <br></br>
                    <button onClick={e => this.test(this.state.datanetdevice[2].id)}> {this.state.datanetdevice[2].title}</button>
                    <br></br>
                    <button onClick={e => this.test(this.state.datanetdevice[3].id)}> {this.state.datanetdevice[1].title}</button>
                    
                    
                    <ul onClick={e => this.test({Netdatatid})}> {Netdatatitle} </ul>
                 
                    
                </div>
            )
        }
        else return (
            <div>
                <p> Details :   !! </p>
                <p>   Mon numéro d'id est :  {this.state.datanetdevice.id}       </p>
                <p>   Ma discription est :  {this.state.datanetdevice.description}       </p>
                <button onClick={e => this.test2()}> retour </button>
            </div>
        )
    }
}


ReactDom.render(
    <App />,
    document.getElementById('root')
);

