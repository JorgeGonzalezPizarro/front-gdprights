import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { LeftForm } from './FirstForm/LeftForm';
import { RightForm } from './FirstForm/RightForm';
import { deepEqual } from '../../Util/deepEqual';
import { FormFieldSet } from './FormPresentational/FormFieldSet';
import { ButtonEmpresas } from './inputs/ButtonEmpresas';
import FormButtons from './FormPresentational/FormButtons';
import { TooltipDisabled } from './inputs/TooltipDisabled';

export default class FirstForm extends Component {
  constructor (props) {
    super(props);
    const { firstFormData: { firstForm, secondForm }, currentForm, getEntities } = props;
    this.state = {
      ...{ firstForm, secondForm, currentForm, getEntities },
      requiredFields: props.firstFormData.firstForm.filter((input, key) => input.required === true ? input.name : null).map((input) => input.name)
      , errors: [],
      touched: [],
      visibleSecondForm: false
    };
    this.enableSend = this.enableSend.bind(this);
  }

  componentDidMount () {
    let errors = null;
    switch (this.props.currentForm) {
    case 1:
      errors = this.state.requiredFields.filter(field => {
        return this.state.firstForm.filter((input) => {
          return input.name === field && input.value.length === 0;
        })[0];
      });
      this.setState({
        errors,
        isValid: this.enableSend()
      });
      break;
    case 2:
      errors = this.state.requiredFields.filter(field => {
        return this.state.secondForm.filter((input) => {
          return input.name === field && input.value.length === 0;
        })[0];
      });
      this.setState({
        errors,
        isValid: this.enableSend()
      });
      break;
    }

  }

  componentWillReceiveProps (nextProps, nextContext) {

    const { firstFormData: { firstForm, secondForm }, getEntities } = nextProps;
    if (!deepEqual(secondForm, this.state.secondForm)) {
      this.setState(
        {
          ...this.state,
          secondForm
        }
      );
    }
  }

