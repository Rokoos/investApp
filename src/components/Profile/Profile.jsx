import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { users, demoProjects } from "../../constants";
import momment from "moment";
import Button from "../Button";
import { FaRegUser } from "react-icons/fa";

const Profile = () => {
  const { user } = useContext(UserContext);
  const { id } = useParams();

  const [person, setPerson] = useState(null);
  // console.log("id", id);
  // console.log("person", person);
  useEffect(() => {
    if (user._id === id) {
      setPerson(user);
    } else {
      let filteredUser = users.find((el) => el._id === id);

      setPerson(filteredUser);
    }
  }, []);
  const getUserProjects = () =>
    demoProjects.filter((item) => person.projects.includes(item._id));
  return (
    <div
      className="   mt-28   w-full  mx-auto flex 
    flex-col items-center overflow-y-scroll mb-24 "
    >
      {person && (
        <>
          <h2 className=" text-navy  text-3xl font-bold">{`${person.name} ${person.surname}`}</h2>

          <div className="mt-10 text-white ">
            {person?.photo ? (
              <div className="relative  ">
                <img
                  src={person.photo}
                  className="w-[80%] max-w-[1000px] rounded-md mb-4 mx-auto"
                  alt=""
                />
              </div>
            ) : (
              <div className="border-2 rounded-lg mb-4  border-navy bg-khaki text-navy">
                <FaRegUser className="w-[150px] h-[150px] p-5  " />
              </div>
            )}
          </div>
          {/* aboutMe*/}
          <div className="mb-2 w-[80%] md:w-[40rem] md:mt-2 ">
            <label
              htmlFor="category"
              className=" block text-sm font-bold  leading-6 text-navy mt-2 border-b border-sky-400 md:text-base pb-2"
            >
              About Me
            </label>
            <div className="flex justify-center my-2">
              <span className="  text-navy text-sm text-justify md:text-base ">
                {person.aboutMe}
              </span>
            </div>
          </div>
          {/*Portfolio Site */}
          <div className="mb-2 w-[80%] md:w-[40rem] md:mt-2 ">
            <label
              htmlFor="category"
              className=" block text-sm font-bold  leading-6 text-navy mt-2 border-b border-sky-400 md:text-base pb-2"
            >
              Portfolio
            </label>
            <div className="flex justify-center my-2">
              <a
                target={"_blank"}
                rel="noopener noreferrer"
                href={person.link}
                className="  text-navy text-sm text-justify md:text-base"
              >
                Website
              </a>
            </div>
          </div>
          {/*mobile */}
          <div className="mb-2 w-[80%] md:w-[40rem] md:mt-2 ">
            <label
              htmlFor="category"
              className=" block text-sm font-bold  leading-6 text-navy mt-2 border-b border-sky-400 md:text-base pb-2"
            >
              Mobile
            </label>
            <div className="flex justify-center my-2">
              <span className="  text-navy text-sm text-justify md:text-base ">
                {person.mobile}
              </span>
            </div>
          </div>
          {/*MypProjects */}
          {person.projects.length > 0 && (
            <div className="w-[80%] md:w-[40rem]">
              <label className=" block text-sm font-bold  leading-6 text-navy mt-2  md:text-base pb-2 mb-4">
                My Projects
              </label>
              {/* //powinno być person.orders.map!!! */}
              {getUserProjects().map((el, i) => (
                <Link
                  key={i}
                  to={`/project/${el._id}`}
                  className=" flex flex-col items-center border-2 border-navy p-2 mb-2 rounded-xl bg-beige"
                >
                  <span className="text-base font-bold text-navy">
                    {el.appName}
                  </span>
                  {el.tags.length > 0 && (
                    <div className="px-3 pt-2 ">
                      {el.tags.map((el, i) => (
                        <span
                          key={i}
                          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm/3 font-semibold text-gray-700 mr-2 "
                        >
                          {el}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          )}

          <div className="mt-10 ">
            <Button
              label={id === user._id ? "Edit Profile" : "Contact Creator"}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
