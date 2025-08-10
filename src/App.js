import { useState, useEffect, useContext, Suspense, lazy } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import Loader from "./components/Loader";
import { demoUser } from "./constants";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/////Auth Comps
const SignUp = lazy(() => import("./components/Auth/Signup"));
const SignIn = lazy(() => import("./components/Auth/Signin"));
////Projects
const Projects = lazy(() => import("./components/Projects/Projects"));
const SingleProject = lazy(() => import("./components/Projects/SingleProject"));
const AddProject = lazy(() => import("./components/Projects/AddProject"));
//Profile
const Profile = lazy(() => import("./components/Profile/Profile"));

///////
const Home = lazy(() => import("./components/Home"));
//////Nav
const Nav = lazy(() => import("./components/Nav"));
const App = () => {
  const { user, setUser, isAdmin, setIsLoading, isLoading } =
    useContext(UserContext);
  useEffect(() => {
    setUser(demoUser);
  }, []);
  return (
    <Suspense fallback={<Loader />}>
      <ToastContainer />
      <Nav />
      <Routes>
        {/* <Route path="/" element={<Home />} exact /> */}
        <Route path="/" element={<Projects />} />
        <Route path="/project/:id" element={<SingleProject />} />
        <Route path="/add-project" element={<AddProject />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Suspense>
  );
};

export default App;
