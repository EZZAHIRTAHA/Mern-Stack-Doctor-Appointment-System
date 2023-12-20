import React, { useState } from 'react'
import { inputClassesDoc, labelClassesDoc } from '../assets/classes'




const ApplyDoctor = () => {



  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    image: '',
    phone: '',
    departement: '',
    profession: '',
    experience: '',
    address: '',
    fee: ''
  })


  const handleChange = (event) => {
    const {value, name} = event.target;
    setFormData(formData => ({...formData, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.reload();
  }


  const clearForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      image: '',
      phone: '',
      departement: '',
      profession: '',
      experience: '',
      address: '',
      fee: ''
    })
  }


  console.log(formData);

  return (
    <div className='w-full  '>
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
              <input value={formData.email} onChange={handleChange} type="email" name="email" id="floating_email" className={`${inputClassesDoc}`} placeholder=" " required />
              <label className={`${labelClassesDoc}`} htmlFor="floating_email" >Email address</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
              <input value={formData.image} onChange={handleChange} type="text" name="image" id="floating_image" className={`${inputClassesDoc}`} placeholder=" " required />
              <label className={`${labelClassesDoc}`} htmlFor="floating_image" >Image</label>
          </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
                <input value={formData.phone} onChange={handleChange} type="tel"  name="phone" id="floating_phone" className={`${inputClassesDoc}`} placeholder=" " required />
                <label className={`${labelClassesDoc}`} htmlFor="floating_phone" >Phone number (123-456-7890)</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input value={formData.departement} onChange={handleChange} type="text" name="departement" id="floating_departement" className={`${inputClassesDoc}`} placeholder=" " required />
                <label className={`${labelClassesDoc}`} htmlFor="floating_departement" >Departement (Ex. Google)</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input value={formData.profession} onChange={handleChange} type="text" name="profession" id="floating_profession" className={`${inputClassesDoc}`} placeholder=" " required />
                <label className={`${labelClassesDoc}`} htmlFor="floating_profession" >Profession (Ex. Google)</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input value={formData.experience} onChange={handleChange} type="text" name="experience" id="floating_experience" className={`${inputClassesDoc}`} placeholder=" " required />
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
          </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
        
        

        
    </div>
  )
}

export default ApplyDoctor
