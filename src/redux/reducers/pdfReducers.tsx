import { PDF } from '../../models/pdf'
import { ActionTypes} from '../constants/actionTypes'
const initialState = {
    pdfs: []
}
export interface SET_PDFS {
    readonly type: "SET_PDFS";
    payload:PDF[] 
  }
  
  export interface SELECTED_PDF {
    readonly type: "SELECTED_PDF";
    payload:PDF
  }
  
export const pdfsReducer = (state = initialState, action:SET_PDFS) => {
    switch (action.type) {
        case ActionTypes.SET_PDFS:
            return { ...state, pdfs: action.payload }
    
    default:
        return state
}
}
export const selectedPdfReducer = (state = {}, action:SELECTED_PDF) => {
    switch (action.type) {
        case ActionTypes.SELECTED_PDF:
            return { ...state, ...action.payload }
    default:
        return state
}   
}
