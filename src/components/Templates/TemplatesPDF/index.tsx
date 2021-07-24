import { useDispatch } from 'react-redux'
import { setPdfs } from '../../../redux/actions/pdfActions'
import Pagination from '../../Pagination'
import Api from '../../Api'
import { useAppSelector } from '../../../app/hooks'
import _pdf from '../../../assets/images/pdfimage.png'
import './styles.scss'
import { useEffect, useMemo, useState } from 'react'
const TemplatesPDF = () => {
  const [currentPage, setCurrentPage] = useState(1)
  let PageSize = 10
  const dispatch = useDispatch()
  // pdfs
  const pdfs = useAppSelector((state: any) => state.allPdfs.pdfs)
  const currentPdfData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    return pdfs.slice(firstPageIndex, lastPageIndex)
  }, [PageSize, currentPage, pdfs])
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
      <div className="templates">
        <>
          {currentPdfData.map((pdf) => {
            return (
              <div key={Math.random()} className="templates__item">
                <img src={_pdf} alt="pdf" />
                <p>{pdf.name}</p>
                <small>{pdf.version}</small>
              </div>
            )
          })}
        </>
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={pdfs.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
        siblingCount={1}
      />
    </>
  )
}
export default TemplatesPDF
