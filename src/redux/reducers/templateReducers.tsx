import { TEMPLATE } from '../../models/template'
import { ActionTypes } from '../constants/actionTypes'
const initialState = {
  templates: [],
  searchResultsTemplates: [],
}
export interface SET_TEMPLATES {
  readonly type: 'SET_TEMPLATES'
  payload: TEMPLATE[]
}

export interface SELECTED_TEMPLATE {
  readonly type: 'SELECTED_TEMPLATE'
  payload: TEMPLATE
}
export interface SET_SEARCH_RESULTS_TEMPLATES {
  readonly type: 'SET_SEARCH_RESULTS_TEMPLATES'
  payload: TEMPLATE[]
}

export const templatesReducer = (state = initialState, action: SET_TEMPLATES) => {
  switch (action.type) {
    case ActionTypes.SET_TEMPLATES:
      return { ...state, templates: action.payload }

    default:
      return state
  }
}
export const selectedTemplateReducer = (state = {}, action: SELECTED_TEMPLATE) => {
  switch (action.type) {
    case ActionTypes.SELECTED_TEMPLATE:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
export const searchResultstemplatesReducer = (state = {}, action: SET_SEARCH_RESULTS_TEMPLATES) => {
  switch (action.type) {
    case ActionTypes.SET_SEARCH_RESULTS_TEMPLATES:
      return { ...state, searchResultsTemplates: action.payload }

    default:
      return state
  }
}
