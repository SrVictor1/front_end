import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://vast-escarpment-34511.herokuapp.com/api/graphiql",
});

export default client;
