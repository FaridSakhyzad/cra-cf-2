import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  show: true,
  text: 'ASDF 1024 x QWERTY 768',
};

const uiSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    uiToggle: (state) => {
      state.show = !state.show;
    },
  },
});

const { uiToggle } = uiSlice.actions;

export { uiToggle };

export default uiSlice.reducer;
