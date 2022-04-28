const axios = require("axios");

const now    = new Date(),
      req    = {
        principal   :  '••••••••',
        secret      :  '••••••••',
        timeseries  :  now.getFullYear()+'0'+(now.getMonth()+1).toString()+now.getDate(),  
        tokenuri    :  'https://auth.proofpoint.com/v1/token',
        apiuri      :  'https://api.peoplecentric.proofpoint.com/graphql'
      };

(async () => {
    // ** Call GetAccessTokenGet to get the Bearer Token
	try {
        var tokenobj =  await GetAccessToken(req.principal, req.secret,req.tokenuri);
        if (tokenobj.status == false) console.log(tokenobj.data.message);
    } catch (e) {
        console.log("Error GetAccessToken: "+e);
    }
    console.log("***** Result GetAccessToken *****"); 
    console.log(tokenobj.data.access_token); 
    console.log(""); 


    // ** Call GetFileName to get the complete path and filename to the CSV file
    try {
        var filepntr = await GetFileName(tokenobj.data.access_token, req.apiuri, req.timeseries);
        if (filepntr.status == false) console.log(filepntr.data.message);
    } catch (e) {
        console.log("Error GetFileName: "+e);
    }
    console.log("***** Result GetFileName *****"); 
    console.log(filepntr.data); 
    console.log(""); 


  // ** Try to read the CSV file - please verify this !!!!
  // READ FILE - THIS CAN BE DONE IN SEVERAL DIFFERENT WAYS
  // IN REPLIT.COM I RECEIVE AN ERROR BECAUSE THE PATH IS SO EXTREMELY LONG
  var fs = require("fs");

  fs.readFile(filepntr.data, function(err, data){
    if(err) return console.log(err);
    console.log(data);
  });

  console.log("Program ends");

  // END MAIN   
})();






/** 
 * GetFileName (token,apiuri,time_series)   [Get the Filename to the CSV file]
 * @param1  {[string]}  token               [Bearer Access Token] 
 * @param2  {[string]}  apiuri              [path, this should be "https://api.peoplecentric.proofpoint.com/graphql"]           
 * @param3  {[string]}  time_series         [time series / date for the query. Example is 20210209"]           
 * @return  {[response object]}             [data:  status:  message:]
 *          {[data:object]}                 [data = filename]
*/
async function GetFileName(token,uri,ts){
  let response  = { data: null, status: true, message: ""};
  const request = await axios.post (uri,
    '{"operationName": "getRiskPosture","variables": {"time_series": "'+ts.toString()+'"},"query": "query getRiskPosture($time_series: DateTime){getRiskPosture(time_series: $time_series){file}}"}',
    {   
      headers : {
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer ' + token
      }
    }
  ).then(function (request) {
       response.data = request.data.data.getRiskPosture.file;
  })
  .catch(function (error) {
      response.status  = false;
      response.message = error;
  });
   return response;  
}  // ** End GetFileName



/** 
 * GetAccessToken (param1, params2, param3)  [Get the Access Token from endpoint]
 * @param1  {[string]}  key                 [npre api key] 
 * @param2  {[string]}  secret              [npre api secret]           
 * @param3  {[string]}  uri                 [path "https://auth.proofpoint.com/v1/token"]           
 * @return  {[response object]}             [data:  status:  message:]
 *          {[data:object]}                 [data = access_token, token_type, expires_in]
*/
 async function GetAccessToken(key,secret,uri){
   const querystring = require('querystring');
   let response  = { data: null, status: true, message: ""};
   const request = await axios.post (uri,
      querystring.stringify( {
        grant_type: "client_credentials",
        client_id: key,
        client_secret: secret,
      }),
   {
      headers : {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
   }
   ).then(function (request) {
       response.data = request.data;
  })
  .catch(function (error) {
      response.status  = false;
      response.message = error;
  });
   return response;  
}

