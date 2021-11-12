import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';

const BookingForm = ({ bookings, totalBookingCost }) => {
    const history = useHistory();
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    //send data to server
    const onSubmit = data => {
        data['status'] = "pending"
        const newData = { bookings, data }
        console.log(newData);
        // axios.post('https://sm-travel-solo.herokuapp.com/bookings', newData)
        // axios.post('http://localhost:5000/bookings', newData)
        axios.post('https://powerful-taiga-35420.herokuapp.com/bookings', newData)
            .then(response => {
                if (response.statusText === "OK") {
                    swal("Good job!", "Order has been placed", "success")
                        .then(() => {
                            reset();
                            history.push('/my-bookings')
                        })
                }
            })
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="py-4 flex flex-col space-y-3 justify-between">
                <div className="flex flex-col space-y-4">
                    {/* Name  */}
                    <input className="input-primary" defaultValue={user.displayName} placeholder="👤 Name" {...register("name", { required: true })} />
                    {/* Email  */}
                    <input type="email" className="input-primary" defaultValue={user.email} placeholder="✉ Email" {...register("email", { required: true })} />
                    {/* mobile No  */}
                    <input type="number" className="input-primary" placeholder="☎ Mobile Number" {...register("mobileNo", { required: true })} />
                    {/* Card No  */}
                    <input type="number2" className="input-primary" placeholder="💳 Card No" {...register("cardNO", { required: true })} />
                    {/* Address  */}
                    <input type="text" className="input-primary" placeholder="🏙 Delivery Address" {...register("address", { required: true })} />
                </div>
                <div className="flex justify-end flex-col mt-4">
                    <button className="bg-green-500  px-4 py-2 text-white font-primary rounded-lg text-sm ring-blue-300 focus:ring-4 transition duration-300 w-36 ml-auto">Place Order</button>
                </div>
            </div>
        </form>
    )
}

export default BookingForm;
