import React, { Component } from 'react'
import LeftForm from './FirstForm/LeftForm'
import { RightForm } from './FirstForm/RightForm'
import Button from '@material-ui/core/es/Button/Button'

export default class FirstForm extends Component {
  constructor (props) {
    super(props)
    const { firstFormData: { firstForm, secondForm }, currentStep, getEntities } = props

    this.state = {
      ...{ firstForm, secondForm, currentStep, getEntities },
      requiredFields: props.firstFormData.firstForm.filter((input, key) => input.required === true ? input.name : null).map((input) => input.name)
    }
  }

  componentWillReceiveProps (nextProps, nextContext) {
    const { firstFormData: { firstForm, secondForm }, currentStep, getEntities } = nextProps
    if (secondForm !== this.state.secondForm) {
      this.setState(
        {
          ...this.state,
          secondForm
        }
      )
    }

  }

  render () {
    const submitFirstForm = (data) => {
      this.setState({
        ...this.state,
        firstForm: data
      })
    }
    const callToEntities = () => {
      return this.state.secondForm[0].options.length === 0 ? this.props.getEntities() : null

    }
    const handleSecondForm = (data) => {
      submitFirstForm(data)
      const requiredFields = this.state.secondForm.filter((input, key) => input.required !== true ? input.name : null).map((input) => input.name)
      const firstFormDisabled = this.state.firstForm.map((input) => input)
      firstFormDisabled.map((i) => i.disabled = !i.disabled)

      callToEntities()
      this.setState({
        ...this.state,
        visibleSecondForm: !this.state.visibleSecondForm,
        firstForm: firstFormDisabled
      })
    }
    if (this.props.currentStep !== 1) {
      return null
    }
    return (
      <div>
        <form>
          <div>
            <LeftForm data={this.state.firstForm} requiredFields={this.state.requiredFields}
                      onClickVisibleRightForm={handleSecondForm}/>
            {
              this.state.visibleSecondForm === true ? <RightForm getEntities={this.props.getEntities}
                                                                 data={this.state.secondForm}
                                                                 visible={this.state.visibleSecondForm}/> : null
            }
          </div>
          <Button onClick={this.props.onClick}>Enviar
          </Button>
        </form>
      </div>
    )
  }
}
