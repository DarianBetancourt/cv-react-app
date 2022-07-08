import React, { useState } from 'react'

const FormInfo = ({fullName,bio,handleSave}) => {
    const [formValue, setFormValue] = useState({
        formName: fullName,
        formBio: bio,
    })
    /* const [formName, setFormName] = useState(fullName)
    const [formBio, setFormBio] = useState(bio) */

    const handleChange = (event) => {
        console.log("change")
        const { name, value } = event.target;
        setFormValue((prevState) => {
            return {
              ...prevState,
              [name]: value,
            };
        });
    }

    const {formName, formBio} = formValue;
  return (
    <div>
        <div>
            Full Name
            <input type="text" value={formName} name="formName" onChange={handleChange}></input>
        </div>
        <div>
            Bio
            <textarea type="text" name="formBio" value={formBio} onChange={handleChange}></textarea>

        </div>
        <button onClick={()=>handleSave(formValue)}>Save</button>
    </div>
  )
}

export default FormInfo