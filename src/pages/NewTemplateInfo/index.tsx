import React, { useState } from "react"
import Button from "../../components/BaseForm/Button"
import Layout from "../../components/layout"
import SelectInput from "../../components/SelectInput"
import SidePanel from "../../components/SidePanel"
import FileUploadInput from "../../components/UploadInput"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { createTemplate } from './templateSlice'
import './styles.scss'

const NewTemplateInfo: React.FC = () => {
  const [showPanel, setShowPanel] = useState(false)
  const [documentType, setDocumentType] = useState('');
  const [templateName, setTemplateName] = useState('');
  const [lineOfBusiness, setLineOfBusiness] = useState('');

  const displaySelectInput = (field) => {
    switch (field) {
      case 'documentType':
        return <SelectInput setField="documentType"/>
      case 'lineOfBusiness':
        return <SelectInput setField="lineOfBusiness"/>
      case 'group':
        return <SelectInput setField="group"/>
      case 'fontStyle':
        return <SelectInput setField="fontStyle"/>
      default:
        return <SelectInput setField=""/>
    }
  }

  const toggleSidePanel = () => {
    window.scroll(0, 0)
    setShowPanel(true)
  }

  const collectTemplateData = useAppSelector((state) => state.template.templates)
  console.log(collectTemplateData)

  const dispatch = useAppDispatch()

  const submitText = () => {
    dispatch(createTemplate())
  }

  return (
    <>
      <Layout>
        <section className="new-template">
          <h2>New Template Info</h2>
          <div className="card">
            <div className="form">
              <div className="input-group">
                <label htmlFor="document-type">Document Type</label>
                {displaySelectInput('documentType')}
              </div>
              <div className="input-group">
                <label htmlFor="template-name">Template Name</label>
                <input className="template-name" type="text" id="template-name" placeholder="Enter name..." />
              </div>
              <div className="input-group">
                <label htmlFor="line-of-business">Line of Business</label>
                {displaySelectInput('lineOfBusiness')}
              </div>
              <div className="input-group">
                <label htmlFor="group">Group</label>
                {displaySelectInput('group')}
              </div>
              <div className="input-group">
                <label htmlFor="font-style">Font Style</label>
                {displaySelectInput('fontStyle')}
              </div>
            </div>
            <div className="form-actions">
              <Button primary="button" btnClass="action__import" onClick={toggleSidePanel}>Import</Button>
              <Button primary="button" btnClass="action__continue" onClick={submitText}>Continue</Button>
            </div>
          </div>
        </section>
        {showPanel ? <SidePanel heading="Import" >
          <FileUploadInput />
        </SidePanel> : null}
      </Layout>
    </>
  )
}

export default NewTemplateInfo