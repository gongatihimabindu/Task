import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

 

import Home from './Home'

import User from './User'

 

function App() {

return (

<Router>

<div>

<Route exact path="/" component={Home} />

<Route path="/user/:id" component={User} />

</div>

</Router>

);

}

 

export default App;