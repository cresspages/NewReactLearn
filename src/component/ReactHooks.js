import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import '../assets/nav.css';

import Hone from './Hone';
import HuseState from './HuseState';
import HuseEffect from './HuseEffect';
import HuseContext from './HuseContext';

function hooks1(){

    return (
        <div>
            <Router>
                <div className="nav">
                    <NavLink to="/reacthooks/hone" activeClassName="active">基本写法</NavLink>
                    <NavLink to="/reacthooks/usestate" activeClassName="active">useState</NavLink>
                    <NavLink to="/reacthooks/useeffect" activeClassName="active">useEffect</NavLink>
                    <NavLink to="/reacthooks/usecontext" activeClassName="active">useContext</NavLink>
                </div>
                <Switch>
                    <Route path="/reacthooks/hone" component={Hone} exact></Route>
                    <Route path="/reacthooks/usestate" component={HuseState} exact></Route>
                    <Route path="/reacthooks/useeffect" component={HuseEffect} exact></Route>
                    <Route path="/reacthooks/usecontext" component={HuseContext} exact></Route>
                </Switch>
            </Router>

        </div>
    )

}

export default hooks1;