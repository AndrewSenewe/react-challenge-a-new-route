import axios from 'axios'
import React, { Component } from 'react';

import logo from '../logo.svg';

export default class Search extends Component {
  constructor() {
    super()
    this.state = {
      api: {},

    }
  }


  componentDidMount() {
    axios.get("https://images-api.nasa.gov/search?q="+ this.props.match.params.query)
    .then(response => {
      this.setState({api: response.data.collection})
      // console.log(this.state.api.items);
    })
  }

  hasilApi() {
    console.log(this.state.api.items);
    return this.state.api.items.map(mars => {
      var img = mars.links[0].href
      var data = mars.data[0]
      return (
        <div key={data.date_created}>
          <a target="_blank" href={img}>
            <img src={img} alt="Fjords" width="1080" height="720" />
          </a>
          <div className="desc">{data.explanation}</div>
          <br />
        </div>
      )
    })

  }

  render() {
    const data = this.props

    return (
      <div className="App">
        {
         this.state.api.items ? this.hasilApi(): <img src={logo} className="App-logo" alt="logo" />

        }

      </div>
    );
  }
}