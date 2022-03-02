import React from "react";

function SelectInput({ name, value, onChange, children }) {
  return (
    <select
    name={name}
      value={value}
      onChange={onChange}
      className="form-select form-select-md mb-3 mt-3"
      aria-label="form-select-md example"
    >
      {children}
    </select>
  );
}

export default SelectInput;
