import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import App from './src/App'
import Msg from './src/Msg'
import Set from './src/Set'
import Home from './src/Home'
import {Router,IndexRoute,Route,hashHistory} from 'react-router'
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="set" component={Set} />
            <Route path="msg" component={Msg} />
        </Route>
    </Router>,
    document.getElementById("root")
)