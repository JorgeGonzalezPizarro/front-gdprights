import React from 'react';
import { alertUtil } from '../alertUtil';

export const ButtonAccept = (props) => {
  return(
    <><button onClick={()=>props.onClick()}  className="customButton buttonAccept">
      {props.text}
    </button>
      </>
  );
};


export const ButtonAcceptDisabled = (props) => {
  return(
    <button onClick={props.onClick} disabled={props.disabled} className="customButton buttonAcceptDisabled">
      {props.text}

    </button>
  );

};