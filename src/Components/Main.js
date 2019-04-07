import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FunctionalForm } from './Form/FunctionalForm/FunctionalForm';
import {
  fetchEntities_,
  fetchForm,
  fetchCountries_,
  sendRequest_
} from '../redux/ActionCreators/Form/ActionCreatorsForm';
import { Loading } from './Util/LoadingComponent';
import { NavbarMenu } from './Header/NavbarMenu';
import Header from './Header/Header';
import { Section } from './Section/Section';
import { FormPresentational } from './Form/PresentationalForm/FormPresentational/FormPresentational';

const mapStateToProps = (state) => {
  return { form: state.form };
};

const mapDispatchToProps = (dispatch) => ({
  fetchForm: () => {
    dispatch(fetchForm());
  },
  sendRequest : (data) => {
    dispatch(sendRequest_(data));
  },
  fetchEntities: () => {
    dispatch(fetchEntities_());
  },
  fetchCountries: (id) => {
    dispatch(fetchCountries_(id));
  }
}
);

export class Main extends Component {
  constructor (props) {
    super(props);
    this.state = {
      form: props.form
    };
  }

  componentDidMount () {
    this.props.fetchForm();
  }

  shouldComponentUpdate (nextProps, nextState, nextContext) {
    return true;
  }

  render () {
    const getEntities = () => {
      this.props.fetchEntities();
    };

    const fetchCountrieForEntitie = (id) => {
      this.props.fetchCountries(id);
    };
    if (this.props.form.isLoading === true) {

      return (<div><Loading/></div>);
    } 

    return (
      <>
        <NavbarMenu/>
      <Section>
        <FunctionalForm getEntities={getEntities} fetchCountrieForEntitie={fetchCountrieForEntitie} firstForm={this.props.form.firstForm}
          secondForm={this.props.form.secondForm}
          thirdForm ={this.props.form.thirdForm}
          currentStep={this.props.form.currentStep} onClick={this.props.sendRequest}/>
      </Section>
      </>

    );
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
