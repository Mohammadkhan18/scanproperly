import React from "react";
import Loader from "./components/shared/Loader";

const loading = () => {
  return (
    <div className="h-[80vh] w-full flex items-center justify-center">
      <Loader />
    </div>
  );
};

export default loading;
