// counterSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  state: false,
};

const Show_Code_Bar_Slice = createSlice({
  name: 'showCodeBar',
  initialState,
  reducers: {
    codeBar: (state)=>{
        return state =true;
    }
  },
});

export const { codeBar } = Show_Code_Bar_Slice.actions;
export default Show_Code_Bar_Slice.reducer;
