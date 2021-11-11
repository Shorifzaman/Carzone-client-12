import React from 'react';
import Flip from 'react-reveal/Flip';
import './HeroBanner.css';


const HeroBanner = () => {
    return (
<>


<section className="hero-section">
            <Flip left>
                <div className="flex flex-col items-center justify-center h-full">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-logo font-semibold text-white text-center select-none leading-tight">Car Zon <br />for Most Popular</h1>
                    <p className="font-primary text-gray-100 text-center text-sm w-96 select-none py-2">The automotive industry comprises a wide range of companies and organizations involved in ... ownerships can be explored under the detail for the individual companies.</p>
                    <button to="/home" className="bg-red-500 hover:bg-red-700 rounded-md shadow w-md flex items-center justify-center px-3 py-1 border border-transparent text-base font-medium rounded-md text-white md:py-2 md:text-md md:px-4 w-36 mt-5">Explore</button>
                </div>
            </Flip>
        </section>
        
        </>
    )
}

export default HeroBanner;
