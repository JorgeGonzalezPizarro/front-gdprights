import React from 'react';
import { RenderSelectField } from '../inputs/RenderSelectField';

export const RightForm = ({ visible, data, errors, touched, onChange  }) => {
  const [selectEntities] = data;

  if (visible !== true) {
    return null;
  }

  const getValue = (select) => {
    const value =  select.options.filter((option) => option.id === select.value)[0];
    return  value !== undefined ? value.name : select.label;
  };
  return (
    <>

          <RenderSelectField onChange={onChange}  selectName={selectEntities.name} errors={errors.filter((error) => error === selectEntities.name)[0]} touched ={touched}  options={selectEntities.options}
            isLoading={selectEntities.isLoading} name={selectEntities.name} defaultValue={selectEntities.defaultValue}
            label={selectEntities.label} value={getValue(selectEntities)}  selected={selectEntities.defaultValue}/>

    </>
  );
};


