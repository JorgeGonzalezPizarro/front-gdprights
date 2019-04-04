import React  from 'react';
import { FormControl } from '@material-ui/core';
import Select from 'react-select';
import { alertUtil } from '../../../Util/alertUtil';

export const RenderSelectField = ({selectName, errors, touched, isLoading, options, defaultValue, label, selected, name, onChange, value}) => {
  alertUtil(value, 'value');
  const handleChange = ({name, value}) =>{
    onChange( name, value);
  };
  return (
    <div className="select-box__containe">
      <Select
        errorText={touched !== undefined &&  errors === name ? 'Required' : null}
        className="select-dropdown"
        value = { {value, label: value}}
        classNamePrefix="select"
        onChange={handleChange}
        isLoading={isLoading}
        name={selectName}
        options={options.map((option)=> {
          return  Object.assign({}, {name :selectName, label:option.name, value:  option.id, id : option.id });
        }
        )}
      />
    </div>


  );};





