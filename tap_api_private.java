// The javax.xml.bind.DatatypeConverter class can be used to convert byte data into a base 64 encoded string.

String principal = "•••••••••";
String secret    = "•••••••••";
String endata    = DatatypeConverter.printBase64Binary((clientId + ":" + clientSecret).getBytes("UTF-8"));
String headr     = "Authorization: Basic " + endata;

String base       = "https://tap-api-v2.proofpoint.com";
String command   = "/v2/people/vap";
String parameter = "?window=90";


uri = new URL (base, command, parameter);

HttpClient client = HttpClients.custom().build();
HttpUriRequest request = RequestBuilder.get()
  .setUri(uri)
  .setHeader(HttpHeaders.CONTENT_TYPE, "application/json")
  .setHeader("Authorization", headr)
  .build();

HttpResponse response = httpclient.execute(request);
