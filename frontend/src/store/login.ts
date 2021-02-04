import {createAction, createReducer} from '@reduxjs/toolkit'

export const loginAction = createAction<string>('LOG_IN')
export const logoutAction = createAction('LOG_OUT')

const login = createReducer('', {
    [loginAction.type]: (state, action) => action.payload,
    [logoutAction.type]: state => ''
})

export default login
