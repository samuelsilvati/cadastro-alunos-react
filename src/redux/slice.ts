import { createSlice } from '@reduxjs/toolkit';

interface State {
  botaoClicado: boolean;
}

const initialState: State = {
  botaoClicado: false,
};

const botaoSlice = createSlice({
  name: 'botao',
  initialState,
  reducers: {
    botaoClicadoSuccess: (state) => {
      console.log('SUCCESS');
      // eslint-disable-next-line no-param-reassign
      state.botaoClicado = !state.botaoClicado;
    },
    botaoClicadoFailure: (state) => {
      console.log('FAILURE');
      // eslint-disable-next-line no-param-reassign
      state.botaoClicado = !state.botaoClicado;
    },
    botaoClicadoRequest: (state) => {
      console.log('REQUEST');
      // eslint-disable-next-line no-param-reassign
      state.botaoClicado = !state.botaoClicado;
    },
  },
});

export default botaoSlice.reducer;

export const { botaoClicadoSuccess, botaoClicadoFailure, botaoClicadoRequest } =
  botaoSlice.actions;
