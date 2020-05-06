import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Agents from './Agents';
import Brokers from './Brokers';
import Contact from './Contact';
import NoMatch from './NoMatch';

const App = () => {
    return (
        <React.Fragment>
            <Router>
                <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/agents' component={Agents}/>
                <Route path='/brokers' component={Brokers} />
                <Route path='/contact' component={Contact} />
                <Route component={NoMatch} />
                </Switch>
            </Router>
        </React.Fragment>
    )
}

export default App;