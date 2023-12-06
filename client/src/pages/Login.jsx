import { useState, useEffect } from 'react'
import { bgStyle, inputClasses, labelClasses, loginButton } from '../assets/classes';
import { Link, useNavigate } from 'react-router-dom'
import logo from '/images/logo.png'
import axios from 'axios';
import toast from 'react-hot-toast';
import { Hide, Show } from '../assets/icons';
import { useDispatch, useSelector } from 'react-redux';
import { showLoading, hideLoading } from '../redux/reducers/alertsSlice';


const Login = () => {



    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();
    const loading = useSelector(state => state.alerts.loading);
    const dispatch = useDispatch();


    const baseUrl = 'http://localhost:5000/api/user/login';

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        dispatch(showLoading());
        const response = await axios.post(baseUrl, { email, password });
        dispatch(hideLoading());
        if (response.data.success) {
          toast.success(response.data.message);
          localStorage.setItem('token', response.data.token);
          navigate('/');
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          // If the server responds with status code 400, it means the user already exists
          toast.error(error.response.data.message);
        } else if(error.response && error.response.status === 401) {
          toast.error(error.response.data.message);
        }
        else{
          dispatch(hideLoading);
          console.error("Error in handleSubmit:", error);
          toast.error("Something went wrong")
        }
      }
    };
    

    const togglePassword = () => {
      setShowPassword(!showPassword)
    };




    return (
        <section style={bgStyle} className='h-screen  w-full flex justify-center items-center'>
          <form
            className='bg-white bg-opacity-50 flex scale-up-center justify-center items-center flex-col gap-5 p-10 sm:p-30 rounded-[10px] shadow-2xl w-full md:w-[40%] md:h-[90%] h-full '
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
            <div className="relative z-0 w-full mb-6 group flex items-center">
                <input
                  type={`${showPassword ? 'text' : 'password'}`}
                  name="password"
                  id="floating_password"
                  className={`${inputClasses} flex-grow`}
                  placeholder=" "
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
                {password && <div onClick={togglePassword} className="flex items-center justify-center cursor-pointer">
                  { showPassword ? <Hide className='text-2xl text-logo' /> : <Show className='text-2xl text-logo' /> }
                </div>}
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
