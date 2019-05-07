import { combineReducers } from 'redux'
import recipesReducer from './recipesReducer'
import massUnitsReducer from './massUnitsReducer'

const rootReducer = combineReducers({
	recipesReducer,
	massUnitsReducer
})

export default rootReducer
