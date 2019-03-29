import React, { Component } from 'react'
import LeftForm from './FirstForm/LeftForm'
import RightForm from './FirstForm/RightForm'
import Button from '@material-ui/core/es/Button/Button'

export default class FirstForm extends Component {
  constructor (props) {
    super(props)
    const { firstFormData: { firstForm, secondForm } } = this.props
    console.log(this.props)
    this.state = {
      firstForm: firstForm,
      secondForm: secondForm,
      visibleSecondForm: false,
      requiredFields: firstForm.filter((input, key) => input.required === true ? input.name : null).map((input) => input.name)
    }
  }

  componentDidMount () {
    //const requiredFields = this.state.firstForm.filter((input,key) => input.required===true ? input.name : null).map((input) => input.name);
    // console.log(requiredFields)
    // this.setState({
    //   ...this.state,
    //   requiredFields
    // })
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    console.log(this.state)
  }

  render () {

    const submitFirstForm = (data) => {
      this.setState({
        ...this.state,
        firstForm: data
      })
    }

    const handleSecondForm = (data) => {
      submitFirstForm(data)
      const requiredFields = this.state.secondForm.filter((input, key) => input.required !== true ? input.name : null).map((input) => input.name)

      const firstFormDisabled = this.state.firstForm.map((input) =>input );
      firstFormDisabled.map((i) =>  i.disabled = !i.disabled);
      this.setState({
        ...this.state,
        visibleSecondForm: !this.state.visibleSecondForm,
        firstForm : firstFormDisabled
      });

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
              this.state.visibleSecondForm === true ?  <RightForm data={this.state.secondForm} visible={this.state.visibleSecondForm} getEntities={this.props.getEntities}/> : null
            }
          </div>
          <Button onClick={this.props.onClick}>Enviar
          </Button>
        </form>
      </div>
    )
  }
}
