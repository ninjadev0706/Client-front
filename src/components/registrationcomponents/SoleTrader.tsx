import React, { useEffect, useState } from "react";
import Tippy from "@tippyjs/react";
import Select from "react-select";

const SoleTrader = (props: any) => {
  const {
    setTradingName,
    tradingName,
    setBusinessIndustry,
    businessIndustry,
    setWebSite,
    website,
    setStartYear,
    startYear,
    setStartMonth,
    startMonth,
    setTurnover,
    turnover,
    setLastProfit,
    lastProfit,
    setOnlineRevenue,
    onlineRevenue,
    setVATregistered,
    VATregistered,
    tooltip,
    monthOptions,
    onlinesales,
    customStyle,
    businessindustrylist,
  } = props;

  return (
    <div className="grid md:grid-cols-2 gap-5">
      <div>
        <div className="font-medium text-[16px] mb-3 flex">
          Trading name<p className="pl-2">(optional)</p>
        </div>
        {/* {tradingName.length === 0 && <div className="w-full bg-red-500 text-white px-2 py-0.5">Enter your trading name</div>} */}
        <div className="relative w-full">
          <input
            value={tradingName}
            onChange={(e) => setTradingName(e.target.value)}
            className="rounded-lg block p-2 w-full px-3 text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
      </div>

      <div>
        <p className="font-medium text-[16px] mb-3">
          What does the busiess do?
        </p>
        <div className="relative w-full">
          <div className="border border-gray-300 rounded-lg">
            <Select
              options={businessindustrylist}
              styles={customStyle}
              onChange={(businessindustry) =>
                setBusinessIndustry(businessindustry)
              }
            />
          </div>
        </div>
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
            max={3000}
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
        <div className="flex items-center mb-3">
          <div className="font-medium text-[16px] flex">
            Last 12 months profit<p className="pl-2">(before tax)</p>
          </div>
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
          <div className="block p-2  px-3 text-sm text-gray-900 bg-gray-50  border rounded-l-lg text-4">
            £
          </div>
          <input
            type="number"
            min={0}
            value={lastProfit}
            onChange={(e) => setLastProfit(e.target.value)}
            className="rounded-r-lg p-2 w-full  px-3 text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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

export default SoleTrader;
