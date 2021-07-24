import { combineReducers } from 'redux'
import { pdfsReducer, selectedPdfReducer } from './pdfReducers'
import {
  templatesReducer,
  selectedTemplateReducer,
  searchResultstemplatesReducer,
} from './templateReducers'

const reducers = combineReducers({
  allTemplates: templatesReducer,
  template: selectedTemplateReducer,
  SearchTemplatesSearchResults: searchResultstemplatesReducer,
  allPdfs: pdfsReducer,
  pdf: selectedPdfReducer,
})

export default reducers
