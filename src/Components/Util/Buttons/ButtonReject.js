import React from 'react';

export const ButtonReject = (props) => {

  return (
    <button onClick={props.onClick} disabled={props.disabled} className="customButton buttonReject">
      {props.text}

    </button>
  );
};