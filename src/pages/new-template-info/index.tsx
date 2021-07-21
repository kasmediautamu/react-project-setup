import React from "react"
import Layout from "../../components/layout"
import SelectInput from "../../components/select-input"
import './styles.scss'

const NewTemplateInfo: React.FC = () => {
  return (
    <>
      <Layout>
        <section className="new-template">
          <h2>New Template Info</h2>
          <div className="card">
            <div className="form">
              <div className="input-group">
                <label htmlFor="document-type">Document Type</label>
                <SelectInput/>
              </div>
              <div className="input-group">
                <label htmlFor="template-name">Template Name</label>
                <input type="text" id="template-name" placeholder="Enter name..."/>
              </div>
              <div className="input-group">
                <label htmlFor="line-of-business">Line of Business</label>
                <SelectInput />
              </div>
              <div className="input-group">
                <label htmlFor="group">Group</label>
                <SelectInput />
              </div>
              <div className="input-group">
                <label htmlFor="font-style">Font Style</label>
                <SelectInput />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default NewTemplateInfo