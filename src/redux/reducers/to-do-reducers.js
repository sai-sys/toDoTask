const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          nickname: { data: { name: action.nickname } },
          createddate: new Date().toDateString()
        }
      ]
    case 'CHANGE_NICKNAME_TODO':
      return state.map(todo =>
        (todo.id === action.id) ?
          { ...todo, nickname: { data: { name: action.nickname } } } : todo
      )
    case 'DELETE_TODO':
      let todos = state.filter(todo => {
        if (todo.id !== action.id)
          return todo
        else return null
      }
      )
      return todos;
    default:
      return state
  }
}

export default todos
