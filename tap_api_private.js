const axios = require('axios'); 

const req ={
    method          : 'GET', 
    tapapiprincipal : '•••••••••', 
    tapapisecret    : '•••••••••', 
    uri             : 'https://tap-api-v2.proofpoint.com', 
    command         : '/v2/people/vap', 
    parameters      : '?window=90'
  };

const params        = {headers: {"Authorization": "Basic " + Buffer.from(`${req.tapapiprincipal}:${req.tapapisecret}`).toString('base64')}}

main(); // calling async function to make await possible
async function main () {
  let vaps = await axios.get(req.uri+req.command+req.parameters, params       );
  console.log(vaps); 
} 
