import NavBar from "../NavBar/NavBar";
import CountrySelector from "./CountrySelector";

function Checkout() {
  return (
    <div>
      <NavBar />

      <div className="flex justify-around mt-5">
        <div className="flex flex-col w-[30rem]">
          <h1
            className="
           font-bold"
          >
            Billing Adress
          </h1>
          <form action="" className="mt-2 flex flex-col gap-y-3">
            <div className="flex justify-between items-center bg-slate-200 w-[45rem]">
              <div className="flex flex-col">
                <label htmlFor="firstName" className="leading-9">
                  First Name <span className=" text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="w-72 p-2 border rounded border-[#EAEAEA] outline-none h-[2rem]"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="lastname" className="leading-9">
                  Last Name <span className=" text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className=" w-72 p-2 border rounded border-[#EAEAEA] outline-none h-[2rem] "
                />
              </div>
            </div>

            <div className="flex justify-between items-center bg-slate-200 w-[45rem]">
              <div className="flex flex-col">
                <label className="leading-9">
                  Country / Region <span className=" text-red-600">*</span>
                </label>
                <CountrySelector />
              </div>

              <div className="flex flex-col">
                <label className="leading-9">
                  Town / City <span className=" text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className=" w-72 p-2 border rounded border-[#EAEAEA] outline-none h-[2rem] "
                />
              </div>
            </div>

            <div className="flex justify-between items-center bg-slate-200 w-[45rem]">
              <div className="flex flex-col">
                <label className="leading-9">
                  Street Adress <span className=" text-red-600">*</span>
                </label>
                <input
                  placeholder="House number and street name"
                  type="text"
                  className=" w-72 p-2 border rounded border-[#EAEAEA] outline-none h-[2rem] "
                />
              </div>

              <div className="flex flex-col">
                <label className="leading-9 invisible">More Details</label>
                <input
                  placeholder="Appartment, suite, unit, etc. (optional)"
                  type="text"
                  className=" w-72 p-2 border rounded border-[#EAEAEA] outline-none h-[2rem] "
                />
              </div>
            </div>

            <div className="flex justify-between items-center bg-slate-200 w-[45rem]">
              <div className="flex flex-col">
                <label className="leading-9">
                  State <span className=" text-red-600">*</span>
                </label>
                <input
                  placeholder="Choose a state"
                  type="text"
                  className=" w-72 p-2 border rounded border-[#EAEAEA] outline-none h-[2rem] "
                />
              </div>

              <div className="flex flex-col">
                <label className="leading-9">
                  Zip <span className=" text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className=" w-72 p-2 border rounded border-[#EAEAEA] outline-none h-[2rem] "
                />
              </div>
            </div>

            <div className="flex justify-between items-center bg-slate-200 w-[45rem]">
              <div className="flex flex-col">
                <label className="leading-9">
                  Email Adress <span className=" text-red-600">*</span>
                </label>
                <input
                  placeholder="Choose a state"
                  type="text"
                  className=" w-72 p-2 border rounded border-[#EAEAEA] outline-none h-[2rem] "
                />
              </div>

              <div className="flex flex-col">
                <label className="leading-9">
                  Phone number <span className=" text-red-600">*</span>
                </label>
                <input
                  type="number"
                  className=" w-72 p-2 border rounded border-[#EAEAEA] outline-none h-[2rem] "
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="leading-9">Order notes (optional)</label>
              <textarea className="border rounded border-[#EAEAEA] outline-none w-96 h-44"></textarea>
            </div>
          </form>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Checkout;
