import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import Tippy from "@tippyjs/react";

const customStyle = {
  control: (provided: any, state: any) => ({
    border: "none",
    display: "flex",
  }),
};

const PersonalDetail = (props: any) => {
  const {
    AddProcessStep,
    BackProcessStep,
    setNameHead,
    namehead,
    setFirstName,
    firstName,
    setLastName,
    lastName,
    setBirthdd,
    birthdd,
    setBirthmm,
    birthmm,
    setBirthyy,
    birthyy,
    setHomeaddress,
    homeaddress,
    setAddressline1,
    addressline1,
    setAddressline2,
    addressline2,
    setAddcity,
    addcity,
    setPostcode,
    postcode,
    setCountry,
    country,
    setResidential,
    residential,
    setShareholder,
    shareholder,
    setMainphone,
    mainphone,
    setAddphone,
    addphone,
    setDependent,
    dependent,
    setNoBusiness,
    nobusiness,
    setPartnersIncome,
    partnersIncome,
    setPersonalExpense,
    personalexpense,
    componentTarget,
  } = props;

  const navigate = useNavigate();
  const [nonebusinessIncome, setNonebusinessIncome] = useState(1);
  const [maddress, setMaddress] = useState(0);
  const [costpartner, setCostPartner] = useState(1);
  const [checkbox, setCheckbox] = useState(false);

  const tooltip = {
    address:
      "We need your home address in order to run credit and identity checks",
    phone:
      "We’ll use your phone number to contact you about your application. Don’t worry – it won’t be shared with anyone else.",
    personalincome:
      "We need to collect data on your income and expenses outside your business in order to run legally required affordability checks",
    mortgage:
      "Given you operate as a sole trader, we need to understand your personal income and expenses to ensure that repayments are affordable.",
    experience:
      "We need to collect data on your income and expenses outside your business in order to run legally required affordability checks.",
    sharecosts:
      "This helps us to understand if you are solely responsible for your dependents or whether the costs are shared between yourself and a partner. This can affect our affordability calculations.",
    personalexpense:
      "Given you operate as a sole trader, we need to understand your personal income and expenses to ensure that repayments are affordable.",
  };
  const nameOptions = [
    { value: "Mr", label: "Mr" },
    { value: "Ms", label: "Ms" },
    { value: "Mrs", label: "Mrs" },
    { value: "Miss", label: "Miss" },
    { value: "Doctor", label: "Doctor" },
    { value: "Professon", label: "Professon" },
    { value: "Sir", label: "Sir" },
    { value: "Load", label: "Load" },
    { value: "Lady", label: "Lady" },
    { value: "Baron", label: "Baron" },
    { value: "Baroness", label: "Baroness" },
    { value: "Reverend", label: "Reverend" },
  ];
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
  const ResidentialOptions = [
    { value: "Tenant", label: "Tenant" },
    {
      value: "Owner occupier (with mortgage)",
      label: "Owner occupier (with mortgage)",
    },
    {
      value: "Owner occupier (no mortgage)",
      label: "Owner occupier (no mortgage)",
    },
    {
      value: "Living rent free (e.g. with parents)",
      label: "Living rent free (e.g. with parents)",
    },
  ];
  const countries = [
    { value: "United Kingdom", label: "United Kingdom" },
    { value: "Germany", label: "Germany" },
    { value: "Poland", label: "Poland" },
    { value: "Spain", label: "Spain" },
    { value: "Other", label: "Other" },
  ];

  const SendPost = () => {
    if (!checkbox) {
      return;
    } else {
      AddProcessStep();
    }
  };

  return (
    <div className="flex justify-center">
      <div className="pt-10 w-[660px] md:w-[811px]">
        <div
          onClick={() => BackProcessStep()}
          className="flex text-sm items-center pl-2 text-[#0c2440] font-medium"
        >
          <img src="download.svg" className="h-2 w-2 mr-2" alt="_"></img>Back
        </div>
        <div className="text-2xl font-bold text-[#0c2440]">
          Tell us about yourself
        </div>

        <div className="my-5 box shadow-2xl p-[30px] text-[#0c2440] mb-10 bg-white rounded-2xl">
          <div className="rounded-lg bg-white pt-10">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <p className="font-medium text-[16px] mb-3">Full name</p>
                <div className="flex rounded-lg">
                  <div className="border border-gray-300 rounded-l-lg w-3/12">
                    <Select
                      options={nameOptions}
                      styles={customStyle}
                      onChange={(namehead) => setNameHead(namehead)}
                    />
                  </div>
                  <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="block p-2 w-full w-5/12  px-3 text-sm border border-gray-300 focus:outline-none"
                    placeholder="First name"
                  ></input>
                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="rounded-r-lg block p-2 w-full w-4/12  px-3 text-sm border border-gray-300 focus:outline-none"
                    placeholder="Last name"
                  ></input>
                </div>
              </div>
              <div>
                <p className="font-medium text-[16px] mb-3">Date of birth</p>
                <div className="flex rounded-lg">
                  <input
                    type="number"
                    min={0}
                    max={31}
                    value={birthdd}
                    onChange={(e) => setBirthdd(e.target.value)}
                    className="rounded-l-lg block w-full p-2 pl-3 pr-16 text-sm border border-gray-300 focus:outline-none"
                    placeholder="DD"
                  ></input>
                  <div className="border w-full border-gray-300">
                    <Select
                      options={monthOptions}
                      styles={customStyle}
                      onChange={(birthmm) => setBirthmm(birthmm)}
                      placeholder="Month"
                    />
                  </div>
                  <input
                    type="number"
                    min={1900}
                    max={3000}
                    value={birthyy}
                    onChange={(e) => setBirthyy(e.target.value)}
                    className="rounded-r-lg block w-full p-2 pl-3 pr-16 text-sm border border-gray-300 focus:outline-none"
                    placeholder="Last name"
                  ></input>
                </div>
              </div>
              <div className={`${maddress ? "hidden" : "block"}`}>
                <div className={`flex items-center mb-3`}>
                  <p className="font-medium text-[16px]">Home address</p>
                  <Tippy interactive content={tooltip.address}>
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
                <div className="relative w-full mb-2">
                  <input
                    value={homeaddress}
                    onChange={(e) => setHomeaddress(e.target.value)}
                    type="search"
                    id="search-dropdown"
                    className="block p-2 w-full pl-3 pr-16 text-sm rounded-r-lg rounded-l-lg border border-gray-300 focus:outline-none"
                    placeholder="Search..."
                    required
                  />
                  <button
                    type="submit"
                    className="absolute top-0 right-0 py-2 px-2 text-sm font-medium text-black rounded-r-lg border border-gray-300 focus:ring-4 focus:outline-none"
                  >
                    Search
                  </button>
                </div>
                <a className="text-sm py-2" onClick={() => setMaddress(1)}>
                  Enter address manually
                </a>
              </div>

              <div className={`${maddress ? "block" : "hidden"}`}>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="font-medium text-[16px] mb-3">
                      Address line 1
                    </p>
                    <input
                      value={addressline1}
                      onChange={(e) => setAddressline1(e.target.value)}
                      type="search"
                      id="search-dropdown"
                      className="block p-2 w-full pl-3 pr-16 text-sm rounded-r-lg rounded-l-lg border border-gray-300 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <p className="font-medium text-[16px] mb-3">
                      Address line 2
                    </p>
                    <input
                      value={addressline2}
                      onChange={(e) => setAddressline2(e.target.value)}
                      type="search"
                      id="search-dropdown"
                      className="block p-2 w-full pl-3 pr-16 text-sm rounded-r-lg rounded-l-lg border border-gray-300 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <p className="font-medium text-[16px] mb-3">Town / city</p>
                    <input
                      value={addcity}
                      onChange={(e) => setAddcity(e.target.value)}
                      type="search"
                      id="search-dropdown"
                      className="block p-2 w-full pl-3 pr-16 text-sm rounded-r-lg rounded-l-lg border border-gray-300 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <p className="font-medium text-[16px] mb-3">Postcode</p>
                    <input
                      value={postcode}
                      onChange={(e) => setPostcode(e.target.value)}
                      type="search"
                      id="search-dropdown"
                      className="block p-2 w-full pl-3 pr-16 text-sm rounded-r-lg rounded-l-lg border border-gray-300 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <p className="font-medium text-[16px] mb-3">Country</p>
                    <div className="border border-gray-300 rounded-lg">
                      <Select
                        options={countries}
                        styles={customStyle}
                        onChange={(country) => setCountry(country)}
                      />
                    </div>
                  </div>
                </div>
                <a className="text-sm py-2" onClick={() => setMaddress(0)}>
                  Search for my address
                </a>
              </div>

              <div>
                <p className="font-medium text-[16px] mb-3">
                  Residential status
                </p>
                <div className="border border-gray-300 rounded-lg">
                  <Select
                    options={ResidentialOptions}
                    styles={customStyle}
                    onChange={(residential) => setResidential(residential)}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center mb-3">
                  <p className="font-medium text-[16px]">Main phone number</p>
                  <Tippy interactive content={tooltip.phone}>
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
                <div className="relative w-full mb-2">
                  <input
                    value={mainphone}
                    onChange={(e) => setMainphone(e.target.value)}
                    type="number"
                    className="block p-2 w-full pl-3 text-sm rounded-r-lg rounded-l-lg border border-gray-300 focus:outline-none"
                    placeholder="Search..."
                    required
                  />
                </div>
              </div>
              <div>
                <div className="font-medium text-[16px] mb-3 flex">
                  Additional phone number
                  <p className="pl-2 font-light">(optional)</p>
                </div>
                <div className="relative w-full">
                  <input
                    type="number"
                    value={addphone}
                    onChange={(e) => setAddphone(e.target.value)}
                    className="rounded-lg block p-2 w-full pl-3 pr-16 text-sm border border-gray-300 focus:outline-none"
                  ></input>
                </div>
              </div>
            </div>
            <div className={`flex items-center my-10 `}>
              <p className="text-[16px]">YOUR PERSONAL INCOME AND EXPENSES</p>
              <Tippy interactive content={tooltip.experience}>
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
            <div
              className={`${
                componentTarget == 0 || componentTarget == 3
                  ? "hidden"
                  : "block"
              } mb-10`}
            >
              <p className="font-medium text-[16px] mb-3">
                How many dependents do you have?
              </p>
              <div className="w-full flex">
                <button
                  className="p-2 border text-sm rounded-l-lg"
                  onClick={() => setDependent(0)}
                >
                  0
                </button>
                <button
                  className="p-2 border text-sm"
                  onClick={() => setDependent(1)}
                >
                  1
                </button>
                <button
                  className="p-2 border text-sm"
                  onClick={() => setDependent(2)}
                >
                  2
                </button>
                <button
                  className="p-2 border text-sm"
                  onClick={() => setDependent(3)}
                >
                  3
                </button>
                <button
                  className="p-2 border text-sm"
                  onClick={() => setDependent(4)}
                >
                  4
                </button>
                <button
                  className="p-2 border text-sm"
                  onClick={() => setDependent(5)}
                >
                  5
                </button>
                <button
                  className="p-2 border text-sm rounded-r-lg"
                  onClick={() => setDependent(6)}
                >
                  6 or more
                </button>
              </div>
              <p>
                Include any children or other family members that are
                financially dependent on you
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div
                className={`${
                  componentTarget == 0 || componentTarget == 3
                    ? "hidden"
                    : "block"
                }`}
              >
                <p className="font-medium text-[16px] mb-3">
                  Do you have any non-business income?
                </p>
                <div className="flex">
                  <button
                    onClick={() => setNonebusinessIncome(1)}
                    className={`${
                      nonebusinessIncome == 1
                        ? "bg-[#0c2440] text-white hover:bg-[#3c5490]"
                        : "bg-white text-[#0c2440] hover:bg-[#ddd]"
                    } w-6/12 border rounded-l-lg block p-2 w-full  text-sm border-gray-300`}
                  >
                    <i className="fa fa-check"> Yes</i>
                  </button>
                  <button
                    onClick={() => setNonebusinessIncome(0)}
                    className={`${
                      nonebusinessIncome == 0
                        ? "bg-[#0c2440] text-white hover:bg-[#3c5490]"
                        : "bg-white text-[#0c2440] hover:bg-[#ddd]"
                    } w-6/12 border rounded-r-lg block p-2 w-full  text-sm border-gray-300`}
                  >
                    <i className="fa fa-times"> No</i>
                  </button>
                </div>
                <p>
                  e.g. Part-time job, investments, child support or a pension
                </p>
              </div>

              <div
                className={`${
                  componentTarget !== 0 && componentTarget !== 3
                    ? "hidden"
                    : "block"
                }`}
              >
                <p className="font-medium text-[16px] mb-3">
                  Are you a shareholder of the company?
                </p>
                <div className="flex">
                  <button
                    onClick={() => setShareholder(true)}
                    className={`${
                      shareholder == true
                        ? "bg-[#0c2440] text-white hover:bg-[#3c5490]"
                        : "bg-white text-[#0c2440] hover:bg-[#ddd]"
                    } w-6/12 border rounded-l-lg block p-2 w-full  text-sm border-gray-300`}
                  >
                    <i className="fa fa-check"> Yes</i>
                  </button>
                  <button
                    onClick={() => setShareholder(false)}
                    className={`${
                      shareholder == false
                        ? "bg-[#0c2440] text-white hover:bg-[#3c5490]"
                        : "bg-white text-[#0c2440] hover:bg-[#ddd]"
                    } w-6/12 border rounded-r-lg block p-2 w-full  text-sm border-gray-300`}
                  >
                    <i className="fa fa-times"> No</i>
                  </button>
                </div>
              </div>

              <div
                className={`${
                  componentTarget == 0 || componentTarget == 3
                    ? "hidden"
                    : "block"
                }`}
              >
                <div className="flex items-center mb-3">
                  <p className="font-medium text-[16px]">
                    Your non-business income (after tax)
                  </p>
                </div>
                <div className="relative w-full mb-2">
                  <button className="absolute top-0 left-0 py-2 px-2 text-sm font-medium text-black rounded-l-lg border border-gray-300 focus:outline-none">
                    £
                  </button>
                  <input
                    value={nobusiness}
                    onChange={(e) => setNoBusiness(e.target.value)}
                    className="block py-2 w-full pl-8 pr-16 text-sm rounded-r-lg rounded-l-lg border border-gray-300 focus:outline-none"
                    disabled={!nonebusinessIncome}
                    pattern="[0-9]"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute top-0 right-0 py-2 px-2 text-sm font-medium text-black rounded-r-lg border border-gray-300 focus:outline-none"
                  >
                    per month
                  </button>
                </div>
              </div>
              <div
                className={`${
                  componentTarget == 0 || componentTarget == 3
                    ? "hidden"
                    : "block"
                }`}
              >
                <div className="flex items-center mb-3">
                  <p className="font-medium text-[16px]">
                    Other personal expenses
                  </p>
                  <Tippy interactive content={tooltip.personalexpense}>
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
                <div className="relative w-full mb-2">
                  <button className="absolute top-0 left-0 py-2 px-2 text-sm font-medium text-black rounded-l-lg border border-gray-300 focus:ring-4 focus:outline-none">
                    £
                  </button>
                  <input
                    type="number"
                    min={0}
                    value={personalexpense}
                    onChange={(e) => setPersonalExpense(e.target.value)}
                    className="block py-2 w-full pl-8 pr-16 text-sm rounded-r-lg rounded-l-lg border border-gray-300 focus:outline-none"
                    placeholder="0"
                  />
                  <button
                    type="submit"
                    className="absolute top-0 right-0 py-2 px-2 text-sm font-medium text-black rounded-r-lg border border-gray-300 focus:ring-4 focus:outline-none"
                  >
                    Per month
                  </button>
                </div>
                <p>
                  e.g. Food, transport, utilities and interest on personal loans
                </p>
              </div>
            </div>
            <div className="flex mt-10">
              <div className="flex items-center h-5 mr-3">
                <input
                  type="checkbox"
                  value=""
                  onClick={() => setCheckbox(!checkbox)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div>
                <b>Here’s how we use your personal information</b> and that of
                your company directors, beneficial owners or guarantors. (Please
                make them aware of this before you provide their information to
                us)
                <ul className="p-3">
                  <li>
                    •{" "}
                    <b>
                      We’ll share it with credit reference agencies to run soft
                      credit and identity checks
                    </b>{" "}
                    - this won't affect your (or their) personal credit scores
                    (note: we may ask you to provide a personal guarantee, so
                    we’ll only conduct credit checks on you and any other
                    guarantors)
                  </li>
                  <li>
                    • <b>We’ll share it with fraud prevention agencies</b> - if
                    we do spot any fraud, you could be refused services,
                    finance, or employment.
                  </li>
                  <li>
                    • <b>We might record your calls with us.</b>
                  </li>
                </ul>
                <p>
                  If you’d like to find out more, check our{" "}
                  <a>privacy policy.</a>
                </p>
                <p>iwoca Ltd is the data controller.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button
            className="py-3 px-4 rounded-lg text-white font-medium bg-[#0c2440]"
            onClick={() => SendPost()}
          >
            You're nearly there! Just one more step.
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetail;
