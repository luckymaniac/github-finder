import { Avatar, Button, Card, CardHeader } from "@mui/material";
import React from "react";
import { IUser } from "../utils/types";

interface IProps {
  data: IUser;
}

export default ({ data }: IProps) => (
  <Card sx={{ width: 345 }}>
    <CardHeader
      avatar={<Avatar src={data.avatarUrl} />}
      title={data.login}
      action={
        <Button variant="text" href={data.url} target="_blank">
          Open
        </Button>
      }
    />
  </Card>
);
