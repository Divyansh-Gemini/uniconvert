import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import fonts from "@/data/fonts";
import { FONT_BAMINI, FONT_LATHA, LANGUAGE_TAMIL } from "@/utils/Constants";

const initialState: Converter = {
  language: LANGUAGE_TAMIL,
  filteredFonts: fonts.filter((font) => font.language === LANGUAGE_TAMIL),
  font1: FONT_BAMINI,
  font2: FONT_LATHA,
  text1: "",
  text2: "",
};

const converterSlice = createSlice({
  name: "converter",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
      state.filteredFonts = fonts.filter(
        (font) => font.language === action.payload
      );
    },

    setFilteredFonts: (state, action: PayloadAction<Font[]>) => {
      state.filteredFonts = action.payload;
    },

    setFont1: (state, action: PayloadAction<string>) => {
      state.font1 = action.payload;
    },

    setFont2: (state, action: PayloadAction<string>) => {
      state.font2 = action.payload;
    },

    setText1: (state, action: PayloadAction<string>) => {
      state.text1 = action.payload;
    },

    setText2: (state, action: PayloadAction<string>) => {
      state.text2 = action.payload;
    },
  },
});

export const {
  setLanguage,
  setFilteredFonts,
  setFont1,
  setFont2,
  setText1,
  setText2,
} = converterSlice.actions;

export default converterSlice.reducer;
