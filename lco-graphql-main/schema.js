import { buildSchema } from "graphql"


const schema = buildSchema(`
    type Book
    {
        id: ID
        book_name: String
        book_author: String
        pages: Int
        chapters: [String]
    }

    type Author
    {
        id: ID
        author_name: String
        author_phone: String
        author_email: String
    }

    type Query
    {
        getAuthor(id: ID): Author
        getAuthors: [Author]
    }

    input AuthorUpdate 
    {
        id: ID
        author_name: String
        author_phone: String
        author_email: String
    }

    input AuthorInput
    {
        id: ID
        author_name: String!
        author_phone: String!
        author_email: String!
    }

    type Mutation
    {
        createAuthor(input: AuthorInput): Author
        AuthorUpdate(id: ID!, input: AuthorUpdate): Author
    }
`)

export default schema