import React, { Component } from 'react'
import { FormControl } from '@material-ui/core'
import Select from 'react-select';
import { alertUtil } from '../../../Util/alertUtil'

export const RenderSelectField = ({ isLoading , options , defaultValue , label , selected , name , onChange}) => {
    const handleChange = ({value}) => {
    alertUtil(value)
    const countries =   options.filter((entitie) => {
       return  entitie.name === value ? entitie.countries : null
      })[0];
      alertUtil(countries)

      return onChange (countries.countries)

    }
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
                  return  Object.assign({}, {name : option.name , value:  option.name })
                }
              )}
            />

          </div>        </FormControl>
      </div>


)}





