import React, { Component } from 'react';
import MovieInfo from './component/MovieInfo.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      baseUrl: 'http://www.omdbapi.com/?',
      apikey: 'apikey=98e3fb1f',
      query: '&t=',
      movieTitle: '',
      searchUrl: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (event) {
    this.setState({[event.target.id]: event.target.value})
  }
  handleSubmit (event) {
    event.preventDefault()
    this.setState({
      searchUrl: this.state.baseUrl + this.state.apikey + this.state.query + this.state.movieTitle
    }, () => {
      // fetch request
      fetch(this.state.searchUrl)
        .then(response => response.json())
        .then(json => this.setState({
          movie: json,
          movieTitle: ''
        })
        , err => console.error(err))
      })
  }
  render() {
    return (
      <>
        <h3>Find a movie</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='movieTitle'>Title</label>
          <input
            id='movieTitle'
            type='text'
            value={this.state.movieTitle}
            onChange={this.handleChange}
          />
          <input type='submit' value='Find movie info'/>
        </form>
        {this.state.movie ? <MovieInfo movie={this.state.movie} /> : ''}
      </>
    );
  }
}

export default App;
