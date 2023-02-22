import { useState, useCallback } from "react";

export const useSearch = () => {
  const [queryStr, setQuery] = useState({
    page: 1,
    query: "",
    includeAdult: false,
  });

  const setSearchPage = useCallback(
    (page) => {
      setQuery({
        ...queryStr,
        page,
      });
    },
    [queryStr]
  );

  const setSearchFilter = useCallback(
    (searchFields) => {
      setQuery({
        ...queryStr,
        ...searchFields,
        query: searchFields.query,
      });
    },
    [queryStr]
  );
  return {
    queryStr,
    setSearchPage,
    setSearchFilter,
  };
};
