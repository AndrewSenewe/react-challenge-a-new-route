import axios from 'axios'
import React, { Component } from 'react';

import logo from '../logo.svg';

class Search extends Component {
  constructor() {
    super()
    this.state = {
      api: {}
    }
  }


  componentDidMount() {
    axios.get('https://images-api.nasa.gov/search?q='+this.state.query)
    .then(response => {
      this.setState({api: response.data})
      console.log(this.state.api);
    })
  }

  hasilApi() {
    return this.state.api.photos.map(mars => {
      return (
        <div key={mars.id}>
          <a target="_blank" href={mars.img_src}>
            <img src={mars.img_src} alt="Fjords" width="1080" height="720" />
          </a>
        </div>
      )
    })

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="http://vector.me/files/images/1/3/13605/nasa.png" alt="logo" width="100" height="75" />
          <h2>Welcome to Mars Photo Exhibition </h2>
        </div>
        {
         this.state.api.photos ? this.hasilApi() : <img src={logo} className="App-logo" alt="logo" />

        }

      </div>
    );
  }
}