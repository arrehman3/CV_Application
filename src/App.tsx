import { useState } from 'react'
import './App.css'
import GeneralInfo from './components/GeneralInfo'
import EducationalExperience from './components/EducationalExperience';
import PracticalExperience from './components/PracticalExperience';

function App() {

  const [generalInfo,setGeneralInfo]= useState({name:'',email:'',phone:""});
  const [eduacationalExperience,setEducationalExperience]=useState({matricMarks:"",intermediateMarks:"",gpa:""});
  const [personalExperience,setPersonalExperience]=useState({experience:""})

  const handleGeneralInfoChange = (info) =>{
    setGeneralInfo(info);
  }

  const handleEducationalInfoChange=(info)=>{
    setEducationalExperience(info);
    
  }

  const handlePersonalExperienceChange=(info)=>{
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
