"use client";

import React from "react";
import { toTitleCase } from "@/utils/Formatter";

const Dropdown = <T extends string | number>({
  options,
  values,
  selectedValue,
  onChange,
  className = "",
  name = "dropdown",
  id = "dropdown",
}: DropdownProps<T>) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as T);
  };

  return (
    <select
      className={`dropdown ${className}`}
      name={name}
      id={id}
      value={selectedValue}
      onChange={handleChange}
    >
      {options.map((option, index) => (
        <option key={index} value={values[index]}>
          {toTitleCase(option.toString())}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
