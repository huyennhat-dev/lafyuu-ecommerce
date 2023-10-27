import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './reducers/counterReducer';
import loginReducer from './reducers/loginReducer';
import infoReducer from './reducers/infoReducer';
import cartReducer from './reducers/cartReducer';

export type RootState = {
  personalCounter: ReturnType<typeof counterReducer>;
  personalLogin: ReturnType<typeof loginReducer>;
  personalInfo: ReturnType<typeof infoReducer>;
  personalCart: ReturnType<typeof cartReducer>;
};

const store = configureStore({
  reducer: {
    personalCounter: counterReducer,
    personalLogin: loginReducer,
    personalInfo: infoReducer,
    personalCart: cartReducer,
  },
});

export default store;
