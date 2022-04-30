function ETI_Setting(){
  return {
    method          : 'GET', 
    key             : '•••••••••',  
    uri             : 'https://api.emergingthreats.net', 
    command         : '', 
    parameters      : ''
  }
}


// * Sample function that will output
// * the retrieved whois info for a single domain. (disney.com)
function Whois(){
  let req = ETI_Setting();
  req.domain = 'disney.com';
  req.command = '/v1/domains/'+req.domain+'/whois';   
  
  response =  ETI_PrivateRequest(req);
  if (response.status == false) { Logger.log("Error: "+response.message); return false; }
  Logger.log( "domain  = " + response.data['response']['domain'] );
  Logger.log( "country = " + response.data['response']['registrar']['country'] );
  Logger.log( "website = " + response.data['response']['registrar']['website'] );
  Logger.log( "name    = " + response.data['response']['registrar']['name'] );
  Logger.log( "update  = " + response.data['response']['registrant']['updated'] );
  Logger.log( "email   = " + response.data['response']['registrant']['email'] );
  Logger.log( "name    = " + response.data['response']['registrant']['name'] );
  Logger.log( "name    = " + response.data['response']['registrant']['created'] );
  Logger.log( "expires = " + response.data['response']['registrant']['expires'] );
}


// * Sample function that will output
// * a lists of all the possible categories for reputation categorization and a brief description of each item.
function Repcategories(){
  let req = ETI_Setting();
  req.command = '/v1/repcategories';   
  
  response =  ETI_PrivateRequest(req);
  if (response.status == false) { Logger.log("Error: "+response.message); return false; }
  
  for (r in response.data['response']){
    Logger.log( response.data['response'][r]['name'] +" = "+ response.data['response'][r]['description'] );
  }
}


function ETI_PrivateRequest(req){
  var response  = { data: null, status: true, message: ""},
      params       = {
        'method'            : req.method,
        'muteHttpExceptions': true,
        'redirect'          : 'follow',
        'Accept'            : 'application/json',
        'headers': {
          'Authorization'     : req.key }
   }
  try {
    response.data = JSON.parse(UrlFetchApp.fetch(req.uri + req.command + req.parameters, params));
    } catch (e) {
      response.status = false;
      response.message = e;
    }
    return response;
}
