import React, { Component } from 'react';
import Button from '@material-ui/core/es/Button/Button';
import { LeftForm } from './FirstForm/LeftForm';
import { TutorForm } from './FirstForm/TutorForm';
import { FormFieldSet } from './FormPresentational/FormFieldSet';
import FormButtons from './FormPresentational/FormButtons';
import { TooltipDisabled } from './inputs/TooltipDisabled';
import { ButtonAccept, ButtonAcceptDisabled } from '../../Util/Buttons/ButtonAccept';
import { ButtonReject } from '../../Util/Buttons/ButtonReject';

export default class SecondForm extends Component {
  constructor (props) {
    super(props);
    const { secondFormData: { firstForm, secondForm }, currentStep } = props;
    this.state = {
      currentForm: 1,
      ...{ firstForm, secondForm, currentStep },
      requiredFields: props.secondFormData.firstForm.filter((input, key) => input.required === true ? input.name : null).map((input) => input.name)
      , errors: [],
      touched: [],
      visibleSecondForm: false

    };
    this.enableSend = this.enableSend.bind(this);

  }

  componentDidMount () {
    const errors = this.state.requiredFields.filter(field => {
      return this.state.firstForm.filter((input) => {
        return input.name === field && input.value.length === 0;
      })[0];
    });
    this.setState({
      errors,
      isValid: this.enableSend()
    });
  }

  enableSend = () => {
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
        if (!this.state.errors.includes(input.name)) {
          return input.value.length > 0;
        }
        return false;
      }
      return true;
    }));

    return !enableAll.includes(false);

  };

  render () {
    const validateRegexp = (name, value) => {
      const input = getInputByName(name);
      const filter = new RegExp(input.regexp);
      return filter.test(value);

    };
    const getInputByName = (name) => {
      const input = this.state.firstForm.filter((input) => input.name === name)[0];
      if (!input) {
        return this.state.secondForm.filter((input) => input.name === name)[0];

      }
      return input;
    };
    const isRequired = (input) => this.state.requiredFields.filter(req => req === input);
    const isTouched = (input) => this.state.touched.filter(req => req === input);

    const handleError = (firstForm, secondForm, name, value) => {
      const errorCopy = this.state.errors.map((e) => e);
      if (errorCopy.length === 0 || errorCopy.indexOf(name) === -1) {
        errorCopy.push(name);
      }
      const error = errorCopy.filter((e) => {
        return e === name;
      })[0];

      if (error && isTouched(error) && isRequired(error) && validateRegexp(name, value)) {
        const newError = errorCopy.filter(e => e !== error);
        this.setState({
          errors: newError
        });
      } else {
        this.setState({
          errors: errorCopy
        });
      }
    };

    const handleChange = (name, value, firstForm = false) => {

      if (firstForm === true) {
        const stateCopy = this.state.firstForm.map((data) => data);
        const { touched } = this.state;
        const add = () => touched.indexOf(name) === -1 ? touched.push(name) : null;
        add();
        const changeState = async () => await stateCopy.filter((input) => input.name === name ? input.value = value : null);
        this.setState({
          ...this.state,
          firstForm: stateCopy
        });
        changeState().then(() => handleError(true, false, name, value)).then(() =>

          this.setState({
            ...this.state,
            isValid: this.enableSend()
          }));
      } else {
        const stateCopy = this.state.secondForm.map((data) => data);
        const { touched } = this.state;
        const add = () => touched.indexOf(name) === -1 ? touched.push(name) : null;
        add();
        stateCopy.filter((input) => input.name === name ? input.value = value : null);
        const changeState = async () => await this.setState({
          ...this.state,
          secondForm: stateCopy
        });
        changeState().then(() => handleError(false, true, name, value)).then(() =>

          this.setState({
            ...this.state,
            isValid: this.enableSend()
          }));
      }
    };

    const submitFirstForm = () => {
      const requiredFields = this.state.requiredFields.concat(this.state.secondForm.filter((input) => input.required = true).map((input) => input.name));
      // const errorCopy = this.state.errors.map((error) => error);

      const errorCopy = this.state.errors.concat(this.state.secondForm.filter((i) => i.required === true).map((i2) => i2.name));

      const setState = async () => await this.setState({
        ...this.state,
        currentForm: !this.state.visibleSecondForm === true ? 2 : 1,
        visibleSecondForm: !this.state.visibleSecondForm,
        errors: errorCopy,
        requiredFields
      });
      setState().then(() => {
        this.setState({
          isValid: this.enableSend()
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
          isValid: this.enableSend()
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

    const nextStep = () => {
      if (this.state.isValid) {
        this.props.nextStep(this.state.firstForm, this.state.secondForm, this.state.currentForm);
      }
    };
    return (
      <>
      <FormFieldSet>
        {
          this.state.firstForm.map((input, key) => {
            return (<LeftForm onChange={handleChange} key={key} input={input} requiredFields={this.state.requiredFields}
              error={this.state.errors.filter((error) => error === input.name)[0]}
              touched={this.state.touched.filter((touched) => touched === input.name)[0]}
              onClickVisibleRightForm={handleData}/>
            );
          })
        }


        {
          this.state.secondForm.map((input, key) => {
            return (this.state.visibleSecondForm === true ? <TutorForm
              input={input} key={key}
              visible={this.state.visibleSecondForm}
              requiredFields={this.state.requiredFields}
              error={this.state.errors.filter((error) => error === input.name)[0]}
              touched={this.state.touched.filter((touched) => touched === input.name)[0]}
              onChange={handleChange}
            /> : null
            );
          })
        }
      </FormFieldSet>
      <FormButtons>
        <div>

          <ButtonReject text="Volver" onClick={this.props.previous}/>
          <TooltipDisabled isDisabled={!this.state.isValid} stringToShow="Complete todos los campos requeridos"
            children={this.state.isValid ===true ? <ButtonAccept text="Siguiente" onClick={nextStep} disabled={this.state.isValid}
            /> :  <ButtonAcceptDisabled disabled={!this.state.isValid} text="Siguiente"
              onClick={nextStep}/>}/>

        </div>
      </FormButtons>

      < />
    );
  }

}