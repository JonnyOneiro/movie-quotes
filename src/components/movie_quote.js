import React from 'react';
import auth from '../hoc/auth';

const MovieQuote = props => {
    return (
        <div className="center">
            <h1>Movie Quotes!</h1>
            <h4>You had me at hello.</h4>
        </div>
    );
}

export default auth(MovieQuote);