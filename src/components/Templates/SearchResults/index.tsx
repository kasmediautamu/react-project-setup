import _edit from "../../../assets/i/edit.svg";
import './styles.scss'
const SearchResults =()=>{
    return(
        <div className="table__wrapper">
            <p className="results__description">4 Templates found for <span>"Consumer Directed Health Care"</span></p>
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
                  <td className="td__blue">name</td>
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