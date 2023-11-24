import {} from 'react'
import toast from 'react-hot-toast';

const Home = () => {
    
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
        toast.success('Logged out successfully');
    }

  return (
    <div className='h-screen flex justify-center items-center  text-indigo-500'>
      <button className='border border-indigo-500 p-2 rounded' onClick={handleLogout}>
        Logout 
      </button>
    </div>
  )
}

export default Home
