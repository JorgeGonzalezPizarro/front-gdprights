import React, {Component} from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { alertUtil } from './alertUtil';

export default class PopoverHOC extends Component {
  constructor(props){
    super(props);
    this.state = {
      anchorEl: null,

    };
    this.handlePopoverClose=this.handlePopoverClose.bind(this);
    this.handlePopoverOpen=this.handlePopoverOpen.bind(this);
  }


  handlePopoverOpen = event => {
    event.preventDefault();
    this.setState({ anchorEl: event.currentTarget });
  };

  handlePopoverClose = () => {
    this.setState({ anchorEl: null });
  };


  render () {
    const { anchorEl } = this.state;
    const WrapperComponent = this.props.children;
    console.log( this.props.children, WrapperComponent);
    const open = Boolean(anchorEl);

    return (
      <div  onMouseEnter={this.handlePopoverOpen} onMouseLeave={this.handlePopoverClose}>
        <WrapperComponent />
        <Popover
          id="mouse-over-popover"

          open={this.state.anchorEl!==null}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          onClose={this.handlePopoverClose}
          disableRestoreFocus
        >
          <Typography>I use Popover.</Typography>
        </Popover>
      </div>

    );
  }
}