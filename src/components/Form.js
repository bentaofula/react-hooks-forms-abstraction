// import React, { useState } from "react";

// function Form() {
//   const [firstName, setFirstName] = useState("John");
//   const [lastName, setLastName] = useState("Henry");
//   const [submittedData,setSubmittedData] = useState("Woods");
//   const [errors, setErrors] = useState([])

//   function handleFirstNameChange(event) {
//     setFirstName(event.target.value);
//   }

//   function handleLastNameChange(event) {
//     setLastName(event.target.value);
//   }

//   function handleSubmit(event){
//     event.preventDefault();
//     if(firstName.length > 0){
//       const formData = {
//         firstName: firstName, lastName: lastName,
//       }

//       const dataArray = [...submittedData, formData];
//       setSubmittedData(dataArray);
//       setFirstName("");
//       setLastName("");
//       setErrors([]);
//     }
//     else{
//       setErrors(["First Name is required"])
//     }

//   }

//   const allSubmissions = submittedData.map((data,index)=>{
//     return(
//       <div key={index}>
//         {data.firstName} {data.lastName}
//       </div>
//     )
//   })

//   return (
//     <div>
//     <form onSubmit={handleSubmit}>
//       <input type="text" onChange={handleFirstNameChange} value={firstName} />
//       <input type="text" onChange={handleLastNameChange} value={lastName} />
//       <button type="submit">Submit</button>
//     </form>
//     {errors.length > 0 ? errors.map((error, index)=>(
//       <p key={index} style={{color: "red"}}>{error}</p>
//     )):null}
//     <h3>Submissions</h3>
//     {allSubmissions}
//     </div>

//   );
// }
import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false,
  });

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    // use `checked` property of checkboxes instead of `value`
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        value={formData.firstName}
      />
      <input
        type="text"
        name="lastName"
        onChange={handleChange}
        value={formData.lastName}
      />
      <input
        type="checkbox"
        name="admin"
        onChange={handleChange}
        checked={formData.admin}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
