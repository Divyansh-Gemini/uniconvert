import React from "react";

const Textarea: React.FC<TextareaProps> = ({
  id,
  value,
  placeholder,
  onChange,
  className = "",
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <textarea
      id={id}
      className={`textarea ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Textarea;
