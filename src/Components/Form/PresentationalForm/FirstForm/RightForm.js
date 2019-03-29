import React, { Component } from 'react'
import {RenderSelectField} from '../inputs/RenderSelectField'

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

  componentDidMount () {
    this.props.getEntities();
  }



  render () {
    if(this.props.visible!==true)
    {
      return null;
    }


  return   (
      <div>
        <div>
          <form >
            <div>
              <RenderSelectField {...this.props.data}/>
            </div>

          </form>
      </div>
      </div>
    )
  }
}
