import React, {Component} from 'react';
import { Document, Page } from 'react-pdf';
import { FormHelperText } from '@material-ui/core';
import { ButtonsNavigateNext, ButtonsNavigateBefore } from '../Util/Buttons/ButtonsNavigate';

export default class PdfDocumentPresentational extends Component {

  constructor (props) {
    super(props);
    this.state = {
      currentPage: 1,
      numPages: null
    };
    this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  onDocumentLoadSuccess = ({ numPages }) => {

    this.setState({
      numPages,
      currentPage: 1
    });
  };



  changePage = offset => this.setState({
    currentPage: this.state.currentPage + offset,
  });

  render () {
    const { file } = this.props;
    const { currentPage, numPages } = this.state;
    return (
      <>
      <div className="pdfContent">
        <Document className="contentPdf" file={file}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page  pageNumber={currentPage} />
        </Document>
        <div className="pdfButtons">
          <FormHelperText>
            Página {currentPage || (numPages ? 1 : '--')} de {numPages || '--'}
          </FormHelperText>
          <ButtonsNavigateBefore
            type="button"
            disabled={currentPage <= 1}
            onClick={ () => this.changePage(-1)}
          >
            Previous
          </ButtonsNavigateBefore>
          <ButtonsNavigateNext
            type="button"
            disabled={currentPage >= numPages}
            onClick={() => this.changePage(+1)}
          >
            Next
          </ButtonsNavigateNext>
        </div>
      </div>
</>
    );
  }
}
;