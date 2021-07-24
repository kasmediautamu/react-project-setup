import Button from '../../BaseForm/Button'
import './styles.scss'
const AdminSummaryHeader = () => {
  return (
    <div className="admin-header">
      <div className="left">
        <p>2021 Admin Summary</p>
      </div>
      <div className="right">
        <Button primary="button">Preview</Button>
        <Button primary="button">More actions...</Button>
      </div>
    </div>
  )
}
export default AdminSummaryHeader
