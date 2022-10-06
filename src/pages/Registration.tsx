import React, { useEffect, useState, useContext, ReactNode } from "react";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import Select from "react-select";

import LimitedCompany from "../components/registrationcomponents/LimitedCompany";
import SoleTrader from "../components/registrationcomponents/SoleTrader";
import OrdinaryPartnership from "../components/registrationcomponents/OrdinaryPartnership";
import LimitedLiabilityPartnership from "../components/registrationcomponents/LimitedLiabilityPartnership";
import Other from "../components/registrationcomponents/Other";

const customStyle = {
  control: (provided: any, state: any) => ({
    border: "none",
    display: "flex",
  }),
};

const Registration = (props: any) => {
  const {
    AddProcessStep,
    BackProcessStep,
    setCompanyName,
    companyName,
    setCompanyNumber,
    companyNumber,
    setPartnershipName,
    partnershipName,
    setTradingName,
    tradingName,
    setBusinessIndustry,
    businessIndustry,
    setStartYear,
    startYear,
    setStartMonth,
    startMonth,
    setWebSite,
    website,
    setLastProfit,
    lastProfit,
    setTurnover,
    turnover,
    setOnlineRevenue,
    onlineRevenue,
    setVATregistered,
    VATregistered,
    setComponentTarget,
    componentTarget,
  } = props;

  const tooltip = {
    trading:
      "Enter the date that your business originally started trading, even if you have since changed the name or registration",
    tunover:
      "Just an estimate is fine. If you have been trading for less than a year, enter your total turnover to date.",
    tax: "Enter a negative number if your business is loss making. If you have been trading for less than a year then enter your profit to date.",
  };
  const monthOptions = [
    { value: "January", label: "January" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May" },
    { value: "June", label: "June" },
    { value: "July", label: "July" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November" },
    { value: "December", label: "December" },
  ];
  const onlinesales = [
    { value: "No", label: "No" },
    { value: "Less than 25%", label: "Less than 25%" },
    { value: "25% - 50%", label: "25% - 50%" },
    { value: "50% - 75%", label: "50% - 75%" },
    { value: "75% - 100%", label: "75% - 100%" },
  ];
  const businessindustrylist = [
    {
      value: "Car Dealers, Garages & Mechanics",
      label: "Car Dealers, Garages & Mechanics",
    },
    { value: "Construction", label: "Construction" },
    {
      value: "Hotels, Restaurants & Pubs",
      label: "Hotels, Restaurants & Pubs",
    },
    { value: "Retail", label: "Retail" },
    { value: "Wholesale", label: "Wholesale" },
    {
      value: "Agriculture, Forestry & Fishing",
      label: "Agriculture, Forestry & Fishing",
    },
    {
      value: "Architecture & Engineering",
      label: "Architecture & Engineering",
    },
    { value: "Business Support Services", label: "Business Support Services" },
    {
      value: "Cleaning, Landscaping & Gardening",
      label: "Cleaning, Landscaping & Gardening",
    },
    { value: "Education & Training", label: "Education & Training" },
    { value: "Finance & Insurance", label: "Finance & Insurance" },
    { value: "Health & Care", label: "Health & Care" },
    { value: "IT & Communications", label: "IT & Communications" },
    { value: "Leisure / Other Services", label: "Leisure / Other Services" },
    { value: "Professional Services", label: "Professional Services" },
    { value: "Property & Real Estate", label: "Property & Real Estate" },
    {
      value: "Publishing, Film & Media Production",
      label: "Publishing, Film & Media Production",
    },
    { value: "Transport & Logistics", label: "Transport & Logistics" },
    { value: "Other", label: "Other" },
  ];

  // const [componentTarget, setComponentTarget] = useState(0);
  const [manualCompany, setManualCompany] = useState(true);
  const [manualPartnership, setManualPartnership] = useState(false);

  const LimitedCompanyName = () => {
    return (
      <div>
        <div className={`${manualCompany ? "block" : "hidden"}`}>
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
                value={companyNumber}
                onChange={(e) => setCompanyNumber(e.target.value)}
                className="p-2 w-full px-3 text-sm text-gray-900 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <a className="text-sm font-thin py-2">Search for your company</a>
        </div>
      </div>
    );
  };

  const BusinessStartDay = () => {
    return (
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
    );
  };

  const WebSite = () => {
    return (
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
    );
  };

  const LastMonthturnor = () => {
    return (
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
            value={turnover}
            onChange={(e) => setTurnover(e.target.value)}
            className="rounded-lg block py-2 px-[36px] w-full  px-3 text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="0"
          ></input>
        </div>
      </div>
    );
  };

  const HaveOnlineSales = () => {
    return (
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
    );
  };

  const IsVAT = () => {
    return (
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
    );
  };

  // const handleSetTradingName = (event: any) => {
  //   const tradingName = event.target.value;
  //   setTradingName(tradingName);
  // };

  const TradingName = () => {
    return (
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
          />
        </div>
      </div>
    );
  };

  const BusinessDO = () => {
    return (
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
    );
  };

  const LastYearProfit = () => {
    return (
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
            value={lastProfit}
            onChange={(e) => setLastProfit(e.target.value)}
            className="rounded-r-lg p-2 w-full  px-3 text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="0"
          ></input>
        </div>
      </div>
    );
  };

  const RegisteredPartnership = () => {
    return (
      <div>
        <div className={`${manualPartnership ? "hidden" : "block"}`}>
          <p className="font-medium text-[16px] mb-3">
            Registered partnership name
          </p>
          <div className="relative w-full">
            <input
              value={partnershipName}
              onChange={(e) => setPartnershipName(e.target.value)}
              type="search"
              id="search-dropdown"
              className="block p-2 w-full  px-3 text-sm text-gray-900 bg-gray-50 rounded-r-lg rounded-l-lg border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search..."
              required
            />
            <button
              type="submit"
              className="absolute top-0 right-0 p-2 text-sm font-medium text-white rounded-r-lg border border-gray-300 focus:outline-none"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
          <p className="text-sm font-thin py-2">
            Can't find the company?{" "}
            <a
              className="underline-offset-1"
              onClick={() => setManualPartnership(!manualPartnership)}
            >
              Enter it manually
            </a>
          </p>
        </div>
        <div className={`${manualPartnership ? "block" : "hidden"}`}>
          <div className="grid grid-cols-2 gap-2 w-full">
            <div>
              <p className="font-medium text-[16px] mb-3">Company Name</p>
              <input
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="p-2 w-full px-3 text-sm text-gray-900 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder=""
              ></input>
            </div>
            <div>
              <p className="font-medium text-[16px] mb-3">Company Number</p>
              <input
                value={companyNumber}
                onChange={(e) => setCompanyNumber(e.target.value)}
                className="p-2 w-full px-3 text-sm text-gray-900 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder=""
              ></input>
            </div>
          </div>
          <a onClick={() => setManualPartnership(!manualPartnership)}>
            Search for your company
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="flex justify-center">
      <div className="pt-10">
        <div className="my-5 box shadow-2xl p-[30px] text-[#0c2440] mb-10 bg-white rounded-2xl">
          <div className="text-2xl font-black text-[#0c2440]">
            Introduce your business
          </div>
          <div className="text-md font-bold pt-4">
            What type of company are you?
          </div>
          <div className="sm:flex rounded-xl py-3 font-medium">
            <button
              onClick={() => setComponentTarget(0)}
              className={`${
                componentTarget == 0
                  ? "bg-[#0c2440] text-white hover:bg-[#3c5490]"
                  : "bg-white text-[#0c2440] hover:bg-[#ddd]"
              } text-center border py-4 sm:w-1/5 w-full flex sm:block sm:rounded-tl-xl sm:rounded-bl-xl sm:rounded-t-none rounded-t-xl px-2`}
            >
              <div className="flex justify-center text-2xl">
                <i className="px-3 text-sm sm:text-2xl fa fa-briefcase"></i>
              </div>
              <div>Limited Company</div>
            </button>
            <button
              onClick={() => setComponentTarget(1)}
              className={`${
                componentTarget == 1
                  ? "bg-[#0c2440] text-white hover:bg-[#3c5490]"
                  : "bg-white text-[#0c2440] hover:bg-[#ddd]"
              } text-center border py-4 sm:w-1/5 w-full flex sm:block px-2`}
            >
              <div className="flex justify-center text-2xl">
                <i className="px-3 text-sm sm:text-2xl fa fa-user"></i>
              </div>
              <div>Sole Trader</div>
            </button>
            <button
              onClick={() => setComponentTarget(2)}
              className={`${
                componentTarget == 2
                  ? "bg-[#0c2440] text-white hover:bg-[#3c5490]"
                  : "bg-white text-[#0c2440] hover:bg-[#ddd]"
              } text-center border py-4 sm:w-1/5 w-full flex sm:block px-2`}
            >
              <div className="flex justify-center text-2xl">
                <i className="px-3 text-sm sm:text-2xl fa fa-users"></i>
              </div>
              <div>Ordinary Partnership</div>
            </button>
            <button
              onClick={() => setComponentTarget(3)}
              className={`${
                componentTarget == 3
                  ? "bg-[#0c2440] text-white hover:bg-[#3c5490]"
                  : "bg-white text-[#0c2440] hover:bg-[#ddd]"
              } text-center border py-4 sm:w-1/5 w-full flex sm:block px-2`}
            >
              <div className="flex justify-center text-2xl">
                <i className="px-3 text-sm sm:text-2xl llp-icon"></i>
              </div>
              <div>Limited Liability Partnership</div>
            </button>
            <button
              onClick={() => setComponentTarget(4)}
              className={`${
                componentTarget == 4
                  ? "bg-[#0c2440] text-white hover:bg-[#3c5490]"
                  : "bg-white text-[#0c2440] hover:bg-[#ddd]"
              } text-center border py-4 sm:w-1/5 w-full flex sm:block sm:rounded-tr-xl sm:rounded-br-xl sm:rounded-b-none rounded-b-xl px-2`}
            >
              <div className="flex justify-center text-2xl">
                <i className="px-3 text-sm sm:text-2xl fa fa-list-ul"></i>
              </div>
              <div>Other</div>
            </button>
          </div>
        </div>
        <div className="box shadow-2xl py-10 px-10 text-[#0c2440] bg-white rounded-2xl">
          <div className={`${componentTarget == 0 ? "block" : "hidden"}`}>
            <LimitedCompany
              setCompanyName={setCompanyName}
              setCompanyNumber={setCompanyNumber}
              companyNumber={companyNumber}
              companyName={companyName}
              setStartYear={setStartYear}
              startYear={startYear}
              setStartMonth={setStartMonth}
              startMonth={startMonth}
              setWebSite={setWebSite}
              website={website}
              setTurnover={setTurnover}
              turnover={turnover}
              setOnlineRevenue={setOnlineRevenue}
              onlineRevenue={onlineRevenue}
              setVATregistered={setVATregistered}
              VATregistered={VATregistered}
              tooltip={tooltip}
              monthOptions={monthOptions}
              onlinesales={onlinesales}
              customStyle={customStyle}
            />
          </div>
          <div className={`${componentTarget == 1 || componentTarget == 2 || componentTarget == 4 ? "block" : "hidden"}`}
          >
            <SoleTrader
              setTradingName={setTradingName}
              tradingName={tradingName}
              setBusinessIndustry={setBusinessIndustry}
              businessIndustry={businessIndustry}
              setWebSite={setWebSite}
              website={website}
              setStartYear={setStartYear}
              startYear={startYear}
              setStartMonth={setStartMonth}
              startMonth={startMonth}
              setTurnover={setTurnover}
              turnover={turnover}
              setLastProfit={setLastProfit}
              lastProfit={lastProfit}
              setOnlineRevenue={setOnlineRevenue}
              onlineRevenue={onlineRevenue}
              setVATregistered={setVATregistered}
              VATregistered={VATregistered}
              businessindustrylist={businessindustrylist}
              tooltip={tooltip}
              monthOptions={monthOptions}
              onlinesales={onlinesales}
              customStyle={customStyle}
            />
          </div>
          {/* <div className={`${componentTarget == 2 ? "block" : "hidden"}`}>
            <OrdinaryPartnership
              TradingName={TradingName}
              BusinessDO={BusinessDO}
              WebSite={WebSite}
              BusinessStartDay={BusinessStartDay}
              LastMonthturnor={LastMonthturnor}
              LastYearProfit={LastYearProfit}
              HaveOnlineSales={HaveOnlineSales}
              IsVAT={IsVAT}
              // setTradingName={setTradingName}
              // tradingName={tradingName}
              // setBusinessIndustry={setBusinessIndustry}
              // businessIndustry={businessIndustry}
              // setWebSite={setWebSite}
              // website={website}
              // setStartYear={setStartYear}
              // startYear={startYear}
              // setStartMonth={setStartMonth}
              // startMonth={startMonth}
              // setTurnover={setTurnover}
              // turnover={turnover}
              // setLastProfit={setLastProfit}
              // lastProfit={lastProfit}
              // setOnlineRevenue={setOnlineRevenue}
              // onlineRevenue={onlineRevenue}
              // setVATregistered={setVATregistered}
              // VATregistered={VATregistered}
            />
          </div> */}
          <div className={`${componentTarget == 3 ? "block" : "hidden"}`}>
            <LimitedLiabilityPartnership
              setCompanyName={setCompanyName}
              setCompanyNumber={setCompanyNumber}
              companyNumber={companyNumber}
              companyName={companyName}
              setStartYear={setStartYear}
              startYear={startYear}
              setStartMonth={setStartMonth}
              startMonth={startMonth}
              setWebSite={setWebSite}
              website={website}
              setTurnover={setTurnover}
              turnover={turnover}
              setOnlineRevenue={setOnlineRevenue}
              onlineRevenue={onlineRevenue}
              setVATregistered={setVATregistered}
              VATregistered={VATregistered}
              tooltip={tooltip}
              monthOptions={monthOptions}
              onlinesales={onlinesales}
              customStyle={customStyle}
            />
          </div>
          {/* <div className={`${componentTarget == 4 ? "block" : "hidden"}`}>
            <Other
              TradingName={TradingName}
              BusinessDO={BusinessDO}
              WebSite={WebSite}
              BusinessStartDay={BusinessStartDay}
              LastMonthturnor={LastMonthturnor}
              LastYearProfit={LastYearProfit}
              HaveOnlineSales={HaveOnlineSales}
              IsVAT={IsVAT}
              // setTradingName={setTradingName}
              // tradingName={tradingName}
              // setBusinessIndustry={setBusinessIndustry}
              // businessIndustry={businessIndustry}
              // setWebSite={setWebSite}
              // website={website}
              // setStartYear={setStartYear}
              // startYear={startYear}
              // setStartMonth={setStartMonth}
              // startMonth={startMonth}
              // setTurnover={setTurnover}
              // turnover={turnover}
              // setLastProfit={setLastProfit}
              // lastProfit={lastProfit}
              // setOnlineRevenue={setOnlineRevenue}
              // onlineRevenue={onlineRevenue}
              // setVATregistered={setVATregistered}
              // VATregistered={VATregistered}
            />
          </div> */}
        </div>
        <div>
          <p className="text-[#0c2440] font-bold text-sm text-center py-5">
            Applying won't affect your credit score
          </p>
          <div className="flex justify-center">
            {/* <Link to={"/personaldetail"}> */}
            <button
              className="bg-[#0c2440] text-white py-2 px-4 rounded-lg"
              onClick={() => AddProcessStep()}
            >
              <p className="font-medium text-base">
                Next, add your personal details
              </p>
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
