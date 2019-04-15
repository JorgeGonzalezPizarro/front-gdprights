import Tooltip from '@material-ui/core/Tooltip';
import React from 'react';
import Zoom from '@material-ui/core/Zoom';

export const TooltipDisabled = ({stringToShow, isDisabled, children}) => {
  if(isDisabled)
  {
    return (<Tooltip placement="bottom"  TransitionComponent={Zoom}   title={stringToShow}><div>{children}</div></Tooltip>);

  }
  return children;



};