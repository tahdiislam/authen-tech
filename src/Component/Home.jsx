import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';

const Home = () => {
  const {user} = useContext(AuthContext)
  if(user && user.uid){
    return(
      <div>
        <section className="bg-gray-100 text-gray-800">
          <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-5xl">
            <h1 className="text-4xl font-bold leading-none sm:text-5xl">Welcome To Auth
              <span className="text-purple-600">enticate</span>
            </h1>
            <p className="px-8 mt-8 mb-12 text-lg">Here, an user can authenticate using google or create an account using email password. Powered by Firebase.!</p>
            <div className="flex justify-center">
              <Link to='/profile' className="px-8 py-3 m-2 text-lg font-semibold rounded bg-purple-600 text-gray-50">Visit Profile</Link>
            </div>
          </div>
        </section>
      </div>
    )
  }
  return (
    <div>
      <section className="bg-gray-100 text-gray-800">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-5xl">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl">Welcome To Auth
            <span className="text-purple-600">enticate</span>
          </h1>
          <p className="px-8 mt-8 mb-12 text-lg">Here, an user can authenticate using google or create an account using email password. Powered by Firebase.!</p>
          <div className="flex flex-wrap justify-center">
            <Link to='/login' className="px-8 py-3 m-2 text-lg font-semibold rounded bg-purple-600 text-gray-50">Login</Link>
            <Link to='/register' className="px-8 py-3 m-2 text-lg border rounded text-gray-900 border-gray-300">Register</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;