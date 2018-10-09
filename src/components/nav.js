import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../actions';


class Nav extends Component {
    render() {

        const navStyle = {
            padding: '0 12px'
        }

        return (
        <nav style={navStyle} className="light-blue">
            <div className="nav-wrapper">
                <Link className="brand-logo" to="/">Movie Quote</Link>
                <ul className="right">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/person-list">Person List</Link>
                    </li>
                    <li>
                        <Link to="/secret-list">Secret List</Link>
                    </li>
                    <li>
                        <Link to="/movie-quote">Movie Quote</Link>
                    </li>
                    <li>
                        <Link to="/sign-in">Sign In</Link>
                    </li>
                    <li>
                        <Link to="/sign-up">Sign Up</Link>
                    </li>
                    <li>
                        <button onClick={this.props.signOut} className="btn red darken-2">Sign Out</button>
                    </li>
                </ul>
            </div>
        </nav>
        );
    }
}

export default connect(null, {
    signOut: signOut
})(Nav);