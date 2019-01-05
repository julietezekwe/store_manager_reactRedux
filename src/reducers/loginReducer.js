import { SET_USER } from '../actions/types';
const INITIAL_STATE = {
    isLoggedIn: false,
    user: {}
}

export default (state = INITIAL_STATE, action) => {
    if(action.type === SET_USER){
        return {
            ...state,
            isLoggedIn: true,
            user: action.payload
        }
    }
     return state;
}