import React, { createContext, useState } from "react";

export const AppContent = createContext();

export function AppContextProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const value = {
    backendUrl,
    loggedIn,
    setLoggedIn,
    userData,
    setUserData,
  };

  return (
    <AppContent.Provider value={value}>
      {children}
    </AppContent.Provider>
  );
}
