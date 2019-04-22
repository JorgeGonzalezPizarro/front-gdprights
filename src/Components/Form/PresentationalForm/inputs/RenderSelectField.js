import React  from 'react';
import { FormControl } from '@material-ui/core';
import Select from 'react-select';
import FormHelperText from '@material-ui/core/es/FormHelperText/FormHelperText';
import { FormGroup } from 'reactstrap';
import { FormFieldSet } from '../FormPresentational/FormFieldSet';

export const RenderSelectField = ({selectName, errors, touched, isLoading, options,  name, onChange, value, errorApi, errorMessage}) => {
  console.log(errorApi);
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
        noOptionsMessage={()=>errorApi !== null ? errorMessage : null}
        isLoading={isLoading}
        name={selectName}
        options={options.map((option)=> Object.assign({}, {name :selectName, label:option.name, value:  option.id, id : option.id })
        )}
      />
    </FormFieldSet>

</>

  );};





