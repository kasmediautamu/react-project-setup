import { Link, useHistory, useLocation } from 'react-router-dom'
import Button from '../BaseForm/Button'
import BaseDropDown from '../BaseForm/Dropdown'
import InputGroup from '../BaseForm/InputGroup'
import _toggleL from '../../assets/i/toggleleft.svg'
import _squares from '../../assets/i/squares.svg'
import _menu from '../../assets/i/menu.svg'
import _activesquares from '../../assets/i/activesquares.svg'
import _activemenu from '../../assets/i/activemenu.svg'
import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../app/hooks'
import { setSearchResultsTemplates } from '../../redux/actions/templateActions'

import './styles.scss'

const Form = () => {
  const dispatch = useDispatch()
  const pdfTypes = ['All Types', 'Admin Summary', 'BSS']
  const pdfStatuses = ['All Statuses', 'Completed', 'Incomplete']
  const Location = useLocation()
  const initialFormState = {
    searchTerm: '',
    pdftype: '',
    pdfstatus: '',
  }
  const templates = useAppSelector((state: any) => state.allTemplates.templates)

  const [formData, setFormData] = useState(initialFormState)
  const [types, setTypes] = useState('All Types')
  const [status, setStatuses] = useState('All Statuses')
  const { searchTerm, pdftype, pdfstatus } = formData
  const onChange = (e: FormEvent<EventTarget>) => {
    let target = e.target as HTMLInputElement
    setFormData({ ...formData, [target.name]: target.value })
    console.log(formData)
  }

  const handleTypesSelect = (e: FormEvent<EventTarget>) => {
    let target = e.target as HTMLInputElement
    setTypes(target.value)
  }
  const handleStatusesSelect = (e) => {
    let target = e.target as HTMLInputElement
    setStatuses(target.value)
  }

  const showHeading = () => {
    let formhead = ''
    if (Location.pathname === '/' || Location.pathname === '/templates-list') {
      formhead = 'template manager'
    } else if (Location.pathname === '/search-results') {
      formhead = 'Search Results'
    }
    return formhead
  }
  function PdfMenuIcon() {
    if (Location.pathname === '/') {
      return <img src={_squares} alt="" />
    } else {
      return <img src={_activesquares} alt="" />
    }
  }
  function TemplateListIcon() {
    if (Location.pathname === '/') {
      return <img src={_menu} alt="" />
    } else {
      return <img src={_activemenu} alt="" />
    }
  }
  function TemplateButton() {
    if (Location.pathname === '/' || Location.pathname === '/templates-list') {
      return (
        <Button primary="button" onClick={changeLocation}>
          new template
        </Button>
      )
    } else if (Location.pathname === '/search-results') {
      return (
        <Button btnClass="back-to-template__btn" primary="button">
          Back
        </Button>
      )
    } else {
      return null
    }
  }
  let history = useHistory()
  const changeLocation = () => {
    return history.push('/new-template-info')
  }
  const searchData = (list, searchTerm) => {
    let searchResults = list.filter((i) =>
      i.name.toString().toLowerCase().includes(searchTerm.toString().toLowerCase())
    )

    return dispatch(setSearchResultsTemplates(searchResults))
  }
  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setFormData({
      ...formData,
    })
    searchData(templates, formData.searchTerm)

    if (Location.pathname === '/search-results' || Location.pathname === '/templates-list') {
      history.push('/search-results')
    }
  }

  return (
    <form className="search__form" onSubmit={onSubmit}>
      <div className="search__form--header">
        <p>{showHeading()}</p>
        <TemplateButton />
      </div>
      <div className="search__form--fields">
        <div className="left">
          <InputGroup
            placeholder={`Search by file name or template content`}
            _name="searchTerm"
            valuechange={onChange}
            _value={searchTerm}
          />
        </div>
        <div className="right">
          <div className="select-boxes">
            <BaseDropDown _name="pdftype" options={pdfTypes} handleSelect={handleTypesSelect} />
          </div>
          <div className="select-boxes">
            <BaseDropDown options={pdfStatuses} handleSelect={handleStatusesSelect} />
          </div>
          <div className="toggle">
            <p>only show current version</p>
            <img src={_toggleL} alt="" />
          </div>
          <div className="menu__icons">
            <Link to={`/`}>
              <PdfMenuIcon />
            </Link>
            <Link to={`/templates-list`}>
              <TemplateListIcon />
            </Link>
          </div>
        </div>
      </div>
    </form>
  )
}
export default Form
