import React from 'react';
import  {Component} from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import FirstForm from '../PresentationalForm/FirstForm';
import SecondForm from '../PresentationalForm/SecondForm';
import ThirdForm from '../PresentationalForm/ThirdForm';
import { alertUtil } from '../../Util/alertUtil';
import { FormPresentational } from '../PresentationalForm/FormPresentational/FormPresentational';
import { Section } from '../../Section/Section';


export class FunctionalForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentStep : props.currentStep,
      firstForm : props.firstForm,
      secondForm : props.secondForm,
      thirdForm : props.thirdForm
    };

  }

  render()
  {
    const visibleSecondForm = (firstForm, secondForm, selected) => {

      this.setState({
        ...this.state,
        firstForm: {
          ...this.state.firstForm,
          currentStep : selected
        }
      });
      let responseCopy = null;
      switch (selected) {
      case 1 :
        responseCopy =  firstForm.map((responseInput) => {
          const newObject = Object.assign({}, {});
          newObject[responseInput.backName] = responseInput.value;
          return newObject;
        } );
        break;

      case 2 :
        responseCopy =  secondForm.map((responseInput) => {
          const newObject = Object.assign({}, {});
          newObject[responseInput.backName] = responseInput.value;
          return newObject;
        } );
        break;
      default :
        break;
      }




      const nextStep = this.state.currentStep > 1 ? this.state.currentStep : 2;
      this.setState({
        ...this.state,
        currentStep: nextStep,
        firstForm : {
          ...this.state.firstForm,

          firstForm,
          secondForm,
          currentForm : selected
        },
        response : responseCopy,

      });
    };


    const visibleFirstForm = (data) => {
      const previousStep = this.state.currentStep === 1 ? this.state.currentStep : 1;

      this.setState({
        ...this.state,
        currentStep : previousStep,
        response : null
      });
    };

    const visibleThirdForm = (firstForm, secondForm) => {
      const nextStep = this.state.currentStep + 1;

      const previousResponse = this.state.response.map((response) => response);
      const responseCopy =  previousResponse.concat(firstForm.map((responseInput) => {
        const newObject = Object.assign({}, {});
        newObject[responseInput.backName] = responseInput.value;
        return newObject;
      } ));

      const inputCheck = firstForm.filter((input) =>  input.valueChecked!== undefined )[0];
      if(inputCheck)
      {
        const totalForm =  inputCheck.value !== this.state.secondForm.firstForm.filter((input)=> input.backName === inputCheck.backName)[0].value;

        if(totalForm)
        {
          const fullResponseCopy = responseCopy.concat(secondForm.map((responseInput) => {
            const newObject = Object.assign({}, {});
            newObject[responseInput.backName] = responseInput.value;
            return newObject;
          } ));
          this.setState({
            ...this.state,
            firstForm : {
              ...this.state.firstForm,

              firstForm,
              secondForm
            },
            currentStep : nextStep,
            response : fullResponseCopy,
          });

        };
      }

      const setState = async () => this.setState({
        ...this.state,
        firstForm : {
          ...this.state.firstForm,
          firstForm,
          secondForm
        },
        currentStep : nextStep,

        response : responseCopy,
      });

      setState().then(()=>{
        const obj = this.state.response.reduce(function(obj1, item){
          obj1[Object.keys(item)[0]] = Object.values(item)[0]; return obj1;
        }, {});

      });
    };
    const submit = (thirdForm) => {
      console.log(thirdForm);
      const previousResponse = this.state.response.map((response) => response);
      const responseCopy =  previousResponse.concat(thirdForm.map((responseInput) => {
        console.log(responseInput.backName);
        console.log(responseInput.value);
        if (responseInput.value !== '') {
          console.log(responseInput);
          const newObject = Object.assign({}, {});
          newObject[responseInput.backName] = responseInput.value;
          console.log(newObject);
          return newObject;
        }
        return '';
      }));
      console.log(responseCopy);

      const setState = async () =>  await this.setState({
        ...this.state,
        thirdForm,
        response : responseCopy,
      });

      setState().then(()=>{

        console.log(this.state);
        const obj = this.state.response.reduce(function(obj1, item){
          obj1[Object.keys(item)[0]] = Object.values(item)[0]; return obj1;
        }, {});
        console.log(obj);
        this.props.onClick(obj);
      });
    };

    const handleFirstStepOfFirstForm = (step) => {
      this.setState({
        ...this.state,
        firstForm : {
          ...this.state.firstForm,
          currentForm : step
        }
      });
    };
    const previousStep= () => {
      const nextStep = (currentStep) => {

        switch(currentStep){
        case 1 : return 1;
        case 2 :  return 1;
        case 3 : return 2;

        }
      };
      this.setState({
        ...this.state,
        currentStep : nextStep(this.state.currentStep)

      });

    };
    console.log(this.state.firstForm);
    return (
<>
      {/* <TransitionGroup> */}
      {/*  <CSSTransition key={this.state.currentStep} classNames="page" timeout={500}> */}
          <FormPresentational>

            <FirstForm  getEntities = {this.props.getEntities} handleFirstForm={handleFirstStepOfFirstForm} firstFormData={this.props.firstForm} currentForm = {this.state.firstForm.currentForm} currentStep={this.state.currentStep}  onClick={visibleSecondForm}/>
            {this.state.currentStep ===2 ? <SecondForm secondFormData={this.state.secondForm} currentStep={this.state.currentStep} previous={visibleFirstForm} nextStep={visibleThirdForm}/> : null }
            {this.state.currentStep ===3  ? <ThirdForm thirdFormData={this.state.thirdForm} currentStep={this.state.currentStep} previous={previousStep} submit={submit}/> : null }
          </FormPresentational>
         {/* </CSSTransition></TransitionGroup> */}
</>
    );
  }
}


