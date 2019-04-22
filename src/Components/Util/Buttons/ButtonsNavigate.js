import React from 'react';

import NavigateNext from '@material-ui/icons/NavigateNext';
import NavigateBefore from '@material-ui/icons/NavigateBefore';
import Fab from '@material-ui/core/es/Fab/Fab';

export const ButtonsNavigateNext = (props) => {

  return(
    <><Fab {...props} onClick={()=>props.onClick()}  className="customButton buttonNavigateNext">
      <NavigateNext/>
    </Fab>
    </>
  );
};
export const ButtonsNavigateBefore = (props) => {

  return(
    <><Fab {...props} onClick={()=>props.onClick()}  className="customButton buttonNavigateBefore">
      <NavigateBefore/>
    </Fab>
    </>
  );
};
