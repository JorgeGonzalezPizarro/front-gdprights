import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  confirmPdf_,
  downloadPdf_,
  // fetchCountries_,
  fetchEntities_,
  fetchForm,
  rejectPdf_,
  pdfPost,
  initialState
} from '../redux/ActionCreators/Form/ActionCreatorsForm';
import { NavbarMenu } from './Header/NavbarMenu';
import { FunctionalForm } from './Form/FunctionalForm/FunctionalForm';
import { FunctionalPDF } from './PDF/FunctionalPDF';
import GridContainer from './Grid/GridContainer';
import ContentMain from './Grid/ContentMain';
import { LoadingForm } from './Util/LoadingForm';
import { ApiError } from './Errors/ApiError';
import { Error500 } from './Errors/Error500';

const mapStateToProps = (state) => {
  return { form: state.form, ...state.form.pdf };
};

const mapDispatchToProps = (dispatch) => ({
  fetchForm: () => {
    dispatch(fetchForm());
  },
  pdfPost: (data) => {
    dispatch(pdfPost(data));
  },
  fetchEntities: () => {
    dispatch(fetchEntities_());
  },
  // fetchCountries: (id) => {
  //   dispatch(fetchCountries_(id));
  // },
  confirmPdf: (confirm, requestId) => {
    dispatch(confirmPdf_(confirm, requestId));
  },
  downloadPdf: (file) => {
    dispatch(downloadPdf_(file));
  },  initialState: () => {
    dispatch(initialState());
  },
  // rejectPdf: (requestId) => {
  //
  //   dispatch(rejectPdf_(requestId));
  // }
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
    const onClickErrorPdf = () => {
      this.props.initialState();
    };



    const onClickPdf = (confirm) => {
      const { requestId } = this.props.form;

      if (confirm === true) {

        this.props.confirmPdf(confirm, requestId);
        return;
      }
      this.props.confirmPdf(confirm, requestId);

    };

    const onClickDownload = () => {
      const { file } = this.props.form.pdf;
      this.props.downloadPdf(file);

    };

    if (this.props.form.isLoading === true) {

      return (<>
        <GridContainer>
          <NavbarMenu help={this.openHelpModal}/>
          <ContentMain>
            <LoadingForm/>
          </ContentMain></GridContainer>
      </>);
    }
    if (this.props.form.error === true) {

      return (<>
        <ApiError><Error500/></ApiError>
      </>);
    }

    return (
      <GridContainer>
        <NavbarMenu/>
        <ContentMain>
          {this.props.form.pdf === undefined ? <FunctionalForm getEntities={getEntities}
            // fetchCountrieForEntitie={fetchCountrieForEntitie}
            firstForm={this.props.form.firstForm}
            secondForm={this.props.form.secondForm}
            thirdForm={this.props.form.thirdForm}
            currentStep={this.props.form.currentStep}
            onClick={this.props.pdfPost}/> :
            <FunctionalPDF {...this.props.form.pdf} onClickDownload={onClickDownload} onClickErrorPdf={onClickErrorPdf} onClickPdf={onClickPdf}/>
          }
        </ContentMain>

      </GridContainer>

    );

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
