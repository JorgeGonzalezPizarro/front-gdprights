import React, { Component } from 'react'
import {RenderSelectField} from '../inputs/RenderSelectField'
import { alertUtil } from '../../../Util/alertUtil'

export const RightForm = ({visible,data}) => {

    const countriesArray = [];
    if (true !== visible) {
      return null;
    }
    const onChangeEntities= (countries) => {
      alertUtil(countries)
      data.filter((input) =>{
        alertUtil(input)
        input.options =  input.name === 'countries' ? countries  : ["a"]
      });
    }
    return (
      <div>
        <div>
          <form>
            <div>
              { data.map((input, key) => {
                  return <RenderSelectField onChange={onChangeEntities} key={key} options={input.options} isLoading={input.isLoading} name={input.name} defaultValue={input.defaultValue} label={input.label} selected={input.defaultValue}/>
                })
              }
            </div>
          </form>
        </div>
      </div>
    )
}