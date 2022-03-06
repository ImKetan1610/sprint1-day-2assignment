const express = require("express");
const app = express();

app.get("",(req,res) => {
    res.send("Hello");
})

app.get("/books", (req,res) =>{
    res.send([{name:"Clean Code: By Robert C. Martin ",
    Description:"A Clean Code should be properly readable, well structured so that it could be reused and debug easily"},{
        name:" The Mythical Man-month: By Frederick Brooks ", Description:"The main theme of this book is “Brooks' Law  which says 'adding manpower to a late software project makes it later'."},{name:"The Pragmatic Programmer: Your Journey to Mastery",Description:"The book presents development methodologies and caveats, analogies and short stories too, for example, the broken windows theory, the story of the stone soup, or the boiling frog."},{name:"The Art of Computer Programming",Description:"The book begins with basic programming concepts and techniques, explores various programming algorithms and describes their analysis efficiently and then focuses particularly on the representation of information inside a computer"}])
})

app.listen(1234,()=>{
    console.log("listening on 1234 port")
})