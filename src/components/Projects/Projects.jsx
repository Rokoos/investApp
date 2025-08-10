import { demoProjects } from "../../constants";
import Project from "./Project";

const Projects = () => {
  // console.log("object,", demoProjects);
  return (
    <div className="h-[100vh] overflow-y-scroll flex flex-1 flex-col mb-8  ">
      <div className="w-full flex  xl:flex-row flex-col xl:mt-20  justify-center items-center    mt-6  absolute  ">
        <div className="w-full max-w-[1200px] m-auto grid place-items-center grid-cols-1 md:grid-cols-2  gap-2 p-5 mt-16    md:mt-20 mb-10  ">
          {demoProjects.length > 0 &&
            demoProjects.map((item) => {
              return <Project key={item._id} item={item} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
