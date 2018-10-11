import types from './types';
import axios from 'axios';

export const signUp = (userInfo) => {
    return async (dispatch) => {
        try {
            const resp = await axios.post('http://api.reactprototypes.com/signup', userInfo);

            localStorage.setItem('token', resp.data.token);

            dispatch({
                type: types.SIGN_UP
            });

        } catch(err) {
            dispatch({
                type: types.SIGN_UP_ERROR,

            })
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

export const getMovieQuote = () => async dispatch => {
    try {

        const axiosConfig = {
            header: {
                authoriztion: localStorage.getItem('token')
            }
        }

        const resp = await axios.get('http://api.reactprototypes.com', axiosConfig);

        dispatch({
            type: types.GET_MOVIE_QUOTE,
            quote: resp.data.message,
        });

    } catch(err) {
        console.log('movie Quote Error: ', err.message);
    }
}
