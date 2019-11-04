let nextTodoId = 1;
export const addTodo = (_name, _nickname) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  name: _name,
  nickname: _nickname
})

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id
})

export const changeNickName = (id, nickname) => ({
  type: 'CHANGE_NICKNAME_TODO',
  nickname,
  id
})

