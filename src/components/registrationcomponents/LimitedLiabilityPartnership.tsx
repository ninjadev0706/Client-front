import React, { useEffect, useState } from "react";
import Tippy from "@tippyjs/react";
import Select from "react-select";

const customStyle = {
  control: (provided: any, state: any) => ({
    border: "none",
    display: "flex",
  }),
};

const LimitedLiabilityPartnership = (props: any) => {
  const {
    setCompanyName,
    companyName,
    setCompanyNumber,
    companyNumber,
    setStartYear,
    startYear,
    setStartMonth,
    startMonth,
    setWebSite,
    website,
    setTurnover,
    turnover,
    setOnlineRevenue,
    onlineRevenue,
    setVATregistered,
    VATregistered,
    tooltip,
    monthOptions,
    onlinesales,
    customStyle,
  } = props;

  // const tooltip = {
  //     trading:"Enter the date that your business originally started trading, even if you have since changed the name or registration",
  //     tunover:"Just an estimate is fine. If you have been trading for less than a year, enter your total turnover to date."
  // }

  // const [vatregister, setvatregister] = useState(1);

  // const monthOptions = [
  //     {value: 'January', label: 'January'},
  //     {value: 'February', label: 'February'},
  //     {value: 'March', label: 'March'},
  //     {value: 'April', label: 'April'},
  //     {value: 'May', label: 'May'},
  //     {value: 'June', label: 'June'},
  //     {value: 'July', label: 'July'},
  //     {value: 'August', label: 'August'},
  //     {value: 'September', label: 'September'},
  //     {value: 'October', label: 'October'},
  //     {value: 'November', label: 'November'},
  //     {value: 'December', label: 'December'}
  // ]
  // const onlinesales = [
  //     {value: 'Please select...', label:'Please select...'},
  //     {value: 'No', label: 'No'},
  //     {value: 'Less than 25%', label: 'Less than 25%'},
  //     {value: '25% - 50%', label: '25% - 50%'},
  //     {value: '50% - 75%', label: '50% - 75%'},
  //     {value: '75% - 100%', label: '75% - 100%'},
  // ]

  // const setVAT = (set: number) => {
  //     setVATregistered(set);
  //     setvatregister(set);
  // }

  return (
      <div className="grid md:grid-cols-2 gap-5">
      <div>
        <div>
          <div className="grid grid-cols-2 gap-2 w-full">
            <div className="">
              <p className="font-medium text-[16px] mb-3">Company Name</p>
              <input
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="p-2 w-full px-3 text-sm text-gray-900 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="">
              <p className="font-medium text-[16px] mb-3">Company Number</p>
              <input
                type="number"
                min={0}
                value={companyNumber}
                onChange={(e) => setCompanyNumber(e.target.value)}
                className="p-2 w-full px-3 text-sm text-gray-900 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <a className="text-sm font-thin py-2">Search for your company</a>
        </div>
      </div>

      <div className="font-medium text-[16px]">
        <div className="flex items-center mb-3">
          <p>When did the business start trading?</p>
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
          <div className="border rounded-l-lg border-gray-300 w-6/12">
            <Select
              options={monthOptions}
              onChange={(startMonth) => setStartMonth(startMonth)}
              styles={customStyle}
              placeholder="Month"
            />
          </div>
          <input
            type="number"
            min={0}
            value={startYear}
            onChange={(e) => setStartYear(e.target.value)}
            className="w-6/12 rounded-r-lg block p-2 w-full  px-3 text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="YYYY"
          ></input>
        </div>
        <p className="text-sm font-thin py-2">
          New business? Enter the expected launch date.
        </p>
      </div>

      <div>
        <div className="flex font-medium text-[16px] mb-3">
          Website <p className="pl-2">(optional)</p>
        </div>
        <input
          value={website}
          onChange={(e) => setWebSite(e.target.value)}
          className="rounded-lg block p-2 w-full px-3 text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="www.example.com"
        ></input>
      </div>

      <div>
        <div className="flex items-center mb-3">
          <p className="font-medium text-[16px]">Last 12 months turnover</p>
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
          <div className="absolute py-2 px-[12px] text-gray-600 border-r">
            £
          </div>
          <input
            type="number"
            min={0}
            value={turnover}
            onChange={(e) => setTurnover(e.target.value)}
            className="rounded-lg block py-2 px-[36px] w-full  px-3 text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="0"
          ></input>
        </div>
      </div>

      <div>
        <p className="font-medium text-[16px] mb-3">
          Does any of your revenue come from online sales?
        </p>
        <div className="rounded-lg border border-gray-300">
          <Select
            options={onlinesales}
            styles={customStyle}
            onChange={() => setOnlineRevenue(onlineRevenue)}
          />
        </div>
      </div>

      <div>
        <p className="font-medium text-[16px] mb-3">
          Is the business VAT registered?
        </p>
        <div className="flex">
          <button
            onClick={() => setVATregistered(true)}
            className={`${
              VATregistered
                ? "bg-[#0c2440] text-white hover:bg-[#3c5490]"
                : "bg-white text-[#0c2440] hover:bg-[#ddd]"
            } w-6/12 border rounded-l-lg block p-2 w-full  text-sm border-gray-300`}
          >
            <i className="fa fa-check"> Yes</i>
          </button>
          <button
            onClick={() => setVATregistered(false)}
            className={`${
              !VATregistered
                ? "bg-[#0c2440] text-white hover:bg-[#3c5490]"
                : "bg-white text-[#0c2440] hover:bg-[#ddd]"
            } w-6/12 border rounded-r-lg block p-2 w-full  text-sm border-gray-300`}
          >
            <i className="fa fa-times"> No</i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LimitedLiabilityPartnership;
