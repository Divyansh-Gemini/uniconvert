import React from "react";
import { Audiowide } from "next/font/google";
import Link from "next/link";

const audioWide = Audiowide({ subsets: ["latin"], weight: "400" });

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <span className={`${audioWide.className} text-2xl lg:text-4xl`}>
        uniConvert
      </span>
    </Link>
  );
};

export default Logo;
