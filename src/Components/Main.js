import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  confirmPdf_,
  downloadPdf_,
  fetchCountries_,
  fetchEntities_,
  fetchForm,
  rejectPdf_,
  sendRequest_
} from '../redux/ActionCreators/Form/ActionCreatorsForm';
import { NavbarMenu } from './Header/NavbarMenu';
import { FunctionalForm } from './Form/FunctionalForm/FunctionalForm';
import { FunctionalPDF } from './PDF/FunctionalPDF';
import GridContainer from './Grid/GridContainer';
import ContentMain from './Grid/ContentMain';
import { LoadingForm } from './Util/LoadingForm';
import {DialogModal} from './Util/DialogModal';
import { Help } from './Pages/Help';
import { Dialog } from 'material-ui';
import { alertUtil } from './Util/alertUtil';

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
  confirmPdf: (confirm, requestId) => {
    dispatch(confirmPdf_(confirm, requestId));
  },
  downloadPdf: (file) => {
    dispatch(downloadPdf_(file));
  },
  rejectPdf: (requestId) => {

    dispatch(rejectPdf_(requestId));
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

    this.openHelpModal = this.openHelpModal.bind(this)
  }

  componentDidMount () {
    this.props.fetchForm();
  }

  shouldComponentUpdate (nextProps, nextState, nextContext) {
    return true;
  }

  openHelpModal = () => {

    return (<>
      <DialogModal open>
        <Help/>
      </DialogModal></>);
  };

  render () {
    const getEntities = () => {
      this.props.fetchEntities();
    };

    const fetchCountrieForEntitie = (id) => {
      this.props.fetchCountries(id);
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

          <NavbarMenu help={this.openHelpModal} />
          <ContentMain>
            <LoadingForm/>
          </ContentMain></GridContainer>
      </>);
    }



    return (
      <GridContainer>
        <NavbarMenu help={this.openHelpModal}/>
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
