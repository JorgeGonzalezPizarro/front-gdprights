import React  from 'react';
import { FormControl } from '@material-ui/core';
import Select from 'react-select';
import { FormFieldSet } from '../FormPresentational/FormFieldSet';
import FormHelperText from '@material-ui/core/es/FormHelperText/FormHelperText';

export const RenderSelectField = ({selectName, errors, touched, isLoading, options,  name, onChange, value , errorApi}) => {
  console.log(errorApi)
  const handleChange = ({name, value}) =>{
    onChange( name, value);
  };

  return (
    <>
    <FormFieldSet >
      <Select
        errorText={touched !== undefined &&  errors === name ? 'Required' : null}
        className="select-dropdown"
        value = { {value, label: value}}
        onChange={handleChange}
        isLoading={isLoading}
        name={selectName}
        options={options.map((option)=> Object.assign({}, {name :selectName, label:option.name, value:  option.id, id : option.id })
        )}
      />
    </FormFieldSet>

      {errorApi !== null ? <FormHelperText error>{errorApi.errorMessage}</FormHelperText> : null}
</>

  );};





