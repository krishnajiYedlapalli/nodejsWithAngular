const express = require('express');
const app = express();

app.get('/',(req,res) =>{
    res.send('hit the server')
});

app.use('/', (req, res, next) => {
    console.log( Date.now());
    next();
});

//routing
let accounts = [{id:1,name:'account1'},{id:2,name:'account2'},{id:3,name:'account3'}];


app.get(`/accounts`, (request, response) => {
    response.json(accounts);
  });
  
  app.get(`/accounts/:id`, (request, response) => {
    const accountId = String(request.params.id);
    const getAccount = accounts.find((account) => account.id === accountId);
  
    if (!getAccount) {
      response.status(500).send('Account not found.')
    } else {
      response.json(getAccount);
    }
  });


  app.post(`/accounts`, (request, response) => {
    const incomingAccount = request.body;
    
    accounts.push(incomingAccount);
    
    response.json(accounts);
  })

const serveIndex = require('serve-index');
app.use('/gators', express.static('public'))
app.use('/gators', serveIndex('public'))

app.listen(3000, ()=> console.log('server running'));
