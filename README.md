


# Proofpoint Community API Samples

- [Introduction to REST APIs](#Introduction-to-REST-APIs)
- [Targeted Attack Protection (TAP)](#TAP-API)
- [Nexus People Risk Explorer (NPRE)](#NPRE-API)
- [Security Awareness Training (PSAT)](#PSAT-API)
- [Emerging Threats Intelligence (ET)](#ET-API)
- [Protection On Demand (POD)](#POD-API)


------------


# Introduction to REST APIs

Representational State Transfer (REST) API is a way for applications to seamlessly communicate and
share data via HTTPS. An API is a building block of code that is used to send data requests from one
application to another and deliver data responses back. It’s the messenger who takes a request to the
system and returns a response from it. The building block contains endpoints, headers, parameters, and
fields. Therefore, you can use the Proofpoint Results API endpoints to request raw data from the platform
for use in your business intelligence analysis tools.


A familiar example often used to explain APIs involves ordering food at a restaurant. In this scenario, the
waiter is the API. You give him your food request, he takes your food request to the kitchen, the kitchen
staff prepares the food, and the waiter returns the food to you. You made a request of the kitchen for
food and used the waiter to deliver the request and receive a response (that being the food).
So, back to the Proofpoint Results API and how it works. If a customer wants certain data results (the
food) from the platform (the kitchen) to use in their business analysis tool, they can use the API (the
waiter) to deliver the data request and receive the data response (the food).


Proofpoint APIs can be used to manage and gather information from the Proofpoint
solutions. Below code snippets and reference help you get started with these lovely APIs.

<br>

Please **★ Star** on the top of this page if you like this page and you want to motivate us to publish more.

<br>

# TAP API

The Threat Insight Dashboard (Targeted Attack Protection) provides several different API endpoints for integration with other products in your security ecosystem.

[Official Documentation - Threat Insight Dashboard](https://help.proofpoint.com/Threat_Insight_Dashboard/API_Documentation)

<br>

## Using TAP REST API data in Microsoft Excel and Power BI

Both Microsoft Power BI and Excel can directly fetch JSON data from an REST endpoint. See the [Microsoft doc](https://docs.microsoft.com/en-us/power-query/connectors/web/web) for more information.  Below you can see and download a sample Excel sheet that fetches data from the People endpoint(s).

The Amazon S3 REST API uses the standard HTTP Authorization header to pass authentication information. (The name of the standard header is unfortunate because it carries authentication information, not authorization.) Under the Amazon S3 authentication scheme, the Authorization header has the following form:


| Action  | Description | 
| ------------- | ------------- | 
| [Watch Video on YouTube](https://youtu.be/7YYsYpm84gE) | Short demonstration of the tap_api_people.xlsx sample sheet |
| [Download Spreadsheet](https://github.com/pfptcommunity/api/raw/main/tap_api_people.xlsx) | Download the tap_api_people.xlsx sheet   |
| [M Code script](https://github.com/pfptcommunity/api/blob/main/tap_api_private.pqs) | M Code for Excel or Power BI |
| [View Power BI screenshot](https://raw.githubusercontent.com/pfptcommunity/api/main/tap_api_powerbi.jpg) | Power BI screenshot Advanced Editor |



Note:  Open the Microsoft Advanced Editor and past the M Code script. The Microsoft "Get Web Data Wizard" does not allow the required Base64 encoding of the API credentials.

<br>

## TAP API Code Snippets

Below code snippets will help you to get started with the initial authentication and get some data from an endpoint.
The basic structure is:

```
method                = "GET"
uri                   = $apipath + $endpoint + $parameter
headers.Authorization = "Basic " + encode.base64 ( $principal + ":" + $secret )
```


| Code Snippet | Language | 
| ------------- | ------------- | 
| [tap_api_private.js](https://github.com/pfptcommunity/api/blob/main/tap_api_private.js) | Javascript / Node.js Request |
| [tap_api_private.py](https://github.com/pfptcommunity/api/blob/main/tap_api_private.py) | Python Request  |
| [tap_api_private.gs](https://github.com/pfptcommunity/api/blob/main/tap_api_private.gs) | Google Apps Script (GAS) Request |



<br>


# NPRE API

The Nexus People Risk Explorer API allows you to download a csv file usingusing an API call. 
The API is documented in the NPRE Admin Guide that can be found on the communite website.

| Code Snippet | Language | 
| ------------- | ------------- | 
| [npre_api_csv.js](https://github.com/pfptcommunity/api/blob/main/nprs_api_csv.js) | Javascript / Node.js Request  (todo) |
| [npre_api_csv.py](https://github.com/pfptcommunity/api/blob/main/nprs_api_csv.py) | Python Request (todo)|
| [npre_api_csv.gs](https://github.com/pfptcommunity/api/blob/main/nprs_api_csv.gs) | Google Apps Script (GAS) Request |




<br>

# PSAT API

Todo


<br>

# ET API

ET Intelligence API documentation is available from this URL:
http://apidocs.emergingthreats.net

A datasheet for Emerging Threats is available from this URL:
https://www.proofpoint.com/us/products/et-intelligence

Admin login console (requires license)
https://etadmin.proofpoint.com/login


| Code Snippet | Language | 
| ------------- | ------------- | 
| [eti_api.js](https://github.com/pfptcommunity/api/blob/main/eti_api.js) | Javascript / Node.js Request  |
| [eti_api.py](https://github.com/pfptcommunity/api/blob/main/eti_api.py) | Python Request  |
| [eti_api.gs](https://github.com/pfptcommunity/api/blob/main/eti_api.gs) | Google Apps Script (GAS) Request |



<br>

# POD API
The Proofpoint PoD Logging API documentation is available from this URL:
https://proofpointcommunities.force.com/community/s/article/Proofpoint-on-Demand-Pod-Log-API

javascript / node.js client
https://github.com/lambdac0de/node-proofpoint-podclient/blob/master/client.js
