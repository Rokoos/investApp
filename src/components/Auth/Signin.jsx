import { useContext, useState } from "react";
import Button from "../Button";
import { arrowRight } from "../../assets/icons";
import { useNavigate } from "react-router-dom";
// import { signup } from "../api";
// import { toast, Bounce } from "react-toastify";
import Loader from "../Loader";
import { UserContext } from "../../context/UserContext";

const SignIn = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);
  const { isLoading, setIsLoading } = useContext(UserContext);
  // console.log("isLoading", isLoading);
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const user = {
      name,
      surname,
      email,
      role,
      password,
    };

    // signup(user)
    //   .then((data) => {
    //     // console.log("data", data.data.message);
    //     setIsLoading(false);

    //     toast.success(data.data.message);
    //     navigate("/signin");
    //   })
    //   .catch((error) => {
    //     console.log("error", error);
    //     setIsLoading(false);
    //   });
    // navigate("/");
  };
  return (
    <div
      className="  h-[100vh]  w-[70%] mx-auto flex 
    flex-col justify-center items-center"
    >
      {}
      <h2 className="mb-4 text-navy text-3xl font-bold">Sign In</h2>

      <div>
        <label
          htmlFor="email"
          className=" block text-sm font-bold  leading-6 text-navy"
        >
          Email
        </label>
        <div className="relative my-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
          <input
            autoComplete="new-password"
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 bg-gray-300 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-navy focus:bg-sky-400 focus:placeholder:text-white  sm:text-sm sm:leading-6"
            placeholder="janeDoe@test.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <label
          htmlFor="password"
          className="block text-sm font-bold leading-6 text-navy mt-2"
        >
          Password
        </label>
        <div className="relative my-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
          <input
            autoComplete="new-password"
            type="password"
            name="password"
            id="password"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 bg-gray-300 focus:ring-2 focus:ring-inset focus:ring-navy focus:bg-sky-400 focus:placeholder:text-white  sm:text-sm sm:leading-6"
            placeholder="Enter a password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div onClick={handleSubmit}>
        <Button label="Sign In" style="mt-10" />
      </div>
    </div>
  );
};

export default SignIn;
