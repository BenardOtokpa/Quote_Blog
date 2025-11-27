const express = require("express");
const mongoose = require("mongoose");
const dontenv = require("dotenv");
const Quote = require("./models/quote");
//create express app
const app = express();
//configure dotenv
dontenv.config();
//use static files
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))


//Connect to database
mongoose.connect(process.env.MONGODB_URI).then(() => console.log("Connected to MongoDB")).catch((err) => console.log("Error connecting to MongoDB:", err));

//Routes 
app.get("/", async (req, res) => {
    const perPage = 6; // 3 columns × 2 rows
    const page = parseInt(req.query.page) || 1;

    const totalQuotes = await Quote.countDocuments();
    const quotes = await Quote.find()
        .sort({ createdAt: -1 })
        .skip((page - 1) * perPage)
        .limit(perPage);

    res.render("home", {
        quotes,
        current: page,
        pages: Math.ceil(totalQuotes / perPage)
    });
});


app.get('/add', (req, res)=> {
  res.render('add')
})

app.post('/add', async (req,res) => {
  const {quote, author} = req.body;
  await Quote.create({quote: quote, author: author});
  res.redirect('/');
})

app.get("/edit/:id", async (req, res) => {
    const quote = await Quote.findById(req.params.id);
    res.render("edit", { quote });
});


app.post('/edit/:id', async (req, res) =>{
  const {quote, author} = req.body
  await Quote.findByIdAndUpdate(req.params.id, {quote:quote, author: author})
  res.redirect('/');
})

app.post('/delete/:id', async (req, res ) => {
  await Quote.findByIdAndDelete(req.params.id)
  res.redirect('/');
})

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT} ...`);
});
