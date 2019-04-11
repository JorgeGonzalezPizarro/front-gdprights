import React, {Component} from 'react';
// Import React FilePond
import Webcam from 'react-webcam';
import Button from '@material-ui/core/Button';


export default class CameraInputField  extends Component{


  constructor(props) {
    super(props);

    const { name, onChange, label } = props;
  }

  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = (acceptOrDecline) => {
    if(!acceptOrDecline)
    {
      this.props.handleClose();
      return;
    }

    const imageSrc = async() => await this.webcam.getScreenshot();
    imageSrc().then((data) =>     this.props.onChange(this.props.name, data, true)).then(()=>    this.props.handleClose());
  };

  render() {
    const videoConstraints = {
      facingMode: 'user'
    };

    return (
      <div>
        <Webcam
          audio={false}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        />
        <Button onClick={ () =>  this.capture(true)} color="primary">
          Capturar
        </Button>
        <Button onClick={  () => this.capture(false)} color="secondary">
          Volver
        </Button>
      </div>
    );
  }
}


