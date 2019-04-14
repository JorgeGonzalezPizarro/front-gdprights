import React, {Component} from 'react';
import { Document, Page } from 'react-pdf';
import { Button } from 'reactstrap';
import { Loading } from '../Util/LoadingComponent';
import { alertUtil } from '../Util/alertUtil';

export default class PdfDocumentPresentational extends Component {

  constructor (props) {
    super(props);
    this.state = {
      currentPage: 1,
      numPages: null
    };
    alertUtil("sdfdsfs")
    console.log(props)
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
    const { file, onClickPdf } = this.props;
    const { currentPage, numPages } = this.state;
    return (
      <div className="pdfContent">
        <Document file={file}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page  pageNumber={currentPage}/>

        </Document>
        <div>
          <p>
            Page {currentPage || (numPages ? 1 : '--')} of {numPages || '--'}
          </p>
          <button
            type="button"
            disabled={currentPage <= 1}
            onClick={ () => this.changePage(-1)}
          >
            Previous
          </button>
          <button
            type="button"
            disabled={currentPage >= numPages}
            onClick={() => this.changePage(+1)}
          >
            Next
          </button>
        </div>
      </div>

    );
  }
}
;