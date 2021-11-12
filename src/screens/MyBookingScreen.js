import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BsCalendar3 } from 'react-icons/bs';
import { MdGroups } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';

import useAuth from '../hooks/useAuth';
import useLoading from '../hooks/useLoading';



const MyBookingScreen = () => {
    const [myBookings, setMyBookings] = useState([]);
    const [loading, setLoading] = useState(true)
    const { user } = useAuth();
    const spinner = useLoading();
    const history = useHistory();
    


    useEffect(() => {
        
        // fetch('http://localhost:5000/bookings')
        fetch('https://powerful-taiga-35420.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setMyBookings(data.filter(item => item.data.email === user.email)))
    }, [user.email])

    //loading 
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])

    //delete bookings 
    const handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Are you sure to delete this booking ?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    // axios.delete(`http://localhost:5000/bookings/${id}`)
                    axios.delete(`https://powerful-taiga-35420.herokuapp.com/bookings/${id}`)
                        .then(res => {
                            if (res.data.deletedCount > 0) {
                                swal("Poof! Booking has deleted", {
                                    icon: "success",
                                });
                                const restBookings = myBookings.filter(({ _id }) => _id !== id)
                                setMyBookings(restBookings);
                            }
                        })
                } else {
                    swal("Booking hasn't deleted.You booking is stay here!!");
                }
            });

    }

    return (
        <>
        <main className="my-10">
            <section className="my-16 max-w-screen-xl mx-auto px-3">
            
                <div className="">
                    {loading ? (
                        spinner
                    ) : (
                        <>
                            {
                                myBookings.length > 0 ? (
                                    <>
                                        <div className="col-span-3 flex flex-col space-y-2">

                                            {
                                                myBookings.map(({ _id, bookings, data }) => {
                                                    return (
                                                        <div key={bookings._id} className="grid grid-cols-1 lg:grid-cols-4 gap-3 bg-white rounded-lg shadow-xl p-3 box-border">
                                                            {/* {/_ image _/} */}
                                                            <div className="col-span-1">
                                                                <img className="w-full h-full rounded-lg" src={bookings.img} alt={bookings.title} />
                                                            </div>
                                                            {/* {/_ details _/} */}
                                                            <div className="col-span-2">
                                                                <h1 className="text-gray-700 text-lg font-primary">{bookings.name}</h1>
                                                                <p className="text-gray-500 text-sm">{bookings.Dec}</p>
                                                                {/* {/_ others info _/} */}
                                                                <div className="flex flex-col lg:flex-row items-start lg:space-x-12 py-4 space-y-4 lg:items-center">
                                                                    {/* {/_ status _/} */}
                                                                    <div className="flex items-center space-x-3">
                                                                        <div className="flex flex-col">
                                                                            <span className={`${data.status === "pending" ? "bg-yellow-500" : "bg-green-600"} text-white px-4 py-1 rounded-full font-primary text-sm`}>{data.status}</span>
                                                                        </div>
                                                                    </div>
                                                                    {/* {/_ duration _/} */}
                                                                    <div className="flex items-center space-x-3">
                                                                        <BsCalendar3 className="text-red-500 text-xl" />
                                                                        <div className="flex flex-col">
                                                                            <p className="text-sm font-primary text-gray-700">Duration</p>
                                                                            <span className="text-sm text-gray-500">{bookings.engine}</span>
                                                                        </div>
                                                                    </div>
                                                                    {/* {/_ group _/} */}
                                                                    <div className="flex items-center space-x-3">
                                                                        <MdGroups className="text-red-500 text-2xl" />
                                                                        <div className="flex flex-col">
                                                                            <p className="text-sm font-primary text-gray-700">Group Size</p>
                                                                            <span className="text-sm text-gray-500">{bookings.rating} peoples</span>
                                                                        </div>
                                                                    </div>
                                                                    {/* {/_ price _/} */}
                                                                    <div>
                                                                        <h1 className="font-primary font-semibold text-gray-900 text-2xl">${bookings.price}</h1>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-span-1 flex items-center lg:justify-end">
                                                                <button className="btn-danger px-4 w-36 mr-auto lg:ml-auto  mt-4 bg-red-600 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500" onClick={() => handleDelete(_id)}>Cancel</button>
                                                            </div>
                                                            
                                                        </div>
                                                    )
                                                })

                                            }
                                        </div>
                                    </>
                                ) : (
                                    <div className="h-96 space-y-6 flex items-center justify-center flex-col">
                                        <img src="../../assets/box.png" alt="no order" />
                                        <button className="btn-danger px-4 w-36 mr-auto lg:ml-auto  mt-4 bg-red-600 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500 px-6" onClick={() => history.push('/')}>Book Now</button>
                                    </div>
                                )
                            }
                        </>
                    )}
                </div>
            </section>
        </main>

        </>
    )
}

export default MyBookingScreen;
