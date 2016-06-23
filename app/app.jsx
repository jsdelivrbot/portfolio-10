var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, browserHistory} = require('react-router');
// import createBrowserHistory from 'history/lib/createBrowserHistory';
var Main = require('Main');
var RouteHandler = require('RouteHandler');
var Home = require('Home');
// var Portfolio = require('Portfolio');
var Travelbug = require('Travelbug');
var PathHop = require('PathHop');
var Weather = require('Weather');
var Circles = require('Circles');


//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//require app.css
require('style!css!sass!applicationStyles')

//routes

// const appHistory = useRouterHistory(createBrowserHistory)({ queryKey: false })

//browerserHistory replaced hashHistory and deprecated functions
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={RouteHandler}/>
        </Route>
        <Route path="travelbug" component={Travelbug}></Route>
        <Route path="pathhop" component={PathHop}></Route>
        <Route path="weather" component={Weather}></Route>
        <Route path="circles" component={Circles}></Route>
    </Router>,
    document.getElementById('app')
);
