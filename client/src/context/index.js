import { useReducer, createContext } from "react";
import { useDefaultContext } from "./defaultContext";
import { saveToLocalStorage } from "../utils/saveToLocalStorage";
import { STORAGE_KEY } from "../config/constants";

export const AppContext = createContext();

let reducer = (state, action) => {
  switch (action.type) {
    case "setLocale":
      saveToLocalStorage(STORAGE_KEY, action.locale);
      return { ...state, locale: action.locale };
    default:
      return state;
  }
};

export const AppContextProvider = ({ children }) => {
  const defaultContext = useDefaultContext();
  const [state, dispatch] = useReducer(reducer, defaultContext);
  const value = { state, dispatch };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
