import React, { useEffect, useState } from "react";
import { Steps } from "rsuite";
import "./style.css";
import axios from "axios";
import { API_URL } from "../config";

import Header from "../components/Header";
import Registration from "./Registration";
import PersonalDetail from "./PersonalDetail";
import Proposal from "./Proposal";
import History from "./History";

const Sandbox = () => {
  const [processstep, setProcessStep] = useState(0);
  const [componentTarget, setComponentTarget] = useState(0);

  const [companyName, setCompanyName] = useState("");
  const [companyNumber, setCompanyNumber] = useState("");
  const [partnershipName, setPartnershipName] = useState("");
  const [tradingName, setTradingName] = useState("");
  const [businessIndustry, setBusinessIndustry] = useState("");
  const [startYear, setStartYear] = useState("");
  const [startMonth, setStartMonth] = useState("");
  const [website, setWebSite] = useState("");
  const [lastProfit, setLastProfit] = useState("");
  const [turnover, setTurnover] = useState("");
  const [onlineRevenue, setOnlineRevenue] = useState("");
  const [VATregistered, setVATregistered] = useState(1);

  const [namehead, setNameHead] = useState("Mr");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthdd, setBirthdd] = useState("");
  const [birthmm, setBirthmm] = useState("");
  const [birthyy, setBirthyy] = useState("");
  const [homeaddress, setHomeaddress] = useState("");
  const [addressline1, setAddressline1] = useState("");
  const [addressline2, setAddressline2] = useState("");
  const [addcity, setAddcity] = useState("");
  const [postcode, setPostcode] = useState("");
  const [country, setCountry] = useState("United Kingdom");
  const [residential, setResidential] = useState("Tanent");
  const [mainphone, setMainphone] = useState("");
  const [addphone, setAddphone] = useState("");
  const [dependent, setDependent] = useState(0);
  const [nobusiness, setNoBusiness] = useState(0);
  const [partnersIncome, setPartnersIncome] = useState(0);
  const [personalexpense, setPersonalExpense] = useState(0);
  const [shareholder, setShareholder] = useState(false);

  const AddProcessStep = async () => {
    setProcessStep(processstep + 1);
    if (processstep == 1) {
      await axios({
        method: "post",
        responseType: "json",
        url: API_URL + "/saveData",
        data: totaldata,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          alert(
            "You have submitted your request, once we have completed our checks we will approve your loan",
          );
        })
        .catch((err) => {
          alert("Something went to wrong.");
        });
    }
  };
  const BackProcessStep = () => {
    setProcessStep(processstep - 1);
  };

  const totaldata = {
    companyName: companyName,
    companyNumber: companyNumber,
    partnershipName: partnershipName,
    tradingName: tradingName,
    businessIndustry: businessIndustry,
    startYear: startYear,
    startMonth: startMonth,
    website: website,
    lastProfit: lastProfit,
    turnover: turnover,
    onlineRevenue: onlineRevenue,
    VATregistered: VATregistered,
    namehead: namehead,
    firstName: firstName,
    lastName: lastName,
    birthdd: birthdd,
    birthmm: birthmm,
    birthyy: birthyy,
    homeaddress: homeaddress,
    addressline1: addressline1,
    addressline2: addressline2,
    addcity: addcity,
    postcode: postcode,
    country: country,
    residential: residential,
    mainphone: mainphone,
    addphone: addphone,
    dependent: dependent,
    nobusiness: nobusiness,
    partnersIncome: partnersIncome,
    personalexpense: personalexpense,
    // shareholder: shareholder,
  };

  return (
    <div>
      <Header />
      <div>
        <div className="flex justify-center">
          <div className="lg:w-3/12 w-1/12"></div>
          <div className="progressStep my-10 lg:w-6/12 w-full items-center">
            <Steps current={processstep} currentStatus="process">
              {/* <Steps.Item title="Loan amount" /> */}
              <Steps.Item title="Business details" />
              <Steps.Item title="Personal details" />
              <Steps.Item title="Your offers" />
              <Steps.Item title="Trading history" />
            </Steps>
          </div>
          <div className="lg:w-3/12 w-1/12"></div>
        </div>

        <div className={`${processstep == 0 ? "block" : "hidden"}`}>
          <Registration
            AddProcessStep={AddProcessStep}
            BackProcessStep={BackProcessStep}
            setCompanyName={setCompanyName}
            companyName={companyName}
            setCompanyNumber={setCompanyNumber}
            companyNumber={companyNumber}
            setPartnershipName={setPartnershipName}
            partnershipName={partnershipName}
            setTradingName={setTradingName}
            tradingName={tradingName}
            setBusinessIndustry={setBusinessIndustry}
            businessIndustry={businessIndustry}
            setStartYear={setStartYear}
            startYear={startYear}
            setStartMonth={setStartMonth}
            startMonth={startMonth}
            setWebSite={setWebSite}
            website={website}
            setLastProfit={setLastProfit}
            lastProfit={lastProfit}
            setTurnover={setTurnover}
            turnover={turnover}
            setOnlineRevenue={setOnlineRevenue}
            onlineRevenue={onlineRevenue}
            setVATregistered={setVATregistered}
            VATregistered={VATregistered}
            setComponentTarget={setComponentTarget}
            componentTarget={componentTarget}
          />
        </div>
        <div className={`${processstep == 1 ? "block" : "hidden"}`}>
          <PersonalDetail
            AddProcessStep={AddProcessStep}
            BackProcessStep={BackProcessStep}
            setNameHead={setNameHead}
            namehead={namehead}
            setFirstName={setFirstName}
            firstName={firstName}
            setLastName={setLastName}
            lastName={lastName}
            setBirthdd={setBirthdd}
            birthdd={birthdd}
            setBirthmm={setBirthmm}
            birthmm={birthmm}
            setBirthyy={setBirthyy}
            birthyy={birthyy}
            setHomeaddress={setHomeaddress}
            homeaddress={homeaddress}
            setAddressline1={setAddressline1}
            addressline1={addressline1}
            setAddressline2={setAddressline2}
            addressline2={addressline2}
            setAddcity={setAddcity}
            addcity={addcity}
            setPostcode={setPostcode}
            postcode={postcode}
            setCountry={setCountry}
            country={country}
            setResidential={setResidential}
            residential={residential}
            setMainphone={setMainphone}
            mainphone={mainphone}
            setAddphone={setAddphone}
            addphone={addphone}
            setDependent={setDependent}
            dependent={dependent}
            setNoBusiness={setNoBusiness}
            nobusiness={nobusiness}
            setPartnersIncome={setPartnersIncome}
            partnersIncome={partnersIncome}
            setPersonalExpense={setPersonalExpense}
            personalexpense={personalexpense}
            setComponentTarget={setComponentTarget}
            componentTarget={componentTarget}
            setShareholder={setShareholder}
            shareholder={shareholder}
          />
        </div>
        <div className={`${processstep == 2 ? "block" : "hidden"}`}>
          <Proposal
            AddProcessStep={AddProcessStep}
            BackProcessStep={BackProcessStep}
          />
        </div>
        <div className={`${processstep == 3 ? "block" : "hidden"}`}>
          <History
            setProcessStep={setProcessStep}
            BackProcessStep={BackProcessStep}
          />
        </div>
      </div>
    </div>
  );
};

export default Sandbox;
