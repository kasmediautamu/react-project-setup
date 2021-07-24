import './styles.scss'

const TemplateDetails: React.FC = () => {
  return (
    <>
      <div className="template-info">
        <h4>Template Information</h4>
        <div className="detail">
          <p className="label">Document Type:</p>
          <p className="value">Admin Summary</p>
        </div>
        <div className="detail">
          <p className="label">Template Name:</p>
          <p className="value">2021 Admin Summary</p>
        </div>
        <div className="detail">
          <p className="label">Line of Business:</p>
          <p className="value">Acme Business</p>
        </div>
        <div className="detail">
          <p className="label">Group:</p>
          <p className="value">All</p>
        </div>
        <div className="detail">
          <p className="label">Font Style:</p>
          <p className="value">Level 1- 14 pt. Bold</p>
        </div>
      </div>
      <div className="template-sections">
        <h4>Template Sections</h4>
        <div className="detail">
          <p className="label">General Information</p>
          <p className="value">8 Questions</p>
        </div>
        <div className="detail">
          <p className="label">Consumer Directed Health Care</p>
          <p className="value">20 Questions</p>
        </div>
        <div className="detail">
          <p className="label">Plan Sponsor Contact Info</p>
          <p className="value">22 Questions</p>
        </div>
      </div>
    </>
  )
}

export default TemplateDetails
