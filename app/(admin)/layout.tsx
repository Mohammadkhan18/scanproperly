"use client";

import AdminNavbar from "./adminComponents/layout/AdminNavbar";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <AdminNavbar />
        {children}
      </QueryClientProvider>
    </div>
  );
}
