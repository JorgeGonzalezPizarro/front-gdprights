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
  //const [files, setFiles] = useState([]);


  const handleFiles1 = async (file) => {
    if(file !== null) {
      if (file[0] !== undefined) {
        let ad = null;
        try {
          ad = await file[0].getFileEncodeBase64String();
        } catch (e) {
        }
        return ad
      }
    }
  };
  const handleFile = async (file) => {
   const d=  await handleFiles1(file);
   if(d !== null && d !== undefined)
   {
     onChange(name,d,true)
   }
  }

  const handleRemove = () => onChange(name,'',true)

  return (
    <div className="App">
      <FilePond
         //files={files}
        allowMultiple={false}
        id={name}
        allowFileEncode
        onupdatefiles={handleFile}
        beforeRemoveFile = {handleRemove}
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
    </div>
  );


};