import { SetStateAction, useState } from 'react'
import './App.css'
import GeneralInfo from './components/GeneralInfo'
import EducationalExperience from './components/EducationalExperience';
import PracticalExperience from './components/PracticalExperience';

function App() {

  const [generalInfo,setGeneralInfo]= useState({name:'',email:'',phone:""});
  const [eduacationalExperience,setEducationalExperience]=useState({matricMarks:"",intermediateMarks:"",gpa:""});
  const [personalExperience,setPersonalExperience]=useState({experience:""})

  const handleGeneralInfoChange = (info: SetStateAction<{ name: string; email: string; phone: string; }>) =>{
    setGeneralInfo(info);
  }

  const handleEducationalInfoChange=(info: SetStateAction<{ matricMarks: string; intermediateMarks: string; gpa: string; }>)=>{
    setEducationalExperience(info);
    
  }

  const handlePersonalExperienceChange=(info: SetStateAction<{ experience: string; }>)=>{
    setPersonalExperience(info);
  }
  return (
    <>
      <GeneralInfo data={generalInfo} onChange={handleGeneralInfoChange}/>
      <EducationalExperience data={eduacationalExperience} onChange={handleEducationalInfoChange}/>
      <PracticalExperience data={personalExperience} onChange={handlePersonalExperienceChange}/>
    </>
  )
}

export default App
