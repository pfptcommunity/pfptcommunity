function GetNPRE() {  

  // ** MAIN   
  const now    = new Date(),
        req    = {
          principal   :  '••••••••',
          secret      :  '••••••••',
          timeseries  :  now.getFullYear() + ("0" + (now.getMonth() + 1)).slice(-2) + ("0" + now.getDate()).slice(-2),  
          tokenuri    :  'https://auth.proofpoint.com/v1/token',
          apiuri      :  'https://api.peoplecentric.proofpoint.com/graphql'
        };
  
  // ** Get the Bearer Token
  req.tok = GetAccessToken(req.principal, req.secret,req.tokenuri);
  
  // ** Get the filename of the csv file
  const response = GetFileName(req.tok.access_token, req.apiuri,req.timeseries);
  
  // ** Read the csv file
  const npredata = UrlFetchApp.fetch(response.data.getRiskPosture.file).getContentText();
  Logger.log(npredata);



  /** 
   * GetAccessToken (param1, params2, param3)  [Get the Access Token from endpoint]
   * @param1  {[string]}  principal            [api key] 
   * @param2  {[string]}  secret               [api secret]           
   * @param3  {[string]}  tokenuri             [path, this should be "https://auth.proofpoint.com/v1/token"]           
   * @return  {[string]}  access_token         [access token]
  */
  function GetAccessToken(key,secret,uri){
    const params    = {
          method             : 'POST',
          muteHttpExceptions : true,
          headers : {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          payload : "grant_type=client_credentials&client_id="+key+"&client_secret="+secret
    };
    return JSON.parse(UrlFetchApp.fetch(uri,params));
  } // ** End GetAccessToken


  /** 
   * GetFileName (token,apiuri,time_series)    [Get the Filename to the CSV file]
   * @param1  {[string]}  token                [Bearer Access Token] 
   * @param2  {[string]}  apiuri               [path, this should be "https://api.peoplecentric.proofpoint.com/graphql"]           
   * @param3  {[string]}  time_series          [time series / date for the query. Example is 20210209"]           
   * @return  {[string]}  access_token         [file reference]
  */
  function GetFileName(token,uri,ts){
    const my_payload  = {
          'operationName': 'getRiskPosture',
          'variables'    : {'time_series': ts.toString()},
          'query'        : 'query getRiskPosture($time_series: DateTime){getRiskPosture(time_series: $time_series){file}}'
        },    
          params    = {
            method             : 'POST',
            muteHttpExceptions : true,
            headers : {
              'Content-Type' : 'application/json',
              'Authorization': 'Bearer ' + token
            },
            payload : JSON.stringify(my_payload)
          };
    return JSON.parse(UrlFetchApp.fetch(uri,params));
  } // ** End GetFileName


} // ** END MAIN
