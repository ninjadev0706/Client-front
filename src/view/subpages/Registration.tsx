import React, { useEffect, useState, useContext, ReactNode } from "react";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import Select from "react-select";

import LimitedCompany from "../../components/registrationcomponents/LimitedCompany";
import SoleTrader from "../../components/registrationcomponents/SoleTrader";
import OrdinaryPartnership from "../../components/registrationcomponents/OrdinaryPartnership";
import LimitedLiabilityPartnership from "../../components/registrationcomponents/LimitedLiabilityPartnership";
import Other from "../../components/registrationcomponents/Other";

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
  const onlineRevenuelist = [
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

  const [manualCompany, setManualCompany] = useState(true);
  const [manualPartnership, setManualPartnership] = useState(false);

  const CheckToNext = () => {
    if(startYear&&startMonth&&lastProfit&&turnover) {
      AddProcessStep();
    }
    else{
      return false;
    }
  }

  return (
    <div className="flex justify-center">
      <div className="pt-10 mb-20 mx-2 md:mx-10 lg:mx-40">
        <div className="my-5 box shadow-2xl p-[30px] text-[#0c2440] mb-10 bg-white rounded-2xl">
          <div className="text-2xl font-black text-[#0c2440]">
            Introduce your business
          </div>
          <div className="text-md font-bold pt-4">
            What type of company are you?
          </div>
          <div className="sm:flex rounded-xl py-3 font-medium">
            {/* <button
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
            </button> */}
            {/* <button
              onClick={() => setComponentTarget(1)}
              className={`${
                componentTarget == 1
                  ? "bg-[#0c2440] text-white hover:bg-[#3c5490]"
                  : "bg-white text-[#0c2440] hover:bg-[#ddd]"
              } text-center border py-4 sm:w-6/12 w-full flex sm:block sm:rounded-tl-xl sm:rounded-bl-xl sm:rounded-t-none rounded-t-xl px-2`}
            >
              <div className="flex justify-center text-2xl">
                <i className="px-3 text-sm sm:text-2xl fa fa-user"></i>
              </div>
              <div>Sole Trader</div>
            </button> */}
            {/* <button
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
              } text-center border py-4 sm:w-6/12 w-full flex sm:block sm:rounded-tr-xl sm:rounded-br-xl sm:rounded-b-none rounded-b-xl px-2`}
            >
              <div className="flex justify-center text-2xl">
                <i className="px-3 text-sm sm:text-2xl fa fa-list-ul"></i>
              </div>
              <div>Other</div>
            </button> */}
          </div>
        </div>
        <div className="box shadow-2xl py-10 px-10 text-[#0c2440] bg-white rounded-2xl">
          {/* <div className={`${componentTarget == 0 ? "block" : "hidden"}`}>
            <LimitedCompany
              setTradingName={setTradingName}
              tradingName={tradingName}
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
              // setOnlineRevenue={setOnlineRevenue}
              // onlineRevenue={onlineRevenue}
              setOnlineRevenue={setOnlineRevenue}
              onlineRevenue={onlineRevenue}
              onlineRevenuelist={onlineRevenuelist}
              setVATregistered={setVATregistered}
              VATregistered={VATregistered}
              tooltip={tooltip}
              monthOptions={monthOptions}
              customStyle={customStyle}
            />
          </div> */}
          {/* <div  className={`${componentTarget == 1 ? "block" : "hidden"}`}>
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
              onlineRevenuelist={onlineRevenuelist}
              setVATregistered={setVATregistered}
              VATregistered={VATregistered}
              businessindustrylist={businessindustrylist}
              tooltip={tooltip}
              monthOptions={monthOptions}
              customStyle={customStyle}
            />
          </div> */}
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
              // onlineRevenuelist={onlineRevenuelist}
            />
          </div> */}
          {/* <div className={`${componentTarget == 3 ? "block" : "hidden"}`}>
            <LimitedLiabilityPartnership
              setCompanyName={setCompanyName}
              setCompanyNumber={setCompanyNumber}
              companyNumber={companyNumber}
              companyName={companyName}
              setTradingName={setTradingName}
              tradingName={tradingName}
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
              onlineRevenuelist={onlineRevenuelist}
              setVATregistered={setVATregistered}
              VATregistered={VATregistered}
              tooltip={tooltip}
              monthOptions={monthOptions}
              customStyle={customStyle}
            />
          </div> */}
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
              // onlineRevenuelist={onlineRevenuelist}
            />
          </div> */}
        </div>
        <div>
          <p className="text-[#0c2440] font-bold text-sm text-center py-5">
            Applying won't affect your credit score
          </p>
          <div className="flex justify-center">
            <button
              className="bg-[#0c2440] text-white py-2 px-4 rounded-lg"
              onClick={() => CheckToNext()}
            >
              <p className="font-medium text-base">
                Next, add your personal details
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
