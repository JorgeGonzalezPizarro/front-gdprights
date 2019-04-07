import React from 'react'
import { Button } from 'reactstrap';
export const ButtonEmpresas = (props) => {
  return(
    <Button  className="btn btn-primary1 btn-sm btn-block" color="link" {...props}  >{props.text}</Button>
  )
}