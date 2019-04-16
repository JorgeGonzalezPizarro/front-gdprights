import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import CameraInputField from './CameraInputField';

import ModalCamera from './ModalCamera';
import { TooltipDisabled } from './TooltipDisabled';

library.add(faTrash);

export default class ButtonCameraAccess extends Component {

  constructor (props) {
    super(props);
    const { open } = props;
    this.state = {
      open
    };
  }

  render () {
    const image = () => {

      return (
        <>
          <div className="container_dni">
            <img src={this.props.value} className="image_dni" width="168px" alt={this.props.name}/>

            <div className="middle">
              <div className="text_dni">
                <a href="#" onClick={() => this.props.onChange(this.props.name, '', true)}> x </a>
              </div>
            </div>
          </div>
        </>
      );
    };

    const handleOpen = () => {
      this.setState({
        open: !this.state.open
      });
    };

    if (this.state.open) {
      return (<ModalCamera> <CameraInputField handleClose={handleOpen} onChange={this.props.onChange} {...this.props}/>
      </ModalCamera>);

    }

    return (
      <div className={this.props.disabled ? 'marginBotton_Top' : 'margin_bottom'}>
        <TooltipDisabled isDisabled={this.props.disabled} stringToShow={this.props.errorTextDisabled}
                         children={<>
                           <button
                             className={this.props.disabled ? 'button_primary_gdprights_disabled' : 'button_primary_gdprights'}
                             disabled={this.props.disabled}
                             onClick={handleOpen}> {this.props.label} </button>
                           {this.props.value !== '' ? image() : null}
                         </>
                         }/>

      </div>
    );
  }

}