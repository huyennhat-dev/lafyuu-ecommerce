import React from 'react';

import Navigation from './src/navigation';
import store from "./src/stores/configureStore";
import { Provider } from "react-redux";

function App() {

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
