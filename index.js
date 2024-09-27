// express
import express from "express"
const app = express()
const port = 3000;

// API url
const api_url = "http://localhost:4000"

// axios
import axios from "axios";

// body parser
import bodyParser from "body-parser";

// middleware usage
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

// view engine
app.set("view engine", "ejs");

// ENPOINTS -- as seen in index.ejs & modify.ejs

// Get Home page of blog
app.get("/", async (req, res) => {
    try {
        // get blogs to render on home page
        const response = await axios.get(`${api_url}/posts`);
        // response.data returns the data stored in the db as array of objects
        console.log(response.data)
        res.render("index", { posts: response.data });
    }
    catch (err) {
        res.status(500).json({ message: "Error fetching posts" });
    }
})

// New blog post page = modify.ejs
app.get("/new", (req, res) => {
    res.render("modify", {
        heading: "New Post",
        submit: "Create New Post"
    })
})

// Edit blog page = modify.ejs
app.get("/edit/:id", async (req, res) => {
    try {
        // api to get details of the specific blog -- response = json of specific blog deets
        const response = await axios.get(`${api_url}/posts/${req.params["id"]}`)
        console.log(response.data);
        res.render("modify", {
            heading:"Edit Post",
            submit: "Update Post",
            post : response.data
        })
    }
    catch(err){
        res.status(500).json({message: "Error fetching the specified post" })
    }
})

// Submit the new blog post 
// app.POST necessary because --> form method="post" & req.body doesn't work without post
app.post("/api/postBlog", async (req,res)=>{
    try{
        // api (Post req) to post blog details into the db through api -- send entire body input by user
        const response = await axios.post(`${api_url}/posts`, req.body);
        console.log(response)
        res.redirect("/");
    }
    catch(err){
        res.status(500).json({message: "Error creating new post. Please try again" })
    }
})

// Edit existing post
// app.POST necessary because --> form method="post" & req.body doesn't work without post
app.post("/api/posts/:id" , async (req,res)=>{
    try{
        // api (Patch req) to update the existing post in the db through api -- send entire body input by user
        const response = await axios.patch(`${api_url}/posts/${req.params["id"]}`,req.body);
        console.log(response.data)
        res.redirect("/");
    }catch(err){
        res.status(500).json({message: "Error updating the post. Please try again" })
    }
})

// Delete a post
app.get("/api/posts/delete/:id" , async (req,res)=>{
    try{
        // api (Delete req) to delete the specified post
        const response = await axios.delete(`${api_url}/posts/${req.params["id"]}`);
        console.log(response.data)
        res.redirect("/");
    }catch(err){
        res.status(500).json({message: "Error Deleting post" })
    }
})

// Listen on port 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})