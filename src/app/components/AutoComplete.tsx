"use client";
import React, { useState } from "react";
import { Autocomplete as SearchBar } from "@mantine/core";

interface dataProp {
  data: [{ id: number; value: string }] | never[];
  placeholder: string;
  onItemSelected?: any;
}

const filterData = (data: [{ id: number; value: string }] | never[]) => {
  return data?.map((item: any) => item?.value);
};
const AutoComplete = ({ data, placeholder, onItemSelected }: dataProp) => {
  let listData = filterData(data);
  const [value, setValue] = useState("");

  const handleItemSubmit = (item: any) => {
    onItemSelected(item);
    setTimeout(() => {
      setValue("");
    }, 100);
  };

  return (
    <SearchBar
      //   label="100 000 options autocomplete"
      placeholder={placeholder || "Use limit to optimize performance"}
      limit={5}
      data={listData}
      value={value} // Controlled value
      onChange={(val) => setValue(val)} // Update state when value changes
      onOptionSubmit={handleItemSubmit}
      defaultValue={""}
    />
  );
};

export default AutoComplete;
