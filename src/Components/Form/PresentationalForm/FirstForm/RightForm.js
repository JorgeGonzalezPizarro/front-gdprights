import React from 'react';
import EntitiesModalForm from './Entities/EntitiesModal/EntitiesModalForm';

export const RightForm = ({ visible, data, errors, touched, onChange, onCloseEntitiesList }) => {
  const [selectEntities] = data;
  console.log(selectEntities);

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
        selectName={selectEntities.name} isOpen isLoading={selectEntities.isLoading}
        selected={getOption(selectEntities)}>

      </EntitiesModalForm>
    </>
  );
};


