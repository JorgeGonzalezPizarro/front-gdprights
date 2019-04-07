import React, { Component } from 'react';
import {LeftForm} from './FirstForm/LeftForm';
import { RightForm } from './FirstForm/RightForm';
import { deepEqual } from '../../Util/deepEqual';
import { alertUtil } from '../../Util/alertUtil';
import { FormGroup } from './FormPresentational/FormGroup';
import { ButtonEmpresas } from './inputs/ButtonEmpresas';
import Button from '@material-ui/core/Button';

export default class FirstForm extends Component {
  constructor (props) {
    super(props);
    const { firstFormData: { firstForm, secondForm }, currentStep, getEntities } = props;
    this.state = {
      currentForm : 1,
      ...{ firstForm, secondForm, currentStep, getEntities },
      requiredFields: props.firstFormData.firstForm.filter((input, key) => input.required === true ? input.name : null).map((input) => input.name)
      , errors : [],
      touched : [],
      visibleSecondForm : false,
      //isValid :this.enableSend
    };

    this.enableSend = this.enableSend.bind(this)
  }

  componentDidMount () {
    const errors = this.state.requiredFields.filter(field => {
      return this.state.firstForm.filter((input) => {
        return input.name === field && input.value.length === 0;
      })[0];
    });
    this.setState({
      errors,
      isValid : this.enableSend()
    });
  }

  componentWillReceiveProps (nextProps, nextContext) {

    const { firstFormData: { firstForm, secondForm }, currentStep, getEntities } = nextProps;
    if (!deepEqual(secondForm, this.state.secondForm)){
      this.setState(
        {
          ...this.state,
          secondForm
        }
      );
    }
  }
   enableSend = () => {
    let enableAll = [];
    switch (this.state.currentForm) {
      case 1:
        enableAll = this.state.firstForm.map((input) => {
          if (this.state.requiredFields.includes(input.name)) {
            if (!this.state.errors.includes(input.name)) {
              return input.value.length > 0;
            }
            return false;
          }
          return false;

        });

        return !enableAll.includes(false);

      case 2:
        enableAll = this.state.secondForm.map((input) => {
          if (this.state.requiredFields.includes(input.name)) {

            if (!this.state.errors.includes(input.name)) {
              return input.value.toString().length > 0;
            }
            return false;
          }
          return false;

        });
        return !enableAll.includes(false);
    }
  };


