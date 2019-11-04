import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions/to-do-actions';

const AddTodo = ({ dispatch }) => {
  const [name, setName] = useState('');
  const [nickname, setNickName] = useState('');
  return (
    <div>
      <form
        className="form-inline"
        onSubmit={e => {
          e.preventDefault()
          // empty check of input values
          if (!name.trim() && !nickname.trim()) {
            return
          }
          dispatch(addTodo(name, nickname))
          setName('');
          setNickName('');
        }}
      >

        <div className="d-flex flex-column mb-2 mr-sm-2">
          <input
            value={name}
            type="text"
            className="form-control"
            placeholder="Name"
            pattern="[a-zA-Z]*"
            onChange={({ target }) => setName(target.value)}
            required
          />
          <small className="text-danger">*no numbers</small>
        </div>

        <div className="d-flex flex-column mb-2 mr-sm-2">
          <input
            value={nickname}
            type="text"
            className="form-control"
            placeholder="Nick Name"
            pattern="[a-zA-Z]*"
            onChange={({ target }) => setNickName(target.value)}
            required
          />
          <small className="text-danger">*no numbers</small>
        </div>
        <button type="submit" className="btn btn-success mb-4">Add Todo</button>
      </form>
    </div>
  )
}

export default connect()(AddTodo);
