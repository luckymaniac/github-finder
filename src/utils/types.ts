export enum ISearchType {
  user = "USER",
  repository = "REPOSITORY",
}

export interface IVariables {
  query: string;
  type: ISearchType;
}

export interface IUser {
  avatarUrl: string;
  url: string;
  login: string;
}

export interface IRepository {
  name: string;
  url: string;
}

export interface ISearchResult {
  search: {
    nodes: IUser[] | IRepository[];
  };
}
