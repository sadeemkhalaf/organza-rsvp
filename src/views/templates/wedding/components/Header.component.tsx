import { Popover } from '@headlessui/react'
import { Link } from "react-scroll/modules";
import { FC, useEffect, useState } from 'react';
// import './../../../../app/styles/Home.module.css'

interface NavigationLinkProps {
    link: string;
    title: string;
}

const NavigationLink: FC<NavigationLinkProps> = ({ link, title }) => {
    return (<Link 
    // href={{ hash: link, href: '/', pathname: '/' }} 
    spy={true} smooth={true} offset={-50} duration={500}
    to={link} activeClass="active" className="text-base font-light text-gray-500 hover:text-gray-900 hover:font-semibold hover:underline hover:underline-offset-8" >
        {title}
    </Link>)
}

export const HomeHeader = () => {
    const [animateHeader, setAnimateHeader] = useState(false);
    useEffect(() => {
        const listener = () => {
            if (window.scrollY > 140) {
                setAnimateHeader(true);
            } else setAnimateHeader(false);
        };
        window.addEventListener("scroll", listener);

        return () => {
            window.removeEventListener("scroll", listener);
        };
    }, []);


    return (
        <header
            className={`w-full mt-[-160px] xl:mt-[-150px] lg:mt-[-160px] md:mt-[-160px] sm:mt-[-180px] backdrop-filter backdrop-blur-lg bg-white/50 fixed z-10 trasition ease-in-out duration-500 
            ${animateHeader && "shadow-md opacity-90" }`}
        >
            <Popover className="relative">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">

                        {/* logo */}
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <a href="#">
                                <div className='inline-flex'>
                                    <h1>{'.'}</h1>
                                    <h1 className='font-bold mx-1'>{'SAVE'}</h1>
                                    <h1 className='italic'>{' THE DATE.'}</h1>
                                </div>
                            </a>
                        </div>

                        <Popover.Group as="nav" className="hidden space-x-10 md:flex">
                            <NavigationLink title={'about'} link={'__aboutus'} />
                            <NavigationLink title={'wedding'} link={'__thewedding'} />
                            <NavigationLink title={'more'} link={'__more'} />


                        </Popover.Group>
                        <div className="items-center justify-end md:flex md:flex-1 lg:w-0">
                            <a
                                href={'#__thewedding'}
                                className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent border-black px-8 py-2 text-base font-light text-black hover:bg-gray-100"
                            >
                                {'rsvp'}
                            </a>
                        </div>
                    </div>
                </div>

            </Popover>
        </header>
    )
}