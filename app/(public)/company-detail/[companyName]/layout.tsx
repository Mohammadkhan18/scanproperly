import React, { ReactNode } from "react";

const layout = ({
  children,
  instant,
  selecter,
  getDeal,
  tableCard,
}: {
  children: ReactNode;
  instant: ReactNode;
  selecter: ReactNode;
  getDeal: ReactNode;
  tableCard: ReactNode;
}) => {
  return (
    <div className="constiner mx-auto px-14 py-[24px] ">
      {/* <div> {children}</div> */}
      <div className="flex bg-white rounded-[10px] p-5 gap-10">
        <div className="w-[342px]">{instant}</div>
        <div className="flex-1">
          <div>{selecter}</div>
          <div>{getDeal}</div>
          <div>{tableCard}</div>
        </div>
      </div>
    </div>
  );
};

export default layout;
