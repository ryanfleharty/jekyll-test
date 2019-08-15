import React, { Component } from 'react';
import playlists from './data.js';
import SongList from './components/SongList.js'
import FavoriteSongs from './components/FavoriteSongs.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      playlists: playlists,
      title: '',
      artist: '',
      time: '0:00',
      lovedSongs: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.addLovedSong = this.addLovedSong.bind(this)
  }
  addLovedSong(song) {
    this.setState({lovedSongs: [song, ...this.state.lovedSongs]})
  }
  handleChange(event) {
    this.setState({[event.target.id]: event.target.value})
  }
  handleSubmit(event){
    event.preventDefault()
    const newSong = {
      title: this.state.title,
      artist: this.state.artist,
      time: this.state.time
    }
    const newSongArray =  [newSong, ...this.state.playlists.songs]
    this.setState({
      playlists: {songs: newSongArray},
      title: '',
      artist: '',
      time: '0:00'
    })
  }
  render() {
    return (
      <div className='playlists'>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            value={this.state.title}
            id='title'
            onChange={this.handleChange}
          />
          <label htmlFor='artist'>Artist</label>
          <input
            type='text'
            value={this.state.artist}
            id='artist'
            onChange={this.handleChange}
          />
          <label htmlFor='time'>Time</label>
          <input
            type='text'
            value={this.state.time}
            id='time'
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
        <div>
          <h3>Preview</h3>
          <p>{this.state.title}</p>
          <p>{this.state.artist}</p>
          <p>{this.state.time}</p>
        </div>
        <SongList
          playlists={this.state.playlists}
          handleAdd={this.addLovedSong}
          />
        <FavoriteSongs songs={this.state.lovedSongs} />

      </div>
    );
  }
}

export default App;
