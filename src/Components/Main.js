import React, { Component } from 'react'
import FirstForm from './Form/PresentationalForm/FirstForm'
import { FunctionalForm } from './Form/FunctionalForm/FunctionalForm'
import MaterialUiForm from './Form/MaterialUi'
import { fetchForm ,fetchEntities_ } from '../redux/ActionCreators/Form/ActionCreatorsForm'
import { connect } from 'react-redux'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'
import { Loading } from './Util/LoadingComponent'

 const mapStateToProps = (state) => {
  return { form: state.form }
}

 const mapDispatchToProps = (dispatch) => ({
    fetchForm: () => {
      dispatch(fetchForm())
    },
     fetchEntities: () => {
       dispatch(fetchEntities_())

     }
  }
)

export  class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ...props
    }
  }

  componentDidMount () {
    this.props.fetchForm();
  }




  render () {
  const  getEntities = () => {
      this.props.fetchEntities()
    }
    if (this.props.form.isLoading === true) {

      return (<div><Loading/></div>);
    } else {

      return (

        <div>

          <FunctionalForm getEntities ={getEntities} firstForm={this.props.form.firstForm} secondForm={this.props.form.secondForm}
                          currentStep={this.props.form.currentStep}/>

        </div>
      )
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
