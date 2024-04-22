// import cart from './AddToCart';
// import { configureStore } from "@reduxjs/toolkit"
// const store = configureStore({
//     reducer:{addedCart:cart}
// })

// export default store



import incDic from './AddToCart';
import { configureStore } from "@reduxjs/toolkit"
const store = configureStore({
    reducer: { incrDicr: incDic }
})
export default store
