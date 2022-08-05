# GraphQL and ExpressJS CRUD

</br>

Clone the following repository: ```git clone https://github.com/hiteshchoudhary/lco-graphql.git``` <br/>
Execute the following command for installing express, graphql and uuid packages: ```npm install express graphql express-graphql uuid --save``` <br/>
Execute the following command for installing babel-cli package: ```npm install -g babel-cli --save``` </br> </br>


> A _mutation_ is used to execute create, update and delete enteries. A _query_ is used to fetch single or multiple enteries </br>

</br>

***Execute following queries in Graphiql***
<br/>Go to this link to open Graphiql --> http://localhost:8080/graphql

### CREATE
```
mutation  {
  createAuthor(input: {
    author_name: "Random Author",
    author_phone: "9836726822",
    author_email: "abcd@gmail.com"
  }) {
    id
    author_name
    author_phone
    author_email
  }
}
```

</br>

### UPDATE
```
mutation {
  updateAuthor(id: "89aabcaa-049b-4a6f-b36d-38b8873272c3", input: {
    author_name: "abcdef"
    author_phone: "9090909090"
    author_email: "ahbgja@jhdbs.com"
  }) {
    author_name
    author_phone
    author_email
  }
}
```

</br>

### DELETE
```
mutation {
  deleteAuthor(id: "c53b57d2-f58f-4e73-9463-b69db1973926") {
    id
    author_name
    author_phone
    author_email
  }
}
```

</br>

### GET ONE ENTRY
```
query {
  getAuthor(id: "3ace47b4-6140-4381-8bb2-145b96e221d5") {
    author_name
    author_email
    author_name
  }
}
```

</br>

### GET ALL ENTRIES
```
query {
  getAuthors {
    id
    author_name
    author_phone
    author_email
  }
}
```

</br>For further reading: [GraphQL](https://graphql.org/graphql-js/running-an-express-graphql-server/ "GraphQL-ExpressJS Doc")
