import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import type { RootState } from "../../../redux/store";
import {
  setTemplates,
  selectedTemplate,
} from "../../../redux/actions/templateActions";
import Pagination from "../../Pagination";
import _edit from "../../../assets/i/edit.svg";
import _preview from "../../../assets/i/preview.svg";
import _editinfo from "../../../assets/i/editInfo.svg";
import _duplicate from "../../../assets/i/duplicate.svg";
import _save from "../../../assets/i/save.svg";
import _view from "../../../assets/i/view.svg";
import Dialog from "../../Hidden";
import "./styles.scss";
import CustomerDocumentationForm from "../CustomerDocumentationForm";
import Api from "../../Api";
import { useAppSelector } from "../../../app/hooks";
const TemplatesList: React.FC = () => {
  let PageSize = 10;
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [showDocumentationForm, setShowDocumentationForm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // templates
  const templates = useAppSelector(
    (state: any) => state.allTemplates.templates
  );
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return templates.slice(firstPageIndex, lastPageIndex);
  }, [PageSize, currentPage, templates]);

  const toggle = () => {
    setShow(true);
    setShowDocumentationForm(false);
  };
  const toggleForm = () => {
    setShowDocumentationForm(true);
    //  setShow(false)
  };
  //fetching data from api
  const fetchTemplates = async () => {
    try {
      const response = await Api("/templates");
      console.log(response.data);
      dispatch(setTemplates(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTemplates();
  }, []);

  function EditMenu() {
    return (
      <div className="edit__menu">
        <div className="edit__menu--item">
          <img src={_preview} alt="" />
          <p>Preview</p>
        </div>
        <div className="edit__menu--item">
          <img src={_editinfo} alt="" />
          <p>Edit Template</p>
        </div>
        <div className="edit__menu--item">
          <img src={_duplicate} alt="" />
          <p>Duplicate Template</p>
        </div>
        <hr />
        <div className="edit__menu--item">
          <img src={_view} alt="" />
          <p>View Saved Documents</p>
        </div>
        <div className="edit__menu--item" onClick={toggleForm}>
          <img src={_save} alt="" />
          <p>Save Customer Document</p>
        </div>
        {showDocumentationForm ? (
          <Dialog _className="documentation__form--dialog">
            <CustomerDocumentationForm />
          </Dialog>
        ) : null}
      </div>
    );
  }
  return (
    <>
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
            {currentTableData.map((template) => {
              return (
                <tr key={Math.random()}>
                  <td>{template.name}</td>
                  <td>{template.version}</td>
                  <td>{template.type}</td>
                  <td>{template.status}</td>
                  <td>{template.date}</td>
                  <td className="dialog__anchor">
                    <img src={_edit} alt="" onClick={toggle} />
                    {show ? (
                      <Dialog _className="dialog">
                        <EditMenu />
                      </Dialog>
                    ) : null}
                  </td>
                </tr>
              );
            })}
            {/* <tr>
          <td>2020 Admin Summary</td>
          <td>1.0 - Current</td>
          <td>Admin Summary</td>
          <td>Completed</td>
          <td>01/30/20</td>
          <td className="dialog__anchor">
            <img src={_edit} alt="" onClick={toggle} />
            {show ? <Dialog _className="dialog"><EditMenu/></Dialog> : null}
          </td>
        </tr> */}
          </tbody>
        </table>
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={templates.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
        siblingCount = {1}
      />
    </>
  );
};
export default TemplatesList;
