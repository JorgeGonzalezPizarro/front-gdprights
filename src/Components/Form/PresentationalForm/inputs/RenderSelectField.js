import React, { Component } from 'react';
import { FormControl } from '@material-ui/core';
import Select from 'react-select';
import { alertUtil } from '../../../Util/alertUtil';

export const RenderSelectField = ({ isLoading, options, defaultValue, label, selected, name, onChange}) => {
  const handleChange = ({value, id}) =>{
    alertUtil(id);
    onChange(id);
  };


  return (
    <div>
      <FormControl>
        <div className="container">
          <Select
            className="select-dropdown"
            classNamePrefix="select"
            defaultValue={defaultValue}
            onChange={handleChange}
            isLoading={isLoading}
            isClearable={true}
            name="color"

            options={options.map((option)=> {
              return  Object.assign({}, {name : option.name, value:  option.name, id : option.id });
            }
            )}
          />

        </div>
      </FormControl>
    </div>


  );};