  enableSend = () => {
    const acceptTerms = this.state.firstForm.filter((input) => input.backName === 'acceptTerms')[0];
    if (acceptTerms.value !== true) {
      return false;
    }
    let enableAll = [];
    switch (this.props.currentForm) {
    case 1:
      enableAll = this.state.firstForm.map((input) => {
        if (this.state.requiredFields.includes(input.name)) {
          if (!this.state.errors.includes(input.name)) {
            return input.value.length > 0 || input.value === true;
          }
          return false;
        }
        return true;

      });

      return !enableAll.includes(false);

    case 2:
      const acceptTerms = this.state.firstForm.filter((input) => input.backName === 'acceptTerms')[0];
      if (acceptTerms.value !== true) {
        return false;
      }

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
      if (!isVisibleSecondForm) {
        const errors = this.state.requiredFields.filter(field => {
          return this.state.firstForm.filter((input) => {
            return input.name === field && input.value === '';
          })[0];
        });
        this.setState({
          errors
        });
        return;
      }

      const errors = this.state.requiredFields.filter(field => {
        return this.state.secondForm.filter((input) => {
          return input.name === field && input.value === '';
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
        i.disabled = !i.disabled;
        i.required = !i.required;
      });
      callToEntities();
      const setState = async () => await this.setState({
        ...this.state,
        visibleSecondForm: !this.state.visibleSecondForm,
        firstForm: firstFormDisabled,
        requiredFields
      });

      setState().then(() => changeErrorsWhenRenderSecondForm(this.state.visibleSecondForm === true)).then(() => {
        this.setState({
          isValid: this.enableSend()
        });
      });
      this.props.handleFirstForm(!this.state.visibleSecondForm === true ? 2 : 1);

    };

    const submitSecondForm = () => {
      const requiredFields = this.state.firstForm.filter((input) => input.required = true).map((input) => input.name);

      const secondFormDisabled = this.state.secondForm.map((input) => input);
      const firstFormEnabled = this.state.firstForm.map((input) => input);
      secondFormDisabled.map((i) => {
        i.disabled = !i.disabled;
        i.required = !i.required;
        i.value = '';
      });
      firstFormEnabled.map((i) => {
        i.disabled = !i.disabled;
        i.required = !i.required;
      });

      const setState = async () => {
        return await this.setState({
          ...this.state,
          firstForm: firstFormEnabled,
          secondForm: secondFormDisabled,
          requiredFields
        });
      };

      setState().then(() => changeErrorsWhenRenderSecondForm(this.state.visibleSecondForm === true)).then(() => {

        this.setState({
          ...this.state,
          isValid: this.enableSend()
        });

      });

      this.props.handleFirstForm(this.props.currentForm === 2 ? 1 : 2);

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
    const getInputByName = (name) => {
      const input = this.state.firstForm.filter((input) => input.name === name)[0];
      if (!input) {
        return this.state.secondForm.filter((input) => input.name === name)[0];

      }
      return input;
    };
    const validateRegexp = (name, value) => {
      const input = getInputByName(name);
      const filter = new RegExp(input.regexp);
      return filter.test(value);

    };
    const handleChange = (name, value, firstForm = false) => {
      if (firstForm === true) {
        const stateCopy = this.state.firstForm.map((data) => data);
        const touched = this.state.touched;
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
        const touched = this.state.touched;
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
            isValid: this.enableSend(),
          }));
      }
    };

    const callToEntities = async () => {
      return await this.state.secondForm[0].options.length === 0 ? this.props.getEntities() : null;
    };

    const handleData = (data) => {
      if (this.props.currentForm === 1) {
        submitFirstForm(data);
      } else {
        this.setState({
          visibleSecondForm: !this.state.visibleSecondForm
        });
        submitSecondForm(data);
      }
    };

    const submit = () => {
      if (this.state.isValid) {
        this.props.onClick(this.state.firstForm, this.state.secondForm, this.props.currentForm);

      }
    };
    if (this.props.currentStep !== 1) {
      return null;
    }
    const isValueSelected = () => this.state.secondForm.filter((input) => input.value !== '')[0];

    const valueSelectSelected = () => {
      if (isValueSelected()) {
        const selected = this.state.secondForm.filter((input) => input.value !== '')[0];
        const option = selected.options.filter((option) => option.id === selected.value)[0];
        return option !== null ? option.name : false;
      }
      return false;
    };

    const toggleEntitiesModal = () => {

      if (!valueSelectSelected()) {
        this.setState({
          visibleSecondForm: !this.state.visibleSecondForm
        });
        submitSecondForm();

        this.props.handleFirstForm(1);
        return;
      }
      this.setState({
        visibleSecondForm: !this.state.visibleSecondForm
      });
      this.props.handleFirstForm(2);

    };
    console.log(this.props.currentForm);
    return (
      <>
        <FormFieldSet>

          {
            this.state.firstForm.map((input, key) => {
              return (
                <LeftForm onChange={handleChange} key={key} input={input} requiredFields={this.state.requiredFields}
                  error={this.state.errors.filter((error) => error === input.name)[0]}
                  touched={this.state.touched.filter((touched) => touched === input.name)[0]}
                  onClickVisibleRightForm={handleData}/>
              );
            })
          }
          {valueSelectSelected() !== false ? (
            <div>
              <ButtonEmpresas onClick={toggleEntitiesModal} text={valueSelectSelected()}/>
            </div>

          ) : null
          }
          {
            this.props.currentForm !== 1 ? <RightForm getEntities={this.props.getEntities}
              data={this.state.secondForm}
              visible={this.state.visibleSecondForm}
              requiredFields={this.state.requiredFields}
              errors={this.state.errors}
              touched={this.state.touched}
              onCloseEntitiesList={toggleEntitiesModal}
              onChange={handleChange}
            /> : null
          }
          <div>
            <ButtonEmpresas onClick={handleData}
              text={this.props.currentForm === 1 || this.props.currentForm === undefined ? 'Seleccionar del listado' : 'Ingresar datos de forma manual'}/>
          </div>
        </FormFieldSet>

        <FormButtons>
          <div>
            <TooltipDisabled isDisabled={!this.state.isValid} stringToShow="Complete todos los campos requeridos"
              children={<Button className={!this.state.isValid ? 'buttonAcceptDisabled' : 'buttonAccept'} disabled={!this.state.isValid} variant="outlined" color="primary"
                onClick={submit}>Siguiente </Button>}/>

          </div>
        </FormButtons>

      </>

    );
  }
}
