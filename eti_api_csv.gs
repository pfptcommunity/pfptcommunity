function ETI(){
  var req ={
    method          : 'GET', 
    key             : '•••••••••', 
    uri             : 'https://api.emergingthreats.net', 
    command         : '/v1/repcategories', 
    parameters      : ''
  }
  var request =  PFPT_PrivateRequest(req);
  Logger.log( UrlFetchApp.fetch(request.uri,request.params) );
}


function ETI_PrivateRequest(req){
  Logger.log(req);
  var params       = {
        'method'            : req.method,
        'muteHttpExceptions': true,
        'redirect'          : 'follow',
        'Accept'            : 'application/json',
        'headers': {
          'Authorization'     : req.key }
   }
  return  { uri: req.uri + req.command + req.parameters, params: params};
}
