import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import Dialog from '@material-ui/core/Dialog';
import Link from '@material-ui/core/es/Link/Link';

export const FormEntities = (props) => {
  return (
    <Form inline>
      <FormGroup className="mb-4 mr-sm-4 mb-sm-0">

        <Label for="exampleEmail" className="mr-sm-2">Nombre</Label>
        <Input type="email"  name="email" disabled id="exampleEmail" placeholder={props.name}/>
      </FormGroup>

      <FormGroup className="mb-4 mr-sm-4 mb-sm-0">
        <Label for="exampleEmail" className="mr-sm-2">Persona legal / física</Label>
        <Input type="email" name="email" disabled id="exampleEmail" placeholder={props.legalPerson}/>
      </FormGroup>
      <FormGroup className="mb-4 mr-sm-4 mb-sm-0">
        <Label for="exampleEmail" className="mr-sm-2">Email</Label>
        <Input type="email" name="email" disabled id="exampleEmail" placeholder={props.email}/>
      </FormGroup>
      <FormGroup className="mb-4 mr-sm-4 mb-sm-0">
        <Label for="exampleEmail" className="mr-sm-2">Email secundario</Label>
        <Input type="email" name="email"  disabled id="exampleEmail" placeholder={props.emailSec}/>
      </FormGroup>
      <FormGroup className="mb-4 mr-sm-4 mb-sm-0">
        <Label for="exampleEmail" className="mr-sm-2">CIF</Label>
        <Input type="email" name="email" disabled id="exampleEmail" placeholder={props.cif}/>
      </FormGroup>
      <FormGroup className="mb-4 mr-sm-4 mb-sm-0">
        <Label for="exampleEmail" className="mr-sm-2">Información</Label>
        <Link href={props.moreInfo}> {props.moreInfo} </Link>
      </FormGroup>
    </Form>

  );
};