import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { changeNickName } from '../redux/actions/to-do-actions';

const EditToDo = ({ todo, changeNickName, match, history }) => {
    const [nickname, setNickName] = useState('');
    const modifyNickName = (id) => {
        changeNickName(id, nickname)
        history.push('/')
    }

    let task = todo.filter(task => task.id === parseInt(match.params.id) ? task : null)[0] || {};

    useEffect(() => {
        setNickName(task.nickname ? task.nickname.data.name : '')
    }, [task])

    return (
        <div className="row mt-4 ml-4">
            <div className="col-6">
                <form onSubmit={e => {
                    e.preventDefault()
                    modifyNickName(task.id)
                }}>
                    <div className="form-group">
                        Id: <label>{task.id}</label>
                    </div>
                    <div className="form-group">
                        Name: <label>{task.name}</label>
                    </div>
                    <div className="form-group">
                        <label>Nick Name</label>
                        <input
                            className="form-control"
                            value={nickname}
                            onChange={({ target }) => setNickName(target.value)}
                            type="text"
                            placeholder="Nick Name"
                            pattern="[a-zA-Z]*"
                            required
                        />
                        <small className="text-danger">*no numbers</small>
                    </div>
                    <div className="form-group">
                        Date:  <label >{task.createddate}</label>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-success" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


const getFilteredData = (todos) => {
    //console.log('get id from slug', this.props)
    //let id = 0; //parseInt(history.search.split('=')[1]);
    //return todos.find(x => x.id === id) ? todos.find(x => x.id === id) : {};
    return todos;
}

export const mapStateToProps = state => ({
    todo: getFilteredData(state.todos)
})

export const mapDispatchToProps = dispatch => ({
    changeNickName: (id, nickname) => dispatch(changeNickName(id, nickname)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditToDo)