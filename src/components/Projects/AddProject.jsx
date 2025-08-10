import { useEffect, useState, useCallback, useContext } from "react";
import { useParams } from "react-router-dom";
import { ModalContext } from "../../context/ModalContext";
import { UserContext } from "../../context/UserContext";
import { PhoneInput } from "react-international-phone";
import Button from "../Button";
import { MdInsertPhoto } from "react-icons/md";

const AddProject = () => {
  const [appName, setAppName] = useState("");
  const [photo, setPhoto] = useState("");
  const [projectSite, setProjectSite] = useState("");
  const [projectYT, setProjectYT] = useState("");
  // console.log("subcat", subCategory);
  const [mobile, setMobile] = useState("");

  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="flex flex-col mx-auto  items-center mt-10 md:mt-20 max-w-[1200px] ">
      <h2 className="mt-14 text-navy text-3xl font-bold">Add Project</h2>
      <div className="flex flex-col md:flex-row md:mt-10  md:justify-center md:items-start ">
        <div className="flex flex-col  md:mr-10">
          {/* AppName */}
          <div className="mt-4 mb-4 md:mt-0  w-[16rem] md:w-[20rem]  ">
            <label className=" block text-sm font-bold  leading-6 text-navy mt-2 border-b border-sky-400 md:text-base pb-2">
              Project Name
            </label>

            <div className="flex flex-row  justify-between items-center  border  rounded-lg  mt-4">
              <input
                autoComplete="new-password"
                type="name"
                name="name"
                id="name"
                className="block w-full rounded-md border-0 py-1.5   px-2 bg-gray-300 text-navy ring-1  placeholder:text-gray-400 focus:ring-2  focus:ring-navy focus:bg-sky-400 focus:placeholder:text-gray-300 sm:text-sm sm:leading-6"
                placeholder="e.g. Fixer"
                onChange={(e) => setAppName(e.target.value)}
              />
            </div>
          </div>

          {/* Photo */}
          <div className="mt-4 mb-4  w-[16rem] md:w-[20rem]  ">
            <label className=" block text-sm font-bold  leading-6 text-navy mt-2 border-b border-sky-400 md:text-base pb-2 mb-4">
              Add Photo
            </label>
            <div className="border-2 w-full rounded-lg mb-4 mx-auto  border-navy bg-khaki text-navy">
              <MdInsertPhoto
                className="
             w-full
              max-w-[350px]
               h-[150px] p-5  "
              />
            </div>
            <button className="w-full border-2  bg-navy rounded-full text-khaki  min-w-[15rem] border-transparent hover:text-navy hover:bg-sky-400 hover:border-2 hover:border-navy transition duration-300 ease-in-out font-bold">
              Add Photo
            </button>
          </div>
          {/*  */}
        </div>
        <div className="flex flex-col  md:ml-10  ">
          {/*Description */}
          <div className="  mt-4 md:mt-0 mb-4 w-[16rem] md:w-[20rem] ">
            <label
              htmlFor="age"
              className=" block text-sm font-bold  leading-6 text-navy mt-2 border-b border-sky-400 md:text-base pb-2 mb-4"
            >
              Description
            </label>
            <div className="mt-2 flex flex-col  w-full">
              <textarea
                value={description}
                placeholder="Write about the project"
                // className="border text-sm text-navy  p-2 h-[20vh] border-beige w-full rounded-lg text-wrap focus:outline-none"
                className="block w-full rounded-md border-0 py-1.5 h-[20vh]  px-2 bg-gray-300 text-navy ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-navy focus:bg-sky-400 focus:placeholder:text-gray-300 text-sm/3 sm:leading-6"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <span
                className={`mx-auto mt-2 text-sm ${
                  description.length > 2000 ? "text-red-700" : "text-navy"
                } `}
              >
                {description.length} of 2000
              </span>
            </div>
          </div>
          {/*  */}
          {/* AppSite */}
          <div className="mt-4 mb-4 md:mt-0  w-[16rem] md:w-[20rem]  ">
            <label className=" block text-sm font-bold  leading-6 text-navy mt-2 border-b border-sky-400 md:text-base pb-2">
              Website
            </label>

            <div className="flex flex-row  justify-between items-center  border  rounded-lg  mt-4">
              <input
                autoComplete="new-password"
                type="name"
                name="name"
                id="name"
                className="block w-full rounded-md border-0 py-1.5   px-2 bg-gray-300 text-navy ring-1  placeholder:text-gray-400 focus:ring-2  focus:ring-navy focus:bg-sky-400 focus:placeholder:text-gray-300 sm:text-sm sm:leading-6"
                onChange={(e) => setAppName(e.target.value)}
              />
            </div>
          </div>

          {/* Mobile */}
          <div className="mt-4 mb-4 w-[16rem] md:w-[20rem] ">
            <label
              htmlFor="mobile"
              className=" block text-sm font-bold  leading-6 text-navy mt-2 border-b border-sky-400 md:text-base pb-2"
            >
              Mobile
            </label>
            <PhoneInput
              defaultCountry="pl"
              hideDropdown
              value={mobile}
              onChange={(e) => setMobile(e)}
              inputClassName=" w-full rounded-lg  py-2 text-center text-navy ring-1 ring-inset ring-gray-300  ring-rounded-lg placeholder:text-gray-400 focus:ring-2   focus:ring-navy text-md sm:leading-6 focus:bg-sky-400"
              // inputClassName="block w-full rounded-md border-0 py-1.5   px-2 bg-gray-300 text-navy ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-navy focus:bg-sky-400 focus:placeholder:text-gray-300 sm:text-sm sm:leading-6"
              disableCountryGuess
              forceDialCode
            />
          </div>
        </div>
        {/*  */}

        {/*  */}
      </div>

      <div
        //  onClick={handleSubmit}
        className=" my-10 "
      >
        <Button
          label="Add Project"
          btnStyle=" flex mx-auto   space-y-5 md:mt-12  "
        />
      </div>
    </div>
  );
};

export default AddProject;
