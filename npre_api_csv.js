// NOT TESTED AND NOT FINISHED
// NOT COMPLETED - PLEASE FINISH THIS
// based on working code:
// https://github.com/pfptcommunity/pfptcommunity/blob/main/npre_api_csv.gs



/** 
 * GetAccessToken (param1, params2, param3)  [Get the Access Token from endpoint]
 * @param1  {[string]}  key             [npre api key] 
 * @param2  {[string]}  secret          [npre api secret]           
 * @param3  {[string]}  uri             [path, this should be "https://auth.proofpoint.com/v1/token"]           
 * @return  {[string]}  access_token    [access token]
*/
 async function GetAccessToken(key,secret,uri){
   const response=await axios.post(uri,{
      headers : {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body    :    {
        grant_type: "client_credentials",
        client_id: key,
        client_secret: secret,
      }
    }) 
   console.log(response);
   let response = JSON.parse(response);
   return response.access_token;
 }  // ** End GetAccessToken


/** 
 * GetFileName (token,apiuri,time_series)    [Get the Filename to the CSV file]
 * @param1  {[string]}  token                [Bearer Access Token] 
 * @param2  {[string]}  apiuri               [path, this should be "https://api.peoplecentric.proofpoint.com/graphql"]           
 * @param3  {[string]}  time_series          [time series / date for the query. Example is 20210209"]           
 * @return  {[string]}  access_token         [file reference]
*/
async function GetFileName(token,uri,ts){
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
  return JSON.parse(await axios.get(uri,params));
} // ** End GetFileName



//const http = require("http");
const axios = require("axios");

// ** MAIN   
const now    = new Date(),
      req    = {
        principal   :  '••••••••',
        secret      :  '••••••••',
        timeseries  :  now.getFullYear()+'0'+(now.getMonth()+1).toString()+now.getDate(),  
        tokenuri    :  'https://auth.proofpoint.com/v1/token',
        apiuri      :  'https://api.peoplecentric.proofpoint.com/graphql'
      };

// ** Get the Bearer Token
let token = GetAccessToken(req.principal, req.secret,req.tokenuri);
console.log("***********GetAccessToken");
console.log(token);


// ** Get the filename of the csv file
const response = GetFileName(token, req.apiuri,req.timeseries);
console.log("***********GetFileName");
console.log(response);

// ** Read the csv file
//  const npredata = //UrlFetchApp.fetch(response.data.getRiskPosture.file).getContentText();
//  Logger.log(npredata);







