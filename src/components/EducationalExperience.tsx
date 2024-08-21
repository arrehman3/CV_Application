import { SetStateAction, useState } from 'react'

interface EducationalExperienceProps {
  data: {
    matricMarks?: string;
    intermediateMarks?: string;
    gpa?: string;
  };
  onChange: (data: {
    matricMarks: string;
    intermediateMarks: string;
    gpa: string;
  }) => void;
}

export default function EducationalExperience({
  data,
  onChange,
}: EducationalExperienceProps) {
    const [matricMarks,setMatricMarks]=useState(data.matricMarks || '');
    const [intermediateMarks,setIntermediateMarks]=useState(data.intermediateMarks ||   "");
    const [gpa,setGpa]=useState(data.gpa || "");
    const [isEdit,setIsEdit]=useState(true);

    const handleMatricMarks=(e: { target: { value: SetStateAction<string>; }; })=>{
        setMatricMarks(e.target.value);
    }

    const handleIntermediateMarks=(e: { target: { value: SetStateAction<string>; }; })=>{
        setIntermediateMarks(e.target.value);
    }

    const handleGpa=(e: { target: { value: SetStateAction<string>; }; })=>{
        setGpa(e.target.value);
    }

    const handleisEdit=()=>{
        setIsEdit(true);
    }

    const handleeeSubmit=(e: { preventDefault: () => void; })=>{
        e.preventDefault();
        onChange({matricMarks,intermediateMarks,gpa});
        setIsEdit(false);
    }
  return (
    <>
    <h2>Educationa Experience</h2>
    {isEdit ? (
        <form onSubmit={handleeeSubmit}>
            <div>
                <label>Matric Marks</label>
                <input type="number" value={matricMarks} onChange={handleMatricMarks}></input>
            </div>
            <div>
                <label>IntermediateMarks</label>
                <input type="number" value={intermediateMarks} onChange={handleIntermediateMarks}></input>
            </div>
            <div>
                <label>GPA</label>
                <input type="number" value={gpa} onChange={handleGpa}></input>
            </div>
            <div>
                <button type="submit">Save</button>
            </div>
        </form>
    ):(
        <div>
                    <p><strong>Marks:</strong> {matricMarks}</p>
                    <p><strong>Intermediate Marks:</strong> {intermediateMarks}</p>
                    <p><strong>GPA:</strong> {gpa}</p>
                    <button onClick={handleisEdit}>Edit</button>
        </div>
    )}
    
    
    
    </>
  )
}

