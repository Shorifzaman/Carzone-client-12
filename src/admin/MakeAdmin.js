import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import useFirebase from '../hooks/useFirebase';
import logo from '../image/logo.png'

const MakeAdmin = () => {
  const { user } = useFirebase();
  const [isAdmi, setIsAdmin] = useState(false);
  const { register, handleSubmit, watch, reset, errors } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:5000/makeAdmin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      // .then((result) => console.log(result));
      .then(data => {
          if (data.insertedId) {
              console.log(data);        
              swal("Admin added Successfully!!");
          }
          swal("please user register first!!");
      })

    console.log(data);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role === "admin") {
          setIsAdmin(true);
          // swal("Admin added Successfully!!");
        } else {
          // swal("please user register first!!");
          setIsAdmin(false);
        }
      });
  }, [user?.email]);
  console.log(isAdmi);















// ========================================================

  // const [email, setEmail] = useState('');
  // const [success, setSuccess] = useState(false);


  // const handleOnBlur = e => {
  //     setEmail(e.target.value);
  // }
  // const handleAdminSubmit = e => {
  //     const user = { email };
  //     fetch('http://localhost:5000/users/admin', {
        
  //     // fetch('https://stark-caverns-04377.herokuapp.com/users/admin', {
  //       // fetch('http://localhost:5000/users/admin', {
  //         method: 'PUT',
  //         headers: {
  //             // 'authorization': `Bearer ${token}`,
  //             'content-type': 'application/json'
  //         },
  //         body: JSON.stringify(user)
  //     })
  //         .then(res => res.json())
  //         .then(data => {
  //             if (data.modifiedCount) {
  //                 console.log(data);
                  
  //                 setSuccess(true);
  //                 swal("Admin added Successfully!!");
  //             }
  //             swal("please user register first!!");
  //         })

  //     e.preventDefault()
  // }
 


  
    return (
        <>
    <div className="min-h-full flex items-center justify-center py-10 px-5 sm:px-6 lg:px-10 ">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src={logo}
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">make admin your account</h2>
            
          </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field"
          name="email"
          placeholder="Email"
          className=" appearance-none rounded-none w-full px-5 py-3 border border-gray-300 placeholder-green-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          type="email"
          {...register ("email", { required: true })}
        />
        <br />

        <div className='flex justify-center items-center py-6'>
              <button
                type="submit"
                className="group w-50 py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
              Make Admin add
              </button>
            </div>
      </form>




















          {/* <form className="mt-8 space-y-6 z-0" onSubmit={handleAdminSubmit}>
           
            <div className="rounded-md shadow-sm -space-y-px">
              <div >
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  onBlur={handleOnBlur}
                  autoComplete="email"
                  required
                  className=" appearance-none rounded-none w-full px-5 py-3 border border-gray-300 placeholder-green-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              
            </div>

            <div className="flex items-center justify-between">
              
            </div>

            <div className='flex justify-center items-center'>
              <button
                type="submit"
                className="group w-50 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
              Make Admin add
              </button>
            </div>
          </form> */}
          {/* {success &&  swal("Admin added Successfully!!")} */}
        </div>
      </div>
        </>
    );
};

export default MakeAdmin;