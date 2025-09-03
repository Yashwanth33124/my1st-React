import React, { useEffect, useState } from 'react';
import "./index.css";
import Productitem from './components/products.items';

const result = false

const Products = ({name,city,listofproducts}) => {
  
  let [flag,setFlag] = useState(result)
  let [count,setCount] = useState(0)
  const [changestyle,setchangestyle] = useState(false )
  // const flag = false

  // let result = flag ?  <h4>
  //       Name is {name}, he/she belongs to {city}
  //     </h4> : <h4>Hello World</h4>
  function handlecount() {
    setCount(count + 1)
  }
useEffect(()=>{

  if(count == 0)  setchangestyle(true)
  
},[count])

  console.log("colour changes")

  function handletoggle() {
    setFlag(!flag)
  }
  
  useEffect(()=>{
    setFlag(!flag)
    console.log("run only once the page loaded");
    
  },[])
  return (
    <div className='container'>
      <h3 className='heading'>Ecommerce Project</h3>
      <button onClick={handletoggle}>toggle test</button>
      {
        flag ? <h4>{name} and {city}</h4> : <h5>Hello </h5>
      }
      <div>

        <p>
          count is {count}
        </p>
        <button  style={{backgroundColor : changestyle ? 'black' : 'white',color : changestyle ? 'white' : 'black'}} onClick={handlecount} >
          increse Count
        </button>
      </div>
     
      <ul>
        {listofproducts.map((item,index)=>
        <Productitem  singleproduct={item} key={index}/>
        )}
      </ul>
      
    </div>
  );
};

export default Products;

