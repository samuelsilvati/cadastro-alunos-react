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
    botaoClicado: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.botaoClicado = !state.botaoClicado;
    },
  },
});

export default botaoSlice;
