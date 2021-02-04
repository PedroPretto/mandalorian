import {createStore} from '@reduxjs/toolkit'

import login from './login'

const store = createStore(login)

export default store