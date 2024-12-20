"use-client";
import React, { useState } from "react";
import { Chip, Group } from "@mantine/core";

interface ChipProps {
  data: any;
  value?: string;
  onPress?: (val: any) => void;
  onChange?: any;
}

const ChipComponent = ({ data, value, onPress, onChange }: ChipProps) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
      {data.map((item: any) => (
        <Chip
          key={item?.id}
          value={""}
          checked={item?.isSelected}
          onClick={() => {
            if (typeof onPress === "function") {
              onPress(item.value); // Safely invoke onPress
            }
          }}
        >
          {item?.value}
        </Chip>
      ))}
    </div>
  );
};

export default ChipComponent;
