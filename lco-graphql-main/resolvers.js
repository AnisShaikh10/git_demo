import { v4 as uuidv4 } from "uuid"
let fs = require('fs');

class Author
{
    constructor(id, {
        author_name,
        author_phone,
        author_email
    })
    {
        this.id = id;
        this.author_name = author_name
        this.author_phone = author_phone
        this.author_email = author_email
    }
}

let author_holder = {}


const resolvers = 
{
    getAuthor: ({id})=>
    {
        return  new Author(id, author_holder[id])
    },
    // getAuthors : ()=>
    // {
    //     return new Author
    // },
    createAuthor: ({ input }) =>
    {
        let id = uuidv4();
        author_holder[id] = input;
        console.log(input)
        console.log(author_holder)

        // Making Connection and Inserting into database 
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://localhost:27017/";

        MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("MDP_LAB");
        var myobj = {_id:id, Author_Details: author_holder[id]};
        dbo.collection("Authors").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
        });

        // Creating Json File of Inserted Data.
        const { writeFile } = require('fs');
        const path = 'output.json';
        const config = author_holder;
        writeFile(path, JSON.stringify(config), (error) => {
            if (error) 
            {
                console.log('An error has occurred ', error);
                return;
            }
            console.log('Data written successfully to File');
        });

        return new Author(id, input)
    },

    AuthorUpdate: ({ id, input }) => {
        if(!author_holder[id]) 
            throw new Error("Id doesn't exist!")
            
            author_holder[id] = input

        fs.writeFile("data.json", JSON.stringify(author_holder), error => {
            if(error) throw error
            else console.log("Author updated!");
        })

        return new Author(id, input)
    },
}

export default resolvers;


