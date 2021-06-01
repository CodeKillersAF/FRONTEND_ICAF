import React from 'react';
import './App.css';
import Navbar from './components/Elements/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Speaker from './components/Elements/Speaker';

export default class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <>
            <Router>
                <Navbar />
              <Switch>
                <Route path='/' exact component={Home} />
                {/* need to create page in pages */}
                <Route path='/register' exact component={Speaker} />
              </Switch>
            </Router>
            </>
          );
    }
}

