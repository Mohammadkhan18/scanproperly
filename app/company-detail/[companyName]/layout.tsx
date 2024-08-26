import React, { ReactNode } from "react";

const layout = ({
  children,
  instanFunding,
}: {
  children: ReactNode;
  instanFunding: ReactNode;
}) => {
  return (
    <div className="">
      {children}
      <div>{instanFunding}</div>
    </div>
  );
};

export default layout;
