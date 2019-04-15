import React from 'react';
import { RenderSelectField } from '../inputs/RenderSelectField';
import EntitiesModalForm from './Entities/EntitiesModal/EntitiesModalForm';

export const RightForm = ({ visible, data, errors, touched, onChange, onCloseEntitiesList }) => {
  const [selectEntities] = data;

  if (visible !== true) {
    return null;
  }



  const getOption = (select) => {
    const value = select.options.filter((option) => option.id === select.value)[0];
    return value !== undefined ? value : undefined;
  };



  return (
    <>
          <EntitiesModalForm isLoading={selectEntities.isLoading} selectEntities={selectEntities} onClick={onChange} errors={errors} touched={touched}  onCloseEntitiesList={onCloseEntitiesList} selectName ={selectEntities.name} isOpen isLoading={selectEntities.isLoading} selected={getOption(selectEntities)}>

          </EntitiesModalForm>
    </>
  );
};


