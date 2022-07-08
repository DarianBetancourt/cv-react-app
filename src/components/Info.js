import React from 'react'

const Info = ({ fullName,bio,handleEdit }) => {
  return (
    <div>
        <h1>Hello, I'm {fullName}</h1>
            <p>{bio}</p>
        <button className='btn-edit' onClick={handleEdit}>Edit</button>
    </div>
  )
}

export default Info