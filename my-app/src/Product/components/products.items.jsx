
import React from 'react';
import "./products.items.css"

function Buttoncomponent() {
    return (
        <button className='buttonstyle'>
            Click
        </button>
    )
}


function Productitem({singleproduct,key}) {

   return(
    <div  style={{ padding:"20px",border:"2px solid red",marginBottom:"12px"}}
    key={key} >
        <p className='products-styles'>
            {singleproduct}
        </p>
        <Buttoncomponent />
    </div>
   )
}

export default Productitem