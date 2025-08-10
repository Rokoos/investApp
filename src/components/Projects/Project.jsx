import { Link } from "react-router-dom";
import Button from "../Button";
import { RiCalendarView } from "react-icons/ri";
const Project = ({ item }) => {
  const { _id, photo, description, tags, creator, link, appName } = item;
  return (
    <div className="max-w-sm   shadow-lg bg-beige border-2 border-sky-400 rounded-lg mb-4">
      <img className="w-full" src={photo} alt="Sunset in the mountains" />

      <div className="px-4 py-4">
        <div className="font-bold text-xl mb-2">{appName}</div>
        <div className="mb-2 text-sm">
          <span className="mr-2 ">Created By</span>
          <Link
            className="italic text-navy"
            to={`/profile/${creator._id}`}
          >{`${creator.name} ${creator.surname}`}</Link>
        </div>
        <p className="text-gray-700 text-wrap text-sm">{description}</p>
      </div>
      {tags.length > 0 && (
        <div className="px-3 pt-2 pb-2">
          {tags.map((el, i) => (
            <span
              key={i}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {el}
            </span>
          ))}
        </div>
      )}
      <div className="w-full flex justify-center mb-2">
        <Link
          className="w-[100px] bg-navy flex justify-center text-khaki border-2 border-transparent rounded-lg py-1 px-4 font-bold  hover:text-navy hover:bg-sky-400 hover:border-2 hover:border-navy transition duration-300 ease-in-out"
          to={`/project/${_id}`}
        >
          <span>More</span>
        </Link>
      </div>
    </div>
  );
};

export default Project;
