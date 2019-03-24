const express = require('express');
const app = express();

let accounts = ['account1','account2'];

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