import React, { Component } from 'react'
import './App.css'
import Main from './Components/Main'
import Provider from 'react-redux/es/components/Provider'
import { ConfigureStore } from './redux/ConfigureStore'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { BrowserRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component {
  constructor (props) {
    super(props)

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
    )
  }

}

export default App

