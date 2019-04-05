import React from 'react';
import { RenderSelectField } from '../inputs/RenderSelectField';

export const RightForm = ({ visible, data, fetchCountrieForEntitie, errors, touched, onChange,  }) => {
  const [selectEntities, selectCountries] = data;

  if (visible !== true) {
    return null;
  }
  const handleMultipleChange= (name, value) => {
    const getCountries = async () => fetchCountrieForEntitie(value);
    getCountries().then(() => onChange(name, value));
  };
  const getValue = (select) => {
    const value =  select.options.filter((option) => option.id === select.value)[0];
    return  value !== undefined ? value.name : select.label;
  };
  return (
    <div>
      <form>
        <div>
          <RenderSelectField onChange={handleMultipleChange}  selectName={selectEntities.name} errors={errors.filter((error) => error === selectEntities.name)[0]} touched ={touched}  options={selectEntities.options}
            isLoading={selectEntities.isLoading} name={selectEntities.name} defaultValue={selectEntities.defaultValue}
            label={selectEntities.label} value={getValue(selectEntities)}  selected={selectEntities.defaultValue}/>
          {/* <RenderSelectField onChange={onChange}  options={selectCountries.options} selectName={selectCountries.name} */}
          {/*  isLoading={selectCountries.isLoading} name={selectCountries.name} defaultValue={selectCountries.defaultValue} */}
          {/*  label={selectCountries.label} value={getValue(selectCountries)} selected={selectCountries.defaultValue}/> */}
        </div>
      </form>
    </div>
  );
};


