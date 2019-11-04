import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import EditToDo from './components/edit-to-do-section'
import App from './components/to-do-application-container'

const Routing = () => (
    <Router>
        <Switch>
            <Route exact path="/page2/:id" component={EditToDo}></Route>
            <Route path="/page1">
                <App />
            </Route>
            <Route path="/">
                <App />
            </Route>
        </Switch>
    </Router>
)

export default Routing
