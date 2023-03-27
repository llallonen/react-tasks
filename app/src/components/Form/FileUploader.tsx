import React, { RefObject } from 'react';

interface FileUploaderProps {
  fileUploadRef: RefObject<HTMLInputElement>;
}

class FileUploader extends React.Component<FileUploaderProps> {
  constructor(props: FileUploaderProps) {
    super(props);
  }
  render() {
    return (
      <label className="form__item file">
        {'Upload photo of this pokemon'}
        <input
          type="file"
          className="form__input"
          ref={this.props.fileUploadRef}
          accept=".jpg, .jpeg, .png"
        ></input>
      </label>
    );
  }
}

export default FileUploader;
