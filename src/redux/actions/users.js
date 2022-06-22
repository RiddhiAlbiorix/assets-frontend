export const GET_USERS = 'GET_USERS'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_ERROR = 'GET_USERS_ERROR'

export const GET_SINGLE_USER = 'GET_SINGLE_USER'
export const GET_SINGLE_USER_SUCCESS = 'GET_SINGLE_USER_SUCCESS'
export const GET_SINGLE_USER_ERROR = 'GET_SINGLE_USER_ERROR'

export const ADD_USER = 'ADD_USER'
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS'
export const ADD_USER_ERROR = 'ADD_USER_ERROR'

export const EDIT_USER = 'EDIT_USER'
export const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS'
export const EDIT_USER_ERROR = 'EDIT_USER_ERROR'

export const DELETE_USER = 'DELETE_USER'
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS'
export const DELETE_USER_ERROR = 'DELETE_USER_ERROR'

export const getUsers = () => ({
    type : GET_USERS
})

export const getUsersSuccess = (payload) => ({
    type : GET_USERS_SUCCESS,
    payload
})

export const getUsersError = () => ({
    type : GET_USERS_ERROR
})

export const getSingleUser = (payload) => ({
    type : GET_SINGLE_USER,
    payload
})

export const getSingleUserSuccess = (payload) => ({
    type : GET_SINGLE_USER_SUCCESS,
    payload
})

export const getSingleUserError = (payload = '', errors = {}) => ({
    type : GET_SINGLE_USER_SUCCESS,
    payload,
    errors
})

export const addUser = (payload) => ({
    type : ADD_USER,
    payload
})

export const addUserSuccess = (payload) => ({
    type : ADD_USER_SUCCESS,
    payload
})

export const addUserError = (payload = '', errors = {}) => ({
    type : ADD_USER_ERROR,
    payload,
    errors
})

export const editUser = (payload) => ({
    type : EDIT_USER,
    payload
})

export const editUserSuccess = (payload) => ({
    type : EDIT_USER_SUCCESS,
    payload
})

export const editUserError = (payload = '', errors = {}) => ({
    type : EDIT_USER_ERROR,
    payload, 
    errors
})

export const deleteUser = (payload) => ({
    type : DELETE_USER,
    payload
})

export const deleteUserSuccess = (payload) => ({
    type : DELETE_USER_SUCCESS,
    payload
})

export const deleteUserError = (payload = '', errors = {}) => ({
    type : DELETE_USER_ERROR,
    payload,
    errors
})