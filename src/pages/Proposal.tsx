import React, {useEffect, useState} from "react"

const Proposal = (props: any) => {

    const {AddProcessStep, BackProcessStep} = props

    return(
        <div className="">
            <div className="pt-10 my-5 w-10/12 px-4 md:w-10/12 lg:w-8/12 xl:w-6/12">
                <div onClick={() => BackProcessStep()} className="flex text-sm items-center pl-2 text-[#0c2440] font-medium mb-5"><img src="download.svg" className="h-2 w-2 mr-2" alt="_"></img>Back</div>

                <div className="box shadow-2xl p-[30px] text-[#0c2440] mb-10 bg-white rounded-2xl">
                    <div className="text-2xl font-black text-[#122d40]">
                        Successful!
                    </div>
                    <div className="text-md font-bold text-[#333333] pt-4">
                        You have submitted your request, once we have completed our checks we will approve your loan
                    </div>
                </div>
                <div className="flex justify-center mt-10">
                    <button className="py-3 px-4 rounded-lg text-white font-medium bg-[#0c2440]" onClick={()=>AddProcessStep(3)}>Trading History</button>
                </div>
            </div>
        </div>
    )
}

export default Proposal