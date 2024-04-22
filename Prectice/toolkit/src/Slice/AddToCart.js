import { createSlice } from "@reduxjs/toolkit";

// const cart = createSlice({
//     name: 'cartName',
//     initialState: 0,
//     reducers: {
//         addTo(state, action) {
//             console.log(action.payload);
//             return state + parseInt(action.payload);
//         }
//     }
// });

// // Export the reducer
// export default cart.reducer;

// // Export the action creators
// export const { addTo } = cart.actions;



const incDic = createSlice({
    name: 'cartName',
    initialState: 0,
    reducers: {
        inc(state, action) {
            return state + parseInt(action.payload);
        },
        dec(state, action) {
            return state - parseInt(action.payload);
        }
    }
});
    
export default incDic.reducer;

export const { inc, dec } = incDic.actions;