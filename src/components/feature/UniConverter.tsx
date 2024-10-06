"use client";

import Dropdown from "@/components/form-fields/Dropdown";
import { RootState } from "@/store";
import {
  setFont1,
  setFont2,
  setText1,
  setText2,
} from "@/store/features/converterSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import Textarea from "@/components/form-fields/Textarea";
import Icon from "@mdi/react";
import { mdiContentCopy } from "@mdi/js";
import { convertText, copyToClipboard } from "@/utils/helper";

const UniConverter: React.FC = () => {
  const dispatch = useAppDispatch();

  // get data from store
  const { filteredFonts, font1, font2, text1, text2 } = useAppSelector(
    (state: RootState) => state.converter
  );

  // set font1 / font2 in store
  const handleFontChange =
    (fontSetter: typeof setFont1 | typeof setFont2) => (value: string) => {
      dispatch(fontSetter(value));
    };

  // set text1 in store
  const handleText1Change = (value: string) => {
    dispatch(setText1(value));
    dispatch(setText2(convertText(font1, font2, value)));
  };

  // set text2 in store
  const handleText2Change = (value: string) => {
    dispatch(setText2(value));
    dispatch(setText1(convertText(font2, font1, value)));
  };

  // update font1 & font2 when filteredFonts changes
  useEffect(() => {
    if (filteredFonts.length > 0) {
      dispatch(setFont1(filteredFonts[0].name));
      dispatch(setFont2(filteredFonts[filteredFonts.length - 1].name));
    }
  }, [filteredFonts]);

  return (
    <div className="uniconverter-parent">
      {/* Left */}
      <div className="uniconverter-child">
        {/* Header */}
        <div className="uniconverter-header md:rounded-tl-3xl">
          {/* Font-1 Dropdown */}
          <Dropdown
            options={filteredFonts.map((font) => font.name)}
            selectedValue={font1}
            onChange={handleFontChange(setFont1)}
            name="converter-language"
            id="converter-language"
          />

          {/* Copy btn */}
          <div
            className="cursor-pointer"
            onClick={() => copyToClipboard(text1)}
          >
            <Icon path={mdiContentCopy} size={1} color="#e9e5de" />
          </div>
        </div>

        {/* Textarea-1 */}
        <Textarea
          id="textarea-1"
          className="max-md:rounded-b-3xl md:rounded-bl-3xl"
          placeholder="Enter text here"
          value={text1}
          onChange={handleText1Change}
        />
      </div>

      {/* Right */}
      <div className="uniconverter-child">
        {/* Header */}
        <div className="uniconverter-header md:rounded-tr-3xl ">
          {/* Font-2 Dropdown */}
          <Dropdown
            options={filteredFonts.map((font) => font.name)}
            selectedValue={font2}
            onChange={handleFontChange(setFont2)}
            name="converter-language"
            id="converter-language"
          />

          {/* Copy btn */}
          <div
            className="cursor-pointer"
            onClick={() => copyToClipboard(text2)}
          >
            <Icon path={mdiContentCopy} size={1} color="#e9e5de" />
          </div>
        </div>

        {/* Textarea-2 */}
        <Textarea
          id="textarea-2"
          className="max-md:rounded-b-3xl md:rounded-br-3xl"
          placeholder="Converted text will appear here"
          value={text2}
          onChange={handleText2Change}
        />
      </div>
    </div>
  );
};

export default UniConverter;
