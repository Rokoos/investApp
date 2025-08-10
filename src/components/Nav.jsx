import { useState, useRef, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
// import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  let location = useLocation();
  let navigate = useNavigate();
  const route = location.pathname.split("/")[1];
  const id = location.pathname.split("/")[2];
  const { user, isAdmin } = useContext(UserContext);
  // console.log(user);
  let menuRef = useRef();
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    if (open) {
      let handler = (e) => {
        if (!menuRef.current.contains(e.target)) {
          handleMenu();
        }
      };
      document.addEventListener("mousedown", handler);

      return () => {
        document.removeEventListener("mousedown", handler);
      };
    }
  });

  return (
    <div
      className=" md:block top-0 fixed bg-navy  border-b-2 border-b-sky-500  w-[100%] z-[1000]"
      ref={menuRef}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px] ">
        <div className="flex items-center justify-end h-16">
          {/* navLinks */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                className={`${
                  route === "" ? "text-sky-400" : "text-khaki"
                } px-3 py-2 rounded-md text-md font-bold hover:text-navy hover:bg-sky-400  transition duration-300 ease-in-out`}
                to="/"
              >
                Projects
              </Link>
              {user ? (
                <div className="flex ">
                  {isAdmin ? (
                    <Link
                      className={`${
                        route === "admin" ? "text-beige bg-navy" : "text-navy "
                      } px-3 py-2 rounded-md text-md font-bold `}
                      to="/admin"
                    >
                      Admin
                    </Link>
                  ) : (
                    <>
                      <Link
                        className={`${
                          route === "profile" && user._id === id
                            ? "text-sky-400 "
                            : "text-khaki "
                        } px-3 py-2  rounded-md text-md font-bold  hover:text-navy hover:bg-sky-400 bg-navy  transition duration-300 ease-in-out `}
                        to={`/profile/${user._id}`}
                      >
                        Profil
                      </Link>
                      <Link
                        className={`${
                          route === "add-project"
                            ? "text-sky-400 "
                            : "text-khaki "
                        } px-3 py-2  rounded-md text-md font-bold  hover:text-navy hover:bg-sky-400 bg-navy  transition duration-300 ease-in-out `}
                        to="/add-project"
                      >
                        Add Project
                      </Link>
                    </>
                  )}

                  <div
                    // onClick={() => {
                    //   logout();
                    //   setUser(null);
                    //   setIsAuth(false);
                    //   setIsAdmin(false);
                    //   navigate("/");
                    // }}
                    className=" px-3 py-2 ml-2 rounded-md text-md font-bold cursor-pointer text-khaki hover:text-navy hover:bg-sky-400 bg-navy  transition duration-300 ease-in-out"
                  >
                    Log Out
                  </div>
                </div>
              ) : (
                <div className="flex ">
                  <Link
                    className={`${
                      route === "signup" ? "text-sky-400 " : "text-khaki "
                    } px-3 py-2 rounded-md text-md font-bold hover:text-navy hover:bg-sky-400 bg-navy  transition duration-300 ease-in-out`}
                    to="/signup"
                  >
                    Sign Up
                  </Link>
                  <Link
                    to="/signin"
                    className={`${
                      route === "signin" ? "text-sky-400 " : "text-khaki "
                    } px-3 py-2 rounded-md text-md font-bold bg-navy hover:text-navy hover:bg-sky-400  transition duration-300 ease-in-out`}
                  >
                    Sign In
                  </Link>
                </div>
              )}
            </div>
          </div>
          {/* hamburger button */}
          <div className="flex -mr-2 md:hidden  ">
            <button
              type="button"
              onClick={handleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-khaki hover:text-sky-400 hover:bg-khaki transition-all duration-300    "
            >
              <span className="sr-only"> Open Main Menu</span>
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {/* mobile menu */}
      {open ? (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              className="text-khaki hover:bg-sky-400  block px-3 py-2 rounded-md text-base font-bold transition-all duration-300"
              to="/"
              onClick={handleMenu}
            >
              Home
            </Link>
            <Link
              className="text-khaki hover:bg-sky-400  block px-3 py-2 rounded-md text-base font-bold transition-all duration-300"
              to="/"
              onClick={handleMenu}
            >
              Projects
            </Link>
            {user
              ? navLinks
                  .filter((nav) => nav.loggedIn)
                  .map((link, index) => (
                    <Link
                      key={index}
                      className="text-khaki hover:bg-sky-400  block px-3 py-2 rounded-md text-base font-bold transition-all duration-300"
                      to={
                        link.label === "Profile"
                          ? `${link.href}/${user._id}`
                          : link.href
                      }
                      onClick={handleMenu}
                    >
                      {link.label}
                    </Link>
                  ))
              : navLinks
                  .filter((nav) => !nav.loggedIn)
                  .map((link, index) => (
                    <Link
                      key={index}
                      className="text-khaki hover:bg-sky-400 block px-3 py-2 rounded-md text-base font-bold transition-all duration-300"
                      to={link.href}
                      onClick={handleMenu}
                    >
                      {link.label}
                    </Link>
                  ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Nav;
{
  /* <header className=" padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="leading-normal text-lg font-montserrat text-slate-gray"
            >
              {item.label}
            </Link>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header> */
}
