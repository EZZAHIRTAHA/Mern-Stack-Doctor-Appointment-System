import { useState, useEffect } from 'react'
import { bgStyle, inputClasses, labelClasses, loginButton } from '../assets/classes';
import { Link } from 'react-router-dom'
import logo from '/images/logo.png'
const Login = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event, values) => {
        event.preventDefault()
        console.log(email, password);
    }


    return (
        <section style={bgStyle} className='h-screen  w-full flex justify-center items-center'>
          <form
            className='bg-white bg-opacity-50 flex scale-up-center justify-center items-center flex-col gap-5 p-10 sm:p-30 rounded-[10px] shadow-2xl w-full md:w-[40%] h-[70%] '
            onSubmit={handleSubmit}
            
          >
            <div className="flex justify-center items-center">
              <img src={logo} alt="" className='w-12' />
            </div>
            <h1 className='text-center text-2xl text-logo mb-5'>Welcome back !</h1>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className={`${inputClasses}`}
                placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="floating_email" className={`${labelClasses}`}>
                Email address
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="password"
                name="floating_password"
                id="floating_password"
                className={`${inputClasses}`}
                placeholder=" "
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
              <label htmlFor="floating_password" className={`${labelClasses}`}>
                Password
              </label>
            </div>
            <button type="submit" className={`${loginButton}`}>
              Login
            </button>
            <div className="text-center text-[12px] text-gray-600 ">
              Don't have an account ?{' '}
              <Link to={'/register'} className='text-blue-600 font-semibold hover:underline'>
                Sign Up
              </Link>
            </div>
          </form>
        </section>
      );
      
}

export default Login
