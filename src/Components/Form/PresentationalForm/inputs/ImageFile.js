import React, { useState } from 'react';
// Import React FilePond
import { FilePond, File, registerPlugin } from 'react-filepond';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';

import 'filepond/dist/filepond.min.css';

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginFileEncode) ;

export const ImageFile = ({name, onChange}) =>  {
  const [files, setFiles] = useState([]);


  const handleFiles = (file) => {
    console.log(file)
   const data = file.getFileEncodeDataURL()
   const ad =   file.getFileEncodeBase64String();

   console.log(data)
   console.log(ad)
   // const files =  fileItems.map((file)=>file);
    // const data = async (file) =>await file.getFileEncodeBase64String(file);
    // const decode = data(files[0]);
    // // onChange(name,files[0].getFileEncodeDataURL());
    // // onChange(name,files[0].getFileEncodeBase64String(files[0]));
    // console.log(decode.then(data => data));
  };

  return (
    <div className="App">
      <FilePond
        // files={files}
        allowMultiple
        id={name}
        // onaddFile={(err, item)=> {
        //   item.getFileEncodeDataURL()
        //  return item.getFileEncodeBase64String();
        //
        // }}
        allowFileEncode
        onupdatefiles={handleFiles}
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
    </div>
  );


};