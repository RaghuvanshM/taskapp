import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import { Provider } from 'react-redux';
import RegistrationScreen from './src/Screen/Registrationform/Registrationform';
import {store} from './src/redux/store';
import FlashMessage from "react-native-flash-message";
class App extends Component {
  render() {
    return (
      <PaperProvider>
        <RegistrationScreen />
        <FlashMessage position="bottom" />
      </PaperProvider>
    
    )
  }
}
export default App;