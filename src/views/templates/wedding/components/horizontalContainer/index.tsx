import React from 'react'
import BoxContainer from './BoxContainer'

export const HorizontalContainer: React.FC = () => {
    return (
        <div className="flex w-full whitespace-nowrap overflow-auto overflow-x-auto scrollbar-hide justify-center">
            <div
                className="flex overflow-x-scroll pb-10"
            >
                <div
                    className="md:ml-20 ml-10 md:pr-20 pr-10"
                >
                    <BoxContainer alt='' src={'/DSC04147.jpeg'} />
                    <BoxContainer alt='' src={'/DSC04096.jpeg'} />
                    <BoxContainer alt='' src={'/main-cover.jpeg'} />
                    <BoxContainer alt='' src={'/DSC04157-2.jpeg'} />
                    <BoxContainer alt='' src={'/DSC04259.jpeg'} />
                    <BoxContainer alt='' src={'/DSC04284.jpeg'} />
                    <BoxContainer alt='' src={'/DSC04453.jpeg'} />
                    <BoxContainer alt='' src={'/DSC04405.jpeg'} />
                </div>
            </div>
        </div>
    )
}
