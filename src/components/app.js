import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import { Route } from 'react-router-dom';
import About from './about';
import Home from './home';
import List from './list';
import MovieQuote from './movie_quote';
import Nav from './nav';
import SignIn from './Sign_in';
import SignUp from './Sign_up';
import auth from '../hoc/auth'
import {secret, people } from '../data/lists';




const App = () => (
    <div>
        <Nav/>
            <div className="container">
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />)
                <Route path="/movie-quote" component={MovieQuote} />
                <Route path="/person-list"  render={
                    props => <List {...props} title="List of People" list={people} /> }/>
                <Route path="/secret-list"  component={
                    auth(props => <List {...props} title="Secret Operatives List" list={secret} /> )
                }/>
                <Route path="/sign-in" component={SignIn} />
                <Route path="/sign-Up" component={SignUp} />
            </div>
    
    </div>
);

export default App;
