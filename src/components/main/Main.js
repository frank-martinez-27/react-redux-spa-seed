import *  as React from 'react';
import { Route, Switch, Redirect, NavLink, HashRouter } from 'react-router-dom';
import { RouteWithSubRoutes } from '../../routes';
import './Main.css';

const Main = (props) => (
    <HashRouter>
        <div>
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <a className="navbar-brand" href="index.html">Frank Martinez - Seed Project</a>
                    </div>
                    <div className="collapse navbar-collapse navbar-ex1-collapse">
                        <ul className="nav navbar-nav">
                            <li>
                                <NavLink to="home.html" activeClassName="active"><i className="fa fa-fw fa-home" /> Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about"><i className="fa fa-fw fa-file" /> About</NavLink>
                            </li><li>
                                <NavLink to="/courses"><i className="fa fa-fw fa-file" /> Courses</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="RoutesContainer">
                <Switch>
                    {props.routes.map((route, idx) => (
                        <RouteWithSubRoutes key={idx} {...route} />
                    )
                    )}
                    <Redirect to="/home" />
                </Switch>
            </div>
        </div>
    </HashRouter>
);
export default Main;
