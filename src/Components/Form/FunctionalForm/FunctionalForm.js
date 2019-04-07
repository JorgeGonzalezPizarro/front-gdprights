import React from 'react';
import  {Component} from 'react';
import FirstForm from '../PresentationalForm/FirstForm';
import SecondForm from '../PresentationalForm/SecondForm';
import ThirdForm from '../PresentationalForm/ThirdForm';
import { alertUtil } from '../../Util/alertUtil';
import { FormPresentational } from '../PresentationalForm/FormPresentational/FormPresentational';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
    console.log(this.state)
    const visibleSecondForm = (firstForm, secondForm, selected) => {
      console.log(firstForm, secondForm, selected);
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
        currentStep: nextStep,
        firstForm : {
          firstForm,
          secondForm
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
            firstForm : {
              firstForm,
              secondForm
            },
            currentStep : nextStep,
            response : fullResponseCopy,
          });

        };
      }

     const setState = async () => this.setState({
        firstForm : {
          firstForm,
          secondForm
        },
       currentStep : nextStep,

       response : responseCopy,
      });

      setState().then(()=>{
        const obj = this.state.response.reduce(function(obj1,item){
          obj1[Object.keys(item)[0]] = Object.values(item)[0]; return obj1;
        },{});

      });
    };
    const submit = (thirdForm) => {
      const previousResponse = this.state.response.map((response) => response);
      const responseCopy =  previousResponse.concat(thirdForm.map((responseInput) => {
        const newObject = Object.assign({}, {});
        newObject[responseInput.backName] = responseInput.value;
        return newObject;
      } ));

      console.log(thirdForm);
      console.log(this.state)

      const setState = async () => this.setState({
       ...this.state,
        thirdForm,
        response : responseCopy,
      });

      setState().then(()=>{
        var obj = this.state.response.reduce(function(obj1,item){
          obj1[Object.keys(item)[0]] = Object.values(item)[0]; return obj1;
        },{});

        console.log(responseCopy);
        console.log(obj)
       this.props.onClick(obj)
      });
    };


    return (
      <div>
        <TransitionGroup>
          <CSSTransition key={this.state.currentStep} classNames="page" timeout={500}>
        <FormPresentational>


        <FirstForm  getEntities = {this.props.getEntities} firstFormData={this.props.firstForm} currentStep={this.state.currentStep}  onClick={visibleSecondForm}/>
        {this.state.currentStep ===2 ? <SecondForm secondFormData={this.state.secondForm} currentStep={this.state.currentStep} previous={visibleFirstForm} nextStep={visibleThirdForm}/> : null }
        {this.state.currentStep ===3  ? <ThirdForm thirdFormData={this.state.thirdForm} currentStep={this.state.currentStep} previous={visibleFirstForm} submit={submit}/> : null }
        </FormPresentational>
          </CSSTransition></TransitionGroup>

        </div>

    );
  }
}


