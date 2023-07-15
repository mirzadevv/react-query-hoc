import React from "react";
import useQueryFetch from "../hooks/useQueryFetch";

export const withDataFetching = (WrappedComponent, fetchData) => {
  const WithDataFetching = (props) => {
    const { data, errorMessage, loadingMessage } = useQueryFetch(
      fetchData.name,
      fetchData
    );

    if (loadingMessage) {
      return <div>{loadingMessage}</div>;
    }

    if (errorMessage) {
      return <div>{errorMessage}</div>;
    }

    return <WrappedComponent {...props} data={data} />;
  };

  return WithDataFetching;
};
