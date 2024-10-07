// Layout
interface LayoutProps {
  children: ReactNode;
}

// ---------------------------------------- Components ----------------------------------------
// Dropdown
interface DropdownProps<T> {
  options: T[];
  values: T[];
  selectedValue: T;
  onChange: (value: T) => void;
  className?: string;
  name?: string;
  id?: string;
}

// Textarea
interface TextareaProps {
  id: string;
  value: string;
  placeholder: string;
  onChange?: (value: string) => void;
  className?: string;
  disabled?: boolean;
}

// ---------------------------------------- Data types ----------------------------------------
// Font
interface Font {
  name: string;
  language: string;
  type: string;
}

// ---------------------------------------- Redux ----------------------------------------
// Converter
interface Converter {
  language: string;
  filteredFonts: Font[];
  font1: string;
  font2: string;
  text1: string;
  text2: string;
}
