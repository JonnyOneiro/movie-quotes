import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { signIn } from '../actions';
import { renderInput } from '../helpers';

class SignIn extends Component {
    userSignIn = (values) => {
        this.props.signIn(values);
    }

    render() {
        const { handleSubmit, authError } = this.props;
        return (
            <div>
                <h1 className="center">Sign In!</h1>
                <form onSubmit={handleSubmit(this.userSignIn)}>
                    <Field name="email" label="Email" component={renderInput}/>
                    <Field name="password" label="Password" type="password" component={renderInput}/>

                    <div className="row">
                        <div className="col s12 right-align">
                            <button className="btn blue">Sign In</button>
                            <p className="red-text text-darken-2">{ authError }</p>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

function validate(values) {
    const { email, password } = values;
    const errors = {};

    if (!email) {
        errors.email = 'Please enter your email address';
    }
    if (!password) {
        errors.password = 'Please choose a password';
    }
    return errors;
}

// only the property name validate matters not that function name
SignIn = reduxForm({
    form: 'sign-in',
    validate: validate
})(SignIn); 

function mapStateToProps(state) {
    return {
        authError: state.user.signInError
    }
}

export default connect(mapStateToProps, {
    signIn: signIn,
})(SignIn);
