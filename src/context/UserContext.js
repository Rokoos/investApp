import { createContext, useState, useEffect } from "react";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({});
  // console.log("filters", filters);

  // const login = () => {
  //   fetch("/signin").then((res) => {
  //     setIsAuth(true);
  //     setUser(res.user);
  //   });
  // };

  const value = {
    user,
    setUser,
    isAuth,
    setIsAuth,
    isLoading,
    setIsLoading,
    filters,
    setFilters,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
