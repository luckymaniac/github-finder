import { ApolloProvider } from "@apollo/client";
import React from "react";
import "./App.css";
import SearchPage from "./components/SearchPage";
import { client } from "./utils/api";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <SearchPage />
      </div>
    </ApolloProvider>
  );
}

export default App;
