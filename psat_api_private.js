const axios = require('axios'); 

const req ={
    method          : 'GET', 
    key             : '•••••••••', 
    uri             : 'https://results.eu.securityeducation.com:443', 
    command         : '/api/reporting/v0.1.0/cyberstrength', 
    parameters      : ''
  }

const params        = {headers: {'x-apikey-token': req.key }}

main(); // calling async function to make await possible
async function main () {
  let eti = await axios.get(req.uri+req.command+req.parameters, params       );
  console.log(eti); 
} 
