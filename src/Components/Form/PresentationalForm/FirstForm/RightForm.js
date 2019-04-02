import React from 'react';
import { RenderSelectField } from '../inputs/RenderSelectField';

export const RightForm = ({ visible, data, fetchCountrieForEntitie }) => {
  const [selectEntities, selectCountries] = data;
  if (true !== visible) {
    return null;
  }
  return (
    <div>
      <div>
        <form>
          <div>
            <RenderSelectField onChange={fetchCountrieForEntitie}  options={selectEntities.options}
              isLoading={selectEntities.isLoading} name={selectEntities.name} defaultValue={selectEntities.defaultValue}
              label={selectEntities.label} selected={selectEntities.defaultValue}/>

            <RenderSelectField onChange={fetchCountrieForEntitie}  options={selectCountries.options}
              isLoading={selectCountries.isLoading} name={selectCountries.name} defaultValue={selectCountries.defaultValue}
              label={selectCountries.label} selected={selectCountries.defaultValue}/>
          </div>
        </form>
      </div>
    </div>
  );
};


