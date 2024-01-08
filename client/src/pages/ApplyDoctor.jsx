import React, { useState } from 'react'
import { buttonDoc, inputClassesDoc, labelClassesDoc } from '../assets/classes'
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import axios from 'axios';

const ApplyDoctor = () => {



  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    // image: '',
    phone: '',
    website: '',
    departement: '',
    profession: '',
    experience: '',
    address: '',
    fee: '',
    timings: {
      from: '',
      to: ''
    }
  })

  const baseUrl = 'http://localhost:5000/api/user/apply-doctor-account'
  
  const [fromTime, setFromTime] = useState('');
  
  const [toTime, setToTime] = useState('')


  const handleTimeChangeFrom = (time) => {
    setFromTime(time);
    setFormData((prevFormData) => ({ ...prevFormData, timings: { ...prevFormData.timings, from: time } }));
  };

  const  handleTimeChangeTo = (time) => {
    setToTime(time);
    setFormData((prevFormData) => ({ ...prevFormData, timings: { ...prevFormData.timings, to: time } }));
  };


  const handleChange = (event) => {
    const {value, name} = event.target;
    setFormData(formData => ({...formData, [name]: value}))
  }



  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
       const { firstName, lastName, website, image, phone, departement, profession, experience, address, fee, timings } = formData;
       const token = localStorage.getItem('token');
       const response = await axios.post(baseUrl, {
          firstName,
          lastName,
          website,
          // image,
          phone,
          departement,
          profession,
          experience,
          address,
          fee,
          timings,
          userId: localStorage.getItem('userId'),
       }, {
          headers: {
             'Authorization': `Bearer ${token}`,
             'Content-Type': 'application/json',
          },
       });
 
       console.log(response);
 
       // Clear the form after successful submission
       clearForm();
    } catch (error) {
       console.error('Error submitting doctor application:', error);
       // Handle the error, display a message to the user, etc.
    }
 };
 
 
 
  const clearForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      website: '',
      // image: '',
      phone: '',
      departement: '',
      profession: '',
      experience: '',
      address: '',
      fee: '',
      timings: {
        from: '',
        to: ''
      }
    })
    
  }



  return (
    <div className='w-full  flex flex-col  sm:m-10 m-0'>
      <h1 className='m-2 text-2xl text-center capitalize'>Apply doctor account</h1>
        <form className="mx-3 my-4 border p-5 rounded-sm flex flex-col gap-3 justify-center" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
                <input value={formData.firstName} onChange={handleChange} type="text" name="firstName" id="floating_first_name" className={`${inputClassesDoc}`} placeholder=" " required />
                <label className={`${labelClassesDoc}`} htmlFor="floating_first_name" >First name</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input value={formData.lastName} onChange={handleChange} type="text" name="lastName" id="floating_last_name" className={`${inputClassesDoc}`} placeholder=" " required />
                <label className={`${labelClassesDoc}`} htmlFor="floating_last_name" >Last name</label>
            </div>
          <div className="relative z-0 w-full mb-5 group ">
              <input value={formData.website} onChange={handleChange} type="text" name="website" id="floating_website" className={`${inputClassesDoc} `} placeholder=" " required />
              <label className={`${labelClassesDoc} `} htmlFor="floating_website" >Website </label>
          </div>
        
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
                <input value={formData.phone} onChange={handleChange} type="tel"  name="phone" id="floating_phone" className={`${inputClassesDoc}`} placeholder='' required />
                <label className={`${labelClassesDoc}`} htmlFor="floating_phone" >Phone number </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input value={formData.departement} onChange={handleChange} type="text" name="departement" id="floating_departement" className={`${inputClassesDoc}`} placeholder=" " required />
                <label className={`${labelClassesDoc}`} htmlFor="floating_departement" >Departement </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input value={formData.profession} onChange={handleChange} type="text" name="profession" id="floating_profession" className={`${inputClassesDoc}`} placeholder=" " required />
                <label className={`${labelClassesDoc}`} htmlFor="floating_profession" >Profession (Ex. Doctor)</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input value={formData.experience} onChange={handleChange} type="number" name="experience" id="floating_experience" className={`${inputClassesDoc}`} placeholder=" " required />
                <label className={`${labelClassesDoc}`} htmlFor="floating_experience" >Experience </label>
            </div>
          <div className="relative z-0 w-full mb-5 group">
              <input value={formData.address} onChange={handleChange} type="text" name="address" id="floating_address" className={`${inputClassesDoc}`} placeholder=" " required />
              <label className={`${labelClassesDoc}`} htmlFor="floating_address" >Address</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
                <input value={formData.fee} onChange={handleChange} type="text" name="fee" id="floating_fee" className={`${inputClassesDoc}`} placeholder=" " required />
                <label className={`${labelClassesDoc}`} htmlFor="floating_fee" >Fee per visit </label>
            </div>
            <div>
          <label className={''}>From:</label>
          <TimePicker
              className={inputClassesDoc}
              onChange={handleTimeChangeFrom}
              value={formData.timings.from}
              clockClassName="custom-clock-class" // Add a custom class to the clock component
              clearIconClassName="custom-clear-icon-class" // Add a custom class to the clear icon
              clearClockClassName="custom-clear-clock-class" // Add a custom class to the clear clock button
            />
        </div>
        <div>
          <label className={''}>To: </label>
          <TimePicker
              className={inputClassesDoc}
              onChange={handleTimeChangeTo}
              value={formData.timings.to}
              clockClassName="custom-clock-class" // Add a custom class to the clock component
              clearIconClassName="custom-clear-icon-class" // Add a custom class to the clear icon
              clearClockClassName="custom-clear-clock-class" // Add a custom class to the clear clock button
            />
        </div>
          </div>
           
          <button type="submit" className={buttonDoc}>Submit</button>
          <div className="">

          </div>
        </form>

    </div>
  )
}

export default ApplyDoctor
