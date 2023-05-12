import {
  Button,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import { ISearchType, IVariables } from "../utils/types";

export const SearchTypes = [ISearchType.user, ISearchType.repository];

interface IProps {
  onSearch: (value: IVariables) => void;
}

export default ({ onSearch }: IProps) => {
  const [type, setType] = useState<ISearchType>(ISearchType.user);
  const [query, setQuery] = useState<string>("");

  const handleSubmit = useCallback(() => {
    if (!query) {
      return;
    }

    onSearch({ type, query });
  }, [type, query]);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Paper variant="outlined" sx={{ display: "flex", padding: 2 }}>
        <RadioGroup
          value={type}
          row
          onChange={(e) => setType(e.target.value as unknown as ISearchType)}
        >
          {SearchTypes.map((value) => (
            <FormControlLabel
              key={value}
              control={<Radio />}
              value={value}
              label={value}
            />
          ))}
        </RadioGroup>
        <TextField
          label="Query"
          variant="outlined"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          sx={{ flex: 1, marginRight: 2, marginLeft: 2 }}
        />
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          Search
        </Button>
      </Paper>
    </form>
  );
};
