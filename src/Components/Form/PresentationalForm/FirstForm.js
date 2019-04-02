import React, { Component } from 'react';
import LeftForm from './FirstForm/LeftForm';
import { RightForm } from './FirstForm/RightForm';
import Button from '@material-ui/core/es/Button/Button';
import { deepEqual } from '../../Util/deepEqual';
import { alertUtil } from '../../Util/alertUtil';

export default class FirstForm extends Component {
  constructor (props) {
    super(props);
    const { firstFormData: { firstForm, secondForm }, currentStep, getEntities } = props;
    this.state = {
      ...{ firstForm, secondForm, currentStep, getEntities },
      requiredFields: props.firstFormData.firstForm.filter((input, key) => input.required === true ? input.name : null).map((input) => input.name)
      , errors : [],
      touched : [] };
  }

  componentDidMount () {
    const errors = this.state.requiredFields.filter(field => {
      return this.state.firstForm.filter((input) => {
        return input.name === field && (input.value ===  '');
      });
    });
    this.setState({
      errors:errors
    });
  }

  componentWillReceiveProps (nextProps, nextContext) {

    const { firstFormData: { firstForm, secondForm }, currentStep, getEntities } = nextProps;
    if (!deepEqual(secondForm, this.state.secondForm)){
      this.setState(
        {
          ...this.state,
          secondForm : secondForm
        }
      );
    }
  }

  render () {
    const submitFirstForm = (data) => {
      this.setState({
        ...this.state,
        firstForm: data
      });
    };
    const handleError = (firstForm, secondForm, name, value) => {

      if(firstForm !== null)
      {
        const errorCopy = this.state.errors.map((e) => e );
        const requiredFields = this.state.requiredFields.map((e) => e);
        const touchedCopy = this.state.touched.map(e => e);
        const isRequired = (input) => requiredFields.filter(req => req===input);
        const isTouched = (input) => touchedCopy.filter(req => req===input);
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

      }

    };
    const handleChange = (firstForm, secondForm, name, value) => {

      if(firstForm !== null)
      {
        const stateCopy = this.state.firstForm.map((data) => data);
        const touched = this.state.touched;
        const add = () => touched.indexOf(name) === -1 ? touched.push(name) : null ;
        add();
        stateCopy.filter((input) => input.name === name ? input.value = value : null );
        this.setState({
          ...this.state,
          firstForm : firstForm
        });
        handleError(firstForm, null, name, value);
      }

    };


    const callToEntities = () => {
      return this.state.secondForm[0].options.length === 0 ? this.props.getEntities() : null;

    };


    const handleSecondForm = (data) => {
      submitFirstForm(data);
      const requiredFields = this.state.secondForm.filter((input, key) => input.required !== true ? input : null).map((input) => input.name);

      const firstFormDisabled = this.state.firstForm.map((input) => input);
      firstFormDisabled.map((i) => i.disabled = !i.disabled);

      callToEntities();
      this.setState({
        ...this.state,
        visibleSecondForm: !this.state.visibleSecondForm,
        firstForm: firstFormDisabled,
        requiredFields : requiredFields,
      });
    };



    if (this.props.currentStep !== 1) {
      return null;
    }
    return (
      <div>
        <form>
          <div>
            <LeftForm onChange= {handleChange} data={this.state.firstForm} requiredFields={this.state.requiredFields}
              onClickVisibleRightForm={handleSecondForm}/>
            {
              this.state.visibleSecondForm === true ? <RightForm getEntities={this.props.getEntities}
                data={this.state.secondForm}
                visible={this.state.visibleSecondForm}
                requiredFields={this.state.requiredFields}
                fetchCountrieForEntitie={this.props.fetchCountrieForEntitie}/> : null
            }
          </div>
          <Button onClick={this.props.onClick}>Enviar
          </Button>
        </form>
      </div>
    );
  }
}
