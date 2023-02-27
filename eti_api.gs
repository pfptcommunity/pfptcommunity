function ETI_Setting(){
  return {
    method: 'GET',
    key: '•••••••••',
    uri: 'https://api.emergingthreats.net',
    command: '',
    parameters: ''
  };
}

function Whois(){
  const req = {...ETI_Setting(), domain: 'disney.com', command: '/v1/domains/disney.com/whois'};
  const response = ETI_PrivateRequest(req);
  if (!response.status) {Logger.log(`Error: ${response.message}`); return false;}
  const {data: {response: {registrant, registrar}}} = response;
  console.log(`domain  = ` + response.data['response']['domain'] );
  console.log(`country = ${registrar.country}`);
  console.log(`website = ${registrar.website}`);
  console.log(`name    = ${registrar.name}`);
  console.log(`update  = ${registrant.updated}`);
  console.log(`email   = ${registrant.email}`);
  console.log(`name    = ${registrant.name}`);
  console.log(`name    = ${registrant.created}`);
  console.log(`expires = ${registrant.expires}`);
}

function Repcategories(){
  const req = {...ETI_Setting(), command: '/v1/repcategories'};
  const response = ETI_PrivateRequest(req);
  if (!response.status) {Logger.log(`Error: ${response.message}`); return false;}
  response.data.response.forEach(({name, description}) => Logger.log(`${name} = ${description}`));
}

function ETI_PrivateRequest(req){
  const params = {
    method: req.method,
    muteHttpExceptions: true,
    redirect: 'follow',
    Accept: 'application/json',
    headers: {
      Authorization: req.key,
    },
  };
  const url = `${req.uri}${req.command}${req.parameters}`;
  try {
    const data = JSON.parse(UrlFetchApp.fetch(url, params));
    return {data, status: true, message: ''};
  } catch (error) {
    return {data: null, status: false, message: error};
  }
}
