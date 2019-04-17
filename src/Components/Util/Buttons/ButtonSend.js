import React from 'react'
import { alertUtil } from '../alertUtil';
import SendIcon from '@material-ui/icons/Send';

export const ButtonSend = (props) => {
  return(
    <><button onClick={()=>props.onClick()}  className="customButton buttonAccept">
      {props.text}
      <SendIcon className="iconSend"/>
    </button>
    </>
  );
}


export const ButtonSendDisabled = (props) => {
  console.log(props)
  return(
    <button onClick={props.onClick} disabled={props.disabled} className="customButton buttonAcceptDisabled">
      {props.text}
      <SendIcon className="iconSend"/>

    </button>
  );

}