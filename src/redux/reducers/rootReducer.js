import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router';

import LoginReducer from './auth/login'
import registerReducer from "./auth/register";
import forgotPasswordReducer from "./auth/forgotPassword";
import resetPasswordReducer from "./auth/resetPassword";
import usersReducer from "./users";
import AssetsReducer from "./assets";
import profileReducer from "./profile";

const reducer = (history) => combineReducers({
    auth : LoginReducer,
    registerData : registerReducer,
    forgotPassword : forgotPasswordReducer,
    resetPassword : resetPasswordReducer,
    users : usersReducer,
    assets : AssetsReducer,
    profile : profileReducer,
    router: connectRouter(history)
})

export default reducer