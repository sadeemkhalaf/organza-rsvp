'use client';

import React from 'react'

const MainPageFooter = () => {
    return (
        <>
            <hr className="my-6 border-blueGray-300" />
            <section className="bg-white justify-between items-center flex px-4 sm:px-6 lg:px-32 pb-8 flex-col lg:flex-row xl:flex-row">
                <div className='inline-flex mb-4 lg:mb0 xl:mb-0'>
                    <h1 className='tracking-wider text-[#b2b2b2] non-italic font-extralight mx-1'>
                        {`03`}&ensp;{`.`}&ensp;{`08`}&ensp;{`.`}&ensp;{`2023`}
                    </h1>
                    <h1 className='italic font-extralight mx-1 text-[#b2b2b2]'>{'subtitle'}</h1>
                </div>
                <div className="space-y-8 overflow-hidden">
                    <div className='flex flex-row items-center'>
                        <p className="italic font-light leading-6 text-center text-[#909090]">
                            {`© 2023 made with`}&ensp;
                        </p>
                        <a className="text-gray-400 hover:text-gray-500">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_112_92)">
                                    <path d="M9.19228 1.42044C8.66864 0.896806 7.9754 0.610608 7.23553 0.610608C6.49565 0.610608 5.8003 0.898926 5.27666 1.42256L5.00318 1.69604L4.72546 1.41832C4.20183 0.894686 3.50435 0.604248 2.76447 0.604248C2.02672 0.604248 1.33136 0.892566 0.809847 1.41408C0.28621 1.93772 -0.00210838 2.63308 1.16085e-05 3.37295C1.16085e-05 4.11283 0.29045 4.80606 0.814087 5.3297L4.79542 8.4777C4.85054 8.53282 4.92474 8.5625 4.99682 8.5625C5.0689 8.5625 5.1431 8.53494 5.19822 8.47982L9.18804 5.33818C9.71167 4.81454 9.99999 4.11919 9.99999 3.37931C10.0021 2.63944 9.71591 1.94408 9.19228 1.42044Z" fill="#909090" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_112_92">
                                        <rect width="10" height="10" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </a>
                    </div>
                </div>

            </section>
        </>
    )
}

export default MainPageFooter;
