const axios  = require("axios");

const now    = new Date(),
      req    = {
        principal   :  '••••••••',
        secret      :  '••••••••',
        timeseries  :  now.getFullYear() + ("0" + (now.getMonth() + 1)).slice(-2) + ("0" + now.getDate()).slice(-2),
        tokenuri    :  'https://auth.proofpoint.com/v1/token',
        apiuri      :  'https://api.peoplecentric.proofpoint.com/graphql'
      };

(async () => {
    // ** Call GetAccessTokenGet to get the Bearer Token
    var tokenobj =  await GetAccessToken(req.principal, req.secret,req.tokenuri);
    console.log("***** Result GetAccessToken *****"); 
    if (tokenobj.status == false) { console.log(tokenobj.message); return false; } 
    console.log(tokenobj.data.access_token); 
    console.log(""); 
      

    // ** Call GetFileName to get the complete path and filename to the CSV file
    var filepntr = await GetFileName(tokenobj.data.access_token, req.apiuri, req.timeseries);
    console.log("***** Result GetFileName *****"); 
    if (filepntr.status == false) { console.log(filepntr.message); return false; } 
    console.log(filepntr.data); 
    console.log(""); 

    let outputBuffer
    try {
      outputBuffer = await axios.get(filepntr.data)
    } catch (error) {
      //do some error handling
      console.log(error.message)
      return false
    }

    const resultObject = csvToObject(outputBuffer.data)

    // show first record
    console.log(resultObject[1])

    console.log("Program ends");

  // END MAIN   
})();



/** 
 * GetAccessToken (param1, params2, param3)  [Get the Access Token from endpoint]
 * @param1  {[string]}  key                 [npre api key] 
 * @param2  {[string]}  secret              [npre api secret]           
 * @param3  {[string]}  uri                 [path "https://auth.proofpoint.com/v1/token"]           
 * @return  {[response object]}             [data:  status:  message:]
 *          {[data:object]}                 [data = access_token, token_type, expires_in]
*/
 async function GetAccessToken(key,secret,uri){
   let response  = { data: null, status: true, message: ""};
   const querystring = require('querystring');
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
 * csvToObject (token,apiuri,time_series)   [Get the Filename to the CSV file]
 * @param1  {[string]} csvData              [string containg CSV data]
 * @return  {[response object]}             [dynamic object based on CSV]
 *          {[data:object]}                 [data = filename]
*/
function csvToObject (csvData)  {
    const lines = csvData.split('\n')
    const result = []
    const headers = lines[0].split(',')

    lines.map(l => {
        const obj = {}
        const line = l.split(',')

        headers.map((h, i) => {
            obj[h] = line[i]
        })

        result.push(obj)
    })

    return result
} // ** End csvToObject


