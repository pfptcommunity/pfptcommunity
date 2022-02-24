const axios = require('axios'); 

const req ={
    method          : 'GET', 
    key             : '•••••••••', 
    uri             : 'https://api.emergingthreats.net', 
    command         : '/v1/repcategories', 
    parameters      : ''
  }

const params        = {headers: {"Authorization": req.key}}

main(); // calling async function to make await possible
async function main () {
  let eti = await axios.get(req.uri+req.command+req.parameters, params       );
  console.log(eti); 
} 
