import { Metadata } from "next";
import Header from "@/components/layout/Header";
import React from "react";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "Page Not Found",
};

const NotFound: React.FC = async () => {
  return (
    <>
      <Header />

      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold">Page Not Found</h1>
      </main>
    </>
  );
};

export default NotFound;
