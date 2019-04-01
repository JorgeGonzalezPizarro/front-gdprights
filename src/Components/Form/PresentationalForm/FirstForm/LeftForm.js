import React, { Component } from 'react'
import { Field } from 'redux-form'
import { RenderInputTextField } from '../inputs/RenderInputTextField'
import Button from '@material-ui/core/es/Button/Button'
import { array } from 'prop-types'

export default class LeftForm extends Component {
  constructor (props) {
    super(props)
    const { data, requiredFields } = this.props
    this.state = {
      data: data,
      errors: [],
      requiredFields: requiredFields,
      touched: []
    }
  }

  componentDidMount () {
    const errors = this.state.requiredFields.filter(field => {
      return this.state.data.filter((input) => {
        return input.name === field && (input.value === undefined || null || '')
      })
    })
    this.setState({
      errors:errors
    })
  }

  shouldComponentUpdate (nextProps, nextState, nextContext) {
    return true
  }

  render () {
    const handleError = (input , value) =>
      {
        const errorCopy = this.state.errors.map((e) => e );
        const requiredFields = this.state.requiredFields.map((e) => e);
        const touchedCopy = this.state.touched.map(e => e);
        const isRequired = (input) => requiredFields.filter(req => req===input)
        const isTouched = (input) => touchedCopy.filter(req => req===input)
       if(errorCopy.length === 0 || errorCopy.indexOf(input) === -1)
          {
            errorCopy.push(input);
          }

        const error =   errorCopy.filter((e) => {
            return e === input
          })[0];
        if(error && isTouched(error) && isRequired(error) && value.length !== 0)
        {
         const newError =errorCopy.filter(e => e !== error)
          this.setState({
            errors: newError
          })
        }
        else {
          this.setState({
            errors: errorCopy
          })
        }

      }


    const handleChange = (e, data) => {
      e.preventDefault()
      const { value, name } = e.target
      const stateCopy = this.state.data.map((data) => data)
      const touched = this.state.touched;
      const add = () => touched.indexOf(name) === -1 ? touched.push(name) : null
      add()
      stateCopy.filter((input) => input.name === name ? input.value = value : null)

      this.setState({
        data: stateCopy,
        touched: touched
      })
      handleError(name,value)

    }
    const handleSubmit = () =>  {

    }

    const handleVisibleSecondForm = () =>
    {
          this.props.onClickVisibleRightForm(this.state.data)

    }
    console.log(this.state.data)
    return (

      <div>
        <form >
          <div>
            <RenderInputTextField
              name={this.state.data.filter((input) => input.name === 'customEntityName')[0].name}
              label={this.state.data.filter((input) => input.name === 'customEntityName')[0].label}
              value={this.state.data.filter((input) => input.name === 'customEntityName')[0].value}
              onChange={handleChange}
              touched = {this.state.touched.filter((input) => input === 'customEntityName')[0]}
              disabled = {this.state.data.filter((input) => input.name === 'customEntityName')[0].disabled}
              error = {this.state.errors.filter((error) => error === 'customEntityName' )[0]}/>
            <RenderInputTextField
              name={this.state.data.filter((input) => input.name === 'customEntityEmail')[0].name}
              label={this.state.data.filter((input) => input.name === 'customEntityEmail')[0].label}
              value={this.state.data.filter((input) => input.name === 'customEntityEmail')[0].value}
              onChange={handleChange}
              touched = {this.state.touched.filter((input) => input === 'customEntityEmail')[0]}
              error = {this.state.errors.filter((error) => error === 'customEntityEmail' )[0]}
             disabled = {this.state.data.filter((input) => input.name === 'customEntityEmail')[0].disabled}
              />
              <RenderInputTextField
              name={this.state.data.filter((input) => input.name === 'customEntityCommercialName')[0].name}
              label={this.state.data.filter((input) => input.name === 'customEntityCommercialName')[0].label}
              value={this.state.data.filter((input) => input.name === 'customEntityCommercialName')[0].value}
              onChange={handleChange}
              touched = {this.state.touched.filter((input) => input === 'customEntityCommercialName')[0]}
              error = {this.state.errors.filter((error) => error === 'customEntityCommercialName' )[0]}
            disabled = {this.state.data.filter((input) => input.name === 'customEntityCommercialName')[0].disabled}
              />
          </div>
          <Button  onClick={handleVisibleSecondForm} value="a">Seleccionar del Listado</Button>

        </form>
      </div>
    )
  }
}

