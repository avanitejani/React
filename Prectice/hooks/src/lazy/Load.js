import React, { Suspense,lazy } from 'react'
import pMdelay from 'p-min-delay';
import './Load.css'
// import Featch from '../hooks/UseEffect/Featch';
// import Featch from '../class/Tdoclass';



const Cal = lazy(() => pMdelay(import('../hooks/calculator/Cal'), 2000))
// const Tdoclass = lazy(() => pMdelay(import('../class/Todoclass'), 2000))
const Featch = lazy(() => pMdelay(import('../hooks/UseEffect/Featch'), 2000))


// import Cal from 

const Load = () => {

    return (
      
      <>
      
            <Suspense fallback={<div class='loader'>
                <div class="spinner-border" role="status"></div>
                <span >Loading...</span>

            </div>} 
            >
                

                
                <Cal />
                {/* <Todoclass /> */}
                <Featch />
            </Suspense>

      </>
  )
}

export default Load