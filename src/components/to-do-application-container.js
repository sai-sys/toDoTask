import React, { Component } from 'react'
import AddTodo from './add-to-do-section'
import ToDoList from './to-do-list-section'

class App extends Component {
  render() {
    return (
      <div className="m-4">
        <h4 className="text-primary mb-2">Todo Application</h4>
        <AddTodo />
        <div className="row">
          <div className="col-6">
            <ToDoList />
          </div>

        </div>
      </div>
    )
  }
}

export default App
