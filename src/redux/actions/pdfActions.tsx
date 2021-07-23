import { PDF } from '../../models/pdf'
import { ActionTypes } from '../constants/actionTypes'


export const setPdfs = (templates:PDF[]) => {
    return {
        type:ActionTypes.SET_PDFS,
        payload:templates,
    }
}

export const selectedPdf = (template:PDF) => {
    return {
        type:ActionTypes.SELECTED_PDF,
        payload:template,
    }
}
