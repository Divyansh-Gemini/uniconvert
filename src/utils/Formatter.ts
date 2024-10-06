// convert text to title case
export const toTitleCase = (text: string): string => {
  return text
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

// convert text to lower case
export const toLowerCase = (text: string): string => {
  return text.toLowerCase();
};

// convert text to upper case
export const toUpperCase = (text: string): string => {
  return text.toUpperCase();
};

// convert the text in opposite case
export const toOppositeCase = (text: string): string => {
  return text
    .split("")
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join("");
};
