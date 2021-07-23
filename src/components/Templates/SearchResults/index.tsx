import _edit from "../../../assets/i/edit.svg";
import './styles.scss'
const SearchResults =()=>{
    return(
        <div className="table__wrapper">
            <table>
          <thead>
            <tr>
              <th>template name</th>
              <th>version</th>
              <th>document type</th>
              <th>status</th>
              <th>date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
                <tr key={Math.random()}>
                  <td>name</td>
                  <td>version</td>
                  <td>template</td>
                  <td>status</td>
                  <td>date</td>
                  <td className="dialog__anchor">
                    <img src={_edit} alt=""  />
                  </td>
                </tr>
          </tbody>
          
        </table>
        </div>
    )
}
export default SearchResults