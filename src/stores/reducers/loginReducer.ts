import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface LoginState {
  token: string;
}

const initialState: LoginState = {
  token: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const {setToken} = loginSlice.actions;
export default loginSlice.reducer;
