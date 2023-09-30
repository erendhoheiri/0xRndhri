import React, { createContext, useMemo, useState, useEffect } from 'react';

const IsAdminContext = createContext();

const IsAdminContextProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const initialValue = useMemo(
    () => ({
      isAdmin,
      loginAsAdmin: () => {
        if (typeof window !== 'undefined') {
          localStorage.setItem('admin', 'true');
        }
      },
      logoutAsAdmin: () => {
        if (typeof window !== 'undefined') {
          localStorage.removeItem('admin');
          setIsAdmin(null);
        }
      }
    }),
    [isAdmin]
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('admin')) {
        setIsAdmin(true);
      }
    }
  }, []);

  return (
    <IsAdminContext.Provider value={initialValue}>
      {children}
    </IsAdminContext.Provider>
  );
};

export { IsAdminContext, IsAdminContextProvider };
