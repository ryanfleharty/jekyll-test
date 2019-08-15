import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task_item: '',
      completed: false
    }
  }

  // handle change
  handleChange = (e) => {
    this.setState({ task_item: e.target.value })
  }

  // handle submit
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleCreateTask(this.state)
    this.clearForm()
  }

  // clear the form
  clearForm = () => {
    this.setState({ task_item: '' })
  }

  render() {
    return (
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="CREATE A NEW TODO" onChange={this.handleChange} value={this.state.task_item}/>
            <button type="submit" className="submit-button"><i className="fas fa-plus"></i></button>
          </form>
        </div>
    )
  }
}

export default Form
