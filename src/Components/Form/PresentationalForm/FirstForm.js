import React, { Component } from 'react'
import LeftForm from './FirstForm/LeftForm'
import RightForm from './FirstForm/RightForm'
import Button from '@material-ui/core/es/Button/Button'

export default class FirstForm extends Component {
  constructor (props) {
    super(props)
    const {firstFormData : {firstForm , secondForm}  }  = this.props;

    this.state = {
      firstForm : firstForm,
      secondForm : secondForm,
      visibleSecondForm : false,
      requiredFields : null
    }

  }
  componentDidMount() {
    const requiredFields = this.state.firstForm.filter((input,key) => input.required===true ? input.name : null).map((input) => input.name);
    this.setState({
      ...this.state,
      requiredFields
    })
  }
  render () {
    const handleSubmit = () => {

    }


    const handleSecondForm = (data) => {
      const requiredFields = this.state.secondForm.filter((input,key) => input.required!==true ? input.name : null).map((input) => input.name);
      const firstForm = this.state.firstForm;
      const firstFormValues = data.map((input) => firstForm[input].value = input.value);
      this.setState({
        ...this.state,
        firstForm : firstFormValues,
        visibleSecondForm : !this.state.visibleSecondForm
      })
    }
    if(this.props.currentStep !== 1)
    {
      return null;
    }
    console.log("state" , this.state)
    return (
      <div>
        <form>
          <div>
          <LeftForm data={this.state.firstForm} onClickVisibleRightForm={handleSecondForm}/>
          <RightForm data={this.state.secondForm} visible={this.state.visibleSecondForm}/>
          </div>
          <Button onClick={this.props.onClick} >Enviar
          </Button>
        </form>
      </div>
    )
  }
}
