import React,{useState} from 'react'
import FormInfo from './FormInfo';
import Info from './Info';


const Introduction = () => {
    const [fullName, setFullName] = useState("Darian Betancourt");
    const [bio, setBio] = useState("I'm Software Developer");
    const [showInfo, setShowInfo] = useState(true);

    const handleEdit = () =>{
        console.log("edit")
        setShowInfo(!showInfo)
    }
    const handleSave = (formValue) =>{
        setBio(formValue.formBio);
        setFullName(formValue.formName)
        setShowInfo(!showInfo)
    }


  return (
    <div className='element'>
        <h3 className="element-title">INTRODUCTION</h3>
        {
            showInfo ? 
            <Info fullName={fullName} bio={bio} handleEdit= {handleEdit} /> 
            : 
            <FormInfo fullName={fullName} bio={bio} handleSave= {handleSave}/>
        }
    </div>
  )
}

export default Introduction