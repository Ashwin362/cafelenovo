const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()
const $ = require("jquery");
require("./db/conn")

const Register = require("./models/register")
const Resvertion = require("./models/contact")

const { json } = require('express');
const { table } = require('console');
const port = process.env.port || 8007
const static_path = path.join(__dirname, "../public")
const templete_path = path.join(__dirname, "../templetes/views")
const partials_path = path.join(__dirname, "../templetes/partials")
app.use('/jquery', express.static(path.join(__dirname, '/public/js')));

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", templete_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
  res.render('register')
})
app.get("/index", (req, res) => {
  res.render('index')
})
app.get("/resvertion", (req, res) => {
  res.render('resvertion')
})
app.post("/index", (req, res) => {
  res.render('index')
})

app.post("/register", async (req, res) => {
  try {
    const password = req.body.password;
    const cpassword = req.body.confirmpassword;
    if (password === cpassword) {
      const registerEmloyee = new Register({
        firstname: req.body.firstname,
        username: req.body.username,
        number: req.body.number,
        email: req.body.email,
        password: req.body.password,
        cpassword: req.body.confirmpassword,
      })
      const registered = await registerEmloyee.save();
      res.status(201).render('index')
    }
    else {
      res.send("paasword nort match")

    }
  }
  catch (error) {
    res.send(error)
  }

})
app.post("/contact", async (req, res) => {
  try {
    const numberguests = req.body.numberguests;
    if (numberguests) {
      const resvertionEmloyee = new Resvertion({
        name: req.body.name,
        email: req.body.email,
        numberguests: req.body.numberguests,
        date: req.body.date,
        time: req.body.time,
        phone: req.body.phone,
        message: req.body.message,
      })
      const usered = await resvertionEmloyee.save();
      res.status(201).render('resvertion')
    }
    else {
      res.render('logine')
    }
  }
  catch (error) {
    res.send(error)
  }
})






app.get("/logine", (req, res) => {
  res.render('logine')
})
app.listen(8008, () => {
  console.log("server is running")
})