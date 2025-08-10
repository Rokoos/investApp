import { Link } from "react-router-dom";

const Button = ({ label, style, disabled, link }) => {
  return (
    <Link
      to={link}
      className={`flex justify-center items-center gap-2 px-7 py-4 border-2 font-montserrat sm:text-sm  leading-none bg-navy rounded-full text-khaki  min-w-[15rem] border-transparent hover:text-navy hover:bg-sky-400 hover:border-2 hover:border-navy transition duration-300 ease-in-out font-bold ${style}`}
      disabled={disabled}
    >
      {label}
    </Link>
  );
};

export default Button;
