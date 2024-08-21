import Reac,{useState} from 'react'

export default function PracticalExperience({data,onChange}) {
    const[experience,setExperience]= useState(data.experience || "");
    const [isEdit,setIsEdit]=useState(true);

    const handlePracticalExperienceChange=(e)=>setExperience(e.target.value)

    const handleEdit=()=>{
        setIsEdit(true);
    }

    
    const handleSubmitButton=(e)=>{
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
