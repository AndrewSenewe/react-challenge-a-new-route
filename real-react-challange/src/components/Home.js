import axios from 'axios'
import React, { Component } from 'react';

import logo from '../logo.svg';

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      api: {},
      query: ''
    }
  }

  componentDidMount() {
    axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=zkv4qNkn6r5RFoxMdNSNjBUX4zSVvl1TgifvRZd5')
    .then(response => {
      this.setState({api: response.data})
    })
  }


  searchQuery(event) {
    this.setState({query: event.target.value})
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
        <h2>Welcome to Mars Photo Exhibition </h2>
        {
          this.state.api.photos ? this.hasilApi() : <img src={logo} className="App-logo" alt="logo" />
        }
      </div>
    );
  }
}
