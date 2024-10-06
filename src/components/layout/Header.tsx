import React from "react";
import Logo from "../common/Logo";
import LanguageSelector from "../feature/LanguageSelector";
import ThemeToggle from "../common/ThemeToggle";

const Header: React.FC = () => {
  return (
    <header className="header responsive-bgx">
      <Logo />

      <div className="flex items-center gap-5">
        <ThemeToggle />
        <LanguageSelector />
      </div>
    </header>
  );
};

export default Header;
