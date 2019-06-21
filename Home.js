import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

 

import Emp from './Emp'

class Home extends Component {

 

render() {

return (

<div>

<Emp/>

</div>

);

}

}

export default Home;