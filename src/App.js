import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './admin/Dashboard';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import Navbar from './components/Navbar/Navbar';
import ExploreCar from './components/Tour Package/ExploreCar';
import AuthProvider from './contexts/AuthProvider';
import BookingProvider from './contexts/BookingProvider';
import useLoading from './hooks/useLoading';
import PrivateRoute from './routes/PrivateRoute';
import BookingScreen from './screens/BookingScreen';
import Contact from './screens/Contact';
import HomeScreen from './screens/HomeScreen';
import MyBookingScreen from './screens/MyBookingScreen';
import UserDashbord from './screens/UserDashbord';




// VNv5egRbCoyxpW4K


const App = () => {
  const [loading, setLoading] = useState(true);
  const spinner = useLoading();

  //loading
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <BrowserRouter>
      <AuthProvider>
        <BookingProvider>
          {loading ? (
            spinner
          ) : (
              <Switch>
                <Route exact path="/">
                  <Navbar bg="bg-transparent" textColor="text-white" width="max-w-screen-xl" />
                  <HomeScreen />
                </Route>
                <Route exact path="/register">
                  <Navbar bg="bg-transparent" textColor="text-white" width="max-w-screen-xl" />
                  <Register />
                  {/* <RegisterScreen /> */}
                </Route>
                <Route exact path="/login">
                  <Navbar bg="bg-transparent" textColor="text-white" width="max-w-screen-xl" />
                  <Login />
                 
                </Route>
                <Route exact path="/explore">
                  <Navbar bg="bg-transparent" textColor="text-white" width="max-w-screen-xl" />
                  <ExploreCar />
                 
                </Route>
                <Route exact path="/contact">
                  <Navbar bg="bg-transparent" textColor="text-white" width="max-w-screen-xl" />
                  <Contact />
                 
                </Route>
                <PrivateRoute exact path="/dashboard">
                  <Navbar bg="bg-white" textColor="text-gray-700" width="max-w-screen-2xl" />
                  <Dashboard />
                </PrivateRoute>
                <PrivateRoute exact path="/booking/:id">
                  <Navbar bg="bg-white" textColor="text-gray-700" width="max-w-screen-xl" />
                  <BookingScreen />
                </PrivateRoute>
                <PrivateRoute exact path="/my-bookings">
                  <Navbar bg="bg-white" textColor="text-gray-700" width="max-w-screen-xl" />
                  {/* <MyBookingScreen /> */}
                  <UserDashbord />
                  {/* <MyBookingScreen /> */}
                </PrivateRoute>
              </Switch>
          )}
        </BookingProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
