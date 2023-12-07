import { useState, useEffect } from 'react'
import { bgStyle, inputClasses, labelClasses, loginButton } from '../assets/classes';
import { Link } from 'react-router-dom'
import logo from '/images/logo.png'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import { Hide, Show } from '../assets/icons';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoading, showLoading } from '../redux/reducers/alertsSlice';

const Register = () => {

    const baseUrl = 'http://localhost:5000/api/user/register' 

    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({

      name: '',
      email: '',
      password: ''
    
    })

    const loading = useSelector(state => state.alerts.loading);
    const dispatch = useDispatch();


    // console.log(showPassword);
    
    const togglePassword = () => {
      setShowPassword(!showPassword)
    }

    const navigate = useNavigate()

    const clearForm = () => {
      setFormData({
        name: '',
        email: '',
        password: ''
      })
    
    }

    const handleChange = (event) => {
      const { name, value } = event.target
      setFormData(formData => ({...formData, [name]: value}))
      
    }



   
    const handleSubmit = async (event) => {
      event.preventDefault()
      try {
        dispatch(showLoading())
        const response = await axios.post(baseUrl, formData)
        dispatch(hideLoading())
        if (response.data.success) {
          toast.success(response.data.message)
          navigate('/login')
        } else {
          toast.error(response.data.message)
        }
      } catch (error) {
        if (error.response && error.response.status === 400) {
          // If the server responds with status code 400, it means the user already exists
          toast.error(error.response.data.message)
        } else {
          // Handle other errors
          console.error("Error in handleSubmit:", error);
          dispatch(hideLoading())
          toast.error("Something went wrong")
        }
      }
    }
    

    

    


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
              <div className="relative z-0 w-full mb-6 group flex items-center">
                <input
                  type={`${showPassword ? 'text' : 'password'}`}
                  name="password"
                  id="floating_password"
                  className={`${inputClasses} flex-grow`}
                  placeholder=" "
                  onChange={handleChange}
                  value={formData.password}
                  required
                />
                {formData.password && <div onClick={togglePassword} className="flex items-center justify-center cursor-pointer">
                  { showPassword ? <Hide className='text-2xl text-logo' /> : <Show className='text-2xl text-logo' /> }
                </div>}
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
