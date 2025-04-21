import React, { FC } from "react";

export const ModalComponent: FC<{
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
    , showModal: boolean,
    isAccepted?: boolean,
}> = ({ setShowModal, showModal, isAccepted }) => {
    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="justify-center mx-4 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="px-[30px] border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className=" flex flex-col items-center align-center my-6 mt-[40px]" >
                                    {isAccepted ? <h2 className='italic font-extralight text-[28px] text-[#D0538F]'>{'.'}&ensp;{'Thank You!'}&ensp;{'.'}</h2> : <h2 className='italic font-extralight text-[28px] text-[#435596]'>{'.'}&ensp;{`${'We’re so sorry for this'}`}&ensp;{'.'}</h2>}
                                </div>
                                {/*body*/}
                                {isAccepted ? <div className="relative p-6 flex-auto">
                                    <p className=" text-slate-500 leading-relaxed text-sm">
                                        {`We’re very excited to be seeing you at the wedding.`}
                                    </p>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        {`Please keep us posted to any changes and contact us on this number:`}
                                    </p>
                                    {/* <p className="text-slate-500 font-semibold text-sm leading-relaxed">
                                        {showedNumber}
                                    </p> */}
                                </div> : <div className="relative p-6 flex-auto">
                                    <p className=" text-slate-500 leading-relaxed text-sm">
                                        {`If you still can make it, let us know one week before the date “by December 15th”`}
                                    </p>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        {`Please keep us posted to any changes and contact us on this number, `}
                                    </p>
                                    {/* <p className="text-slate-500 font-semibold text-sm leading-relaxed">
                                        {showedNumber}
                                    </p> */}
                                </div>}
                                {/*footer*/}
                                <div className="flex items-center justify-end py-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className=" text-[#2e2e2e] background-transparent font-extralight uppercase py-2 text-sm outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        {`x`}{`Close`}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}