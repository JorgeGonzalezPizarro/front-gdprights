import React, { Component } from 'react';
import { Field } from 'react-redux-form';
import Button from '@material-ui/core/es/Button/Button';
import { RenderInputTextField } from './inputs/RenderInputTextField';
import { deepEqual } from '../../Util/deepEqual';
import { LeftForm } from './FirstForm/LeftForm';
import { RightForm } from './FirstForm/RightForm';
import { TutorForm } from './FirstForm/TutorForm';

export default class ThirdForm extends Component {
  constructor (props) {
    super(props);
    const { thirdFormData: { firstForm} , currentStep } = props;
    this.state = {
      currentForm : 1,
      ...{ firstForm, currentStep },
      requiredFields: props.thirdFormData.firstForm.filter((input, key) => input.required === true ? input.name : null).map((input) => input.name)
      , errors : [],
      touched : [],

      visibleSecondForm : false,
      isValid : false};
  }

  render () {
    console.log(this.state)
    const isRequired = (input) => this.state.requiredFields.filter(req => req===input);
    const isTouched = (input) => this.state.touched.filter(req => req===input);

    const handleError = (firstForm, secondForm, name, value) => {
      const errorCopy = this.state.errors.map((e) => e );
      if(errorCopy.length === 0 || errorCopy.indexOf(name) === -1)
      {
        errorCopy.push(name);
      }
      const error =   errorCopy.filter((e) => {
        return e === name;
      })[0];

      if(error && isTouched(error) && isRequired(error) && value.length !== 0)
      {
        const newError =errorCopy.filter(e => e !== error);
        this.setState({
          errors: newError
        });
      }
      else {
        this.setState({
          errors: errorCopy
        });
      }
    };


    const handleChange = ( name, value, firstForm = false) => {
      console.log(name,value)

      if (firstForm === true) {
        const stateCopy = this.state.firstForm.map((data) => data);
        const {touched} = this.state;
        const add = () => touched.indexOf(name) === -1 ? touched.push(name) : null;
        add();
        const changeState = async () => await   stateCopy.filter((input) => input.name === name ? input.value = value : null);
        this.setState({
          ...this.state,
          firstForm: stateCopy
        });
        changeState().then(() => handleError(true, false, name, value)).then(()=>

          this.setState({
            ...this.state,
            isValid : enableSend()
          }));
      }
      else {
        const stateCopy = this.state.secondForm.map((data) => data);
        const {touched} = this.state;
        const add = () => touched.indexOf(name) === -1 ? touched.push(name) : null;
        add();
        stateCopy.filter((input) => input.name === name ? input.value = value : null);
        const changeState = async () => await this.setState({
          ...this.state,
          secondForm: stateCopy
        });
        changeState().then(() => handleError(false, true, name, value)).then(()=>

          this.setState({
            ...this.state,
            isValid : enableSend()
          }));
      }
    };

    const submitFirstForm = () => {
      const requiredFields = this.state.requiredFields.concat(this.state.secondForm.filter((input) => input.required = true).map((input) => input.name));


      console.log(requiredFields);
      const setState = async () => await this.setState({
        ...this.state,
        currentForm : !this.state.visibleSecondForm === true ? 2 : 1,
        visibleSecondForm: !this.state.visibleSecondForm,
        requiredFields,
      });
      setState().then(()=>{
        this.setState({
          isValid : enableSend()
        });
      });

    };

    const submitSecondForm = () => {
      const requiredFields = this.state.firstForm.filter((input) => input.required === true).map((input) => input.name);

      const setState = async () => {
        return await this.setState({
          ...this.state,
          visibleSecondForm: !this.state.visibleSecondForm,
          currentForm: !this.state.visibleSecondForm === false ? 1 : 2,
          requiredFields
        });
      };

      setState().then(() => {

        this.setState({
          isValid: enableSend()
        });

      });
    };

    const handleData = (data) => {
      if (!this.state.visibleSecondForm) {
        submitFirstForm(data);
      } else {
        submitSecondForm(data);
      }

    };



    const enableSend = () => {
      const enableAll = this.state.firstForm.map((input) => {
        if (this.state.requiredFields.includes(input.name)) {
          if (!this.state.errors.includes(input.name)) {
            return input.value.length > 0;
          }
          return false;
        }
        return true;
      }).concat(this.state.secondForm.map((input) => {
        if (this.state.requiredFields.includes(input.name)) {
          if (!this.state.errors.includes(input.name) ) {
            return  input.value.length > 0;
          }
          return false;
        }
        return true;
      }));



      return !enableAll.includes(false);


    };
    const submit = () => {
      if(this.state.isValid){
        this.props.submit(this.state.firstForm, this.state.secondForm, this.state.currentForm);
      }
    };
    return (
      <div>
        <form>
          <div>
            {
              this.state.firstForm.map((input, key) => {
                return(  <LeftForm onChange= {handleChange} key = {key} input={input} requiredFields={this.state.requiredFields}
                  error={this.state.errors.filter((error) => error === input.name)[0]}
                  touched={this.state.touched.filter((touched) => touched===input.name)[0]}
                  onClickVisibleRightForm={handleData}/>
                );})
            }
          </div>
          <Button color='secondary' onClick={this.props.previous}>Volver</Button>
          <Button disabled={!this.state.isValid} onClick={submit}>Enviar
          </Button>
        </form>
      </div>
    );
  }

}