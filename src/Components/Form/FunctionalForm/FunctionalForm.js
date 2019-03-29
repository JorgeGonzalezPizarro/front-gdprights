import FirstForm from '../PresentationalForm/FirstForm'
import React from 'react'
import SecondForm from '../PresentationalForm/SecondForm'
import {firstForm} from '../../../shared/firstForm'
import {secondForm} from '../../../shared/secondForm'
import  {Component} from 'react'
export class FunctionalForm extends Component {
  constructor (props) {
    super(props)
    const {currentStep , firstForm , secondForm } = this.props
    this.state = {
    currentStep,
      firstForm,
      secondForm
    }
  }
  render()
{
  const visibleSecondForm = () => {
    const nextStep = this.state.currentStep > 1 ? this.state.currentStep : 2;
    this.setState({
      ...this.state,
      currentStep : nextStep
    })
  }
  const visibleFirstForm = () => {
    const previousStep = this.state.currentStep === 1 ? this.state.currentStep : 1;
    this.setState({
      ...this.state,
      currentStep : previousStep
    })
  }
  return (
    <div>
      <FirstForm getEntities = {this.props.getEntities} firstFormData={this.state.firstForm} currentStep={this.state.currentStep} onClick={visibleSecondForm}/>
      {/*<SecondForm secondFormData={this.state.secondForm} currentStep={this.state.currentStep}  onClick={visibleFirstForm}/>*/}
    </div>
  )
}
}


