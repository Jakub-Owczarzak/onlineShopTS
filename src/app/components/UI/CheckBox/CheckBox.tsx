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
        width: { xs: "100%", md: "60%" },
        display: "flex",
        flexDirection: "row",
        paddingLeft: { xs: "0", md: "20px" },
      }}
    >
      <FormControlLabel
        onChange={(e) => handleCheckBoxChange(e)}
        control={
          <Checkbox
            {...{ inputProps: { "aria-label": "active", id: "active" } }}
            checked={active}
          />
        }
        label="Active"
      />
      <FormControlLabel
        onChange={(e) => handleCheckBoxChange(e)}
        control={
          <Checkbox
            {...{
              inputProps: {
                "aria-label": "promo",
                id: "promo",
              },
            }}
            checked={promo}
          />
        }
        label="Promo"
      />
    </FormGroup>
  );
};
