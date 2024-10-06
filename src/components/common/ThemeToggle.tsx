"use client";

import { RootState } from "@/store";
import { toggleTheme } from "@/store/features/themeSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { mdiBrightness6 } from "@mdi/js";
import Icon from "@mdi/react";
import { useEffect } from "react";

const ThemeToggle: React.FC = () => {
  const dispatch = useAppDispatch();

  // get theme from store
  const theme = useAppSelector((state: RootState) => state.theme.mode);

  // set theme in store
  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  // update theme
  useEffect(() => {
    // add/remove dark class to html element
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // save theme in localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div onClick={handleThemeToggle} className="cursor-pointer">
      <Icon path={mdiBrightness6} title="Theme" size={1} color="#e9e5de" />
    </div>
  );
};

export default ThemeToggle;
