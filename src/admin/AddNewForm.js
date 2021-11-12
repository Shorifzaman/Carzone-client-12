import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';

const AddNewForm = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        // axios.post('http://localhost:5000/tours', data)
        axios.post('https://powerful-taiga-35420.herokuapp.com/tours', data)
            .then((response) => {
                if (response.statusText === "OK") {
                    swal("Good job!", "New Tour Package Added", "success")
                        .then(() => reset())
                }
            })
            .catch((error) => {
                swal("Something went wrong!", `${error.message}`, "error");
            });
    };

    return (

        <div className="min-h-full flex items-center justify-center bg-pink-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="py-4">
            
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                <div className="flex flex-col space-y-4">
                    {/* title  */}
                    <input className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                     placeholder="Package Title" {...register("name", { required: true })} />
                    {/* description  */}
                    <textarea cols="30" rows="9" className="input-primary resize-none" placeholder="Package Description" {...register("Dec", { required: true })}></textarea>
                </div>

                <div className="flex flex-col space-y-4">
                    {/* Image URL  */}
                    <input className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                     placeholder="Image Link" {...register("img", { required: true })} />
                    {/* duration  */}
                    <input className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                    placeholder="mileage no" {...register("mileage", { required: true })} />
                    {/* group members  */}
                    <input type="number"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                    placeholder="rating 0/5" {...register("rating", { required: true })} />
                    {/* price  */}
                    <input type="number" 
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                    placeholder="Price" {...register("price", { required: true })} />
                    {/* country  */}
                    <input type="text"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                    placeholder="vin no" {...register("vin", { required: true })} />
                    {/* country  */}
                    <input type="text"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                    placeholder="Gasoline / Oil" {...register("fuel_type", { required: true })} />
                    {/* country  */}
                    <input type="text"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                    placeholder="engine capacity" {...register("engine", { required: true })} />
                    <button className="w-100 flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-36 ml-auto">Add ----</button>
                </div>
            </form>
        </div>
        </div>
    )
}

export default AddNewForm;

