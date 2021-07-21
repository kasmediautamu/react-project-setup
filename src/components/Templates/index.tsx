import Footer from '../Footer'
import Form from '../Form'
import './styles.scss'

type ITemplates ={
children:any
}
const Templates = (props:ITemplates) => {
    const {children} = props
    return (
        <>
        <div className="templates-layout">
            <Form />
            {children}
        </div>
        <Footer />
        </>
    )
}
export default Templates