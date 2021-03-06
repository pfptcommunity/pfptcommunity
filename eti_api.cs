// https://www.programiz.com/csharp-programming/online-compiler/

using System;
using System.Net;
using System.Web;

class ListReputation
{
  private static string API_KEY = "•••••••••";

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
    var URL = new UriBuilder("https://api.emergingthreats.net/v1/repcategories");
    var client = new WebClient();
    client.Headers.Add("Authorization", API_KEY);
    client.Headers.Add("Accepts", "application/json");
    return client.DownloadString(URL.ToString());
  }
}
