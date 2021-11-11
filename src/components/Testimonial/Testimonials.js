import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Testimonial from './Testimonial';


const Testimonials = () => {
    const [testimonialData, setTestimonialData] = useState([]);

    useEffect(() => {
        // axios.get('https://sm-travel-solo.herokuapp.com/testimonials')
        axios.get('http://localhost:5000/testimonials')
            .then(res => setTestimonialData(res.data))
    }, [])

    return (
        <section className="max-w-screen-xl mx-auto px-6 pb-24 mt-16">
            {/* heading  */}
            <Fade left>

                <div className="flex justify-center items-center flex-col">
                    <h1 className="font-logo text-gray-800 text-3xl font-semibold">Testimonials</h1>
                    <div className="h-1 w-24 bg-red-400 rounded-full"></div>
                </div>
            </Fade>
            {/* testimonials  */}

        
            <div className="max-w-screen-xl mx-auto px-3 relative -top-34">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">      
                   

            {testimonialData.slice(0, 3).map(item => ( <div class="bg-white rounded-xl p-2 box-border overflow-hidden relative flex flex-col justify-between top-12" key={item.id} >
                        <blockquote  class="flex flex-col-reverse items-center justify-between w-full col-span-1 p-6 mt-6 mb-16 text-center transition-all duration-200 bg-gray-100 rounded-lg md:flex-row md:text-left hover:bg-white hover:shadow ease xl:mb-0">
                            <Testimonial  {...item} />
                        </blockquote>
                        
                           
                    </div> 
                    ))}
            {testimonialData.slice(3, 100).map(item => ( <div class="bg-white rounded-xl p-2 box-border overflow-hidden relative flex flex-col justify-between top-12" key={item.id} >
                        <blockquote  class="flex flex-col-reverse items-center justify-between w-full col-span-1 p-6 mt-6 mb-16 text-center transition-all duration-200 bg-gray-100 rounded-lg md:flex-row md:text-left hover:bg-white hover:shadow ease xl:mb-0">
                            <Testimonial  {...item} />
                        </blockquote>
                        
                           
                    </div> 
                    ))}

</div> 
</div> 
                    
        </section>
    )
}

export default Testimonials;
