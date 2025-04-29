/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image, { ImageProps } from 'next/image'

/* eslint-disable @typescript-eslint/no-empty-object-type */
interface BoxContainerProps extends ImageProps { }

const BoxContainer: React.FC<BoxContainerProps> = (props) => {
    return (
        <div className="inline-block px-3">
            <Image
                className="w-[300px] h-[300px] max-w-xs overflow-hidden shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                style={{
                    objectFit: 'cover'
                }}
                width={300}
                height={300}
                objectFit="cover"
                {...props}
            />
        </div>
    )
}

export default BoxContainer
