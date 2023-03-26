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
      <label>
        {'Upload photo of this pokemon'}
        <input type="file" ref={this.props.fileUploadRef} accept=".jpg, .jpeg, .png"></input>
      </label>
    );
  }
}

export default FileUploader;
