import React from 'react'
import { pricingOptions } from '../constants'


const Pricing = () => {
    return (
        <div className='mt-20'>
            <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide'>Pricing</h2>

            <div className='flex flex-wrap justify-center'>
                {pricingOptions.map((option, index) => (
                    <div key={index} className='border border-gray-300 rounded-lg p-15 m-4 flex-1 w-full sm:w-1/2 lg:1/3'>
                        <h3 className='text-xl font-semibold mb-4'>{option.title}
                            {option.title === 'Pro' && <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text px-2 py-1 text-sm '>Most Popular</span>}
                        </h3>
                        <p className='text-4xl font-bold mb-4'>{option.price} <span className='text-lg font-normal'>
                            /month</span> </p>
                        <ul className='mb-6'>
                            {option.features.map((feature, index) => (
                                <li key={index} className='mb-2'>• {feature}</li>
                            ))}
                        </ul>
                        <a
                            href="#"
                            className='
    bg-gradient-to-r from-orange-500 to-orange-800 
    rounded-full px-4 py-2 transition duration-200 hover:shadow-md hover:shadow-red-500/50'>
                            Choose Plan</a>



                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pricing
