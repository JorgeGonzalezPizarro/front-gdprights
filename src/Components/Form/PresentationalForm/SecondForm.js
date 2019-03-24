import React, { Component } from 'react'
import { Field } from 'react-redux-form'
import { RenderInputTextField } from './inputs/RenderInputTextField'
import Button from '@material-ui/core/es/Button/Button'

export default class SecondFormData extends Component {
  constructor (props) {
    super(props)
    const {secondFormData : {firstForm , secondForm}  }  = this.props;


    const handleSubmit = () => {

    }
  }
  render () {
    if(this.props.currentStep !== 2)
    {
      return null;
    }
    console.log(this.props)
    return (
      <div>
        <form>
          <div>
            <Field
              component={RenderInputTextField}
              label={this.props.secondFormData.firstForm.filter((input)=> input.name === 'customEntityName')[0].label} model={"aa"}/>
          </div>
          <Button onClick={this.props.onClick} value="a">aa</Button>

        </form>
      </div>
    )
  }
}
