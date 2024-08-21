import {SetStateAction, useState} from 'react'


interface PracticalExperienceProps {
  data: {
    experience: string;
  };
  onChange: (data: { experience: string }) => void;
}

export default function PracticalExperience({ data, onChange }: PracticalExperienceProps) {
    const[experience,setExperience]= useState(data.experience || "");
    const [isEdit,setIsEdit]=useState(true);

    const handlePracticalExperienceChange=(e: { target: { value: SetStateAction<string>; }; })=>setExperience(e.target.value)

    const handleEdit=()=>{
        setIsEdit(true);
    }

    
    const handleSubmitButton=(e: { preventDefault: () => void; })=>{
        e.preventDefault();
        onChange({experience});
        setIsEdit(false);

    }    
  return (
    <>
        <h2>Practical Experience</h2>
        {isEdit ? (
            <form onSubmit={handleSubmitButton}>
                <div>
                    <label>Experience</label>
                    <input type="number" value={experience} onChange={handlePracticalExperienceChange}></input>
                </div>
                <div>
                    <button type="submit">Save</button>
                </div>
            </form>
        ) : (
            <div>
                <p><strong>Practical Experience:</strong>{experience}</p>
                <button onClick={handleEdit}>Edit</button>
            </div>
        )}   
    
    
    </>
  )
}
