import React, { useState, useEffect } from "react";
import axios from 'axios';
import './User.css'
import { IoIosClose } from "react-icons/io";

export default function Update({ selected ,onclose}) {
  console.log(selected)
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [date, setDate] = useState('');
  

  useEffect(() => {
    if (selected) {
      setName(selected.name || '');
      setCourse(selected.course || '');
      setDate(selected.date || '');
     
    }
  }, [selected]);

  const updateData =async (e) => {
    e.preventDefault();
    console.log("Form submitted", { name, course, date });
    try {
      console.log(selected._id)
      // Assuming you have an ID or some identifier to update the specific record
      const response = await axios.put(`/api/certificates/${selected._id}`, {
        name,
        course,
        date,
        // Include file and signature if needed
      });
      setName('')
      setCourse('');
      setDate('')
      
      console.log("Update successful");
    } catch (error) {
      console.error("Error updating data", error);
    }
  };

  
  return (
    <>
    <div className="update-form">
    <span className="close" onClick={onclose}><IoIosClose/></span>
      <div className="box2">
    
      <form onSubmit={updateData} >
     
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="course">
          <input
            type="text"
            name="course"
            placeholder="Course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
        </label>
        <label htmlFor="date">
          <input
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label htmlFor="file" style={{ display: 'inline-block', marginRight: '10px' }}>
          <input
            type="file"
            name="file"
            onChange={(e) => { setFile(e.target.files[0]) }}
            style={{ display: 'none' }} // Hide the default input appearance
          />
          <button type='button' onClick={() => document.querySelector('input[name="file"]').click()}>Upload File</button>
        </label>
        <label htmlFor="sign" style={{ display: 'inline-block', marginRight: '10px' }}>
          <input
            type="file"
            name="sign"
            onChange={(e) => { setSignature(e.target.files[0]) }}
            style={{ display: 'none' }} // Hide the default input appearance
          />
          <button type='button' onClick={() => document.querySelector('input[name="sign"]').click()}>Upload Signature</button>
        </label>
        <button type="submit">Update</button>
        
      
      </form>
    </div>
    </div>
    </>
  );
}
