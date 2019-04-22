import React from 'react';
import SendIcon from '@material-ui/icons/Send';
import { alertUtil } from '../alertUtil';

export const ButtonSend = (props) => {
  return(
    <><button onClick={()=>props.onClick()}  className="customButton buttonAccept">
      {props.text}
      <SendIcon className="iconSend"/>
    </button>
    </>
  );
};


export const ButtonSendDisabled = (props) => {
  return(
    <button onClick={props.onClick} disabled={props.disabled} className="customButton buttonAcceptDisabled">
      {props.text}
      <SendIcon className="iconSend"/>

    </button>
  );

};