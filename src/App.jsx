import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar'
import Header from './components/header'
import SearchBar from './components/searchbar'
import Jobcard from './components/jobcard'
import { collection,query,where,orderBy,getDocs } from 'firebase/firestore'
import { db } from './firebase.config'

const App = () => {
  const [Jobs, setJobs] = useState([]);
const [customSearch ,setcustomSearch] =useState(false);

  const fetchjobs = async()=>{
    setcustomSearch(false)
     const tempjobs =[]
const jobRef =  query(collection(db,"jobs"));
const q = query(jobRef,orderBy("postedon", "desc"));
const req =await getDocs(q);
req.forEach((job)=>{
  // console.log(doc.id,"=>",doc.data());
  tempjobs.push({
    ...job.data(),
    id:job.id,
    postedon:job.data().postedon.toDate()
  })
});
setJobs(tempjobs);
  }

  const fetchjobsCustom = async(jobcriteria)=>{
    setcustomSearch(true)
    const tempjobs =[]
const jobRef =  query(collection(db,"jobs"));
const q = query(jobRef,where("type", "==",jobcriteria.type),where("title", "==",jobcriteria.title),where("location", "==",jobcriteria.location),where("experience", "==",jobcriteria.experience),orderBy("postedon", "desc"));
const req =await getDocs(q);
req.forEach((job)=>{
 // console.log(doc.id,"=>",doc.data());
 tempjobs.push({
   ...job.data(),
   id:job.id,
   postedon:job.data().postedon.toDate()
 })
});
setJobs(tempjobs);
 }
  useEffect(() => {
    fetchjobs()
  
    
  }, [])
  
  return (
    <div>
      <Navbar/>
      <Header/>
      <SearchBar fetchjobsCustom={fetchjobsCustom}/>
      {customSearch &&
      < button onClick ={fetchjobs} className='flex pl-[1250px] mb-2'>
      <p className='bg-blue-500 px-10 py-2 rounded-md text-white'>Clear Filter</p>
      
      </button >

      }
      
      {Jobs.map((job)=>(
        <Jobcard key={job.id}
        {...job}/>
      ))}
    
    </div>
  )
}

export default App
