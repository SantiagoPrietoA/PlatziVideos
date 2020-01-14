import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../containers/Home.jsx';
import Login from '../containers/Login.jsx';
import register from '../containers/register.jsx';
import NotFound from '../containers/NotFound.jsx';
import Player from '../containers/Player';

import Layout from '../components/Layout.jsx';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={register}/>
                <Route exact path="/player/:id" component={Player} />
                <Route path="**" component={NotFound}/>
            </Switch>        
        </Layout>
    </BrowserRouter>
);

export default App;
