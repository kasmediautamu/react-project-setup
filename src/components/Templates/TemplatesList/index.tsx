import React from 'react'
import _edit from '../../../assets/i/edit.svg'
import './styles.scss'
const TemplatesList:React.FC =()=>{
 return (
     <div className="table__wrapper">
         <table>
         <tr>
             <th>template name</th>
             <th>version</th>
             <th>document type</th>
             <th>status</th>
             <th>date</th>
             <th></th>
         </tr>
         <tr>
             <td>2020 Admin Summary</td>
             <td>1.0 - Current</td>
             <td>Admin Summary</td>
             <td>Completed</td>
             <td>01/30/20</td>
             <td><img src={_edit} alt="" /></td>
         </tr>
         <tr>
             <td>2020 Admin Summary</td>
             <td>1.0 - Current</td>
             <td>Admin Summary</td>
             <td>Completed</td>
             <td>01/30/20</td>
             <td><img src={_edit} alt="" /></td>
         </tr>
     </table>
     </div>
 )
}
export default TemplatesList