  render () {
    const changeErrorsWhenRenderSecondForm = (isVisibleSecondForm) => {
      if(!isVisibleSecondForm)
      {
        const errors = this.state.requiredFields.filter(field => {
          return this.state.firstForm.filter((input) => {
            return input.name === field && input.value ===  '';
          })[0];
        });
        this.setState({
          errors
        });
        return;
      }

      const errors = this.state.requiredFields.filter(field => {
        return this.state.secondForm.filter((input) => {
          return input.name === field && input.value ===  '';
        })[0];
      });

      this.setState({
        errors
      });
    };
    const submitFirstForm = () => {
      const requiredFields = this.state.secondForm.filter((input) => input.required = true).map((input) => input.name);

      const firstFormDisabled = this.state.firstForm.map((input) => input);
      firstFormDisabled.map((i) => {
        i.disabled = !i.disabled ;
        i.required = !i.required;
      });
      callToEntities();
      const setState = async () => await this.setState({
        ...this.state,
        currentForm : !this.state.visibleSecondForm === true ? 2 : 1,
        visibleSecondForm: !this.state.visibleSecondForm,
        firstForm: firstFormDisabled,
        requiredFields,
      });
      setState().then(() =>      changeErrorsWhenRenderSecondForm(this.state.visibleSecondForm === true)).then(()=>{
        this.setState({
          isValid : this.enableSend()
        });
      });

    };

    const submitSecondForm = () => {
      const requiredFields = this.state.firstForm.filter((input) => input.required = true ).map((input) => input.name);
      const secondFormDisabled = this.state.secondForm.map((input) => input);
      const firstFormEnabled = this.state.firstForm.map((input) => input);
      secondFormDisabled.map((i) =>{
        i.disabled = !i.disabled ;
        i.required = !i.required;
      }  );
      firstFormEnabled.map((i) =>{ i.disabled = !i.disabled ;        i.required = !i.required;
      });

      const setState = async () => {
        return await this.setState({
          ...this.state,
          visibleSecondForm: !this.state.visibleSecondForm,
          currentForm: !this.state.visibleSecondForm === false ? 1 : 2,
          firstForm: firstFormEnabled,
          secondForm: secondFormDisabled,
          requiredFields,
        });
      };

      setState().then(() => changeErrorsWhenRenderSecondForm(this.state.visibleSecondForm === true)).then(() => {

        this.setState({
          isValid: this.enableSend()
        });

      });
    };

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

      if(error && isTouched(error) && isRequired(error) && validateRegexp(name,value))
      {
        console.log("invali")

        const newError =errorCopy.filter(e => e !== error);
        this.setState({
          errors: newError
        });
      }
      else {
        console.log("invalida")
        this.setState({
          errors: errorCopy
        });
      }
    };
  const getInputByName = (name) => {
    const input = this.state.firstForm.filter((input) => input.name === name)[0];
    console.log(input)
    if(!input)
    {
      return this.state.secondForm.filter((input) => input.name === name)[0]

    }
    return input;
  }
  const validateRegexp = (name , value) => {
      const input = getInputByName(name);
      const filter = new RegExp(input.regexp)
    console.log(filter.test(value))
      return filter.test(value)

  }
    const handleChange = ( name, value, firstForm = false) => {
      if (firstForm === true) {
        const stateCopy = this.state.firstForm.map((data) => data);
        const touched = this.state.touched;
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
            isValid : this.enableSend()
          }));
      }
      else {
        const stateCopy = this.state.secondForm.map((data) => data);
        const touched = this.state.touched;
        const add = () => touched.indexOf(name) === -1 ? touched.push(name) : null;
        add();
        stateCopy.filter((input) => input.name === name ? input.value = value : null);
        const changeState = async () => await this.setState({
          ...this.state,
          secondForm: stateCopy
        });
        console.log(this.state);
        changeState().then(() => handleError(false, true, name, value)).then(()=>

          this.setState({
            ...this.state,
            isValid : this.enableSend()
          }));
      }
    };


    const callToEntities =async () => {
      return await this.state.secondForm[0].options.length === 0 ? this.props.getEntities() : null;
    };


    const handleData = (data) => {
      if (!this.state.visibleSecondForm) {
        submitFirstForm(data);
      } else {
        submitSecondForm(data);
      }
    };





    const submit = () => {
      if(this.state.isValid){
        this.props.onClick(this.state.firstForm, this.state.secondForm, this.state.currentForm);
      }
    };
    if (this.props.currentStep !== 1) {
      return null;
    }
    return (
      <>
            {
              this.state.firstForm.map((input, key) => {
                return(  <LeftForm onChange= {handleChange} key = {key} input={input} requiredFields={this.state.requiredFields}
                  error={this.state.errors.filter((error) => error === input.name)[0]}
                  touched={this.state.touched.filter((touched) => touched===input.name)[0]}
                  onClickVisibleRightForm={handleData}/>
                );})
            }


            {
              this.state.visibleSecondForm === true ? <RightForm getEntities={this.props.getEntities}
                data={this.state.secondForm}
                visible={this.state.visibleSecondForm}
                requiredFields={this.state.requiredFields}
                errors={this.state.errors}
                touched={this.state.touched}
                onChange= {handleChange}
              /> : null
            }
            <FormGroup>
              <div>
              <ButtonEmpresas onClick={handleData} text={this.state.visibleSecondForm !== true ? 'Seleccionar del listado' : 'Ingresar datos de forma manual'}/>
              </div>

            </FormGroup>
        <FormGroup>

          <Button disabled={!this.state.isValid} variant="outlined" color="primary"   onClick={submit}>Siguiente
          </Button>
            </FormGroup>


      </>

    );
  }
}
