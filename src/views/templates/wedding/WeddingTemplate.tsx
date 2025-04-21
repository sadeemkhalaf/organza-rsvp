'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { HomeHeader, RSVPFormContainer } from './components';
import { IGuest } from '@/models/User.model';
import { useParams } from 'next/navigation';
import './../../../app/styles/Home.module.css';

const EventTemplatePage = () => {
  const { eventId, guestId } = useParams(); // returns as strings
  const [guestDetails, setGuestDetails] = useState<IGuest>();

  const handleFetchGuest = useCallback(
    async (_guestId: string) => {
      if (!!_guestId)
        try {
          const response = await fetch(`/api/events/${eventId}/guests/${guestId}`, {
            method: 'GET',
          });
          const entries = await response.json();
          console.log('response: ', entries);
          
          setGuestDetails(entries);
        } catch (error) {
          console.log('error: ', error);
        }
    },
    [eventId, guestId]
  );

  useEffect(() => {
    handleFetchGuest(guestId as string);
  }, [handleFetchGuest]);

  return (
    <div className={`content-center scrollbar-hide bg-white`}>
      <Head>
        <title>{'Mohammad & Sadeem Wedding'}</title>
        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content="'Mohammad & Sadeem Wedding'" />
        <meta
          name="description"
          content="Wedding RSVP, if you got this, you're invited to the wedding!"
        />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://the-wedding-rsvp.vercel.app/" />
        <meta property="og:title" content="'Mohammad & Sadeem Wedding'" />
        <meta
          property="og:description"
          content="Wedding RSVP, if you got this, you're invited to the wedding!"
        />
        <meta
          property="og:image"
          content="https://scontent.famm3-3.fna.fbcdn.net/v/t39.30808-6/317741851_10223186216069221_6923827605733696494_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGmcdDKTowXATI1ST9BVaV5djnjAeQgunp2OeMB5CC6er4-Bbh-xWXetKNBqLAxYyc&_nc_ohc=GbBa2dbzcdwAX-MnfdB&_nc_zt=23&_nc_ht=scontent.famm3-3.fna&oh=00_AfDA5_iDyMhBxBG8FGUX-rTJvbT7FTVvstddG0lyLIWLDA&oe=6393575D"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://the-wedding-rsvp.vercel.app/" />
        <meta property="twitter:title" content="'Mohammad & Sadeem Wedding'" />
        <meta
          property="twitter:description"
          content="Wedding RSVP, if you got this, you're invited to the wedding!"
        />
        <meta
          property="twitter:image"
          content="https://scontent.famm3-3.fna.fbcdn.net/v/t39.30808-6/317741851_10223186216069221_6923827605733696494_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGmcdDKTowXATI1ST9BVaV5djnjAeQgunp2OeMB5CC6er4-Bbh-xWXetKNBqLAxYyc&_nc_ohc=GbBa2dbzcdwAX-MnfdB&_nc_zt=23&_nc_ht=scontent.famm3-3.fna&oh=00_AfDA5_iDyMhBxBG8FGUX-rTJvbT7FTVvstddG0lyLIWLDA&oe=6393575D"
        />
        <link rel="icon" href="/namesTag.ico" />
      </Head>

      <HomeHeader />

      <div id="__aboutus">
        <div className="flex justify-center mt-36 px-[42px]">
          <Image
            src="/labels.png"
            alt="Picture of the author"
            className="w-2/3 lg:w-1/3 xl:w-1/3 md:w-1/2 h-auto flex"
            width={388}
            height={200}
            objectFit={'contain'}
          />
        </div>

        <div className="flex flex-col mt-10 mb-24 items-center align-center delay-[300ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0">
          <div>
            <a>
              <div className="inline-flex">
                <h1 className="tracking-wider non-italic font-extralight mx-1">
                  {`23`}&ensp;{`.`}&ensp;{`12`}&ensp;{`.`}&ensp;{`2022`}
                </h1>
                <h1 className="italic font-extralight mx-1">A Celebration of Love</h1>
              </div>
            </a>
          </div>
          <div className="mt-12 px-[22px] flex justify-center">
            <Image
              src="/main-cover.jpeg"
              alt="Picture of the author"
              className="w-full lg:w-full xl:w-full md:w-full h-auto flex"
              height={558}
              width={988}
              objectFit={'contain'}
            />
          </div>
          <div className="px-16 mt-8">
            <h2 className="italic text-center font-semibold text-[15px] lg:text-[18px] xl:text-[18px] ">
              {'.'}&ensp;{'Our Story'}&ensp;{'.'}
            </h2>

            <h2 className="italic font-light text-[15px] lg:text-[18px] xl:text-[18px] text-center">
              {
                'Once upon a time, two hearts found each other and began a journey of love and togetherness.'
              }
            </h2>
          </div>
        </div>
      </div>

      <div
        className="w-full xl:py-24 lg:py-24 md:py-24 sm:mt-24 mb-16 flex flex-col items-center align-center delay-[300ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0 bg-[#f6f3ed8e]"
        id="__thewedding"
      >
        <div className="my-4" />
        <div>
          <h2 className="w-full italic font-light text-[15px] lg:text-[18px] xl:text-[18px] ">
            {'.'}&ensp;{'Please fill out the form below'}&ensp;{'.'}
          </h2>
        </div>
        <div className="text-center">
          <h2 className="italic font-bold text-[18px] lg:text-[22px] xl:text-[22px] mt-6">
            {'.'}&ensp;{'Mohammad Al-Soutari & Sadeem Khalaf Wedding'}&ensp;{'.'}
          </h2>
          <h2 className="italic text-center font-light text-[15px] lg:text-[18px] xl:text-[16px] px-14">
            {
              'We`re so excited to start the next phase of our lives together and can`t wait to celebrate with you in December!'
            }
          </h2>
        </div>

        <div className="mt-12 lg:mt-24 xl:mt-24 w-full flex justify-center">
          <RSVPFormContainer guestDetails={guestDetails} guestId={guestId as string} eventId={eventId as string} />
        </div>
        <div className="my-4" />
      </div>

      <div
        className="flex flex-col mt-1 lg:mt-48 xl:mt-52 md:mt-42 mb-24 items-center align-center scrollbar-hide delay-[300ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0"
        id="__more"
      >
        <div>
          <h2 className="italic font-light text-[18px] pb-8">
            {'.'}&ensp;{'See you there!'}&ensp;{'.'}
          </h2>
        </div>
        {/* <HorizontalContainer /> */}
      </div>

      {/* <!-- Foooter --> */}
      <hr className="my-6 border-blueGray-300" />
      <section className="bg-white justify-between items-center flex px-4 sm:px-6 lg:px-32 pb-8 flex-col lg:flex-row xl:flex-row">
        <div className="inline-flex mb-4 lg:mb0 xl:mb-0">
          <h1 className="tracking-wider text-[#b2b2b2] non-italic font-extralight mx-1">
            {`23`}&ensp;{`.`}&ensp;{`12`}&ensp;{`.`}&ensp;{`2022`}
          </h1>
          <h1 className="italic font-extralight mx-1 text-[#b2b2b2]">"A Celebration of Love"</h1>
        </div>
        <div className="space-y-8 overflow-hidden">
          <div className="flex flex-row items-center">
            <p className="italic font-light leading-6 text-center text-[#909090]">
              {`© 2022 by Sadeem, made with`}&ensp;
            </p>
            <a className="text-gray-400 hover:text-gray-500">
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_112_92)">
                  <path
                    d="M9.19228 1.42044C8.66864 0.896806 7.9754 0.610608 7.23553 0.610608C6.49565 0.610608 5.8003 0.898926 5.27666 1.42256L5.00318 1.69604L4.72546 1.41832C4.20183 0.894686 3.50435 0.604248 2.76447 0.604248C2.02672 0.604248 1.33136 0.892566 0.809847 1.41408C0.28621 1.93772 -0.00210838 2.63308 1.16085e-05 3.37295C1.16085e-05 4.11283 0.29045 4.80606 0.814087 5.3297L4.79542 8.4777C4.85054 8.53282 4.92474 8.5625 4.99682 8.5625C5.0689 8.5625 5.1431 8.53494 5.19822 8.47982L9.18804 5.33818C9.71167 4.81454 9.99999 4.11919 9.99999 3.37931C10.0021 2.63944 9.71591 1.94408 9.19228 1.42044Z"
                    fill="#909090"
                  />
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
    </div>
  );
};

// export const getStaticProps: GetStaticProps<any> = async ({ locale }: any) => {
//   return {
//     props: {
//       ...await serverSideTranslations(locale ?? 'ar', ['common']),
//     },
//   }
// }

export default EventTemplatePage;
