const express = require('express');

const app = express();
const port = 8080;
const bp = require('body-parser');

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

app.use('/', require('./routers/users'));

app.listen(port,()=> {
  console.log(`server is running on port ${port}`);
});