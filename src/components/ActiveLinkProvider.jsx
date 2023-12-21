import React, {createContext, useContext, useState} from "react";

const ActiveLinkContext = createContext();

export function useActiveLink() {
    return useContext(ActiveLinkContext);
}

export function ActiveLinkProvider({ children }) {
    const [activeLink, setActiveLink] = useState("Dashboard");
  
    return (
      <ActiveLinkContext.Provider value={{ activeLink, setActiveLink }}>
        {children}
      </ActiveLinkContext.Provider>
    );
}
