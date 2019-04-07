import React  from 'react';
import { FormControl } from '@material-ui/core';
import Select from 'react-select';
import { FormGroup } from '../FormPresentational/FormGroup';

export const RenderSelectField = ({selectName, errors, touched, isLoading, options,  name, onChange, value}) => {
  const handleChange = ({name, value}) =>{
    onChange( name, value);
  };
  return (
    <FormGroup >
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
    </FormGroup>


  );};





