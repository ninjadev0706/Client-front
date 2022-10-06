import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLogo, DropArrow } from "../assets/Logo";

// export const useOnClickOutside = (ref: unknown, handler: unknown) => {
//   useEffect(
//     () => {
//       const listener = (event: { target: any }) => {
//         // Do nothing if clicking ref's element or descendent elements
//         if (!ref.current || ref.current.contains(event.target)) {
//           return;
//         }
//         handler(event);
//       };
//       document.addEventListener("mousedown", listener);
//       document.addEventListener("touchstart", listener);
//       return () => {
//         document.removeEventListener("mousedown", listener);
//         document.removeEventListener("touchstart", listener);
//       };
//     },
//     [ref, handler],
//   );
// };

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmountReg] = useState("");
  const [usermail, setUsermailReg] = useState("");
  const [toggle, setToggle] = useState(false);
  const ref = useRef();

  const useOnClickOutside = (ref: any, handler: any) => {
    useEffect(() => {
      const listener = (event: { target: any }) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, handler]);
  };

  const setContext = () => {
    const GlobalUserMail = React.createContext(usermail);
    const GlobalAmount = React.createContext(amount);
  };

  const setFinaldata = () => {
    const emailValidation = Validatemailtype();
    console.log(emailValidation);
    if (emailValidation && amount) {
      setShowModal(false);
      setContext();
      redirect();
    }
  };

  const redirect = () => {
    window.location.href = "/Sandbox";
  };

  const alldisable = () => {
    setShowModal(false);
  };
  const Validatemailtype = () => {
    if (
      usermail
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        )
    ) {
      return true;
    }
    return false;
  };
  useOnClickOutside(ref, () => alldisable());
  return (
    <div className="lg:px-20 px-4 xl:px-60">
      <nav className="flex items-center justify-between text-[#737373] font-medium py-4">
        <a className="nav_logo" href="/">
          <NavLogo />
        </a>
        <div className="md:w-full flex items-center">
          <div className="w-6/12 md:flex hidden">
            <div className="dropdown xl:px-3 px-1">
              <div className="flex items-center">
                <span>Products</span>
                <DropArrow />
              </div>
              <div className="dropdown-content w-100">
                <div>Flexi-Loan</div>
                <div>Revenue Based Loan</div>
                <div>iwocaPay</div>
              </div>
            </div>
            <div className="dropdown xl:px-3 px-1">
              <div className="flex items-center">
                <span>Resources</span>
                <DropArrow />
              </div>
              <div className="dropdown-content w-100">
                <div>Small business loan</div>
                <div>Finance options</div>
                <div>Finance explained</div>
                <div>Cash flow hub</div>
              </div>
            </div>
            <div className="dropdown xl:px-3 px-1">
              <div className="flex items-center">
                <span>News</span>
                <DropArrow />
              </div>
              <div className="dropdown-content w-100">
                <div>Insights</div>
                <div>Press and news</div>
                <div>Customer stories</div>
              </div>
            </div>
            <div className="dropdown xl:px-3 px-1">
              <div className="flex items-center">
                <span>About</span>
                <DropArrow />
              </div>
              <div className="dropdown-content w-100">
                <div>About us</div>
                <div>careers</div>
                <div>Inside iwoca</div>
              </div>
            </div>
          </div>
          <div className="w-5/12 flex justify-between">
            <button className="md:ml-20 px-8 py-2 mr-2 bg-[#648bcb] rounded-xl text-white">My account</button>
            <section className="md:flex hidden items-center">
              <svg
                width="17"
                height="30"
                viewBox="0 0 17 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.40616 0.632992C4.04628 0.483107 3.65913 0.548447 3.32695 0.722636C2.96211 0.994542 2.67751 1.29766 2.5498 1.65765C0.35863 8.0559 0.140431 13.8212 1.87599 18.5622C3.61387 23.3094 7.29653 26.9806 12.7588 29.2753C13.1317 29.3657 13.5401 29.3294 13.8512 29.1721C14.1833 28.9992 14.4977 28.7089 14.6607 28.2794C15.235 26.7774 15.8106 25.2733 16.3843 23.7723C16.5321 23.3468 16.4889 22.9239 16.3553 22.5637C16.2217 22.2035 15.985 21.8769 15.6233 21.7281C14.4315 21.231 13.0269 20.0653 11.8877 19.1451C11.7585 19.0401 11.5761 19.0229 11.4215 19.1013L8.19877 20.7451C6.18894 17.6522 5.51233 15.7662 5.02701 11.9017L8.22969 10.2685C8.39255 10.1849 8.51731 9.99754 8.54302 9.79795C8.77267 8.13056 8.94562 5.85345 9.60731 4.39023C9.74186 3.97479 9.5849 3.48368 9.43859 3.18961C9.2829 2.88245 9.03785 2.57645 8.66868 2.43367C7.24784 1.83344 5.827 1.23322 4.40616 0.632992Z"
                  fill="#FF594B"
                ></path>
              </svg>
              <a
                href="#"
                className="ml-2 text-[#143b6b] text-[18px] font-bold"
                data-ga-id="navbar__phone"
              >
                020 3778 0274
              </a>
            </section>
            <button className="md:hidden" onClick={() => setToggle(!toggle)}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <rect
                    x="2"
                    y="4"
                    width="16"
                    height="2"
                    rx="1"
                    fill="black"
                  ></rect>
                  <rect
                    x="2"
                    y="9"
                    width="16"
                    height="2"
                    rx="1"
                    fill="black"
                  ></rect>
                  <rect
                    x="2"
                    y="14"
                    width="16"
                    height="2"
                    rx="1"
                    fill="black"
                  ></rect>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(20 20) rotate(-180)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div className="flex justify-between">
        <div className="pt-12 pb-4 lg:w-6/12 xl:w-6/12">
          <p className="text-[40px] text-[#102f56] font-bold mb-9">
            Apply for a Flexi-Loan today
          </p>
          <p className="font-medium text-[#000000cc] text-[18px] mb-6">
            Straightforward applications and quick decisions - it’s great for
            businesses who weren’t affected by coronavirus or are starting to
            get back on track.
          </p>
          <ul className="font-medium text-[#000000cc] text-[18px]">
            <li className="flex items-center mb-4">
              <div className="mr-4 irems-center">
                <svg
                  width="15"
                  height="12"
                  viewBox="0 0 15 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 5.62553L5.6254 11.2509L14.5599 2.31646L12.2435 0.00012207L5.6254 6.61824L2.31634 3.30918L0 5.62553Z"
                    fill="#009967"
                  ></path>
                </svg>
              </div>
              <p>Borrow from £1,000 to £200,000 over 12 months</p>
            </li>
            <li className="flex items-center mb-4">
              <div className="mr-4 irems-center">
                <svg
                  width="15"
                  height="12"
                  viewBox="0 0 15 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 5.62553L5.6254 11.2509L14.5599 2.31646L12.2435 0.00012207L5.6254 6.61824L2.31634 3.30918L0 5.62553Z"
                    fill="#009967"
                  ></path>
                </svg>
              </div>
              <p>Repay early with no fees</p>
            </li>
            <li className="flex items-center mb-4">
              <div className="mr-4 irems-center">
                <svg
                  width="15"
                  height="12"
                  viewBox="0 0 15 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 5.62553L5.6254 11.2509L14.5599 2.31646L12.2435 0.00012207L5.6254 6.61824L2.31634 3.30918L0 5.62553Z"
                    fill="#009967"
                  ></path>
                </svg>
              </div>
              <p>Decisions in 1 working day</p>
            </li>
            <li className="flex items-center mb-4">
              <div className="mr-4 irems-center">
                <svg
                  width="15"
                  height="12"
                  viewBox="0 0 15 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 5.62553L5.6254 11.2509L14.5599 2.31646L12.2435 0.00012207L5.6254 6.61824L2.31634 3.30918L0 5.62553Z"
                    fill="#009967"
                  ></path>
                </svg>
              </div>
              <p>Have help on hand with a dedicated account manager</p>
            </li>
          </ul>
          <div className="mt-10">
            <button
              className="py-2 px-30 rounded-md shadow-2xl hover:shadow-none bg-[#fb534a] text-white font-medium"
              type="button"
              onClick={() => setShowModal(true)}
            >
              Apply for a Flexi-Loan
            </button>
          </div>
        </div>
        <div className="hidden lg:flex mt-10 lg:h-[400px] h-auto xl:w-5/12">
          <img src="./Flexi_loan_Hero.webp" className="rounded-full" />
        </div>
      </div>
      {showModal ? (
        <>
          <div className="static justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-[#00000099]">
            <div
              className="flex relative  rounded-lg w-auto my-6 mx-auto bg-[#143b6b]"
              ref={ref.current}
            >
              {/*content*/}
              <button
                className="absolute top-0 right-0 pt-4 pr-1"
                onClick={() => alldisable()}
                type="button"
              >
                <svg
                  height="20px"
                  width="20px"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.41421 6.18174e-08L12.7279 11.3137L11.3137 12.7279L0 1.41421L1.41421 6.18174e-08Z"
                    fill="white"
                  ></path>
                  <path
                    d="M0 11.3137L11.3137 0L12.7279 1.41421L1.41421 12.7279L0 11.3137Z"
                    fill="white"
                  ></path>
                </svg>
              </button>
              <div className="p-10 border-0 rounded-bl-lg rounded-tl-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="mb-[40px]">
                  <p className="text-[#143b6b] font-bold text-[24px] mb-4">
                    Let’s get started with Flexi-Loan
                  </p>
                  <p className="text-[#143b6b] font-light text-xl mb-5">
                    Applying won’t affect your credit score
                  </p>
                  <div className="flex items-center mb-5">
                    <div className="w-6/12 pr-5">
                      <p className="text-gray-600 text-[16px] font-light">
                        What is your business email address?
                      </p>
                    </div>
                    <div className="w-6/12 pl-5">
                      <input
                        type="email"
                        id="mail"
                        className="form-input bg-white border text-sm rounded-lg focus:ring-black focus:ring-2 outline-none block w-full p-2.5 border-gray-600 placeholder-gray-400 focus:border-black"
                        name="usermail"
                        placeholder="Enter your business email"
                        value={usermail}
                        onChange={(e) => setUsermailReg(e.target.value)}
                        // onChange={(e) => validatemailtype(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6/12 pr-5">
                      <p className="text-gray-600 text-[16px] font-light">
                        How much would you like?
                      </p>
                    </div>
                    <div className="w-6/12 pl-5">
                      <input
                        type="number"
                        min={0}
                        id="mail"
                        className="form-input bg-white border text-sm rounded-lg focus:ring-black focus:ring-2 outline-none block w-full p-2.5 border-gray-600 placeholder-gray-400 focus:border-black"
                        name="amount"
                        placeholder="Any amount, up to £500,000"
                        value={amount}
                        onChange={(e) => setAmountReg(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="w-6/12 pl-5">
                    <button
                      className={`w-full bg-[#0c2440] text-white flex justify-center active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
                      type="button"
                      onClick={() => setFinaldata()}
                    >
                      Apply for a Flexi-Loan
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-5 text-white min-w-[250px]">
                <p className="text-2xl font-bold mt-5 mb-5">What's next?</p>
                <ul>
                  <li className="flex items-center mb-4">
                    <div className="mr-2 irems-center">
                      <svg
                        width="15"
                        height="12"
                        viewBox="0 0 15 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 5.62553L5.6254 11.2509L14.5599 2.31646L12.2435 0.00012207L5.6254 6.61824L2.31634 3.30918L0 5.62553Z"
                          fill="#009967"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-xs">Apply in 5 minutes</p>
                  </li>
                  <li className="flex items-center mb-4">
                    <div className="mr-2 irems-center">
                      <svg
                        width="15"
                        height="12"
                        viewBox="0 0 15 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 5.62553L5.6254 11.2509L14.5599 2.31646L12.2435 0.00012207L5.6254 6.61824L2.31634 3.30918L0 5.62553Z"
                          fill="#009967"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-xs">Meet your account manager</p>
                  </li>
                  <li className="flex items-center mb-4">
                    <div className="mr-2 irems-center">
                      <svg
                        width="15"
                        height="12"
                        viewBox="0 0 15 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 5.62553L5.6254 11.2509L14.5599 2.31646L12.2435 0.00012207L5.6254 6.61824L2.31634 3.30918L0 5.62553Z"
                          fill="#009967"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-xs">Get money in the bank in hours</p>
                  </li>
                </ul>
                <p className="text-center text-sm mt-10">Need help? Call us</p>
                <div className="flex justify-center">
                  <section className="flex">
                    <svg
                      width="15"
                      height="25"
                      viewBox="0 0 17 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.40616 0.632992C4.04628 0.483107 3.65913 0.548447 3.32695 0.722636C2.96211 0.994542 2.67751 1.29766 2.5498 1.65765C0.35863 8.0559 0.140431 13.8212 1.87599 18.5622C3.61387 23.3094 7.29653 26.9806 12.7588 29.2753C13.1317 29.3657 13.5401 29.3294 13.8512 29.1721C14.1833 28.9992 14.4977 28.7089 14.6607 28.2794C15.235 26.7774 15.8106 25.2733 16.3843 23.7723C16.5321 23.3468 16.4889 22.9239 16.3553 22.5637C16.2217 22.2035 15.985 21.8769 15.6233 21.7281C14.4315 21.231 13.0269 20.0653 11.8877 19.1451C11.7585 19.0401 11.5761 19.0229 11.4215 19.1013L8.19877 20.7451C6.18894 17.6522 5.51233 15.7662 5.02701 11.9017L8.22969 10.2685C8.39255 10.1849 8.51731 9.99754 8.54302 9.79795C8.77267 8.13056 8.94562 5.85345 9.60731 4.39023C9.74186 3.97479 9.5849 3.48368 9.43859 3.18961C9.2829 2.88245 9.03785 2.57645 8.66868 2.43367C7.24784 1.83344 5.827 1.23322 4.40616 0.632992Z"
                        fill="#FF594B"
                      ></path>
                    </svg>
                    <a
                      href="#"
                      className="mx-2 text-white text-[18px] font-bold"
                      data-ga-id="navbar__phone"
                    >
                      020 3778 0274
                    </a>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default Index;
