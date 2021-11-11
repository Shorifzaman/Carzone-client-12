import React, { useEffect, useState } from 'react';
import TourPackCard from './TourPackCard';
import Fade from 'react-reveal/Fade';

const ExploreCar = () => {




    const [toursPack, setToursPack] = useState([]);

    useEffect(() => {
        // fetch('https://sm-travel-solo.herokuapp.com/tours')
        fetch('http://localhost:5000/tours')
            .then(res => res.json())
            .then(data => setToursPack(data))
            
    }, [])



    return (
        <>
<section className="max-w-screen-xl mx-auto px-6 relative my-36">
{/* heading  */}
<Fade left>

<div className="flex justify-center items-center flex-col">
    <h1 className="font-logo text-gray-800 text-3xl font-semibold">Explore Car</h1>
    <div className="h-1 w-24 bg-red-400 rounded-full"></div>
</div>
</Fade>
            
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {
        toursPack?.map(item => {
            return (
                <Fade key={item._id} left>
                    <TourPackCard {...item} />
                </Fade>
            )
        })
    }
</div>
</section>  
        </>
    );
};

export default ExploreCar;