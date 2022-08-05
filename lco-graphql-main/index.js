// Start your es6 scripts here

import express from "express"
import graphql, { graphqlHTTP } from "express-graphql"
import schema from "./schema";
import resolvers from "./resolvers";

const app = express();

app.get("/", (req, res) =>
{
    res.send("Running")
})

const root = resolvers;

app.use("/graphql", graphqlHTTP(
    {
        schema: schema,
        rootValue: root,
        graphiql: true
    })
)

app.listen(8080, ()=> console.log("Running at 8080"));