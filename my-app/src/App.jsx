import React from "react";
import Products from "./Product"; 
import User from "./Product/components/user";
let dummyProductuctitems = ["Product 1","Product 2","Product 3"]

function App() {
  return (
    <div>
      <h1>Welcome to the Ecommerce Project</h1>
      {/* <Products  listofproducts = {dummyProductuctitems} name = "nani" city = "Suryapet"/> */}
      <User/>
    </div>
  );
}

export default App;
