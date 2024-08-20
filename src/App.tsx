import { useState } from 'react'
import './App.css'
import GeneralInfo from './components/GeneralInfo'

function App() {

  const [generalInfo,setGeneralInfo]= useState({name:'',email:'',phone:""});

  const handleGeneralInfoChange = (info) =>{
    setGeneralInfo(info);
  }
  return (
    <>
      <GeneralInfo data={generalInfo} onChange={handleGeneralInfoChange}/>
    </>
  )
}

export default App
