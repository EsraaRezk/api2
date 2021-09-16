const express = require('express');
const router = express.Router;

const users = [{ name: 'Tony', email: 'tony@email.com' }];

app.get('/', (req,res)=> {
res.send('Your Express app');
});

app.get('/users', (req,res) => {
  res.json({ok:true, users});
});

app.get('/user/:name', (req,res) => {
  const {name} = req.params;
  const user = users.filter((user) => user.name === name)[0];
  res.json({ok:true, user});
});


app.post('/adduser', (req, res) => {
  const {name, email} = req.body;
  if(name&&email){
    users.push({name,email});
    res.json({ok:true, users});
  }
});



module.exports = router;