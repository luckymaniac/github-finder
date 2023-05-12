import { Button, Card, CardHeader } from "@mui/material";
import React from "react";
import { IRepository } from "../utils/types";

interface IProps {
  data: IRepository;
}

export default ({ data }: IProps) => (
  <Card sx={{ width: 345 }}>
    <CardHeader
      title={data.name}
      action={
        <Button variant="text" href={data.url} target="_blank">
          Open
        </Button>
      }
    />
  </Card>
);
