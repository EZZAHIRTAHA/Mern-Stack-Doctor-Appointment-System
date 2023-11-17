import { useState, useEffect } from 'react'
import { bgStyle, inputClasses, labelClasses, loginButton } from '../assets/classes';

const Login = () => {

    const [users, setUsers] = useState([]);

    

  return (
    <section style={bgStyle}  className='h-screen w-full flex justify-center items-center '>
        <form 
            className=' bg-white bg-opacity-50  flex justify-center items-center flex-col gap-5 p-20 rounded-[10px] shadow-2xl w-[40%] h-[70%]'
        >
    <h1 className='text-center text-2xl text-blue-500 mb-5'>Welcome back</h1>
    <div class="relative z-0 w-full mb-6 group">
        <input 
            type="email" 
            name="floating_email" 
            id="floating_email" 
            className={`${inputClasses}`} 
            placeholder=" " 
            required 
        />
        <label 
            htmlFor="floating_email" 
            className={`${labelClasses}`}
        >
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
        required 
    />
      <label 
        htmlFor="floating_password" 
        className={`${labelClasses}`}>
            Password
        </label>
  </div>
        <button 
            type="submit" 
            className={`${loginButton}`}>
            Login
        </button>
</form>

</section>
  )
}

export default Login
