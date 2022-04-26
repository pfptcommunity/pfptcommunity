function GetNPRE() {  
  
  // ** GetAccessToken - retrieves a bearer token
  // ** This will fetch the token
  function GetAccessToken(key,secret,uri){
    var params    = {
          method             : 'POST',
          muteHttpExceptions : true,
          headers : {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          payload : "grant_type=client_credentials&client_id="+key+"&client_secret="+secret
    };
    return JSON.parse(UrlFetchApp.fetch(uri,params));
  }

  
  // ** Private Request for NPRS GraphAPI
  // ** using the Bearer token
  function PrivateRequest(token,uri,ts){
    const my_payload  = {
          'operationName': 'getRiskPosture',
          'variables'    : {'time_series': ts.toString()},
          'query'        : 'query getRiskPosture($time_series: DateTime){getRiskPosture(time_series: $time_series){file}}'
        };
    
    const params    = {
        method             : 'POST',
        muteHttpExceptions : true,
        headers : {
          'Content-Type' : 'application/json',
          'Authorization': 'Bearer ' + token
        },
        payload : JSON.stringify(my_payload)
    };
    return JSON.parse(UrlFetchApp.fetch(uri,params));
  }
  
  
  
  const req    = {
      principal   :  '••••••••',
      secret      :  '••••••••',
      timeseries  :  '20220224',   // *** change your timestamp 2022 02 24
      tokenuri    :  'https://auth.proofpoint.com/v1/token',
      apiuri      :  'https://api.peoplecentric.proofpoint.com/graphql'
  }
  
  // ** Get Bearer Token
  req.tok = GetAccessToken(req.principal, req.secret,req.tokenuri);
  
  // ** Do API request with Bearer Token
  var response = PrivateRequest(req.tok.access_token, req.apiuri,req.timeseries);
  
  // ** Response is a pointer to a file
  // ** Fetch the file
  var contents = UrlFetchApp.fetch(response.data.getRiskPosture.file).getContentText();
  Logger.log(contents);
  
  // ** contents is your CSV file
}
