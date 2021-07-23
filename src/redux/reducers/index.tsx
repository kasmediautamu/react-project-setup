import { combineReducers } from 'redux'
import { pdfsReducer, selectedPdfReducer } from './pdfReducers'
import { templatesReducer,selectedTemplateReducer } from './templateReducers'

const reducers = combineReducers({
    allTemplates: templatesReducer,
    template:selectedTemplateReducer,
    allPdfs:pdfsReducer,
    pdf:selectedPdfReducer
})

export default reducers