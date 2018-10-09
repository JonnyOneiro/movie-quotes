import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (WrappedComponent) => {
    class Auth extends Component {
        componentDidMount() {
            this.checkAuth();
        }

        componentDidUpdate() {
            this.checkAuth();
        }

        checkAuth() {
           if(!this.props.auth) {
               this.props.history.push('/sign-in');
           }
        }

        render() {
            return <WrappedComponent  log={this.log}/>;
        }
    }

    function mapStateToProps(state) {
        return {
            auth: state.user.auth
        }
    }

    return connect(mapStateToProps)(Auth);
}


