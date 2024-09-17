import Navbar from "../components/layout/Navbar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
  types: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

// import Navbar from "../components/layout/Navbar";
// import { ReactNode } from "react";

// interface LayoutProps {
//   children: ReactNode;
//   types: ReactNode;
// }

// export default function PublicLayout({ children, types }: LayoutProps) {
//   return (
//     <div>
//       <Navbar />
//       {children}
//     </div>
//   );
// }
