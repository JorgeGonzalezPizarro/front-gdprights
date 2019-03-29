import React, { Component, Fragment } from 'react';

import Select from 'react-select';
import { colourOptions } from './Data'
import { Note } from './Note'

const Checkbox = props => <input type="checkbox" {...props} />;



export default class SingleSelect extends Component {
  state = {

  };

  toggleClearable = () =>
    this.setState(state => ({ isClearable: !state.isClearable }));

  toggleLoading = () =>
    this.setState(state => ({ isLoading: !state.isLoading }));
  toggleSearchable = () =>
    this.setState(state => ({ isSearchable: !state.isSearchable }));
  render() {
    const {
      isClearable,
      isSearchable,
      isLoading,
    } = this.state;
    return (
      <div className="container">
        <Select
          className="select-dropdown"
          classNamePrefix="select"
          defaultValue={colourOptions[0]}
          isLoading={isLoading}
          isClearable={isClearable}
          isSearchable={isSearchable}
          name="color"
          options={colourOptions}
        />
        <Note Tag="label">
          <Checkbox
            checked={isClearable}
            onChange={this.toggleClearable}
            id="cypress-single__clearable-checkbox"
          />
          Clearable
        </Note>
        <Checkbox
          checked={isLoading}
          onChange={this.toggleLoading}
          id="cypress-single__clearable-checkbox"
        />
        Loading
        <Note Tag="label" style={{ marginLeft: '1em' }}>
          <Checkbox
            checked={isSearchable}
            onChange={this.toggleSearchable}
            id="cypress-single__searchable-checkbox"
          />
          Searchable
        </Note>



      </div>
    );
  }
}