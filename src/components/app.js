import 'materialize-css/dist/css/materialize.min.css';
import { Route } from 'react-router-dom';
import React from 'react';
import About from './about';
import Home from './home';
import List from './list';
import MovieQuotes from './movie_quotes';
import Nav from './nav';
import SignIn from './sign_in';
import SignUp from './sign_up';
import auth from '../hoc/auth';

import { secret, people } from '../data/lists';

const App = () => (
    <div>
        <Nav/> 
        <div className="container">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/movie-quote" component={auth(MovieQuotes)}/>
            <Route path="/person-list" render={ props => <List {...props} title="Secret Operatives List" list={people}/>}/>
            <Route path="/secret-list" component={auth( props => <List {...props} title="Secret Operatives List" list={secret}/>)}/>
            <Route path="/sign-in" component={SignIn}/>
            <Route path="/sign-up" component={SignUp}/>
        </div>
    </div>
);

export default App;
