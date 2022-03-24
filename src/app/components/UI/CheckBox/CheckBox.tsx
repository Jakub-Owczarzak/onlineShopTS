import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { SearchContext } from "context/searchContext";
import React, { useState, useContext } from "react";

interface CheckBoxProps<T> {
  label: string;
  handleCheck: () => void;
}

export const CheckBox = () => {
  const { active, promo, handleCheckBoxChange } = useContext(SearchContext);
  return (
    <FormGroup
      sx={{
        width: { xs: "100%", md: "35%", xl: "25%" },
        display: "flex",
        flexDirection: "row",
      }}
    >
      <FormControlLabel
        onChange={(e) => handleCheckBoxChange(e)}
        control={
          <Checkbox
            {...{ inputProps: { "aria-label": "active" } }}
            checked={active}
          />
        }
        label="Active"
      />
      <FormControlLabel
        onChange={(e) => handleCheckBoxChange(e)}
        control={
          <Checkbox
            {...{ inputProps: { "aria-label": "promo" } }}
            checked={promo}
          />
        }
        label="Promo"
      />
    </FormGroup>
  );
};
