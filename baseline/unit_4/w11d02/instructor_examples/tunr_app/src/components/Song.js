import React, { Component } from 'react';

class Song extends Component {
  constructor (props) {
    super(props)
    this.state = {
      love: false
    }
    this.toggleLove = this.toggleLove.bind(this)
  }
  toggleLove () {
    this.setState({love: !this.state.love})
  }
  render () {
    return (
      <tr key={this.props.index}>
        <td onClick={this.toggleLove}>{this.props.song.title}</td>
        <td>{this.props.song.artist}</td>
        <td>{this.props.song.time}</td>
        {this.state.love ? <td
          onClick={()=> this.props.handleAdd(this.props.song)}>&hearts;</td> : <td></td>}
      </tr>
    )
  }
}

export default Song;
