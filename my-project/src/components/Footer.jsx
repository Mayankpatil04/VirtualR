import React from 'react'
import { resourcesLinks } from '../constants'
import { platformLinks } from '../constants'
import { communityLinks } from '../constants'

const Footer = () => {
    return (

        <footer className='border-t border-neutral-700 mt-20  py-10  '>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4  '>
                <div>
                    <h3 className='text-md font-semibold mb-4'>Resources</h3>
                    <ul>
                        {resourcesLinks.map((link, index) => (
                            <li key={index} className='mb-2'>
                                <a href={link.href}>{link.text}</a>

                            </li>
                        ))}
                    </ul>

                    
                </div>
                 <div>
                    <h3 className='text-md font-semibold mb-4'>Platforms</h3>
                    <ul>
                        {platformLinks.map((link, index) => (
                            <li key={index} className='mb-2'>
                                <a href={link.href}>{link.text}</a>

                            </li>
                        ))}
                    </ul>

                    
                </div>

                 <div>
                    <h3 className='text-md font-semibold mb-4'>Community</h3>
                    <ul>
                        {communityLinks.map((link, index) => (
                            <li key={index} className='mb-2'>
                                <a href={link.href}>{link.text}</a>

                            </li>
                        ))}
                    </ul>

                    
                </div>


            </div>

        </footer>
    )
}

export default Footer
