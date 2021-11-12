import React, { useState } from 'react';

import AddNewTourPackage from './AddNewTourPackage';
import MakeAdmin from './MakeAdmin';
import ManageAllProfucts from './ManageAllProfucts';
import ManageBookingsScreen from './ManageBookingsScreen';
import SideMenu from './SideMenu';

const Dashboard = () => {
    const [control, setControl] = useState("manageBooking");







    return (
        <main className="w-full h-screen grid grid-cols-1 lg:grid-cols-6 xl:grid-cols-6">
            <div className="col-span-1 bg-green-300">
                <SideMenu setControl={setControl} control={control} />
            </div>
            <div className="col-span-5 pt-24 bg-blue-200">
            {control === "manageBooking" && <ManageBookingsScreen/>}
            {control === "addTour" && <AddNewTourPackage /> }
                {control === "makeadmin" && <MakeAdmin/>}
                {control === "addproduct" && <AddNewTourPackage/>}
                {control === "ManageAllProfucts" && <ManageAllProfucts/>}
                {/* ======user====dashbord */}
                {/* {control === "my-bookings" && <ManageAllProfucts/>} */}
                {/* {control === "ManageAllProfucts" && <ManageAllProfucts/>} */}
            </div>
        </main>
    )
}

export default Dashboard;
