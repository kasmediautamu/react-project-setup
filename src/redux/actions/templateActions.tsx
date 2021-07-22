import { TEMPLATE } from '../../models/template'
import { ActionTypes } from '../constants/actionTypes'


export const setProducts = (templates:TEMPLATE[]) => {
    return {
        type:ActionTypes.SET_TEMPLATES,
        payload:templates,
    }
}

export const selectedProduct = (template:TEMPLATE) => {
    return {
        type:ActionTypes.SELECTED_TEMPLATE,
        payload:template,
    }
}
