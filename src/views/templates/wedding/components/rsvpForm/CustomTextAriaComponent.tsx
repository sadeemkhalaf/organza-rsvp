import React from 'react'

interface CustomTextAriaComponentProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {

    editable?: boolean;
}

const CustomTextAriaComponent: React.FC<CustomTextAriaComponentProps> = (props) => {
    return (
        <textarea
        
            className="form-control
    block
    w-full
    px-1
    py-1.5
    text-base
    font-normal
    text-[#101010]
    bg-white bg-clip-padding 
    border-b-gray-300
    border-b-[1px]
    transition
    ease-in-out
    placeholder:text-sm
    disabled:text-[#101010]
    disabled:bg-[#fffdfc6d]
    disabled:text-[20px]
    m-0
    focus:text-gray-700 focus:bg-white focus:border-pink-200 focus:outline-none"
            {...props} />
    )
}

export default CustomTextAriaComponent