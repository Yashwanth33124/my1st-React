import React, { useState } from 'react'

const FormComponent = () => {
  const [formdata, setformdata] = useState({
    name: "",
    email: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setformdata({
      ...formdata,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted:", formdata);
  }

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Enter your Name"
          value={formdata.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={formdata.email}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default FormComponent
