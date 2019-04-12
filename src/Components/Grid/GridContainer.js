import React from 'react';

const  GridContainer = (props) => {

  return (
    <div className="mainGrid">
      <div className="wrapperMain">

        {props.children}

      </div>
    </div>


  );
};


export default GridContainer;