// TODO 
// The javax.xml.bind.DatatypeConverter class can be used to convert byte data into a base 64 encoded string.

String principal = "•••••••••";
String secret    = "•••••••••";
String encodedData = DatatypeConverter.printBase64Binary((clientId + ":" + clientSecret).getBytes("UTF-8"));
String authorizationHeaderString = "Authorization: Basic " + encodedData;

String uri       = "https://tap-api-v2.proofpoint.com";
String command   = "/v2/people/vap";
String parameter = "?window=90";

// do http request uri + command + parameter @ Header = authorizationHeaderString
