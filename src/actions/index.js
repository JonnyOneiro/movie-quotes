import types from './types';
import axios from 'axios';

export const signUp = (userInfo) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://api.reactprototypes.com/signup', userInfo);
            dispatch({
                type: types.SIGN_UP,
            });
        } catch(error) {
            dispatch({
                type: types.SIGN_UP_ERROR,
                error: 'Error creating account',
            })
        }
    }
}

export const signIn = userInfo => async dispatch => {
    try {
        const response = await axios.post('http://api.reactprototypes.com/signin', userInfo);

        localStorage.setItem('token',response.data.token);

        dispatch({
            type: types.SIGN_IN,
        });
    } catch(error) {
        dispatch({
            type: types.SIGN_IN_ERROR,
            error: 'Invalid Email and/or Password',
        })
    }
}

export const signOut = () => {
    localStorage.removeItem('token');
    return {
        type: types.SIGN_OUT
    }
}

export const getMovieQuote = () => async dispatch => {
    try {

        const axiosConfig = {
            headers: {
                authorization: localStorage.getItem('token'),
            }
        }

        const response = await axios.get('http://api.reactprototypes.com', axiosConfig);

        console.log('Movie Quote Response:', response);

        dispatch({
            type: types.GET_MOVIE_QUOTE,
            quote: response.data.message,
        });

    } catch(error) {
        console.log('Movie Quote Error:', error.message);
    }
}
