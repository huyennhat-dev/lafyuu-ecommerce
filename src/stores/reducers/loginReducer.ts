import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface LoginState {
  token: string;
  logged: boolean;
}

const initialState: LoginState = {
  token: '',
  logged: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginState>) => {
      state.logged = action.payload.logged;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.logged = false;
      state.token = '';
    },
  },
});

export const {login,logout} = loginSlice.actions;
export default loginSlice.reducer;
