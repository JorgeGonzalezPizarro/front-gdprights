import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Main } from './Components/Main'
import Provider from 'react-redux/es/components/Provider'
import  {ConfigureStore}  from './redux/ConfigureStore'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
export class App extends Component {
  render() {
    return (
      <Provider store={ ConfigureStore()}>
        <MuiThemeProvider muiTheme={getMuiTheme()}>

      <div className="App">
        <Main />
      </div>
        </MuiThemeProvider>

      </Provider>
    );
  }
}

