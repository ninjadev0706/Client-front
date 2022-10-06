import React, {useEffect, useState} from "react"
import Tippy from "@tippyjs/react";
import Select from 'react-select'

const customStyle = {
    control: (provided: any, state: any) => ({
      border: "none",
      display: "flex",
    }),
  };

const OrdinaryPartnership = (props: any) => {

    const {
        setTradingName, tradingName,
        setBusinessIndustry, businessIndustry,
        setWebSite, website,
        setStartYear, startYear,
        setStartMonth, startMonth,
        setTurnover, turnover,
        setLastProfit, lastProfit,
        setOnlineRevenue, onlineRevenue,
        setVATregistered, VATregistered } = props

    const tooltip = {
        trading:"Enter the date that your business originally started trading, even if you have since changed the name or registration",
        tunover:"Just an estimate is fine. If you have been trading for less than a year, enter your total turnover to date.",
        tax:"Enter a negative number if your business is loss making. If you have been trading for less than a year then enter your profit to date."
    }

    const [vatregister, setvatregister] = useState(1);

    const monthOptions = [
        {value: 'January', label: 'January'},
        {value: 'February', label: 'February'},
        {value: 'March', label: 'March'},
        {value: 'April', label: 'April'},
        {value: 'May', label: 'May'},
        {value: 'June', label: 'June'},
        {value: 'July', label: 'July'},
        {value: 'August', label: 'August'},
        {value: 'September', label: 'September'},
        {value: 'October', label: 'October'},
        {value: 'November', label: 'November'},
        {value: 'December', label: 'December'}
    ]
    const onlinesales = [
        {value: 'Please select...', label:'Please select...'},
        {value: 'No', label: 'No'},
        {value: 'Less than 25%', label: 'Less than 25%'},
        {value: '25% - 50%', label: '25% - 50%'},
        {value: '50% - 75%', label: '50% - 75%'},
        {value: '75% - 100%', label: '75% - 100%'},
    ]

    const setVAT = (set: number) => {
        setVATregistered(set);
        setvatregister(set);
    }
    
    return (
        <div className="grid md:grid-cols-2 gap-5">
            <div>
                <div className="font-medium text-[16px] mb-3 flex">Trading name<p className="pl-2">(optional)</p></div>
                <div className="relative w-full">
                    <input value={tradingName} onChange={e=>setTradingName(e.target.value)} className="rounded-lg block p-2 w-full  px-3 text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"></input>
                </div>
            </div>
            <div>
                <p className="font-medium text-[16px] mb-3">What does the busiess do?</p>
                <div className="relative w-full">
                    <input value={businessIndustry} onChange={e=>setBusinessIndustry(e.target.value)} className="rounded-lg block p-2 w-full  px-3 text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Choose an industry"></input>
                </div>
            </div>
            <div>
                <div className="flex font-medium text-[16px] mb-3">Website <p className="pl-2">(optional)</p></div>
                <input value={website} onChange={e=>setWebSite(e.target.value)} className="rounded-lg block p-2 w-full  px-3 text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="www.example.com"></input>
            </div>
            <div>
                <div className="flex items-center mb-3">
                    <p className="font-medium text-[16px]">When did the business start trading?</p>
                    <Tippy interactive content={tooltip.trading}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-2 inline relative cursor-pointer -top-[1px]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                        />
                    </svg>
                    </Tippy>
                </div>
                <div className="flex">
                    <div className="border border-gray-300 rounded-l-lg w-6/12">
                    <Select options={monthOptions} styles={customStyle} onChange={(startMonth) => setStartMonth(startMonth)} placeholder="Month" />
                    </div>
                    <input value={startYear} onChange={e=>setStartYear(e.target.value)} className="w-6/12 rounded-r-lg block p-2 w-full  px-3 text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="YYYY"></input>
                </div>
            </div>
            <div>
                <div className="flex items-center mb-3">
                    <p className="font-medium text-[16px]">Turnover since you started trading</p>
                    <Tippy interactive content={tooltip.tunover}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-2 inline relative cursor-pointer -top-[1px]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                        />
                    </svg>
                    </Tippy>
                </div>
                <div className="ralative flex">
                    <span className="absolute pl-10 text-4 z-10">£</span>
                    <input value={turnover} onChange={e=>setTurnover(e.target.value)} className="rounded-lg block p-2 w-full  px-3 text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="0"></input>
                </div>
            </div>
            <div>
                <div className="flex items-center mb-3">
                    <div className="font-medium text-[16px] flex">Last 12 months profit<p className="pl-2">(before tax)</p></div>
                    <Tippy interactive content={tooltip.tax}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-2 inline relative cursor-pointer -top-[1px]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                        />
                    </svg>
                    </Tippy>
                </div>
                <div className="flex items-center">
                    <div className="block p-2  px-3 text-sm text-gray-900 bg-gray-50  border rounded-l-lg text-4 z-10">£</div>
                    <input value={lastProfit} onChange={e=>setLastProfit(e.target.value)} className="rounded-r-lg p-2 w-full  px-3 text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="0"></input>
                </div>
            </div>
            <div>
                <p className="font-medium text-[16px] mb-3">Does any of your revenue come from online sales?</p>
                <div className="border border-gray-300 rounded-lg">
                    <Select options={onlinesales} styles={customStyle} onChange={(onlineRevenue) => setOnlineRevenue(onlineRevenue)} />
                </div>
            </div>
            <div>
                <p className="font-medium text-[16px] mb-3">Is the business VAT registered?</p>
                <div className="flex">
                    <button onClick={() => setVAT(1)} className={`${vatregister == 1? "bg-[#0c2440] text-white hover:bg-[#3c5490]":"bg-white text-[#0c2440] hover:bg-[#ddd]"} w-6/12 border rounded-l-lg block p-2 w-full  text-sm border-gray-300`}><i className="fa fa-check"> Yes</i></button>
                    <button onClick={() => setVAT(0)} className={`${vatregister == 0? "bg-[#0c2440] text-white hover:bg-[#3c5490]":"bg-white text-[#0c2440] hover:bg-[#ddd]"} w-6/12 border rounded-r-lg block p-2 w-full  text-sm border-gray-300`}><i className="fa fa-times"> No</i></button>
                </div>
            </div>
        </div>
    )
}

export default OrdinaryPartnership