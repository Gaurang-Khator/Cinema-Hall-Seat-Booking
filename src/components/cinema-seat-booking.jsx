import React from 'react'

const CinemaSeatBooking = ({ //props with default values 
    layout = {
        rows: 8,
        seatsPerRow: 12,
        aislePosition: 5,
    },
    seatTypes = {
        regular: {name: "Regular", price: 150, rows: [0, 1, 2]},
        premium: {name: "Premium", price: 250, rows: [3, 4, 5]},
        vip: {name: "VIP", price: 400, rows: [6, 7]},
    },
    bookedSeats = [],
    currency = "$",
    onBookingComplete = () => {},
    title = "Cinema Hall Booking",
    subtitle = "Select your preferred seats",
}) => {
  return (
    <div className='w-full min-h-screen bg-gray-50 p-4'>
        {/* title */}
        <div className='max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6'>
            <h1 className='text-2xl lg:text-3xl font-bold text-center mb-2 text-gray-800'>
                {title}
            </h1>
            <p className='text-center text-gray-600 m-6'>{subtitle}</p>
      
            {/* screen */}
            <div className='mb-8'>
                <div className='w-full h-4 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 mb-2 shadow-inner rounded-lg'/>
                <p className='text-center text-sm text-gray-500 font-medium'>SCREEN</p>
            </div>
            {/* seat map  */}

            <div></div>
            {/* legend  */}
            {/* Summary  */}
            {/* Book button  */}
        </div>
    </div>
  )
}

export default CinemaSeatBooking
