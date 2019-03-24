import TextField from 'material-ui/TextField'
import React , {Component} from 'react'
import { FormControl } from '@material-ui/core'
export class RenderInputTextField extends Component{
  constructor (props){
    super(props);
    console.log(this.props)
  }
  render () {
    return <InputTextField props ={this.props}/>
  }
}
const InputTextField = ({ label, value,  custom, touched, error , onChange }) => {
  return (
    <div>
      <FormControl>
      <TextField   hintText={label}

                   floatingLabelText={label}
                   errorText={touched && error}
                   value={value}
                 {...custom}
      />
      </FormControl>
    </div>
  )
}
