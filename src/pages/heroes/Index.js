import React from 'react';
import Nav from "reactstrap/es/Nav";
import NavItem from "reactstrap/es/NavItem";
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import {Heroes} from "./Heroes";
import {Register} from "./Register";

import './Index.scss';

export class Index extends React.Component {

    render() {
        return (
            <div>
                <Nav>
                    <NavItem>
                        <NavLink to="/heroes/hero" className="nav-link">Hero List</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/heroes/register" className="nav-link">Register</NavLink>
                    </NavItem>
                </Nav>

                <Switch>
                    <Route path="/heroes/hero" component={Heroes}></Route>
                    <Route path="/heroes/register" component={Register}></Route>
                    <Route path="/heroes" render={() => <Redirect to="/heroes/hero" />}></Route>
                </Switch>
            </div>
        );
    }
}
