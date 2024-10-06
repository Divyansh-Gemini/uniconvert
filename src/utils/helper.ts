import toast from "react-hot-toast";
import { toOppositeCase } from "./Formatter";

// copy text to clipboard
export const copyToClipboard = (text: string): void => {
  navigator.clipboard.writeText(text).then(
    () => {
      toast.success("Text copied to clipboard");
    },
    (err: any) => {
      toast.error("Could not copy text");
      console.error("Could not copy text: ", err);
    }
  );
};

// convert text from one font to another
export const convertText = (
  fromFont: string,
  toFont: string,
  text: string
): string => {
  if (fromFont === toFont) {
    return text;
  }

  let convertedText: string = "";

  // TODO: Implement text conversion logic
  convertedText = `CONVERSION LOGIC IS NOT IMPLEMENTED YET!!
  --> FROM FONT: ${fromFont}
  --> TO FONT: ${toFont}
  --> TEXT: ${text}
  
  Till then changing the case:
  ${toOppositeCase(text)}
  `;

  return convertedText;
};
