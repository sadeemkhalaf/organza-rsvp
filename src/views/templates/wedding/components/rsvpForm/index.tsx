import React, { Fragment, useCallback, useState } from 'react';
import CustomInputComponent from './CustomInputComponent';
import { IGuest } from '@/models/User.model';
import SpinnerComponent from '../Spinner.component';
import { ModalComponent } from '../ModalComponent';

export const RSVPFormContainer: React.FC<{ guestDetails?: IGuest; guestId?: string, eventId?: string }> = ({
  guestDetails,
  guestId,
  eventId
}) => {
  const [responseToRSVP, setResponseToRSVP] = useState<'yes' | 'no'>('yes');
  const [loadingResponse, setLoadingResponse] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isUpdated, setIsUpdated] = useState<boolean>(!!guestDetails?.rsvpResponse);

  const handleGuestResponse = useCallback(() => {
    if (!!guestId) {
      setLoadingResponse(true);
      setTimeout(async () => {
        try {
          const response = await fetch(`/api/events/${eventId}/guests/${guestId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({ rsvpResponse: responseToRSVP }),
          });
          const entries = await response.json();
          setLoadingResponse(false);
          setShowModal(true);
          setIsUpdated(true);
          console.log('entries response: ', entries);
        } catch (error) {
          console.log('HandlePutGuests, Error: ', error);
          setIsUpdated(false);
          setLoadingResponse(false);
        }
      }, 1500);
    }
  }, [guestId, responseToRSVP]);

  console.log('guestDetails: ', guestDetails);
  

  return (
    <div className="block w-1/2 rounded-lg">
      <form className="flex flex-col justify-center">
      <div className="grid grid-rows-2 gap-2">
            <div className="form-group mb-6">
              <h4 className="text-xs">Full Name</h4>
              <CustomInputComponent
                id="fullName"
                placeholder="Full Name"
                type={'text'}
                contentEditable={'false'}
                disabled
                defaultValue={guestDetails?.fullName || ''}
              />
            </div>
            <div className="form-group mb-6">
              <h4 className="text-xs">Mobile Number</h4>
              <CustomInputComponent
                id="mobileNo"
                placeholder="Mobile Number"
                type={'text'}
                inputMode={'tel'}
                contentEditable={'false'}
                disabled
                defaultValue={guestDetails?.mobileNumber || ''}
              />
            </div>
            <div className="form-group mb-6">
              <h4 className="text-xs">Number of Guests</h4>
              <CustomInputComponent
                id="noOfGuests"
                placeholder="Number of Guests"
                type={'number'}
                inputMode={'numeric'}
                disabled
                defaultValue={guestDetails?.seatsCount}
              />
            </div>
          </div>

        {!guestDetails?.rsvpResponse && !isUpdated ? (
          <Fragment>
            <div className="flex flex-col justify-center items-center lg:flex-row md:flex-row xl:flex-row xl:justify-between md:justify-between lg:justify-between mb-8">
              <div className="flex items-center mb-8 lg:mb-0 xl:mb-0 md:mb-0">
                <input
                  checked={responseToRSVP === 'yes'}
                  onChange={() => setResponseToRSVP('yes')}
                  id="checked-checkbox"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <h2 className="font-light text-[16px]">&ensp;Yes&ensp;</h2>
              </div>
              <div className="flex items-center">
                <input
                  checked={responseToRSVP === 'no'}
                  onChange={() => setResponseToRSVP('no')}
                  id="checked-checkbox"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <h2 className="font-light text-[16px]">&ensp;No&ensp;</h2>
              </div>
            </div>

            <div className="items-center justify-end md:flex md:flex-1 bg-[#EAC5B9] rounded-md">
              <a
                className="w-full inline-flex items-center justify-center whitespace-nowrap border border-transparent px-8 py-2 text-base font-light text-black hover:bg-gray-100 cursor-pointer"
                onClick={handleGuestResponse}
              >
                Confirm &ensp;
                {loadingResponse && <SpinnerComponent />}
              </a>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div className="flex justify-center text-center flex-col w-full">
              <h2 className="italic font-light text-[18px] text-[#D0538F]">
                .&ensp;Your response has been recorded successfully.&ensp;.
              </h2>
              <h2 className="italic font-light text-[14px]">
                {/* Contact the host for further details */}
              </h2>
            </div>
          </Fragment>
        )}

        <div className="flex justify-between items-center flex-col md:flex-row lg:flex-row xl:flex-row pt-8 lg:pt-16 md:pt-14 xl:pt-15 w-full">
          <a
            href="https://maps.app.goo.gl/AL1LrZT4GKsMN8Zi8"
            className="italic underline underline-offset-4 font-light text-[18px]"
          >
            <p>Location</p>
          </a>
          <div className="flex flex-row items-center">
            <h2 className="italic font-bold text-[18px]">&ensp;Event Location</h2>
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_122_42)">
                <path
                  d="M16.5002 0C9.71467 0 4.19434 5.52255 4.19434 12.3108C4.19434 22.4248 15.2753 32.3002 15.7472 32.7158C15.9623 32.9052 16.2312 33.0001 16.5002 33.0001C16.7692 33.0001 17.0381 32.9053 17.2533 32.7158C17.725 32.3003 28.8061 22.4249 28.8061 12.3108C28.8061 5.52255 23.2858 0 16.5002 0ZM16.5002 30.2988C14.0503 27.9248 6.47322 19.9622 6.47322 12.3108C6.47322 6.77922 10.9713 2.27889 16.5002 2.27889C22.0291 2.27889 26.5272 6.77922 26.5272 12.3108C26.5272 19.9621 18.9501 27.9247 16.5002 30.2988Z"
                  fill="black"
                />
                <path
                  d="M16.5003 6.57593C13.3589 6.57593 10.8032 9.14859 10.8032 12.3108C10.8032 15.4731 13.3589 18.0457 16.5003 18.0457C19.6418 18.0457 22.1974 15.4731 22.1974 12.3108C22.1974 9.14859 19.6418 6.57593 16.5003 6.57593ZM16.5003 15.7668C14.6154 15.7668 13.082 14.2165 13.082 12.3108C13.082 10.4053 14.6154 8.85482 16.5003 8.85482C18.3852 8.85482 19.9187 10.4051 19.9187 12.3108C19.9187 14.2165 18.3852 15.7668 16.5003 15.7668Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_122_42">
                  <rect width="33" height="33" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        <div className="flex justify-between items-center flex-col md:flex-row lg:flex-row xl:flex-row pt-8 lg:pt-16 md:pt-14 xl:pt-15 w-full">
          <h2 className="italic font-light text-[18px]">{'7:00 P.M'}</h2>
          <div className="flex flex-row items-center">
            <h2 className="italic font-bold text-[18px]">&ensp;Event Date</h2>
          </div>
        </div>
      </form>
      <ModalComponent
        showModal={showModal}
        setShowModal={setShowModal}
        isAccepted={responseToRSVP === 'yes'}
      />
    </div>
  );
};
