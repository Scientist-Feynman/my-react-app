import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import C2 from './components/C2.js';

import Home from './route/Home';
import Login from './route/Login';
import News from './route/News';
import Video from './route/Video';
import Picture from './route/Picture';
import Science from './route/Science';
import Music from './route/Music';

import BlogItems from './route/BlogItems';

const value = 0;

function RouterConfig(){
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/news" component={News} />
                <Route path="/video" component={Video} />
                <Route path="/picture" component={Picture} />
                <Route path="/science" component={Science} />
                <Route path="/music" component={Music} />

                <Route path="/blogitems/:id" component={BlogItems} />
            </Switch>
        </Router>
    )
}

function Routers(){
    const changes = value ? <C2 /> : <RouterConfig />
    console.log(changes);
    return(
        <div>
            <div>{changes}</div>
        </div>
    )
}

export default Routers;