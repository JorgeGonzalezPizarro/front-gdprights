import React, { Component } from 'react';
import './App.css';
import Provider from 'react-redux/es/components/Provider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ConfigureStore } from './redux/ConfigureStore';
import Main from './Components/Main';

class App extends Component {
  constructor (props) {
    super(props);

  }

  render () {
    return (
      <Provider store={ConfigureStore()}>
        <MuiThemeProvider muiTheme={getMuiTheme()}>

          <BrowserRouter>
            <div className="App">
              <Main/>
            </div>
          </BrowserRouter>
        </MuiThemeProvider>
      </Provider>
    );
  }

}

export default App;

