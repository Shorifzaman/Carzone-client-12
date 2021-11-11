
import React, { useState } from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import useAuth from "../hooks/useAuth";

const SideMenu = ({ setControl, control }) => {
    const { user } = useAuth();
    const [sidenav, setSidenav] = useState(true)
// console.log(user);
    //toggling the side nav
    const handlenav = () => {
        setSidenav(!sidenav);
    }

    // auto hide 
    window.addEventListener('resize', () => {
        if (window.innerWidth < 1098) {
            setSidenav(false)
        } else {
            setSidenav(true)
        }
    })

    return (
        <div>
            {sidenav && (
                <>
                    <nav className="flex fixed flex-col items-center w-64 bg-white h-screen px-2">
                        <div className="mt-24 flex flex-col items-center justify-center space-y-1 ">
                            {/* image  */}
                            <img
                                src={user.photoURL}
                                // src="../../assets/profile.png"
                                className="w-28 h-28 rounded-full object-contain mx-auto"
                                alt={user.displayName}
                            />
                            {/* user info  */}
                            <div>
                                <h1 className="text-center font-primary text-gray-700">{user.displayName}</h1>
                                <p className="text-center font-primary text-gray-500 text-sm">{user.email}</p>
                            </div>
                        </div>
                        <div className="mt-10 mb-4 overflow-y-auto z-40">
                            {/*Admin for dashbord  */}
                            
                            
                            <ul className="flex flex-col space-y-2">
                                <li className={`${control === "manageBooking" && "bg-red-500 text-white"} flex items-center rounded-md py-3 cursor-pointer px-2`}>
                                    <div className="flex items-center space-x-3" onClick={() => setControl('manageBooking')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                        <span className="ml-2 font-primary">Manage Orders</span>
                                    </div>
                                </li>
                                <li className={`${control === "makeadmin" && "bg-red-500 text-white"} flex items-center  rounded-md py-3 cursor-pointer px-2`}>
                                    <div className="flex items-center space-x-3" onClick={() => setControl('makeadmin')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                        </svg><span className="ml-2 font-primary">MakeAdmin</span>
                                    </div>
                                </li>
                                <li className={`${control === "addproduct" && "bg-red-500 text-white"} flex items-center  rounded-md py-3 cursor-pointer px-2`}>
                                    <div className="flex items-center space-x-3" onClick={() => setControl('addproduct')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                    <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                                    </svg> <span className="ml-2 font-primary">Add a Product</span>
                                    </div>
                                </li>
                                <li className={`${control === "ManageAllProfucts" && "bg-red-500 text-white"} flex items-center  rounded-md py-3 cursor-pointer px-2`}>
                                    <div className="flex items-center space-x-3" onClick={() => setControl('ManageAllProfucts')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                        </svg><span className="ml-2 font-primary">ManageAllProfucts</span>
                                    </div>
                                </li>

                                {/* ========================================= */}
                                <li className={`${control === "my-bookings" && "bg-red-500 text-white"} flex items-center  rounded-md py-3 cursor-pointer px-2`}>
                                    <div className="flex items-center space-x-3" onClick={() => setControl('my-bookings')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                        </svg><span className="ml-2 font-primary">My Orders</span>
                                    </div>
                                </li>
                                <li className={`${control === "review" && "bg-red-500 text-white"} flex items-center  rounded-md py-3 cursor-pointer px-2`}>
                                    <div className="flex items-center space-x-3" onClick={() => setControl('review')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                        </svg><span className="ml-2 font-primary">Review</span>
                                    </div>
                                </li>

                            </ul>


                             {/*User for dashbord  */}
                        </div>
                    </nav>
                </>
            )}

            {/* //menu icons  */}
            <div className=" block fixed bottom-5 left-0 bg-red-200 p-2 rounded-full cursor-pointer shadow-2xl border border-primary" onClick={handlenav}>
                <MdOutlineArrowForwardIos className="text-2xl text-primary" />
            </div>
        </div>
    )
}

export default SideMenu;