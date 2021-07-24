import { useState } from 'react'
import './styles.scss'

const FileUploadInput: React.FC = () => {
  const [fileName, setFileName] = useState('')

  const setFile = (event) => {
    setFileName(event.target.files[0].name)
  }

  return (
    <div className="upload">
      <input type="file" onChange={setFile} />
      <div className="dummy-upload">
        {fileName.length === 0 ? (
          <>
            <p className="drag-and-drop-message">Drag and drop file here</p>
            or
            <p className="select-file-message"> select file</p>
          </>
        ) : (
          <p>{fileName}</p>
        )}
      </div>
    </div>
  )
}

export default FileUploadInput
