// storeConfig.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// 1. Create a "slice" of state using createSlice
const numerosSlice = createSlice({
  name: 'numeros', // A name for this slice of state
  initialState: {
    min: 1, 
    max: 110,
  },
  reducers: {
    // Reducer for when the minimum value changes
    set_min: (state, action) => {
      state.min = action.payload; 
    },
    // Reducer for when the maximum value changes
    set_max: (state, action) => {
      state.max = action.payload;
    },
  },
});

// 2. Configure the store with the new slice reducer
function storeConfig() {
  return configureStore({
    reducer: {
      numeros: numerosSlice.reducer,
    },
  });
}

// 3. Export the action creators from the slice
export const { set_min, set_max } = numerosSlice.actions;

export default storeConfig;

// import { createStore, combineReducers } from 'redux'

// const reducers = combineReducers({
//     numeros: function(state, action){
//         console.log(state, ' ', action)
//         return {
//             min: 1, 
//             max: 10
//         }
//     }
// })

// function storeConfig(params) {
//     return createStore(reducers)
// }

// export default storeConfig