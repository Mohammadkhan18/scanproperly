import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return <div className="container mx-auto px-14 py-[24px]">{children}</div>;
};

export default layout;
