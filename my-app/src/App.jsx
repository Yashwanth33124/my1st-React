import React from "react";
// import Products from "./Product"; 
// import User from "./Product/components/user";
// import Button from "./context-concept/button";
// import Text from "./context-concept/text";
import Reducer from "./Product/components/use-reducer-example";
import FormComponent from "./Product/components/form";
import Registerform from "./Product/components/register";
import Loginform from "./Product/components/login-form";
let dummyProductuctitems = ["Product 1","Product 2","Product 3"]

function App() {
  return (
    <div>
      <h1>Welcome to the Ecommerce Project</h1>
      {/* <Products  listofproducts = {dummyProductuctitems} name = "nani" city = "Suryapet"/> */}
      {/* <User/> */}
      {/* <Button/>
      <Text/> */}

      {/* <Reducer/> */}
      {/* <FormComponent/> */}

      <div  style={{
        display:"flex",
        gap:"200px"
      }}>
        <Registerform/>
        <Loginform/>
      </div>
    </div>
  );
}

export default App;
