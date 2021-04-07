import { useState } from "react";

const useLoading = () => {
  const [loading, setLoading] = useState();
  return {
    loading,
    setLoading,
  };
};

export default useLoading;
