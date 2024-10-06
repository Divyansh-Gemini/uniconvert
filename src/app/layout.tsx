import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "../styles/globals.css";
import { ReduxProvider } from "@/store/provider";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "uniConvert",
  description:
    "A tool for converting between various Unicode and non-Unicode fonts.",
  keywords: [
    "uniconvert",
    "unicode converter",
    "unicode",
    "non-unicode",
    "font converter",
    "tamil",
    "telugu",
    "bamini",
    "priyanka",
    "prabhava",
    "anusha",
    "nirmala UI",
    "subhadra",
    "latha",
  ],
  authors: [{ name: "Divyansh Gemini", url: "https://www.divyanshgemini.dev" }],
  icons: {
    icon: "/favicon.ico",
  },
};

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${archivo.className} bg-snowy_day text-midnight_blue dark:bg-black`}
      >
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
};

export default RootLayout;
