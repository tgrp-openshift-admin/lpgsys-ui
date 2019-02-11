import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'
import { combineReducers } from 'redux'
import loginReducer from './login'

const rootReducer = (history: History) => combineReducers({
  count: loginReducer,
  router: connectRouter(history)
})

export interface IGState {
  count: number;
  router: RouterState;
}

export default rootReducer
