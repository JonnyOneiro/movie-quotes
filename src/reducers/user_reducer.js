import types from '../actions/types';

const DEFAULT_STATE = {
    auth: false,
    signInError: '',
    signUpError: '',
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case types.SIGN_IN:
        case types.SIGN_UP:
            return { ...state, auth: true, signInError: '', signUpError: '' };
        case types.SIGN_OUT:
            return { ...state, auth: false};
        case types.SIGN_IN_ERROR: 
            //  deconstruct state to bring all the props over from state.
            return { ...state, auth: false, signInError: action.error}
        case types.SIGN_UP_ERROR: 
            return { ...state, auth: false, signUpError: action.error}
        default:
            return state;
    }
}
