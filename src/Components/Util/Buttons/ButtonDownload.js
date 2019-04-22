import React from 'react';
import CloudDownload from '@material-ui/icons/CloudDownload';

export const ButtonDownload = (props) => {
  return(
    <><button onClick={()=>props.onClick()}  className="customButton buttonDownload">
      {props.text}
      <CloudDownload className="iconSend"/>
    </button>
    </>
  );
};

