import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './user_reducer';
import movieReducer from './movie_reducer';

const rootReducer = combineReducers({
    form: formReducer,
    movie: movieReducer,
    user: userReducer,
});

export default rootReducer;
