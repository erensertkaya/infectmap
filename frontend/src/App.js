import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './views/Home';
import About from './views/About';
const App = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/covid-19" component={Home}/>
        </BrowserRouter>
    );
}

export default App;
