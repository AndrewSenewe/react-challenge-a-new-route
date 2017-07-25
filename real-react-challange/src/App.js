import axios from 'axios'
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

import './App.css';
import logo from './logo.svg';
import Mars from './components/Mars';
import Search from './components/Search';
import Home from './components/Home';

class App extends Component {
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
      console.log(this.state.api);
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
      <Router>
        <div>
          <div className="App">
            <div>
              <input type="text" name="search" placeholder="Search.." onChange={(event) => this.searchQuery(event)} />
              <Link to={"/search/"+this.state.query.split(' ').join('_')}><button>search</button></Link>
            </div>
            <div className="App-header">
              <img src="http://vector.me/files/images/1/3/13605/nasa.png" alt="logo" width="100" height="75" />
            </div>
          </div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/mars" component={Mars}/>
          <Route path="/search/:query" component={Search}/>
        </div>
      </Router>
    );
  }
}

export default App;
