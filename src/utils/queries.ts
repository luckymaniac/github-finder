import { gql } from "@apollo/client";

export const SEARCH_QUERY = gql`
  query SearchQuery($query: String!, $type: SearchType!) {
    search(query: $query, type: $type, first: 50) {
      repositoryCount
      userCount
      nodes {
        ... on User {
          email
          login
          url
          avatarUrl
          bio
        }
        ... on Repository {
          name
          homepageUrl
          url
          createdAt
        }
      }
    }
  }
`;
