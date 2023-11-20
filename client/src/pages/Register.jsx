import { useState, useEffect } from 'react'
import { bgStyle, inputClasses, labelClasses, loginButton } from '../assets/classes';
import { Link } from 'react-router-dom'
import logo from '/images/logo.png'
const Register = () => {


    const [formData, setFormData] = useState({

      name: '',
      email: '',
      password: ''
    
    })

    const handleChange = (event) => {
      const { name, value } = event.target
      setFormData(formData => ({...formData, [name]: value}))
    }


   
    const handleSubmit = (event) => {
        event.preventDefault()
    }

    

    console.log(formData);

    return (
        <section style={bgStyle} className='h-screen w-full flex justify-center items-center'>
          <form
            className='bg-white bg-opacity-50 flex justify-center items-center flex-col gap-5 p-10 sm:p-30 rounded-[10px] scale-up-center shadow-2xl w-full md:w-[40%] h-[90%] '
            onSubmit={handleSubmit}
          >
            <div className="flex justify-center items-center">
              <img src={logo} alt="" className='w-12' />
            </div>
            <h1 className='text-center text-2xl text-logo mb-5'>Let's get you started </h1>
            
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="name"
                id="floating_name"
                className={`${inputClasses}`}
                placeholder=""
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label htmlFor="floating_name" className={`${labelClasses}`}>
                Full name
              </label>
            </div>
            
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="email"
                id="floating_email"
                className={`${inputClasses}`}
                placeholder=""
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="floating_email" className={`${labelClasses}`}>
                Email address
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="password"
                name="password"
                id="floating_password"
                className={`${inputClasses}`}
                placeholder=" "
                onChange={handleChange}
                value={formData.password}
                required
              />
              <label htmlFor="floating_password" className={`${labelClasses}`}>
                Password
              </label>
            </div>
            <button type="submit" className={`${loginButton}`}>
              Register
            </button>
            <div className="text-center text-[12px] text-gray-600 ">
              Already have an account ?{' '}
              <Link to={'/login'} className='text-blue-600 font-semibold hover:underline'>
                Sign In
              </Link>
            </div>
          </form>
        </section>
      );
      
}

export default Register
