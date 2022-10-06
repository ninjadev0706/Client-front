import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

import LimitedCompany from "../components/registrationcomponents/LimitedCompany";
import SoleTrader from "../components/registrationcomponents/SoleTrader";
import OrdinaryPartnership from "../components/registrationcomponents/OrdinaryPartnership";
import LimitedLiabilityPartnership from "../components/registrationcomponents/LimitedLiabilityPartnership";
import Other from "../components/registrationcomponents/Other";

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
  } = props;
  
  // const UserMail = useContext(GlobalUserMail);

  const [componentTarget, setComponentTarget] = useState(0);

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
          <div className="flex rounded-xl py-3 font-medium">
            <button
              onClick={() => setComponentTarget(0)}
              className={`${
                componentTarget == 0
                  ? "bg-[#0c2440] text-white hover:bg-[#3c5490]"
                  : "bg-white text-[#0c2440] hover:bg-[#ddd]"
              } text-center border py-4 w-1/5 rounded-tl-xl rounded-bl-xl px-2`}
            >
              <div className="flex justify-center text-2xl">
                <i className="fa fa-briefcase"></i>
              </div>
              <div>Limited Company</div>
            </button>
            <button
              onClick={() => setComponentTarget(1)}
              className={`${
                componentTarget == 1
                  ? "bg-[#0c2440] text-white hover:bg-[#3c5490]"
                  : "bg-white text-[#0c2440] hover:bg-[#ddd]"
              } text-center border py-4 w-1/5 px-2`}
            >
              <div className="flex justify-center text-2xl">
                <i className="fa fa-user"></i>
              </div>
              <div>Sole Trader</div>
            </button>
            <button
              onClick={() => setComponentTarget(2)}
              className={`${
                componentTarget == 2
                  ? "bg-[#0c2440] text-white hover:bg-[#3c5490]"
                  : "bg-white text-[#0c2440] hover:bg-[#ddd]"
              } text-center border py-4 w-1/5 px-2`}
            >
              <div className="flex justify-center text-2xl">
                <i className="fa fa-users"></i>
              </div>
              <div>Ordinary Partnership</div>
            </button>
            <button
              onClick={() => setComponentTarget(3)}
              className={`${
                componentTarget == 3
                  ? "bg-[#0c2440] text-white hover:bg-[#3c5490]"
                  : "bg-white text-[#0c2440] hover:bg-[#ddd]"
              } text-center border py-4 w-1/5 px-2`}
            >
              <div className="flex justify-center text-2xl">
                <i className="llp-icon"></i>
              </div>
              <div>Limited Liability Partnership</div>
            </button>
            <button
              onClick={() => setComponentTarget(4)}
              className={`${
                componentTarget == 4
                  ? "bg-[#0c2440] text-white hover:bg-[#3c5490]"
                  : "bg-white text-[#0c2440] hover:bg-[#ddd]"
              } text-center border py-4 w-1/5 rounded-tr-xl rounded-br-xl px-2`}
            >
              <div className="flex justify-center text-2xl">
                <i className="fa fa-list-ul"></i>
              </div>
              <div>Other</div>
            </button>
          </div>
        </div>
        <div className="box shadow-2xl py-10 px-10 text-[#0c2440] bg-white rounded-2xl">
          <div className={`${componentTarget == 0 ? "block" : "hidden"}`}>
            <LimitedCompany
              setCompanyName={setCompanyName}
              companyName={companyName}
              setCompanyNumber={setCompanyNumber}
              companyNumber={companyNumber}
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
            />
          </div>
          <div className={`${componentTarget == 1 ? "block" : "hidden"}`}>
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
            />
          </div>
          <div className={`${componentTarget == 2 ? "block" : "hidden"}`}>
            <OrdinaryPartnership
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
            />
          </div>
          <div className={`${componentTarget == 3 ? "block" : "hidden"}`}>
            <LimitedLiabilityPartnership
              setPartnershipName={setPartnershipName}
              partnershipName={partnershipName}
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
            />
          </div>
          <div className={`${componentTarget == 4 ? "block" : "hidden"}`}>
            <Other
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
            />
          </div>
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
