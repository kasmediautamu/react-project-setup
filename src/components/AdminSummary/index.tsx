import AdminSummaryHeader from './Header'
import './styles.scss'
type IAdminSummary = {
  children?: any
}
const AdminSummary = (props: IAdminSummary) => {
  const { children } = props
  return (
    <div className="admin-layout">
      <AdminSummaryHeader />
      {children}
    </div>
  )
}
export default AdminSummary
