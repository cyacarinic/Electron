import React from 'react/addons';
import Router from 'react-router';

import Home from './components/Home.react';
import Settings from './components/Settings.react';

let Route = Router.Route;
let RouteHandler = Router.RouteHandler;
let DefaultRoute = Router.DefaultRoute;

let App = React.createClass({
    render () {
        return (
                <RouteHandler/>
        )
    }
});

let routes = (
        <Route name="app" path="/" handler={App}>
        <Route name="home" path="/home" handler={Home}/>
        <Route name="settings" path="/settings" handler={Settings}/>
        <DefaultRoute name="setup" handler={Home}/>
        </Route>
);

module.exports = routes;
