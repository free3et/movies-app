import { useSearchParams } from "react-router-dom";
import { getFromLocalStorage } from "../utils/saveToLocalStorage";
import { LOCALES } from "../config/constants";
import { STORAGE_KEY } from "../config/constants";

export const useDefaultContext = () => {
  let [searchParams] = useSearchParams();

  return {
    locale:
      getFromLocalStorage(STORAGE_KEY) ||
      searchParams.get("locale") ||
      LOCALES.ENGLISH,
  };
};
