import React from 'react';
import { AiFillCar, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsBook,  } from 'react-icons/bs';
import Rating from 'react-rating';
import { useHistory } from 'react-router-dom';
import useBooking from '../../hooks/useBooking';
//
const TourPackCard = (props) => {
    const { _id, name, img, price, rating,mileage,Dec,vin, engine, images} = props
    // const { _id,title, description, image, duration, groupMembers, price, country} = props
    const { handleBookings } = useBooking();
    const history = useHistory();
    
    //handing booking 
    const handleBooking = () => {
         handleBookings(props);
        history.push(`/booking/${_id}`);
    }

    return (
        <div className="bg-white rounded-xl p-4 box-border overflow-hidden relative flex flex-col justify-between">
            {/* country badge  */}
            <div className="absolute top-10 text-sm left-0 z-50 bg-yellow-400 font-primary px-4 py-1 rounded-lg">{name}</div>
            {/* image  */}
            <div className="overflow-hidden rounded-xl h-52">
                <img className="transform hover:scale-125 transition duration-700 w-full h-full object-cover" src={img} alt={name} />
            </div>

            <div className="flex flex-col flex-grow">
                {/* title and description */}
                <div className="flex flex-col space-y-1 my-4">
                    <h2 className="text-gray-700 font-primary text-lg">{name}</h2>
                    <p className="text-gray-500 text-sm">{Dec}</p>                    
                    {/* <p className="text-gray-500 text-sm">{Dec.slice(0, 100)}</p>                     */}

                </div>

                {/* others info  */}
                <div className="flex items-center justify-between border-t border-gray-200 border-b  py-4">
                    {/* duration  */}
                    <div className="flex items-center space-x-1">
                        <BsBook className="text-red-500 text-xl" />
                        <div className="flex flex-col">
                        <Rating
                        emptySymbol={<AiOutlineStar className="text-gray-600 text-xl" />}
                        fullSymbol={<AiFillStar className="text-yellow-400 text-xl" />}
                        initialRating={`${rating}`}
                        readonly
                    />
                    <span className="text-gray-600">({rating})</span>
                        </div>
                    </div>
                    {/* group  */}
                    <div className="flex items-center space-x-1">
                        <AiFillCar className="text-red-500 text-2xl" />
                        <div className="flex flex-col">
                        
                            <span className="text-sm text-gray-500">{engine} Engine</span>
                            <span className="text-sm text-gray-500">{mileage} Mileage</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* card footer  */}
            <div className="flex items-center justify-between pt-3">
                <h1 className="font-primary font-semibold text-pink-900 text-2xl">$ {price}</h1>
                <button className="w-100 flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 px-6" onClick={handleBooking}>Order Now</button>
            </div>
        </div>
    )
}

export default TourPackCard;


// id,name,img,price,rating,mileage,Dec,vinengine,images[]
