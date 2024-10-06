"use client";

import React from "react";
import fontLanguages from "../../data/font-languages";
import { setLanguage } from "@/store/features/converterSlice";
import { RootState } from "@/store";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Dropdown from "../form-fields/Dropdown";

const LanguageSelector: React.FC = () => {
  const dispatch = useAppDispatch();

  // get language from store
  const language = useAppSelector(
    (state: RootState) => state.converter.language
  );

  // set language in store
  const handleLanguageChange = (value: string) => {
    dispatch(setLanguage(value));
  };

  return (
    <Dropdown
      options={fontLanguages}
      selectedValue={language}
      onChange={handleLanguageChange}
      name="converter-language"
      id="converter-language"
    />
  );
};

export default LanguageSelector;
