import React, { createContext, useContext, useState } from "react";
interface GlobalContextType {
  head: {
    current: React.ReactNode;
    set: React.Dispatch<React.SetStateAction<React.ReactNode>>;
  };
}

const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType);

export function GlobalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [head, setHead] = useState<React.ReactNode>();

  const value: GlobalContextType = {
    head: { current: head, set: setHead },
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}

export default function useGlobalContext() {
  return useContext(GlobalContext);
}
