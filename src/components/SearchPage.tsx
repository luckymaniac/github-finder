import { Box } from "@mui/material";
import React, { useState } from "react";
import { IVariables } from "../utils/types";
import SearchInputs from "./SearchInputs";
import SearchResult from "./SearchResult";

export default () => {
  const [variables, setVariables] = useState<IVariables>();

  return (
    <Box
      sx={{
        padding: 2,
      }}
    >
      <SearchInputs onSearch={setVariables} />
      {variables && <SearchResult variables={variables} />}
    </Box>
  );
};
