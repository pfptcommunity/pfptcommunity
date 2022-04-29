function PFPT_People(){
  var req ={
    method          : 'GET', 
    tapapiprincipal : '•••••••••', 
    tapapisecret    : '•••••••••', 
    uri             : 'https://tap-api-v2.proofpoint.com', 
    command         : '/v2/people/vap', 
    parameters      : '?window=90'
  }
  var request =  PFPT_PrivateRequest(req);
  Logger.log( UrlFetchApp.fetch(request.uri,request.params) );
}



function PFPT_PrivateRequest(req){
  Logger.log(req);
  var params       = {
        'method'            : req.method,
        'muteHttpExceptions': true,
        'redirect'          : 'follow',
        'Accept'            : 'application/json',
        'headers': {
            'Authorization'        : "Basic " + Utilities.base64Encode(req.tapapiprincipal + ":" + req.tapapisecret) }
     }
  return  { uri: req.uri + req.command + req.parameters, params: params};
}
