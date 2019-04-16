import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchCountries_,
  fetchEntities_,
  fetchForm,
  sendRequest_,
  confirmPdf_, downloadPdf_
} from '../redux/ActionCreators/Form/ActionCreatorsForm';
import { Loading } from './Util/LoadingComponent';
import { NavbarMenu } from './Header/NavbarMenu';
import { FunctionalForm } from './Form/FunctionalForm/FunctionalForm';
import {FunctionalPDF} from './PDF/FunctionalPDF';
import  GridContainer  from './Grid/GridContainer';
import ContentMain from './Grid/ContentMain';
import { LoadingForm } from './Util/LoadingForm';

const mapStateToProps = (state) => {
  return { form: state.form, ...state.form.pdf };
};

const mapDispatchToProps = (dispatch) => ({
  fetchForm: () => {
    dispatch(fetchForm());
  },
  sendRequest: (data) => {
    dispatch(sendRequest_(data));
  },
  fetchEntities: () => {
    dispatch(fetchEntities_());
  },
  fetchCountries: (id) => {
    dispatch(fetchCountries_(id));
  },
  confirmPdf : (confirm, requestId) => {
    dispatch(confirmPdf_(confirm, requestId));
  },
  downloadPdf : (file) => {
    dispatch(downloadPdf_(file));
  }
}
);

export class Main extends Component {
  constructor (props) {
    super(props);
    this.state = {
      form: props.form,
      pdf: props.form.pdf
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


    const onClickPdf = (confirm) => {
      const {requestId} = this.props.form;
      console.log(this.props);

      this.props.confirmPdf(confirm, requestId);
    };

    if (this.props.form.isLoading === true) {

      return (<>
        <GridContainer>

          <NavbarMenu/>
          <ContentMain>
            <LoadingForm/>
          </ContentMain></GridContainer>
        </>);
    }

    const onClickDownload = () => {
      const {file} = this.props.form.pdf;
      this.props.downloadPdf(file);

    };



    return (

      <GridContainer>

        <NavbarMenu/>
        <ContentMain>

          {this.props.form.pdf === undefined ? <FunctionalForm getEntities={getEntities}
            fetchCountrieForEntitie={fetchCountrieForEntitie}
            firstForm={this.props.form.firstForm}
            secondForm={this.props.form.secondForm}
            thirdForm={this.props.form.thirdForm}
            currentStep={this.props.form.currentStep}
            onClick={this.props.sendRequest}/> :
            <FunctionalPDF {...this.props.form.pdf} onClickDownload={onClickDownload} onClickPdf={onClickPdf}/>
          }
        </ContentMain>

      </GridContainer>

    );

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
