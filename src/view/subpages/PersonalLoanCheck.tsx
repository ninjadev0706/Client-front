import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import Tippy from "@tippyjs/react";
import axios from "axios";
import { API_URL } from "../../config";

const PersonalLoanCheck = (props: any) => {
  const { AddProcessStep } = props;
  const [namehead, setNameHead] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surName, setSurName] = useState("");
  const [birthDaylist, setBirthDaylist] = useState<number[]>([]);
  const [birthDay, setBirthDay] = useState(1);
  const [birthMonth, setBirthMonth] = useState("");
  const [birthYear, setBirthYear] = useState<number>();
  const [usermail, setUsermailReg] = useState("");
  const [confirmemailaddress, setConfirmEmailaddress] = useState("");
  const [houseName, setHouseName] = useState("");
  const [postcode, setPostCode] = useState("");
  const [occupation, setOccupation] = useState("");
  const [purpose, setPurpose] = useState("");
  const [marital, setMarital] = useState("");
  const [dependents, setDependents] = useState("");
  const [GAIC, setGAIC] = useState("");
  const [mortgagepayment, setMortgagePayment] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  var amount: any = localStorage.getItem("loan_amount");
  useEffect(() => {
    setLoanAmount(amount)
  }, [amount])

  const [isRequired, setIsRequired] = useState(false);
  const [validateresult, setValidateResult] = useState(true);
  const [dayslist, setDaysList] = useState([]);
  const [dayoptions, setDayOptions] = useState([]);

  let dayOptions: any = [];

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
  const Occupationlist = [
    { value: null, label: "please select..." },
    { value: "Employed", label: "Employed" },
    {
      value: "Self Employed Professional",
      label: "Self Employed Professional",
    },
    { value: "Student", label: "Student" },
    { value: "Houseperson", label: "Houseperson" },
    { value: "Retired", label: "Retired" },
    { value: "Part Time Employed", label: "Part Time Employed" },
    { value: "Temporary Employment", label: "Temporary Employment" },
    { value: "Unemployed", label: "Unemployed" },
    { value: "Other", label: "Other" },
  ];
  const Purposelist = [
    { value: null, label: "please select..." },
    { value: "Vehicle Purchase", label: "Vehicle Purchase" },
    { value: "Home Improvement", label: "Home Improvement" },
    { value: "Furniture and Electrical", label: "Furniture and Electrical" },
    { value: "Wedding", label: "Wedding" },
    { value: "Medical", label: "Medical" },
    { value: "Holiday", label: "Holiday" },
    { value: "Debt Consolidation", label: "Debt Consolidation" },
  ];
  const Maritallist = [
    { value: null, label: "please select..." },
    { value: "Married", label: "Married" },
    { value: "Single", label: "Single" },
    { value: "Divorced", label: "Divorced" },
    { value: "Separated", label: "Separated" },
    { value: "Widowed", label: "Widowed" },
    { value: "CoHabiting", label: "CoHabiting" },
  ];
  const Dependentslist = [
    { value: null, label: "please select..." },
    { value: "0", label: "0" },
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3 or more", label: "3 or more" },
  ];
  const monthOptions = [
    { day: "31", value: "January", label: "January" },
    { day: "28", value: "February", label: "February" },
    { day: "31", value: "March", label: "March" },
    { day: "30", value: "April", label: "April" },
    { day: "31", value: "May", label: "May" },
    { day: "30", value: "June", label: "June" },
    { day: "31", value: "July", label: "July" },
    { day: "31", value: "August", label: "August" },
    { day: "30", value: "September", label: "September" },
    { day: "31", value: "October", label: "October" },
    { day: "30", value: "November", label: "November" },
    { day: "31", value: "December", label: "December" },
  ];

  const customStyle = {
    control: (provided: any, state: any) => ({
      border: "none",
      display: "flex",
    }),
  };

  const range = (min: number, max: number) => {
    var len = max - min;
    var arr = new Array(len);
    for (var i = 0; i < len; i++) {
      arr[i] = i + min + 1;
    }
    return arr;
  };

  const disrange = (min: number, max: number) => {
    var len = max - min;
    var arr = new Array(len);
    for (var i = 0; i < len; i++) {
      arr[i] = max - i;
    }
    return arr;
  };

  const yearOptions: any = [
    disrange(1950, 2050).map((year) => {
      return { value: year, label: year };
    }),
  ];

  const setBirth = (birthMonth: any) => {
    setBirthMonth(birthMonth.value);
    const dayList = range(0, birthMonth.day);
    dayOptions = dayList.map((day) => {
      return { value: day, label: day };
    });
    setBirthDaylist(dayOptions);
  };

  const Validatemailtype = () => {
    if (
      usermail
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        )
    ) {
      setValidateResult(true);
      return true;
    } else {
      setValidateResult(false);
      return false;
    }
  };

  const findAddressByPC = (postcode: string) => {
    alert(postcode);
  };

  const totaldata = {
    namehead: namehead,
    firstName: firstName,
    surName: surName,
    birthDay: birthDay,
    birthMonth: birthMonth,
    birthYear: birthYear,
    usermail: usermail,
    houseName: houseName,
    postcode: postcode,
    occupation: occupation,
    purpose: purpose,
    marital: marital,
    dependents: dependents,
    GAIC: GAIC,
    mortgagepayment: mortgagepayment,
    loanAmount: loanAmount
  };

  const CheckToNext = async () => {
    if (
      firstName &&
      surName &&
      usermail &&
      confirmemailaddress &&
      occupation &&
      purpose &&
      marital &&
      dependents &&
      GAIC &&
      mortgagepayment
    ) {
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
      AddProcessStep();
    } else {
      setIsRequired(true);
      return false;
    }
  };

  return (
    <div className="flex justify-center">
      <div className="pt-10 mb-20">
        <div className="box shadow-2xl py-10 px-10 text-[#0c2440] bg-white rounded-2xl xl:mx-[240px] lg:mx-[160px] md:mx-[100px] sm:mx-10 mx-2">
          <div className="text-4xl font-black text-[#0c2440]">
            Introduce your business
          </div>
          <div className="text-xl font-bold pt-4 mb-10">
            What type of company are you?
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <p className="text-[18px] mb-3">Title *</p>
              <div className="flex rounded-lg">
                <div className={`border border-gray-300 rounded-lg w-full`}>
                  <Select
                    options={nameOptions}
                    styles={customStyle}
                    onChange={(namehead: any) => setNameHead(namehead.value)}
                    placeholder="Please Select..."
                  />
                </div>
              </div>
              {!namehead && isRequired && (
                <div className="w-full text-red-500 px-2 py-0.5">
                  Input title
                </div>
              )}
            </div>

            <div>
              <p className="text-[18px] mb-3">Date of birth *</p>
              <div className="flex">
                <div className="border rounded-l-lg border-gray-300 w-6/12">
                  <Select
                    options={birthDaylist}
                    styles={customStyle}
                    onChange={(birthDay: any) => setBirthDay(birthDay.value)}
                    placeholder="Day"
                  />
                </div>
                <div className="border border-gray-300 w-6/12">
                  <Select
                    options={monthOptions}
                    onChange={(birthMonth) => setBirth(birthMonth)}
                    styles={customStyle}
                    placeholder="Month"
                  />
                </div>
                <div className="border rounded-r-lg border-gray-300 w-6/12">
                  <Select
                    options={yearOptions[0]}
                    styles={customStyle}
                    onChange={(birthyear: any) => setBirthYear(birthyear.value)}
                    placeholder="Year"
                  />
                </div>
              </div>
              <div
                className={`${
                  (!birthDay || !birthMonth || !birthYear) && isRequired
                    ? "block"
                    : "hidden"
                } w-full text-red-500 px-2 py-0.5`}
              >
                Input your birthday
              </div>
            </div>

            <div>
              <p className="text-[18px] mb-3">First Name *</p>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={`rounded-lg block p-2 w-full px-3 text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                placeholder="first name"
                required
              ></input>
              {!firstName && isRequired && (
                <div className="w-full text-red-500 px-2 py-0.5">
                  Input your first name
                </div>
              )}
            </div>

            <div>
              <p className="text-[18px] mb-3">Sur Name *</p>
              <input
                value={surName}
                onChange={(e) => setSurName(e.target.value)}
                className="rounded-lg block p-2 w-full px-3 text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="your last name"
                required
              ></input>
              {!surName && isRequired && (
                <div className="w-full text-red-500 px-2 py-0.5">
                  Input your Sur name
                </div>
              )}
            </div>

            <div>
              <p className="text-[18px] mb-3">Email Address *</p>
              <input
                type="email"
                id="mail"
                className={`rounded-lg block p-2 w-full px-3 text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                name="usermail"
                placeholder="Enter your email address"
                value={usermail}
                onChange={(e) => setUsermailReg(e.target.value)}
                // onChange={(e) => validatemailtype(e.target.value)}
                required
              />
              {!usermail && isRequired && (
                <div className="w-full text-red-500 px-2 py-0.5">
                  Input your correct email
                </div>
              )}
            </div>

            <div>
              <p className="text-[18px] mb-3">
                Please confirm your email address *
              </p>
              <input
                type="email"
                id="confirmemailaddress"
                className={`rounded-lg block p-2 w-full px-3 text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                name="confirmusermail"
                placeholder="Confirm your email address"
                value={confirmemailaddress}
                onChange={(e) => setConfirmEmailaddress(e.target.value)}
                // onChange={(e) => validatemailtype(e.target.value)}
                required
              />
              {((!(usermail == confirmemailaddress )) || (!confirmemailaddress && isRequired)) && (
                <div className="w-full text-red-500 px-2 py-0.5">
                  Input your correct email address.
                </div>
              )}
            </div>

            <div>
              <p className="text-[18px] mb-3">
                House Number or House Name
              </p>
              <input
                value={houseName}
                onChange={(e) => setHouseName(e.target.value)}
                className="rounded-lg block p-2 w-full px-3 text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Green House"
              ></input>
              {!houseName && isRequired && (
                <div className="w-full text-red-500 px-2 py-0.5">
                  Input your houseName
                </div>
              )}
            </div>

            {/* <div>
              <p className="text-[18px] mb-3">Postcode</p>
              <div className="flex">
                <input
                  type="search"
                  value={postcode}
                  className="rounded-l-lg block p-2 w-full px-3 text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  onChange={(e) => setPostCode(e.target.value)}
                />
                <button
                  className="rounded-r-lg block p-2 w-full px-3 text-sm text-white bg-gray-600 hover:bg-gray-300 hover:text-gray-600"
                  onClick={(e) => findAddressByPC(postcode)}
                >
                  Find Address
                </button>
              </div>
            </div> */}

            <div>
              <p className="text-[18px] mb-3">Occupation Status *</p>
              <div className="rounded-lg border border-gray-300">
                <Select
                  options={Occupationlist}
                  styles={customStyle}
                  onChange={(target: any) => setOccupation(target.value)}
                />
              </div>
              {!occupation && isRequired && (
                <div className="w-full text-red-500 px-2 py-0.5">
                  Input your Occupation status
                </div>
              )}
            </div>

            <div>
              <p className="text-[18px] mb-3">Purpose of Loan *</p>
              <div className="rounded-lg border border-gray-300">
                <Select
                  options={Purposelist}
                  styles={customStyle}
                  onChange={(target: any) => setPurpose(target.value)}
                />
              </div>
              {!purpose && isRequired && (
                <div className="w-full text-red-500 px-2 py-0.5">
                  Input your Purpose
                </div>
              )}
            </div>

            <div>
              <p className="text-[18px] mb-3">Marital Status *</p>
              <div className="rounded-lg border border-gray-300">
                <Select
                  options={Maritallist}
                  styles={customStyle}
                  onChange={(target: any) => setMarital(target.value)}
                />
              </div>
              {!marital && isRequired && (
                <div className="w-full text-red-500 px-2 py-0.5">
                  Input your Marital Status
                </div>
              )}
            </div>

            <div>
              <p className="text-[18px] mb-3">
                Number of Dependents *
              </p>
              <div className="rounded-lg border border-gray-300">
                <Select
                  options={Dependentslist}
                  styles={customStyle}
                  onChange={(target: any) => setDependents(target.value)}
                />
              </div>
              {!dependents && isRequired && (
                <div className="w-full text-red-500 px-2 py-0.5">
                  Input your Number of Dependents
                </div>
              )}
            </div>

            <div>
              <p className="text-[18px] mb-3">
                Your individual share of mortgage/rent payment (£) *
              </p>
              <p className="text-[16px] text-gray-600">
                Provide the amount of your individual share of monthly
                mortgage/rental payment
              </p>
              <input
                value={mortgagepayment}
                onChange={(e) => setMortgagePayment(e.target.value)}
                className="rounded-lg block p-2 w-full px-3 text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="0"
              ></input>
              {!mortgagepayment && isRequired && (
                <div className="w-full text-red-500 px-2 py-0.5">
                  Input Gross Annual income
                </div>
              )}
            </div>

            <div>
              <p className="text-[18px] mb-3">
                Gross annual income (£) *
              </p>
              <p className="text-[16px] text-gray-600">
                Please provide the total amount of income you earn annually from
                your employment before tax. If your total income is due to
                change during the term of the loan, please provide the lower
                figure.
              </p>
              <input
                value={GAIC}
                onChange={(e) => setGAIC(e.target.value)}
                className="rounded-lg block p-2 w-full px-3 text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="0"
              ></input>
              {!GAIC && isRequired && (
                <div className="w-full text-red-500 px-2 py-0.5">
                  Input Gross Annual income
                </div>
              )}
            </div>
          </div>
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

export default PersonalLoanCheck;
