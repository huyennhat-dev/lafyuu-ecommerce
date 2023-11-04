import React from 'react';

import Navigation from './src/navigation';
import store from "./src/stores/configureStore";
import { Provider } from "react-redux";
import Toast from 'react-native-toast-message';

function App() {

  return (
    <Provider store={store}>
      <Navigation />
      <Toast />
    </Provider>
  );
}

export default App;
