/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from '../../services/axios';
import { AuthState, LoginRequestPayload, User } from './types';

const initialState: AuthState = {
  isLoggedIn: false,
  token: false,
  user: {
    nome: '',
    email: '',
  },
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    loginRequest: (state, action: PayloadAction<LoginRequestPayload>) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action: PayloadAction<AuthState>) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLoading = false;
    },
    loginFailure: (state) => {
      state.isLoggedIn = false;
      state.token = false;
      state.user = { nome: '', email: '' };
      state.isLoading = false;
    },
    registerRequest: (state) => {
      state.isLoading = false;
    },
    registerFailure: (state) => {
      delete axios.defaults.headers.Authorization;
      state.isLoading = false;
    },
    registerUpdatedSuccess: (state, action: PayloadAction<User>) => {
      state.user.nome = action.payload.nome;
      state.user.email = action.payload.email;
      state.isLoading = false;
    },
    registerCreatedSuccess: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  loginSuccess,
  loginFailure,
  loginRequest,
  registerRequest,
  registerFailure,
  registerUpdatedSuccess,
  registerCreatedSuccess,
} = authSlice.actions;

export default authSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// interface State {
//   isLoggedIn: any;
//   token: any;
//   user: any;
//   isLoading: any;
// }

// const initialState: State = {
//   isLoggedIn: false,
//   token: false,
//   user: {},
//   isLoading: false,
// };

// const dataSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     loginRequest: (state, action) => {
//       console.log('REDUCER', state, action.payload);
//     },
//     loginSuccess: (state, action) => {
//       console.log('SUCCESS');
//     },
//     loginFailure: (state, action) => {
//       return initialState;
//     },
//   },
// });

// export default dataSlice.reducer;

// export const { loginRequest, loginSuccess, loginFailure } = dataSlice.actions;
