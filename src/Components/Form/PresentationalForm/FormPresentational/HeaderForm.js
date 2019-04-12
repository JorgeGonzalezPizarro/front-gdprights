import React from 'react';

const css = {
  color: '#76b39d',
  letterSpacing: '2px !important'
};
const css2 = {
  fontWeight: 900 ,
  color: '#76b39d',
  letterSpacing: '2px !important'
};


const HeaderForm = () => {


  return (
    <div className="headerFormContent">

      <a className="logo_isign_me" href="">GDP<span style={css}>R</span><span
        style={css2}>ights</span></a>
    </div>
  );
};

export default HeaderForm;