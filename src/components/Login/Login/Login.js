import React, { useState } from 'react';
import { useLocation, useHistory, Link } from 'react-router-dom';


import { css } from "@emotion/react";
import logo from '../..//../image/logo.png';
import useAuth from '../../../hooks/useAuth';
import { RingLoader } from 'react-spinners';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }



    const override = css`
        display: flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        margin: 0 auto;
        border-color: red;
        margin-top:20%;
        `;
    return (
        
<>
      <div className="min-h-full flex items-center justify-center bg-blue-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src={ logo }
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-blue-900">LogIn to your account</h2>
          </div>
          
          
          
          
        
          {!isLoading && <form className="mt-8 space-y-6" onSubmit={handleLoginSubmit}>
        
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              
              <div className="py-3">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                    name="email"
                    type="email"
                    onChange={handleOnChange}
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div className="py-3">
                <label htmlFor="password" className="sr-only py-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                   name="password"
                   onChange={handleOnChange}
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-center "> 
              <button
                type="submit"
                className="w-100 flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                LogIn
              </button>
                    
            </div>
            <Link className="text-base uppercase text-center my-6 hover:underline text-blue-600 hover:text-pink-700 " to="/register">
            
            
            <p className="text-base text-primary text-center my-6 hover:underline">New User? Join Free Register Please?</p>
            </Link>
          </form> }

{isLoading && <RingLoader color="#FF4676" css={override} size={70} /> }
{/* {user?.email && <alert >User Created successfully!</alert>} */}
{authError && <h2 className="text-base uppercase text-center my-6 hover:underline text-red-900 hover:text-blue-700 ">{authError}</h2>}
            {/* google button  */}
            <hr />
              <div className="bg-white px-6 py-3 border border-gray-200 flex items-center space-x-4 justify-center rounded-full cursor-pointer select-none hover:scale-105 transform transition duration-300 bg-red-200 hover:bg-pink-700" onClick={handleGoogleSignIn}>
              <FcGoogle className="text-2xl" />
              <span className="text-gray-700 font-bold text-gray-500 hover:text-blue-200">Continue with Google</span>
              </div>
        </div>
                    
      </div>
    </>




















        // <Container>
        //     <Grid container spacing={2}>
        //         <Grid item sx={{ mt: 8 }} xs={12} md={6}>
        //             <Typography variant="body1" gutterBottom>Login</Typography>
        //             <form onSubmit={handleLoginSubmit}>
        //                 <TextField
        //                     sx={{ width: '75%', m: 1 }}
        //                     id="standard-basic"
        //                     label="Your Email"
        //                     name="email"
        //                     onChange={handleOnChange}
        //                     variant="standard" />
        //                 <TextField
        //                     sx={{ width: '75%', m: 1 }}
        //                     id="standard-basic"
        //                     label="Your Password"
        //                     type="password"
        //                     name="password"
        //                     onChange={handleOnChange}
        //                     variant="standard" />

        //                 <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
        //                 <NavLink
        //                     style={{ textDecoration: 'none' }}
        //                     to="/register">
        //                     <Button variant="text">New User? Please Register</Button>
        //                 </NavLink>
        //                 {isLoading && <CircularProgress />}
                        
        //                 {user?.email && <Alert severity="success">Login successfully!</Alert>}
        //                 {authError && <Alert severity="error">{authError}</Alert>}
        //             </form>
        //             <p>------------------------</p>
        //             <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
        //         </Grid>
        //         <Grid item xs={12} md={6}>
        //             <img style={{ width: '100%' }} src={login} alt="" />
        //         </Grid>
        //     </Grid>
        // </Container>
    );
};

export default Login;