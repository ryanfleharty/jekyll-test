import React, { Component } from 'react'

import Header from './components/Header'
import Form from './components/Form'
import TaskList from './components/TaskList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentView: 'todo',
      completedTasks: [],
      todoTasks: []
    }
  }

  // handles the currentView state
  handleView = (view) => {
    this.setState({ currentView: view })
  }

  // fetching the api data
  fetchTasks = () => {
    fetch('http://localhost:3000/tasks')
      .then(data => data.json())
      .then(jData => {
        this.sortTasks(jData)
      })
  }

  // handles creating the task
  handleCreateTask = (task) => {
    fetch('http://localhost:3000/tasks', {
      body: JSON.stringify(task),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(createdTask => {
        return createdTask.json()
      })
      .then(jData => {
        this.updateArray(jData, 'todoTasks')
        this.handleView('todo')
      })
      .catch(err => console.log(err))
  }

  // handles updating the task
  handleCheck = (task, arrayIndex, currentArray) => {
    // manipulate the task data
    task.completed = !task.completed
    console.log(task)
    // fetch request
    fetch('http://localhost:3000/tasks/' + task.id, {
      body: JSON.stringify(task),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(updatedTask => {
        return updatedTask.json()
      })
      .then(jData => {
        // remove the task from the current array
        this.removeFromArray(currentArray, arrayIndex)
        // move the task to the other array
        if(currentArray === 'todoTasks') {
          this.updateArray(task, 'completedTasks')
        } else {
          this.updateArray(task, 'todoTasks')
        }
      })
      .catch(err => console.log(err))
  }

  // handles deleting  the task
  handleDelete = (taskId, arrayIndex, currentArray) => {
    fetch('http://localhost:3000/tasks/' + taskId, {
      method: 'DELETE'
    })
      .then(data => {
        this.removeFromArray(currentArray, arrayIndex)
      })
      .catch(err => console.log(err))
  }

  // update state of array
  updateArray = (task, array) => {
    this.setState( prevState => {
      prevState[array].push(task)
      return {
        [array]: prevState[array]
      }
    })
  }

  // removes a task from its current array
  removeFromArray = (array, arrayIndex) => {
    this.setState(prevState => {
      prevState[array].splice(arrayIndex, 1)
      return {
        [array]: prevState[array]
      }
    })
  }

  // sort tasks into appropriate array
  sortTasks = (tasks) => {
    // default arrays
    let completedTasks = []
    let todoTasks = []
    // loop through tasks
    tasks.forEach((task) => {
      if(task.completed) {
        completedTasks.push(task)
      } else {
        todoTasks.push(task)
      }
    })
    // pass the d ata to setTasks
    this.setTasks(completedTasks, todoTasks)
  }

  // set the task array states
  setTasks = (completed, todo) => {
    this.setState({
      completedTasks: completed,
      todoTasks: todo
    })
  }

  // component did mount life cycle
  componentDidMount() {
    this.fetchTasks()
  }

  render() {
    return (
      <div className="main-container">
        <Header
          currentView={this.state.currentView}
          handleView={this.handleView}
          todoCount={this.state.todoTasks.length}
          completedCount={this.state.completedTasks.length}
        />
        <Form
          handleCreateTask={this.handleCreateTask}
        />
        <TaskList
          currentView={this.state.currentView}
          todoTasks={this.state.todoTasks}
          completedTasks={this.state.completedTasks}
          handleCheck={this.handleCheck}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App
