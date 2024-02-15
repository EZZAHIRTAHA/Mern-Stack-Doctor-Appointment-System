import { useState } from 'react'
import { bgStyle, inputClasses, labelClasses, loginButton } from '../assets/classes'
import logo from '/images/logo.png'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {

    const [email, setEmail] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('submitted')
    }

  return (
    <section style={bgStyle} className='h-screen  w-full flex justify-center items-center'>
    <form
      autoComplete='off'
      className='bg-white bg-opacity-50 flex scale-up-center justify-center items-center flex-col gap-5 p-10 sm:p-30 rounded-[10px] shadow-2xl w-full md:w-[40%] md:h-[90%] h-full '
      onSubmit={handleSubmit}
    >
      <div className="flex justify-center items-center">
        <img src={logo} alt="" className='w-12' />
      </div>
      <div className="flex flex-col">
      <h1 className='text-center text-2xl text-logo mb-5'>Forgot your password ?</h1>
        <p className='text-center text-[12px] text-gray-600 mb-5'>Enter your email address to reset your password</p>

      </div>
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
      <button type="submit" className={`${loginButton}`}>
        Reset password
      </button>
      <div className="text-center text-[12px] text-gray-600 ">
        Don't have an account ?{' '}
        <Link to={'/register'} className='text-blue-600 font-semibold hover:underline'>
          Sign Up
        </Link>
      </div>
    </form>
  </section>
  )
}

export default ForgotPassword
