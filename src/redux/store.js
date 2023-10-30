

import { configureStore } from '@reduxjs/toolkit';
import Show_Code_Bar_Slice from './Slices'
const store = configureStore({
    reducer: {
      counter: Show_Code_Bar_Slice, // Add your reducer(s) here
    },
  });
  
  export default store;
  