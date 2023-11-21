
import React, { useState } from 'react'

const SearchBar = () => {
    const [jobcriteria, setjobcriteria] = useState({
title:"",
location:"",
experience:"",
type:""

    })
    const handleChange =(e)=>{
        setjobcriteria((preState) =>
        ({
            ...preState,
            [e.target.name]:e.target.value
        }))

    }
    console.log(jobcriteria);
     const search = async() =>{
await props.fetchJobsCustom(jobcriteria);

     }
  return (
    <div className='  my-10 flex gap-4  justify-center px-10'>
      <select onChange={handleChange} name="title" value={jobcriteria.title} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md '>
        <option value="" disabled hidden selected>
            Job Role
        </option>
        <option value="ios Developer"> ios Developer</option>
        <option value="Front-end developer"> Front-end developer</option>
        <option value=" react Developer"> react Developer</option>
        <option value=" Backend Developer"> Backend Developer</option>
        <option value=" ful stack Developer"> ful stack Developer</option>
        

      </select>
      <select onChange={handleChange} name="type" value={jobcriteria.type}className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md '>
        <option value="" disabled hidden selected>
            Job Type
        </option>
        
        <option value="full Time"> full Time</option>
        <option value="Part Time"> Part Time</option>
        <option value="Contract"> Contract</option>
        

      </select>
      <select onChange={handleChange} name="location" value={jobcriteria.location}className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md '>
        <option value="" disabled hidden selected>
           location
        </option>
        <option value="Remote"> Remote</option>
        <option value="WFO"> WFO</option>
        <option value="WFH"> WFH</option>
        <option value="HYbrid"> HYbrid</option>
        
        

      </select>
      <select onChange={handleChange} name="experience" value={jobcriteria.experience} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md '>
        <option value="" disabled hidden selected>
           Experience
        </option>
        <option value="internship"> internship</option>
        <option value="entry level"> entry level</option>
        <option value="Fresher">Fresher</option>
        <option value="Mid-Level"> Mid-Level</option>
        <option value="Senior level"> Senior level</option>
        

      </select>
      <button  onClick ={search} className='w-64 bg bg-blue-500 text-white font-bold py-3 rounded-md' value="search">search</button>
    </div>
  )
}

export default SearchBar
