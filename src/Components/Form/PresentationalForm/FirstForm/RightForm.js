import React from 'react';
import EntitiesModalForm from './Entities/EntitiesModal/EntitiesModalForm';
import { ApiError } from '../../../Errors/ApiError';
import { Error500 } from '../../../Errors/Error500';
import { alertUtil } from '../../../Util/alertUtil';

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
      <EntitiesModalForm  selectEntities={selectEntities} onChange={onChange}
        errors={errors} touched={touched} onCloseEntitiesList={onCloseEntitiesList}
        selectName={selectEntities.name} isOpen isLoading={selectEntities.isLoading}  errorApi ={selectEntities.error } errorMessage={selectEntities.errorMessage}
        selected={getOption(selectEntities)}>

      </EntitiesModalForm>
    </>
  );
};


