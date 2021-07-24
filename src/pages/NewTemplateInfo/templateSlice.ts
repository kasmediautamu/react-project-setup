import { createSlice } from '@reduxjs/toolkit'

export const templateSlice = createSlice({
  name: 'template',
  initialState: {
    templates: [
      // {
      //   templateId: "",
      //   documentType: "",
      //   templateNmae: "",
      //   lineOfBusiness: "",
      //   group: "",
      //   fontStyle: "",
      //   importedFileName: "",
      // },
      {
        templateId: '',
        documentType: '',
        templateNmae: '',
        lineOfBusiness: '',
        group: '',
        fontStyle: '',
        importedFileName: '',
      },
    ],
  },
  reducers: {
    createTemplate: (state) => {
      state.templates.push()
    },
    // deleteTemplate: (state, id) => {
    //   state.templates.filter((template) => template.templateId !==);
    // }
  },
})

export const { createTemplate } = templateSlice.actions

export default templateSlice.reducer
