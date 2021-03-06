const express = require("express");
const bodyParser = require("body-parser");
const User = require("../database/user.js");
const Company = require("../database/Company.js");
const Name = require("../database/name.js");
const Chat = require("../database/chatschema.js");
const bcrypt = require('bcryptjs');

const app = express();
const PORT = 3000;
const path = require("path");

app.use(express.static("client/dist"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/sendm", (req, res) => {
  console.log(req.body.msg);
  var obj = { msg: req.body.msg };
  const newM = new Chat(obj);
  newM.save((err, result) => {
    res.send(result);
  });
});

app.get("/getall", function (req, res) {
  User.find({}, function (error, result) {
    if (error) console.log("this is error ====>", error);
    res.send(result);
  });
});


app.post('/login', async (req, res) => {
  try {
    const { name, password } = req.body
    const user = await User.findOne({ name })
    const company = await Company.findOne({ name })
    if (user) {
      const userCompare = await bcrypt.compare(password, user.password)
      if (userCompare) return res.status(200).send(user)
    }
    if (company) {
      const companyCompare = await bcrypt.compare(password, company.password)
      if (companyCompare) return res.status(200).send(company)
    }
    return res.status(404).send("NOT FOUND")
  } catch (error) {
    res.status(400).json({ error })
  }
})

app.post("/signup/user", async (req, res) => {
  try {
    let {
      name,
      password,
      imageUrl,
      key,
    } = req.body
    password = await bcrypt.hash(password, 10)
    const newUser = new User({ name, password, imageUrl, key });
    await newUser.save()
    res.send(newUser)
  } catch (error) {
    res.status(404).send("UNAUTHORIZED")
  }
});

app.post("/signup/company", async (req, res) => {
  try {
    let {
      name,
      password,
      imageUrl,
      key,
    } = req.body
    password = await bcrypt.hash(password, 10)
    const newCompany = new Company({ name, password, imageUrl, key  });
    await newCompany.save()
    res.send(newCompany)
  } catch (error) {
    res.status(404).send("UNAUTHORIZED")
  }
});

app.post("/update", (req, res) => {
  var newName = Object.keys(req.body)[0];
  Name.updateOne({ key: "abc" }, { $set: { hashem: newName } }, function (err,result) {
    if (err) console.log(err);
  });
});

app.get("/getmsg", function (req, res) {
  Chat.find({}, function (error, result) {
    if (error) console.log("this is error ====>", error);
    res.send(result);
  });
});





app.get('/company', function (req, res) {
  Company.find({}, function (err, result) {
    err ? console.log(err) : res.send(result);
  })
})

app.post("/pushTodo", (req, res) => {
  console.log(req.body.todo);
  Name.find({}, function (err, result) {
    // console.log('this is === > ', result[0].hashem)
    User.updateOne(
      { name: result[0].hashem },
      { $push: { myToDoList: req.body.todo } },
      function (err, result) {
        if (err) console.log(err);
      }
    );
  });
});

app.get("/getfr", (req, res) => {
  Name.find({ key: "abc" }, function (err, data) {
    User.find({ name: data[0].hashem }, function (err, result) {
      User.find({ key: result[0].key }, function (err, ndata) {
        res.send(ndata);
      });
    });
  });
});

app.post("/SEND", (req, res) => {
  console.log(req.body);
  var iSend = "from " + req.body.myname + " : " + req.body.tosend;
  User.updateOne(
    { name: req.body.friend },
    { $push: { myToDoList: iSend } },
    function (err, result) {
      if (err) console.log(err);
    }
  );
});


app.get("/getuser", (req, res) => {
  Name.find({ key: "abc" }, function (err, data) {
    User.find({ name: data[0].hashem }, function (err, result) {
      res.send(result);
    });
  });
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
