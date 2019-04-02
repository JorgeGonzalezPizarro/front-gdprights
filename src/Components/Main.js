import React, { Component } from 'react';
import { FunctionalForm } from './Form/FunctionalForm/FunctionalForm';
import { fetchEntities_, fetchForm, fetchCountries_ } from '../redux/ActionCreators/Form/ActionCreatorsForm';
import { connect } from 'react-redux';
import { Loading } from './Util/LoadingComponent';

const mapStateToProps = (state) => {
  return { form: state.form };
};

const mapDispatchToProps = (dispatch) => ({
  fetchForm: () => {
    dispatch(fetchForm());
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
    } else {

      return (
        <div>
          <FunctionalForm getEntities={getEntities} fetchCountrieForEntitie={fetchCountrieForEntitie} firstForm={this.props.form.firstForm}
            secondForm={this.props.form.secondForm}
            currentStep={this.props.form.currentStep}/>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
