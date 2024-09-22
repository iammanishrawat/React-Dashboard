// import { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import gsap from 'gsap'
import './style.scss';
// import { useGSAP } from '@gsap/react';

const LogoutComponent = () => {
  const handleLoginClick = () => {
    // useEffect(() => {
    // }, [])
  }
  
  return (
    <div className="login-screen">
      <div className="inner">
        <div className="left-inner">
          <h1>
            JOIN THE LARGEST ART COMMUNITY IN THE WORLD
          </h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, consequatur. Qui beatae soluta rem sequi libero nisi laudantium nobis</p>
        </div>
        <div className="right-inner">
          <div className="logo-area"></div>
          <h2>Join Now!</h2>
          <form action="" className="auth-form mt-3">
            <div className="form-group">
              <label
                htmlFor="first_name"
                className="block mb-2 sm:text-sm font-normal text-gray-600 dark:text-white"
              >
                Username
              </label>
              <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                <input
                  type="text"
                  id="input-group-1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-10 placeholder-gray-400 dark:bg-gray-700 dark:border-gray-600  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@flowbite.com"
                />
              </div>
            </div>
            <div className="form-group">
              <label
                htmlFor="first_name"
                className="block mb-2 sm:text-sm font-normal text-gray-600 dark:text-white"
              >
                Password
              </label>
              <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                <input
                  type="password"
                  id="input-group-2"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-10 placeholder-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="**********"
                />
              </div>
            </div>
            <div className="form-group">
                <Link to="/home">
                  <button onClick={handleLoginClick} className='auth-button w-full font-medium rounded-sm p-2.5 sm:text-sm text-gray-600' type='button'>Login</button>
                </Link>
            </div>
          </form>
          <div className="separator-area mt-3 text-center">
            <p className='mb-0'>OR</p>
          </div>
          <div className="authentication-area mt-3">
            <button type='button' className='sso-button flex items-center gap-2 justify-center w-full text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-normal text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>
              <img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-256.png" alt="google logo" width={20} />
              Continue with Google
            </button>
            <button type='button' className='sso-button flex items-center gap-2 justify-center w-full text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-normal text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>
              <img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-256.png" alt="apple logo" width={20} />
              Continue with Apple
            </button>
            <button type='button' className='sso-button flex items-center gap-2 justify-center w-full text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-normal text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>
              <img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-256.png" alt="facebook logo" width={20} />
              Continue with Facebook
            </button>
          </div>
          <div className="agreement-area mt-3">
            <p className='text-gray-400 font-normal'>
              By logging in to this app, I confirm that I have read and agree to this app <b className='underline'>Terms of Service</b>, <b className='underline'>Privacy Policy</b>, and to receive emails and updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutComponent;
