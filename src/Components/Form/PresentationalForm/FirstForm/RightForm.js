import React, { Component } from 'react'
import { Field } from 'react-redux-form'
import { RenderInputTextField } from '../inputs/RenderInputTextField'

export default class RightForm extends Component {
  constructor (props) {
    super(props)
    const {data, visible }  = this.props;
    console.log(visible);
    this.state = {
      visible : visible,
      data : data
    }

  }
  render () {
    console.log(this.props)
    if(this.props.visible!==true)
    {
      return null;
    }
  return   (
      <div>
        <form>
          <div>
            <Field
              component={RenderInputTextField}
              label={this.state.data.filter((input)=> input.name === 'customEntityName')[0]} model={"aa"}/>
          </div>

        </form>
      </div>
    )
  }
}
