import React, { Component } from 'react'
import { Field } from 'redux-form';
import { RenderInputTextField } from '../inputs/RenderInputTextField'
import Button from '@material-ui/core/es/Button/Button'

export default class LeftForm extends Component {
  constructor (props) {
    super(props)
    const {data }  = this.props;

    this.state = {
      data : data
    }

  }

  render () {
    const handleChange = (input,data) => {
      alert(input)

    }
    return (
      <div>
        <form>
          <div>
            <RenderInputTextField
              name={this.state.data.filter((input)=> input.name === 'customEntityName')[0].name}
              label={this.state.data.filter((input)=> input.name === 'customEntityName')[0].label}
              //value={this.state.data.filter((input)=> input.name === 'customEntityName')[0].value}
              value={this.state.data.filter((input)=> input.name === 'customEntityName')[0].value}
              model={"aa"}/>
            <RenderInputTextField
              label={this.state.data.filter((input)=> input.name === 'customEntityEmail')[0].label} model={"aa"}/>
            <RenderInputTextField

              label={this.state.data.filter((input)=> input.name === 'customEntityCommercialName')[0].label} model={"aa"}/>
          </div>
          <Button onClick={this.props.onClickVisibleRightForm} value="a">aa</Button>

        </form>
      </div>
    )
  }
}

