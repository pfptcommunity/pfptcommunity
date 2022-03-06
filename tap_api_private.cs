// https://www.programiz.com/csharp-programming/online-compiler/

using System;
using System.Net;
using System.Web;

class ListReputation
{
  public static void Main(string[] args)
  {
    try
    {
    Console.WriteLine(makeAPICall());
    }
    catch (WebException e)
    {
    Console.WriteLine(e.Message);
    }
  }

  static string makeAPICall()
  {
    var principal   = "// https://www.programiz.com/csharp-programming/online-compiler/

using System;
using System.Net;
using System.Web;

class ListReputation
{
  public static void Main(string[] args)
  {
    try
    {
    Console.WriteLine(makeAPICall());
    }
    catch (WebException e)
    {
    Console.WriteLine(e.Message);
    }
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
}";
    var secret      = "ce74b70d27364f940723d3ff59fa2500e08980659bf1d91d14ed5d8a3dea1ca6";
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
