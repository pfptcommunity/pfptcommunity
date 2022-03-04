# Proofpoint Data Rocks

The primary purpose of this page is to share the integrations I've created around the Proofpoint products.
This content and code snippets are not created, validated or supported by Proofpoint so use wisely. 

Please **★ Star** on the top of this page if you like this page and you want to motivate me to publish more.
<br>

- [Introduction to REST APIs](#Introduction-to-REST-APIs)
- [Targeted Attack Protection (TAP)](#TAP-API)
- [Nexus People Risk Explorer (NPRE)](#NPRE-API)
- [Emerging Threats Intelligence (ETI)](#ETI-API)
- [Protection On Demand (POD)](#POD-API)
- [Essentials](#ESS-API)
- [Security Awareness Training (PSAT)](#PSAT-API)
- [Cloud Access Security Broker (CASB)](#CASB-API)


------------

# Introduction to REST APIs

Representational State Transfer (REST) Application Programming Interface (API) is a way for applications to seamlessly communicate and share data via HTTPS. An API is a building block of code that is used to send data requests from one application to another and deliver data responses back. It’s the messenger who takes a request to the system and returns a response from it. The building block contains endpoints, headers, parameters, and fields. Therefore, you can use the Proofpoint Results API endpoints to request raw data from the platform for use in your business intelligence analysis tools.


A familiar example often used to explain APIs involves ordering food at a restaurant. In this scenario, the
waiter is the API. You give him your food request, he takes your food request to the kitchen, the kitchen
staff prepares the food, and the waiter returns the food to you. You made a request of the kitchen for
food and used the waiter to deliver the request and receive a response (that being the food).
So, back to the Proofpoint Results API and how it works. If a customer wants certain data results (the
food) from the platform (the kitchen) to use in their business analysis tool, they can use the API (the
waiter) to deliver the data request and receive the data response (the food).

What is consuming REST API?
Similarly, the act of consuming or using a REST API means to eat it all up. In context, it means to eat it, swallow it, and digest it — leaving any others in the pile exposed.

JSON stands for JavaScript Object Notation and it is a completely language-independent text format that is mainly used to transmit data between a server and client.
The structure of a JSON object is derived from JavaScript object notation syntax, meaning that data is organised in key/value pairs separated by commas, with the whole of the object being wrapped by curly braces and arrays being wrapped by square brackets, like so:

```
 "identity": {
   "name": "Winston Wolf", 
   "email": [
      "thewolf@fixaprob.com",
      "w.wolf@fixaprob.com",
      "w.wolf@jmail.com"
   ],
   "department": "Operations", 
   "location": "Amsterdam",
   "title": "Problem solver"
 }
// * JSON Object Structure Sample
```
REST implements multiple 'methods' for different types of http request, the following are most popular: - GET: Get resource from the server. - POST: Create resource to the server.  You can read more about [4 Most Used REST API Authentication Methods.](https://blog.restcase.com/4-most-used-rest-api-authentication-methods/)

Proofpoint provides some lovely REST APIs that can be used to gather information.
Below code snippets and reference will help you getting started.



<br>

------------

# TAP API

The Threat Insight Dashboard (Targeted Attack Protection) provides several different API endpoints for integration with other products in your security ecosystem.

[Official Documentation - Threat Insight Dashboard](https://help.proofpoint.com/Threat_Insight_Dashboard/API_Documentation)

<br>

## Microsoft Excel or Power BI consuming TAP API data

Both Microsoft Power BI and Excel can directly fetch JSON data from an REST endpoint. See the [Microsoft doc](https://docs.microsoft.com/en-us/power-query/connectors/web/web) for more information.  Below you can see and download a sample Excel sheet that fetches data from the People endpoint(s).

| Action  | Description | 
| ------------- | ------------- | 
| [Watch Video on YouTube](https://youtu.be/7YYsYpm84gE) | Short demonstration of the tap_api_people.xlsx sample sheet |
| [Download Excel sample](https://github.com/pfptcommunity/api/raw/main/tap_api.xlsx) | Download the tap_api.xlsx sheet   |
| [Download Power BI sample](https://github.com/pfptcommunity/api/raw/main/tap_api.pbix) | Download the tap_api.pbix sheet   |
| [M Code script](https://github.com/pfptcommunity/api/blob/main/tap_api_private.pqs) | M Code for Excel or Power BI |
| [View Power BI screenshot](https://github.com/pfptcommunity/api/blob/main/tap_api_powerbi.jpg?raw=true) | Power BI screenshot Advanced Editor |

Howto: Getting started with Power BI. 

- Download and open the pbix sample
- click Transform data
- Select function 'Api call keys'
- Open Advanced Editor
- Set your API credentials in the script
- Go back
- click Refresh

<br>

## Cool TAP API Code Snippets

The API uses GET requests to retrieve resource representation/information only – and not modify it in any way.

Basic authentication is a simple authentication scheme built into the HTTP protocol. The client sends HTTP requests with the Authorization header that contains the word Basic word followed by a space and a base64-encoded string.

The TAP REST APIrequest uses the following request structure:

```
method                = "GET"
uri                   = $apipath + $endpoint + $parameter
headers.Authorization = "Basic " + encode.base64 ( $principal + ":" + $secret )
```

Below code snippets will help you to get started with the initial authentication and get some data from an endpoint.

| Code Snippet | Language | 
| ------------- | ------------- | 
| [tap_api_private.js](https://github.com/pfptcommunity/api/blob/main/tap_api_private.js) | Javascript / Node.js Request |
| [tap_api_private.py](https://github.com/pfptcommunity/api/blob/main/tap_api_private.py) | Python Request  |
| [tap_api_private.gs](https://github.com/pfptcommunity/api/blob/main/tap_api_private.gs) | Google Apps Script (GAS) Request |

<br>

## TAP GitHub Projects

- [Powershell wrapper jfviana](https://github.com/jfviana/proofpoint-api )
- [Powershell wrapper lambdac0de](https://github.com/lambdac0de/ProofpointTAP )
- [Powershell wrapper Midnigh7](https://github.com/Midnigh7/PSProofpoint )
- [Proofpoint TAP API Client for Python](https://github.com/drizzo-tech/proofpoint_tap)
- [Proofpoint DXL Node-RED Client Nodes](https://github.com/Anamico/node-red-contrib-proofpoint)
- [Go-Proofpoint API Client Library](https://github.com/greenpau/go-proofpoint) 




<br>


------------

TRAP

[This is an integration with Proofpoint's TRAP product and VMware Carbon Black Cloud.](https://github.com/cbcommunity/cbc-proofpoint-malicious-file-detection)



------------

# NPRE API

The Nexus People Risk Explorer API allows you to download a csv file usingusing an API call. 
The API is documented in the NPRE Admin Guide that can be found on the community website.
<br>

## Microsoft Excel or Power BI consuming NPRE People/Risk data

Both Microsoft Power BI and Excel can directly fetch JSON data from an REST endpoint. See the [Microsoft doc](https://docs.microsoft.com/en-us/power-query/connectors/web/web) for more information.  Below you can see and download a sample Excel sheet that fetches data using the NPRE endpoint.

| Action  | Description | 
| ------------- | ------------- | 
| [Watch Video on YouTube](https://youtu.be/XrUXztNjvwo) | Short demonstration of the npre_api_people.xlsx sample sheet |
| [Download Spreadsheet](https://github.com/pfptcommunity/api/raw/main/npre_api_csv.xlsx) | Download the npre_api_people.xlsx sheet   |
| [M Code script](https://github.com/pfptcommunity/api/blob/main/npre_api_csv.pqs) | M Code for Excel or Power BI |
<br>

## Cool NPRE API Code Snippets

The NPRE API uses mulitple requests to finaly get a pointer to a CSV file.

```
method                = POST
request1              = Get the Bearer Token
request2              = Get the Uri to CSV file using the Bearer Token
request3              = Get CSV file
```

Below code snippets will help you to get started with the initial authentication and get some data from an endpoint.

| Code Snippet | Language | 
| ------------- | ------------- | 
| [npre_api_csv.js](https://github.com/pfptcommunity/api/blob/main/npre_api_csv.js) | <i>Javascript / Node.js Request  (coming soon)</i>  |
| [npre_api_csv.py](https://github.com/pfptcommunity/api/blob/main/npre_api_csv.py) | Python Request  |
| [npre_api_csv.gs](https://github.com/pfptcommunity/api/blob/main/npre_api_csv.gs) | Google Apps Script (GAS) Request |


<br>

------------

# PSAT API

Proofpoint Security Awareness Training Results API [Documentation](https://proofpoint.securityeducation.com/api/reporting/documentation/)


The PSAT Results API contains five endpoints from which you can retrieve and filter data for your business needs:

* CyberStrength – returns information from CyberStrength
* PhishAlarm – returns information from PhishAlarm information
* Phishing – returns information from ThreatSim simulated phishing campaigns
* Training – returns information from Training assignments
* Users – returns information about Users
* Training Enrollments – returns information from the (beta) User Enrollments Report
<br>

## Microsoft Excel or Power BI consuming PSAT API data

| Action  | Description | 
| ------------- | ------------- | 
| [Download Spreadsheet](https://github.com/pfptcommunity/api/raw/main/psat_api.xlsx) | Download the psat_api.xlsx sheet FIRST DRAFT  |
| [M Code script](https://github.com/pfptcommunity/api/blob/main/psat_api_private.pqs) | M Code for Excel or Power BI |


<br>

Below code snippets will help you to get started with the initial authentication and get some data from an endpoint.


## Cool PSAT API Code Snippets

| Code Snippet | Language | 
| ------------- | ------------- | 
| [psat_api_private.js](https://github.com/pfptcommunity/api/blob/main/psat_api_private.js) | Javascript / Node.js Request  |
| [psat_api_private.py](https://github.com/pfptcommunity/api/blob/main/psat_api_private.py) | Python Request  |
| [psat_api_private.gs](https://github.com/pfptcommunity/api/blob/main/psat_api_private.gs) | Google Apps Script (GAS) Request |

[Python module to interact with the Proofpoint Security Awareness Training (PSAT) Results API](https://github.com/regg00/psat-result-api)



<br>

------------

# ETI API

Proofpoint Emerging Threat Intelligence delivers the most timely and accurate threat intelligence. Our fully verified intel provides deeper context and integrates seamlessly with your security tools to enhance your decision-making.


- [ET Intelligence API documentation](http://apidocs.emergingthreats.net)
- [Emerging Threats datasheet](https://www.proofpoint.com/us/products/et-intelligence)
- [Admin login console](https://etadmin.proofpoint.com/login)


## Cool ET API Code Snippets

| Code Snippet | Language | 
| ------------- | ------------- | 
| [eti_api.js](https://github.com/pfptcommunity/api/blob/main/eti_api.js) | Javascript / Node.js Request  |
| [eti_api.py](https://github.com/pfptcommunity/api/blob/main/eti_api.py) | Python Request  |
| [eti_api.gs](https://github.com/pfptcommunity/api/blob/main/eti_api.gs) | Google Apps Script (GAS) Request |

<br>

## ETI GitHub Projects
- [Python Wrapper for Proofpoint's Threat Insight API](https://github.com/Derekt2/PyProofpoint)
- [An integration for VMware Carbon Black Cloud and Proofpoint Emerging Threats](https://github.com/cbcommunity/cbc-proofpoint-et-intelligence-reputation-list)




------------

# POD API
The [Proofpoint on Demand (PoD) Logging API documentation](https://proofpointcommunities.force.com/community/s/article/Proofpoint-on-Demand-Pod-Log-API)

[Node.Js client subscriber for Proofpoint On-demand's (PoD) Log API](https://github.com/lambdac0de/node-proofpoint-podclient)

<br>

This is a client subscriber to Proofpoint On-demand's (PoD) Log API. The Log API is a websocket service (wss) awaiting connections from clients. You can subscibe to either filter (message) logs or MTA (maillog) logs.

https://github.com/lambdac0de/node-proofpoint-podclient


------------

# ESS-API
The Proofpoint [Essentials API documentation](https://us1.proofpointessentials.com/api/v1/docs/index.php)



Found on Github

- [ProofPoint Essentails API](https://github.com/miearls/proofpoint)
- [c# wrapper](https://github.com/singhkamall/ProofPointEssentialsClient  )


------------

# CASB-API
The Proofpoint [CASB API documentation](https://proofpointcommunities.force.com/community/s/article/Proofpoint-Cloud-App-Security-Broker-API-Guides) 

------------

# ITM-API
The Proofpoint ITM API documentation

- [Proofpoint ITM API client library for python](https://github.com/drizzo-tech/proofpoint_itm)
- [ITM SDK python](https://github.com/yuta519/proofpoint-itm-sdk)


------------

# Business Intelligence

Key players and their REST API support

[Microsoft Power BI](https://docs.microsoft.com/en-us/power-query/connectors/) - howto [Build](https://docs.microsoft.com/en-us/rest/api/power-bi/) connector

[Qlik](https://help.qlik.com/en-US/connectors/Subsystems/REST_connector_help/Content/Connectors_REST/REST-connector.htm)

[Tableau (Salesforce)](https://help.tableau.com/current/pro/desktop/en-us/exampleconnections_overview.htm) - howto [Build](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api.htm) connector

[Microstrategy](https://www2.microstrategy.com/producthelp/Current/RESTSDK/Content/topics/REST_API/REST_API.htm)

[Sisence](https://documentation.sisense.com/docs/connecting-to-rest)

[Google Data Studio](https://datastudio.google.com/data) - howto [Build](https://developers.google.com/datastudio/connector/build) connector






