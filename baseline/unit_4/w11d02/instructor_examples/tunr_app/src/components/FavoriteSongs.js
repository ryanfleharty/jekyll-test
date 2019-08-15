import React, { Component } from 'react';

class FavoriteSongs extends Component {
  render () {
    return (
      <table>
        <thead>
          <tr>
            <th>Song</th>
            <th>Arist</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          { this.props.songs.map((song, index)=> {
            return (
              <tr key={index}>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.time}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

export default FavoriteSongs;
