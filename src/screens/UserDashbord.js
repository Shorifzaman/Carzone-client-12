import React, { useState } from 'react';
import AddReview from '../admin/AddReview';
import SideMenu from '../admin/SideMenu';
import MyBookingScreen from './MyBookingScreen';
const UserDashbord = () => {

    const [control, setControl] = useState("my-bookings");
    return (
        <>
           <main className="w-full h-screen grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-6">
            <div className="col-span-1 bg-gray-200">
                <SideMenu setControl={setControl} control={control} />
            </div>
            <div className="col-span-5 pt-5 bg-pink-200">
                {control === "my-bookings" && <MyBookingScreen /> }
                {control === "review" && <AddReview/>}
            </div>
        </main> 
        </>
    );
};

export default UserDashbord;