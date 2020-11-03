import React, { Component } from 'react'
import { BrowserRouter as  Switch, Route } from "react-router-dom";
import Content from './Content/Content';
import TaskDetail from './Content/Detail/TaskDetail';
export default class Direct extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/">
                    <Content></Content>
                </Route>
                <Route path="/detail/:title/:id">
                    <TaskDetail></TaskDetail>
                </Route>
            </Switch>
        )
    }
}
