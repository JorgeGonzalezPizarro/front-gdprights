import React, { Component } from 'react'
import FirstForm from './Form/PresentationalForm/FirstForm'
import { FunctionalForm } from './Form/FunctionalForm/FunctionalForm'
import MaterialUiForm from './Form/MaterialUi'

export class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    console.log("aa");

    return (
        <FunctionalForm/>
        )
  }
}
