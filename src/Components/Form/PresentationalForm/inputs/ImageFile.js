import React from 'react';
// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';

import 'filepond/dist/filepond.min.css';

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import { TooltipDisabled } from './TooltipDisabled';
import { Base64ToBlob } from '../../../Util/Base64ToBlob';
import { alertUtil } from '../../../Util/alertUtil';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginFileEncode, FilePondPluginFileValidateType);

export const ImageFile = ({ value = '', name, onChange, label, disabled, errorTextDisabled }) => {

  const handleFiles1 = async (file) => {
    if (file !== null) {
      if (file[0] !== undefined) {
        let ad = null;
        try {
          ad = await file[0].getFileEncodeBase64String();
        } catch (e) {
        }
        return ad;
      }
    }
  };
  const handleFile = async (file) => {
    const d = await handleFiles1(file);
    if (d !== null && d !== undefined) {
      onChange(name, d, true);
    }
  };

  const handleRemove = () => onChange(name, '', true);
  return (
    <>
      <TooltipDisabled stringToShow={errorTextDisabled} isDisabled={disabled} children={
        <FilePond
          allowMultiple={false}
          disabled={disabled}
          id={name}
          acceptedFileTypes={['image/png', 'image/jpeg']}
          fileValidateTypeLabelExpectedTypes={'Expects {allButLastType} or {lastType}'}
          allowFileEncode
          onupdatefiles={handleFile}
          beforeRemoveFile={handleRemove}
          labelIdle={`<span class="filepond--label-action">${label}</span>`}
        />
      }/>
    </>

  );
};

const files = (value) => {
  return  Array.from({
    source: Base64ToBlob(value, value.length),
    options: {
      type: 'local'
    }

  });
};