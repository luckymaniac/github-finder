import { useQuery } from "@apollo/client";
import { Box } from "@mui/material";
import React from "react";
import { SEARCH_QUERY } from "../utils/queries";
import {
  IRepository,
  ISearchResult,
  ISearchType,
  IUser,
  IVariables,
} from "../utils/types";
import RepoCard from "./RepoCard";
import UserCard from "./UserCard";

interface IProps {
  variables: any;
}

export default ({ variables }: IProps) => {
  const { loading, data } = useQuery<ISearchResult, IVariables>(SEARCH_QUERY, {
    variables,
  });

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      {loading && (
        <h4 style={{ textAlign: "center", marginTop: 30, flex: 1 }}>
          LOADING...
        </h4>
      )}

      {data?.search?.nodes?.map((item: IUser | IRepository, index: number) => (
        <div key={index} style={{ padding: 16 }}>
          {variables.type === ISearchType.user && (
            <UserCard data={item as IUser} />
          )}
          {variables.type === ISearchType.repository && (
            <RepoCard data={item as IRepository} />
          )}
        </div>
      ))}
    </Box>
  );
};
