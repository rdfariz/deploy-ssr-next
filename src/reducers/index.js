import { combineReducers } from 'redux'
// Reducers Global
import GLOBAL from './global'
// Reducers Local
import HOME from '../pages/home/reducer'

export default combineReducers({
  GLOBAL,
  HOME
})