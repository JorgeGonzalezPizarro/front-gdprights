import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Tooltip from '@material-ui/core/Tooltip';
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
          <img src={this.props.value} height={100} width={100} alt={this.props.name}/>
          <a href="#" onClick={() => this.props.onChange(this.props.name, '', true)}> <FontAwesomeIcon icon={faTrash}/></a>
        </>
      );
    };
    const toolTip = (string, isDisabled, children) => {
      if (isDisabled) {
        return <Tooltip title={string}>{children()}</Tooltip>;
      }

      return children();

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



    console.log(this.props)
    return (
      <div className={this.props.disabled  ? 'marginBotton_Top' : 'margin_bottom'}>
        <TooltipDisabled isDisabled={this.props.disabled} stringToShow={this.props.errorTextDisabled}
          children={<button
            className={this.props.disabled ? 'button_primary_gdprights_disabled' : 'button_primary_gdprights'}
            disabled={this.props.disabled}
            onClick={handleOpen}> {this.props.label} </button>}/>
      </div>
    );
  }

}