import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import Dialog from '@material-ui/core/Dialog';
import Link from '@material-ui/core/es/Link/Link';

export const FormEntities = ({selected}) => {
  if(selected === null)
  {return null;}
  return (
    <Form  inline className="formEntities">
      <FormGroup className="mb-4 mr-sm-4 mb-sm-0">

        <Label for="exampleEmail"   className="mr-sm-2">Nombre</Label>
        <Input type="email"  name="email" disabled id="exampleEmail" placeholder={selected.name}/>
      </FormGroup>

      <FormGroup className="mb-4 mr-sm-4 mb-sm-0">
        <Label for="exampleEmail" className="mr-sm-2">Persona legal / física</Label>
        <Input type="email" name="email" disabled id="exampleEmail" placeholder={selected.legalPerson}/>
      </FormGroup>
      <FormGroup className="mb-4 mr-sm-4 mb-sm-0">
        <Label for="exampleEmail" className="mr-sm-2">Email</Label>
        <Input type="email" name="email" disabled id="exampleEmail" placeholder={selected.email}/>
      </FormGroup>
      <FormGroup className="mb-4 mr-sm-4 mb-sm-0">
        <Label for="exampleEmail" className="mr-sm-2">Email secundario</Label>
        <Input type="email" name="email"  disabled id="exampleEmail" placeholder={selected.emailSec}/>
      </FormGroup>
      <FormGroup className="mb-4 mr-sm-4 mb-sm-0">
        <Label for="exampleEmail" className="mr-sm-2">CIF</Label>
        <Input type="email" name="email" disabled id="exampleEmail" placeholder={selected.cif}/>
      </FormGroup>
      <FormGroup className="mb-4 mr-sm-4 mb-sm-0">
        <Label for="exampleEmail" className="mr-sm-2">Información</Label>
        <Link href={selected.moreInfo}> {selected.moreInfo} </Link>
      </FormGroup>
    </Form>

  );
};