import React from 'react';
import { alertUtil } from '../alertUtil';

export const ButtonAccept = (props) => {
  console.log('11');
  return(
    <><button onClick={()=>props.onClick()}  className="customButton buttonAccept">
      {props.text}
    </button>
      </>
  );
};


export const ButtonAcceptDisabled = (props) => {
  console.log(props);
  return(
    <button onClick={props.onClick} disabled={props.disabled} className="customButton buttonAcceptDisabled">
      {props.text}

    </button>
  );

};