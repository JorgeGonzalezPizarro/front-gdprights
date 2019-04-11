import React from 'react';
import { RenderSelectField } from '../inputs/RenderSelectField';
import EntitiesModalForm from './Entities/EntitiesModal/EntitiesModalForm';

export const RightForm = ({ visible, data, errors, touched, onChange, onCloseEntitiesList }) => {
  const [selectEntities] = data;

  if (visible !== true) {
    return null;
  }

  const getValue = (select) => {
    const value =  select.options.filter((option) => option.id === select.value)[0];
    return  value !== undefined ? value.name : select.label;
  };

  const getOption = (select) => {
    const value = select.options.filter((option) => option.id === select.value)[0];
    return value !== undefined ? value : undefined;
  };
  return (
    <>
          <EntitiesModalForm onClick={onChange} onCloseEntitiesList={onCloseEntitiesList} selectName ={selectEntities.name} isOpen isLoading={selectEntities.isLoading} selected={getOption(selectEntities)}>
            <RenderSelectField onChange={onChange}   selectName={selectEntities.name} errors={errors.filter((error) => error === selectEntities.name)[0]} touched ={touched}  options={selectEntities.options}
              isLoading={selectEntities.isLoading} name={selectEntities.name} defaultValue={selectEntities.defaultValue}
              label={selectEntities.label} value={getValue(selectEntities)}  selected={selectEntities.defaultValue}/>
          </EntitiesModalForm>
    </>
  );
};


