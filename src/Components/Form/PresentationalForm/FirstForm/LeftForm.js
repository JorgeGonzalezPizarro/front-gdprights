import React from 'react';
import { RenderInputTextField } from '../inputs/RenderInputTextField';
import Button from '@material-ui/core/es/Button/Button';
export const LeftForm = ({data, errors,  touched,  onClickVisibleRightForm, onChange}) => {
  const handleChange = (e ) => {
    e.preventDefault();
    const { value, name } = e.target;
    onChange( name, value, true);

  };
  return (
    <div>
      <form >
        <div>
          <RenderInputTextField
            name={data.filter((input) => input.name === 'customEntityName')[0].name}
            label={data.filter((input) => input.name === 'customEntityName')[0].label}
            value={data.filter((input) => input.name === 'customEntityName')[0].value}
            onChange={handleChange}
            touched = {touched.filter((input) => input === 'customEntityName')[0]}
            disabled = {data.filter((input) => input.name === 'customEntityName')[0].disabled}
            error = {errors.filter((error) => error === 'customEntityName' )[0]}/>
          <RenderInputTextField
            name={data.filter((input) => input.name === 'customEntityEmail')[0].name}
            label={data.filter((input) => input.name === 'customEntityEmail')[0].label}
            value={data.filter((input) => input.name === 'customEntityEmail')[0].value}
            onChange={handleChange}
            touched = {touched.filter((input) => input === 'customEntityEmail')[0]}
            error = {errors.filter((error) => error === 'customEntityEmail' )[0]}
            disabled = {data.filter((input) => input.name === 'customEntityEmail')[0].disabled}
          />
          <RenderInputTextField
            name={data.filter((input) => input.name === 'customEntityCommercialName')[0].name}
            label={data.filter((input) => input.name === 'customEntityCommercialName')[0].label}
            value={data.filter((input) => input.name === 'customEntityCommercialName')[0].value}
            onChange={handleChange}
            touched = {touched.filter((input) => input === 'customEntityCommercialName')[0]}
            error = {errors.filter((error) => error === 'customEntityCommercialName' )[0]}
            disabled = {data.filter((input) => input.name === 'customEntityCommercialName')[0].disabled}
          />
        </div>
      </form>
    </div>
  );
};
