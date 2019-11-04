import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTodo } from '../redux/actions/to-do-actions';


const TodoList = ({ tasks, deleteToDo }) => (
  <>
    {tasks.length > 0 &&
      <div>
        <h5 className="text-secondary my-2">Todo list</h5>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Nick Name</th>
              <th scope="col">Created Date</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(todo => <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.name}</td>
              <td>{todo.nickname.data.name}</td>
              <td>{todo.createddate}</td>
              <td>
                <Link to={`/page2/${todo.id}`}><span className="fa fa-edit"></span></Link>

                {/* <Link to={`/test?id=${todo.id}`}>
          <span className="fa fa-edit"></span>
        </Link> */}
                <span className="fa fa-trash ml-4" onClick={() => deleteToDo(todo.id)}></span>
              </td>
            </tr>)}
          </tbody>
        </table>
      </div>
    }
  </>
)


export const mapStateToProps = state => ({
  tasks: state.todos
})

export const mapDispatchToProps = dispatch => ({
  deleteToDo: id => dispatch(deleteTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
