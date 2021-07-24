import { useEffect, useState } from 'react'
import { setPdfs } from '../../store/actions/pdfActions'
import Api from '../Api'
import Form from '../Form'
import SearchResults from './SearchResults'
import './styles.scss'
import TemplatesList from './TemplatesList'
import TemplatesPDF from './TemplatesPDF'

type ITemplates = {
  children?: any
}
const Templates = (props: ITemplates) => {
  const [view, setView] = useState('grid')
  const { children } = props
  //fetching pdfs from api
  const fetchPdfs = async () => {
    try {
      const response = await Api('/pdfs')
      dispatch(setPdfs(response.data))
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchPdfs()
  }, [])

  return (
    <>
      <div className="templates-layout">
        <Form onSetView={setView} activeView={view} />
        {view === 'grid' && <TemplatesPDF />}
        {view === 'list' && <TemplatesList />}
        {view === 'search' && <SearchResults />}
      </div>
    </>
  )
}
export default Templates
function dispatch(arg0: any) {
  throw new Error('Function not implemented.')
}
