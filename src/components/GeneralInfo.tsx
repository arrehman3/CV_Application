import React, { useState } from 'react'

export default function GeneralInfo({data,onChange}) {
    const [name,setName]=useState(data.name||'');
    const [email,setEmail]=useState(data.email||'');
    const [phone,setPhone]=useState(data.phone ||'');
    const [isEditing,setIsEditing]=useState(true);

    const handleNameChange=(e)=>setName(e.target.value);
    const handleEmailChange=(e)=>setEmail(e.target.value);
    const handlePhoneChange=(e)=>setPhone(e.target.value);

    const handleSubmit=(e)=>{
        e.preventDefault();
        onChange({name,email,phone})
        setIsEditing(false);
    }

    const handleEdit=()=>{
        setIsEditing(true);
    }

  return (
    <>
        <h2>General Information</h2>
        {isEditing ? (
            <form onSubmit = {handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={handleNameChange}/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={handleEmailChange}/>
                </div>
                <div>
                    <label>Phone:</label>
                    <input type="text" value={phone} onChange={handlePhoneChange}/>
                </div>
                <div>
                    <button type="submit">Save</button>
                </div>
        
            </form>
        ) : (

            <div>
                 <p><strong>Name:</strong> {name}</p>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Phone:</strong> {phone}</p>
                    <button onClick={handleEdit}>Edit</button>
            </div>
        )
        }
    </>
  )
}
