import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store/store'
import Routing from './routing'

render(
  <Provider store={store}>
    <Routing />
  </Provider>,
  document.getElementById('root')
)
