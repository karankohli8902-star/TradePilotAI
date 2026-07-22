import { createContext, useState } from "react";

export const MarketContext = createContext();

export function MarketProvider({ children }) {
  const [selectedMarket, setSelectedMarket] = useState("NIFTY");

  return (
    <MarketContext.Provider
      value={{ selectedMarket, setSelectedMarket }}
    >
      {children}
    </MarketContext.Provider>
  );
}