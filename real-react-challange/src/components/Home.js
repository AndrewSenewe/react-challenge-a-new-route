import axios from 'axios'
import React, { Component } from 'react';

import logo from '../logo.svg';

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      api: {}
    }
  }


  componentDidMount() {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=zkv4qNkn6r5RFoxMdNSNjBUX4zSVvl1TgifvRZd5')
    .then(response => {
      this.setState({api: response.data})
      console.log(this.state.api);
    })
  }

  hasilApi() {
    let data = this.state.api
    return (
      <div>
        <a target="_blank" href={data.hdurl}>
          <img src={data.hdurl} alt="Fjords" width="1080" height="720" />
        </a>
        <div className="desc">{data.explanation}</div>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <h2>NASA Photo of the day</h2>
        {
         this.state.api ? this.hasilApi() : <img src={logo} className="App-logo" alt="logo" />
        }

      </div>
    );
  }
}