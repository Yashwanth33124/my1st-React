import React, { useState } from 'react'
import CommonForm from '../Common-Form'

const Loginform = () => {

   const[Loginform,setLoginform] = useState({
    email:" ",
    password: " "
   })



  return (
    <div>
      <h1>
        Loginform Page 
      </h1>
      <CommonForm 
      formData={Loginform}
      setformData={setLoginform}
      formControls={Loginform}
      />

    </div>
  )
}

export default Loginform
