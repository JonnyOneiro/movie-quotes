import types from './types';
import axios from 'axios';

export const signUp = (userInfo) => {
    return async (dispatch) => {
        try {
            const resp = await axios.post('http://api.reactprototypes.com/signup', userInfo);

            localStorage.setItem('token', resp.data.token);

            dispatch({
                type: types.SIGN_IN
            });
        } catch(err) {
            console.log('Sign Up Error: ', err.message);
        }
    }
}

export const signIn = userInfo => async dispatch => {
    try {
        const resp = await axios.post('http://api.reactprototypes.com/signin', userInfo);

        localStorage.setItem('token', resp.data.token);

        dispatch({
            type: types.SIGN_IN
        });
    } catch(err) {
        console.log('Sign In Error: ', err);
    }
}

export const signOut = () => {
    localStorage.removeItem('token');

    return {
        type: types.SIGN_OUT
    };
}
