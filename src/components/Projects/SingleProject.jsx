import { useEffect, useState, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../context/UserContext";
import { demoProjects } from "../../constants";
import {
  FaMobileAlt,
  FaMoon,
  FaStar,
  FaRegUser,
  FaRegHeart,
} from "react-icons/fa";
import { RiCalendarView } from "react-icons/ri";
import momment from "moment";
import Button from "../Button";

const SingleProject = () => {
  const [project, setProject] = useState(null);
  // console.log("project", project);
  const { id } = useParams();
  const { user, setUser, isAdmin, setIsLoading, isLoading } =
    useContext(UserContext);
  useEffect(() => {
    let proj = demoProjects.find((el) => el._id === id);

    setProject(proj);
  }, []);
  return (
    <div
      className="   mt-28   w-full  mx-auto flex 
    flex-col items-center overflow-y-scroll mb-24 "
    >
      {project && (
        <>
          <h2 className=" text-navy  text-3xl font-bold">{project.appName}</h2>
          <div className="flex flex-col items-center text-sm italic text-navy mb-4">
            <span>Added {momment(project.createdAt).format("L")} by </span>
            <Link
              to={`/profile/${project.creator._id}`}
              className=" text-base  text-navy underline mt-4"
            >{`${project.creator.name} ${project.creator.surname}`}</Link>
          </div>
          <div className="mt-10 text-white ">
            {project?.photo ? (
              <div className="relative  ">
                <img
                  src={project.photo}
                  className="w-[80%] max-w-[1000px] rounded-md mb-4 mx-auto"
                  alt=""
                />
              </div>
            ) : (
              <div className="border-2 w-[80%] rounded-lg mb-4 mx-auto  border-navy bg-khaki text-navy">
                <RiCalendarView className=" w-[250px] max-w-[350px] h-[150px] p-5  " />
              </div>
            )}
          </div>
          {/* description */}
          <div className="mb-2 w-[80%] md:w-[40rem] md:mt-2 ">
            <label
              htmlFor="category"
              className=" block text-sm font-bold  leading-6 text-navy mt-2 border-b border-sky-400 md:text-base pb-2"
            >
              Description
            </label>
            <div className="flex justify-center my-2">
              <span className="  text-navy text-sm text-justify md:text-base ">
                {project.description}
              </span>
            </div>
          </div>
          {/*Project Site */}
          {project.link && (
            <div className="mb-2 w-[80%] md:w-[40rem] md:mt-2 ">
              <label
                htmlFor="category"
                className=" block text-sm font-bold  leading-6 text-navy mt-2 border-b border-sky-400 md:text-base pb-2"
              >
                Project Site
              </label>
              <div className="flex justify-center my-2">
                <a
                  target={"_blank"}
                  rel="noopener noreferrer"
                  href={project.link}
                  className="  text-navy text-sm text-justify md:text-base"
                >
                  Website
                </a>
              </div>
            </div>
          )}
          {/*Project YT Channel */}
          {project.linkYT && (
            <div className="mb-2 w-[80%] md:w-[40rem] md:mt-2 ">
              <label className=" block text-sm font-bold  leading-6 text-navy mt-2 border-b border-sky-400 md:text-base pb-2">
                Project YT
              </label>
              <div className="flex justify-center my-2">
                <a
                  target={"_blank"}
                  rel="noopener noreferrer"
                  href={project.linkYT}
                  className="  text-navy text-sm text-justify md:text-base"
                >
                  Check it out on YT!
                </a>
              </div>
            </div>
          )}
          {project.creator._id !== user._id && (
            <div className="mt-10 ">
              <Button label="Contact Creator" />
            </div>
          )}
          {project.creator._id === user._id && (
            <div className="mt-10 ">
              <Button label="Eidt Project" />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SingleProject;
