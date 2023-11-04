import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserModel} from 'src/models/user.model';

const initialState: UserModel = {
  name: '',
  address: '',
  email: '',
  phone: '',
  photo: '',
};

const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    setInfo: (state, action: PayloadAction<UserModel>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.photo = action.payload.photo;
      state.address = action.payload.address;
    },
    removeInfo: (state) => {
      state.name = '';
      state.email = '';
      state.phone = '';
      state.photo = '';
      state.address = '';
    },
  },
});

export const {setInfo,removeInfo} = infoSlice.actions;
export default infoSlice.reducer;
