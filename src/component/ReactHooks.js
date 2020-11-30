import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import '../assets/nav.css';

import Hone from './Hone';

function hooks1(){

    return (
        <div>
            <Router>
                <div className="nav">
                    <NavLink to="/reacthooks/hone" activeClassName="active">基本写法</NavLink>
                </div>
                <Switch>
                    <Route path="/reacthooks/hone" component={Hone} exact></Route>
                </Switch>
            </Router>

        </div>
    )

}

export default hooks1;