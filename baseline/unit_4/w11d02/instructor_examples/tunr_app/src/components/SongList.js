import React, {Component} from 'react';
import Song from './Song.js'

class SongList extends Component {
  render () {
    return (
      <div className='playlist'>
        <h3>{this.props.playlists.title}</h3>
      <table>
        <thead>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
        {this.props.playlists.songs.map((song, index) => {
          return (
            <Song
              song={song}
              key={index}
              index={index}
              handleAdd={this.props.handleAdd}
            />
          )
        })}

        </tbody>
      </table>
      </div>
    )}

}

export default SongList;
