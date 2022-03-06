// https://www.programiz.com/csharp-programming/online-compiler/

using System;
using System.Net;
using System.Web;

class TAPRequest
{
  public static void Main(string[] args)
  {
    Console.WriteLine(makeAPICall());
  }

  static string makeAPICall()
  {
    var principal   = "•••••••••";
    var secret      = "•••••••••";
    var uri         = "https://tap-api-v2.proofpoint.com"; 
    var command     = "/v2/people/vap"; 
    var parameters  = "?window=90";
    
    var encodedData = System.Convert.ToBase64String(
                    System.Text.Encoding.GetEncoding("ISO-8859-1")
                      .GetBytes(principal + ":" + secret)
                    );
    var URL = new UriBuilder(uri + command + parameters);
    var client = new WebClient();
    client.Headers.Add("Authorization", encodedData);
    client.Headers.Add("Accepts", "application/json");
    return client.DownloadString(URL.ToString());
  }
}
