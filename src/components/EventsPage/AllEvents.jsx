import React, { useState } from 'react'
import eventImg from '../../assets/Rectangle 42.svg'
import Modal from './Modal'

const AllEvents = () => {
    const[modall, setModall] = useState(false)
    const eventData = [
        {
            eventTitle: 'Hackerthon',
            eventImg: eventImg,
            eventBio: 'Are you a designer or a developer, collaborate with other techies to build a product.'
        },
        {
            eventTitle: 'Hackerthon',
            eventImg: eventImg,
            eventBio: 'Are you a designer or a developer, collaborate with other techies to build a product.'
        },
        {
            eventTitle: 'Hackerthon',
            eventImg: eventImg,
            eventBio: 'Are you a designer or a developer, collaborate with other techies to build a product.'
        },
        {
            eventTitle: 'Hackerthon',
            eventImg: eventImg,
            eventBio: 'Are you a designer or a developer, collaborate with other techies to build a product.'
        },
        {
            eventTitle: 'Hackerthon',
            eventImg: eventImg,
            eventBio: 'Are you a designer or a developer, collaborate with other techies to build a product.'
        },
        {
            eventTitle: 'Hackerthon',
            eventImg: eventImg,
            eventBio: 'Are you a designer or a developer, collaborate with other techies to build a product.'
        },
        {
            eventTitle: 'Hackerthon',
            eventImg: eventImg,
            eventBio: 'Are you a designer or a developer, collaborate with other techies to build a product.'
        },
        {
            eventTitle: 'Hackerthon',
            eventImg: eventImg,
            eventBio: 'Are you a designer or a developer, collaborate with other techies to build a product.'
        },
        {
            eventTitle: 'Hackerthon',
            eventImg: eventImg,
            eventBio: 'Are you a designer or a developer, collaborate with other techies to build a product.'
        }
    ]
    return (
        <div>
            <div className='bg-[#4B0082] pt-36'>
                <h1 className='text-center pb-28 text-4xl text-white font-extrabold'>Tech Events</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-28 items-start justify-between p-10 md:p-10 lg:p-10 mt-18 mb-28'>
                {
                    eventData.map((item, index) => {
                        return (
                            <div key={index} className={`text-center bg-[#4B0082] rounded`}>
                                <img src={item.eventImg} alt="event" className='w-full ' />
                                <h1 className='my-5 font-extrabold text-2xl text-white'>{item.eventTitle}</h1>
                                <p className='text-xl text-white'>{item.eventBio}</p>
                                <button className='text-xl my-5 border-2 rounded p-2 px-5 text-white border-white hover:bg-white hover:text-[#4B0082]' onClick={()=>setModall(true)}>Register</button>
                            </div>
                        )
                    })
                }
            </div>
            <Modal modall={modall} setModall={setModall}/>
        </div>
    )
}

export default AllEvents
