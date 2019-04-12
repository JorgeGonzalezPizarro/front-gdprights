import React from 'react';

const Header = ( props) => {
  return (

    <div className="headerNavbar">
      {props.children}
    </div>
  );


};


export default Header;