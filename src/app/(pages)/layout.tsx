import Header from "@/components/layout/Header";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "react-hot-toast";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {/* Vercel Analytics */}
      <Analytics />

      <Header />

      <Toaster
        position="top-right"
        reverseOrder={false}
        containerClassName="mt-14"
      />

      <main className="w-11/12 xl:w-3/4 mx-auto py-10">{children}</main>
    </>
  );
};

export default Layout;
