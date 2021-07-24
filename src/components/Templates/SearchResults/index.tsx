import { useState } from 'react'
import { useAppSelector } from '../../../app/hooks'
import _edit from '../../../assets/i/edit.svg'
import _preview from '../../../assets/i/preview.svg'
import _editinfo from '../../../assets/i/editInfo.svg'
import _duplicate from '../../../assets/i/duplicate.svg'
import _save from '../../../assets/i/save.svg'
import _view from '../../../assets/i/view.svg'
import Dialog from '../../Hidden'
import './styles.scss'
import CustomerDocumentationForm from '../CustomerDocumentationForm'
const SearchResults = () => {
  const [show, hide] = useState(false)
  const [remove, setRemove] = useState('')
  const [showDocumentationForm, setShowDocumentationForm] = useState(false)
  const toggle = () => {
    hide(!show)
  }
  function EditMenu() {
    return (
      <div className="edit__menu">
        <div className="edit__menu--item">
          <img src={_preview} alt="" />
          <p>Preview</p>
        </div>
        <div className="edit__menu--item">
          <img src={_editinfo} alt="" />
          <p>Edit Template</p>
        </div>
        <div className="edit__menu--item">
          <img src={_duplicate} alt="" />
          <p>Duplicate Template</p>
        </div>
        <hr />
        <div className="edit__menu--item">
          <img src={_view} alt="" />
          <p>View Saved Documents</p>
        </div>
        <div className="edit__menu--item" onClick={toggleDisplayDocumentationForm}>
          <img src={_save} alt="" />
          <p>Save Customer Document</p>
        </div>
        <DocumentationFormToggle />
      </div>
    )
  }
  const toggleDisplayDocumentationForm = () => {
    setShowDocumentationForm(!showDocumentationForm)
    setRemove('remove')
  }
  function DocumentationFormToggle() {
    if (showDocumentationForm) {
      return (
        <Dialog _className="documentation__form--dialog">
          <CustomerDocumentationForm />
        </Dialog>
      )
    } else {
      return null
    }
  }
  const templates = useAppSelector(
    (state: any) => state.SearchTemplatesSearchResults.searchResultsTemplates
  )
  console.log(templates)
  return (
    <div className="table__wrapper">
      <p className="results__description">
        {templates.length} Templates found for <span>"Consumer Directed Health Care"</span>
      </p>
      <table>
        <thead>
          <tr>
            <th>template name</th>
            <th>version</th>
            <th>document type</th>
            <th>status</th>
            <th>date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {templates.map((template) => {
            return (
              <tr key={Math.random()}>
                <td className="td__blue">{template.name}</td>
                <td>{template.version}</td>
                <td>{template.type}</td>
                <td>{template.status}</td>
                <td>{template.date}</td>
                <td className="dialog__anchor">
                  <img src={_edit} alt="" onClick={toggle} />
                </td>
              </tr>
            )
          })}
        </tbody>
        {show ? (
          <Dialog _className="dialog">
            <EditMenu />
          </Dialog>
        ) : null}
      </table>
    </div>
  )
}
export default SearchResults
