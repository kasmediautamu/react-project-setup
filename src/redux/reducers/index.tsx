import { combineReducers } from 'redux'
import { templatesReducer,selectedTemplateReducer } from './templateReducers'

const reducers = combineReducers({
    allTemplates: templatesReducer,
    template:selectedTemplateReducer
})

export default reducers