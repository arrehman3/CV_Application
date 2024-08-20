import { useState } from 'react'
import './App.css'
import GeneralInfo from './components/GeneralInfo'
import EducationalExperience from './components/EducationalExperience';

function App() {

  const [generalInfo,setGeneralInfo]= useState({name:'',email:'',phone:""});
  const [eduacationalExperience,setEducationalExperience]=useState({matricMarks:"",intermediateMarks:"",gpa:""});

  const handleGeneralInfoChange = (info) =>{
    setGeneralInfo(info);
  }

  const handleEducationalInfoChange=(info)=>{
    setEducationalExperience(info);
    
  }
  return (
    <>
      <GeneralInfo data={generalInfo} onChange={handleGeneralInfoChange}/>
      <EducationalExperience data={eduacationalExperience} onChange={handleEducationalInfoChange}/>
    </>
  )
}

export default App
