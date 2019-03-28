import React, { Component } from 'react'
import FirstForm from './Form/PresentationalForm/FirstForm'
import { FunctionalForm } from './Form/FunctionalForm/FunctionalForm'
import MaterialUiForm from './Form/MaterialUi'
import { fetchForm } from '../redux/ActionCreators/Form/ActionCreatorsForm'
import { connect } from 'react-redux'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'
import { Loading } from './Util/LoadingComponent'

 const mapStateToProps = (state) => {
  return { form: state.form }
}

 const mapDispatchToProps = (dispatch) => ({
    fetchForm: () => {
      dispatch(fetchForm())

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
  componentDidUpdate (prevProps, prevState, snapshot) {
    console.log("state on update" ,  this.state)
    console.log("props on update" ,  this.props)

  }


  render () {
    console.log("state on render" ,  this.state)
    if(this.props.form.isLoading===true){

      return <Loading/>
    }

    return (

      <div>
        {/*<Switch>*/}
          {/*<Route  exact path={["/politicians", "/home" , '/']}/>*/}
          {/*<Route exact path={"/politician/:id"}/>}/>*/}
          {/*<Route exact path={'/create'}  component={() => {*/}

          {/*}*/}
          {/*} />*/}
          {/*<Redirect to={"/home"}/>*/}
        {/*</Switch>*/}
        <FunctionalForm firstForm = {this.props.form.firstForm} secondForm={this.props.form.secondForm} currentStep = {this.props.form.currentStep}/>

      </div>
       )
        }
        }
export default connect(mapStateToProps, mapDispatchToProps)(Main);
