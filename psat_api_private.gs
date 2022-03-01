function PSAT_Cyberstrength(){
  var req ={
    method          : 'GET', 
    key             : '•••••••••', 
    uri             : 'https://results.eu.securityeducation.com:443', 
    command         : '/api/reporting/v0.1.0/cyberstrength', 
    parameters      : ''
  }
  var request =  PSAT_PrivateRequest(req);
  Logger.log( request.uri);
  Logger.log( UrlFetchApp.fetch(request.uri,request.params) );
}


function PSAT_PrivateRequest(req){
  Logger.log(req);
  var params       = {
        'method'            : req.method,
        'muteHttpExceptions': true,
        'redirect'          : 'follow',
        'Accept'            : 'application/json',
        'headers': {
          'x-apikey-token'     : req.key 
        }
   }
   return  { uri: req.uri + req.command + req.parameters, params: params};
}

