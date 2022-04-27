# Proofpoint Data Rocks

The content and samples on this page are created by the pfptcommunity and not created, validated or supported by Proofpoint Inc. 
Official Proofpoint, out of box (partner) integrations can be found on the [Proofpoint Technology Partners page](https://www.proofpoint.com/us/partners/technology-alliance-partners).

Please **★ Star** on the top of this page if you like this page!  Did you create something cool, we are **looking for your help**, to extend this page with some cool samples. Please contact us at pfptcommunity@gmail.com.  
Here is a quick link to open this readme in [WIDE MODE](https://github.com/pfptcommunity/pfptcommunity/blob/main/README.md)

<br>

- [Introduction to REST APIs](#Introduction-to-REST-APIs)
- [Use Cases](#Use-cases)

<br>

- [Targeted Attack Protection (TAP)](#TAP-API)
- [Threat Response Auto-Pull (TRAP)](#TRAP-API)
- [Nexus People Risk Explorer (NPRE)](#NPRE-API)
- [Emerging Threats Intelligence (ETI)](#ETI-API)
- [Protection On Demand (POD)](#POD-API)
- [Essentials](#ESS-API)
- [Security Awareness Training (PSAT)](#PSAT-API)
- [Cloud Access Security Broker (CASB)](#CASB-API)
- [Meta Networks (META)](#META-API)
- [Insider Threat Management (ITM)](#ITM-API)



------------

# Introduction to REST APIs

Representational State Transfer (REST) Application Programming Interface (API) is a way for applications to seamlessly share data via HTTPS. An API is a building block of code that is used to send data requests from one application to another and deliver data responses back. It’s the messenger who takes a request to the system and returns a response from it. The building block contains endpoints, headers, parameters, and fields. Therefore, you can use the Proofpoint Results API endpoints to request raw data from the platform for use in your Business Intelligence (BI) analysis tools.


A familiar example often used to explain APIs involves ordering food at a restaurant. In this scenario, the
waiter is the API. You give him your food request, he takes your food request to the kitchen, the kitchen
staff prepares the food, and the waiter returns the food to you. You made a request of the kitchen for
food and used the waiter to deliver the request and receive a response (that being the food).
So, back to the Proofpoint Results API and how it works. If a customer wants certain data results (the
food) from the platform (the kitchen) to use in their business analysis tool, they can use the API (the
waiter) to deliver the data request and receive the data response (the food).

What is consuming a REST API?
Similarly, the act of consuming or using a REST API means to eat it all up. In context, it means to eat it, swallow it, and digest it — leaving any others in the pile exposed.

JSON stands for JavaScript Object Notation and it is a completely language-independent text format that is mainly used to transmit data between a server and client.
The structure of a JSON object is derived from JavaScript object notation syntax, meaning that data is organised in key/value pairs separated by commas, with the whole of the object being wrapped by curly braces and arrays being wrapped by square brackets, like so:

```
 "identity": {
   "name": "Winston Wolf", 
   "email": [
      "thewolf@fixaprob.com",
      "mr.wolf@fixaprob.com",
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

# Use cases

To shift to data-driven security decision making start with the right data. You can think of many, many, many use cases to integrate the cool proofpoint data with other security/risk domains. The Proofpoint data (VAPS) is gold for Security and risk management (SRM) leaders.

## Risk Dashboards with BI tools

Many SRM leaders are creating their own organization specific risk metrics and monitor these with their own dashboarding tools.
Key risk indicators from multiple domains (data silos) can be consolidated into a single pane of glass.
We have created several Power BI and Excel examples on howto consume proofpoint data directly/natively into BI tools.
Below image is an example of NPRE data that is directly pulled into Power BI.  This example can be easily adjusted or extended to include other risk indicators for your organization.  See the NPRE or TAP section on this page for more details.


<img src="https://raw.githubusercontent.com/pfptcommunity/pfptcommunity/main/usecase_bi.jpg" width=60% height=60%>

<br>

## Blending data from multiple sources 

Some organizations do not (want to) sync all user data to Azure AD and/or Proofpoint TAP. As a result the TAP Dashboard only shows email addresses.
On-prem BI Tooling is very good in collecting data from multiple sources, correlate the data and present it in a friendly way. With these tools, one can collect data from both Proofpoint TAP and Active Directory on-prem and present this in a single pane of glass.

[read 1](https://community.powerbi.com/t5/Power-Query/Active-Directory-hierarchy-getting-all-users-inside-a-group/td-p/492516) - [read 2](https://www.biinsight.com/power-bi-and-active-directory-for-system-administrators/) - [read 3](https://docs.microsoft.com/en-us/power-bi/transform-model/desktop-create-and-manage-relationships)

<img src="https://raw.githubusercontent.com/pfptcommunity/pfptcommunity/main/usecase_adsync.jpg" width=55% height=55%>

<br>

## Identity Governance and other IAM

Identity governance is about making sure each person has exactly the access they need to do their jobs without causing risk to the organization. The Proofpoint Very Attacked Person (VAP) data can be easily integrated into your IGA solution to enhance the IGA dataset for decision making.
IGA calculates risk scores for users based on authorizations/access. It makes a lot of sense to enrich the data with VAP data.
See:
- [TAP People API](#TAP-API)
- [Nexus People Risk Explorer (NPRE)](#NPRE-API)

IGA vendors: Atos (Evidian), Brainwave, Broadcom (CA), Clear Skye, Forgerock, Hitachi ID, IBM, Micro Focus, Okta, Omada, One Identity (Quest), Sailpoint, SAP, Saviyint, SecZetta.  

<img src="https://raw.githubusercontent.com/pfptcommunity/pfptcommunity/main/usecase_iga.jpg" width=70% height=70%>

<br>

## SIEM / UBA / UEBA
Push events to Security Information and Event Management (SIEM) or User / Entity Behavior Analytics (UBA/UEBA) 
Risk scores are calculated for each user in UB tools.



## Other
Many, many other use cases exist; from network infrastructure, endpoint.
CrowdStrike, Okta, Palo Alto Networks, Amazon Web Services, Splunk, IBM, ZScaler, Imperva, CyberArk, Deciso, Sailpoint, VMware Carbon Black.
See [Proofpoint Technology Partners page](https://www.proofpoint.com/us/partners/technology-alliance-partners).


<br>

------------

# TAP API

The Threat Insight Dashboard (Targeted Attack Protection) provides several different API endpoints for integration with other products in your security ecosystem.

[Official Documentation - Threat Insight Dashboard](https://help.proofpoint.com/Threat_Insight_Dashboard/API_Documentation)

<br>

## Spreadsheet or BI tools consuming TAP API data

Several BI and spreadsheet tools, like Microsoft Power BI and/or Excel or Google's toolset can directly fetch JSON data from an REST endpoint. See the [Microsoft doc](https://docs.microsoft.com/en-us/power-query/connectors/web/web) for more information.  Below you can see and download a sample Excel sheet that fetches data from the People endpoint(s).

| Action  | Description | 
| ------------- | ------------- | 
| [MS Excel : YouTube Video](https://youtu.be/7YYsYpm84gE) | Short video tap_api_people.xlsx sample sheet |
| [MS Excel : Download the Spreadsheet](https://github.com/pfptcommunity/pfptcommunity/raw/main/tap_api.xlsx) | Download the tap_api.xlsx sheet   |
| [MS Power BI : YouTube Video](https://youtu.be/cfnkOV6k8H0) | Short video tap_api_people.xlsx sample Power BI file |
| [MS Power BI : Download the Power BI file](https://github.com/pfptcommunity/pfptcommunity/raw/main/tap_api.pbix) | Download the tap_api.pbix sheet   |
| [MS Power BI : Screenshot](https://github.com/pfptcommunity/pfptcommunity/blob/main/tap_api_powerbi.jpg?raw=true) | Power BI screenshot Advanced Editor |
| [Google Sheets : YouTube Video](https://youtu.be/8k-j2_Pjopw) | Short video tap_api google sheets sample |
| [Google Sheets : Download sheet](https://docs.google.com/spreadsheets/d/16RPVdlQW6HPaNfN9Kt3Ou7diybsUyz1peIinfAUQJpE/copy) | Download the sheet/script  |
| [Google Data Studio : YouTube Video](https://youtu.be/4-f6s09WGkI) | Short video Google Data Studio VAP Connector |



Howto: Getting started with Power BI. 

- Open [Power BI](https://app.powerbi.com). I recommend downloading Power BI desktop. 
- Download the pbix sample from this page and open it in Power BI
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
method                = get
uri                   = base api path + endpoint + parameter
headers.Authorization = "Basic " + encode.base64 ( principal + ":" + secret )
```

Below code snippets will help you to get started with the initial authentication and get some data from an endpoint.

| Code Snippet | Language | 
| ------------- | ------------- | 
| [tap_api_private.js](https://github.com/pfptcommunity/pfptcommunity/blob/main/tap_api_private.js) | Javascript / Node.js Request |
| [tap_api_private.py](https://github.com/pfptcommunity/pfptcommunity/blob/main/tap_api_private.py) | Python Request  |
| [tap_api_private.cs](https://github.com/pfptcommunity/pfptcommunity/blob/main/tap_api_private.cs) | C# (.net framework) Request   |
| [tap_api_private.java](https://github.com/pfptcommunity/pfptcommunity/blob/main/tap_api_private.java) | Java Request    |
| [tap_api_private.gs](https://github.com/pfptcommunity/pfptcommunity/blob/main/tap_api_private.gs) | Google Apps Script (GAS) Request |
| [tap_api_private.php](https://github.com/pfptcommunity/pfptcommunity/blob/main/tap_api_private.php) | PHP Request |
| [tap_api_private.pqs](https://github.com/pfptcommunity/pfptcommunity/blob/main/tap_api_private.pqs) | M Code for Excel or Power BI |
| [tap_api_private.ps1](https://github.com/pfptcommunity/pfptcommunity/blob/main/tap_api_private.ps1) | Powershell Request |
| [gscript](https://script.google.com/home/projects/1wBko_bTIrf-5ugVIOa5ypdJA1OEezUHyEbsVDX6Ntg2uIQ3DvWu3yGJL/edit)  | Google Data Studio Connector VAPs Source |


<br>

## TAP GitHub Projects

Some projects we found on GitHub:

- [Powershell wrapper by jfviana](https://github.com/jfviana/proofpoint-api )
- [Powershell wrapper by lambdac0de](https://github.com/lambdac0de/ProofpointTAP )
- [Powershell wrapper by Midnigh7](https://github.com/Midnigh7/PSProofpoint )
- [Python client by drizzo-tech ***](https://github.com/drizzo-tech/proofpoint_tap)
- [Python SIEM API Humio Package](https://github.com/CrowdStrike/Proofpoint-SIEM-API-Humio-Package-Integration)
- [Python SDK for decoding safeurls from Proofpoint, Microsoft, etc](https://github.com/renisac/safeurl-decoder)
- [Python VMware Carbon Black Cloud Endpoint Standard or Enterprise EDR](https://github.com/cbcommunity/cbc-proofpoint-malicous-file-detection)
- [Node-RED Client by Anamico](https://github.com/Anamico/node-red-contrib-proofpoint)
- [Javascript URL revealer for Gmail chrome extension by qubitslover](https://github.com/qubitslover/proofpoint)
- [Javascript URL revealer by Manikantapayasam ](https://github.com/Manikantapayasam/proofpoint-decoder)
- [Javascript Link Decoder](https://github.com/KevinGage/NodeProofpointLinkDecoder)
- [Django project to find decoded urls](https://github.com/qubitslover/proofpoint)
- [Go Client Library by greenpau](https://github.com/greenpau/go-proofpoint) 
- [PHP Link Decode](https://github.com/base-theme-class/base-theme-class-proofpoint)


<br>

- [Microsoft Sentinel](https://docs.microsoft.com/en-us/azure/sentinel/data-connectors-reference#proofpoint-targeted-attack-protection-tap-preview)


------------

# TRAP API

Threat Response Auto-Pull (TRAP) enables messaging and security administrators to analyze emails and move malicious or unwanted emails to quarantine, after delivery. It follows forwarded mail and distribution lists and creates an auditable activity trail.

e.g. CLEAR Dispositions

https://ptr-docs.proofpoint.com/extensibility-guides/ptr-api/#threat-response-api 

------------

# NPRE API

[Nexus People Risk Explorer](https://www.proofpoint.com/us/products/nexus-people-risk-explorer) (NPRE) gives you a unified view of your people-centric risk across the Proofpoint platform and third-party products.
The NPRE API allows you to download a csv file using an API call. 
The API is documented in the NPRE Admin Guide that can be found on the community website.
<br>

## Spreadsheet or BI tools consuming NPRE People/Risk data

Several BI and spreadsheet tools, like Microsoft Power BI and/or Excel or Google's toolset can directly fetch JSON data from an REST endpoint. See the [Microsoft doc](https://docs.microsoft.com/en-us/power-query/connectors/web/web) for more information.  See below some samples that fetches data directly from the NPRE endpoint.

<img src="https://raw.githubusercontent.com/pfptcommunity/pfptcommunity/main/npre_api_pb13.jpg" width=78% height=78%>

| Action  | Description | 
| ------------- | ------------- | 
| [MS Excel : YouTube Video](https://youtu.be/XrUXztNjvwo) | Short demonstration of the npre_api_people.xlsx sample sheet |
| [MS Excel : Download spreadsheet](https://github.com/pfptcommunity/pfptcommunity/raw/main/npre_api_csv.xlsx) | Download the npre_api_people.xlsx sample sheet   |
| [MS Power BI : YouTube Demo Video](https://youtu.be/gWChHj-VKKU) | Short demonstration of the npre_api_csv.pbix Power BI sample file |
| [MS Power BI : YouTube Howto Video](https://youtu.be/AKuiMyCnamk) | Howto getting started with the npre_api_csv.pbix Power BI sample file |
| [MS Power BI : Download pbix file](https://github.com/pfptcommunity/pfptcommunity/raw/main/npre_api_csv.pbix) | Download the npre_api_csv.pbix Power BI sample file   |
| [Google Data Studio : YouTube Demo Video](https://www.youtube.com/watch?v=rv-oRbwZOCo) | Short demonstration of GDS pulling data from NPRE |


Howto: Getting started with Power BI. 

- Open [Power BI](https://app.powerbi.com) and download Power BI desktop. 
- Download the pbix sample from this page and open it in Power BI
- Watch the howto video 

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
| [npre_api_csv.js](https://github.com/pfptcommunity/pfptcommunity/blob/main/npre_api_csv.js) | <i>Javascript / Node.js Request  (coming soon)</i>  |
| [npre_api_csv.py](https://github.com/pfptcommunity/pfptcommunity/blob/main/npre_api_csv.py) | Python Request  |
| [npre_api_csv.gs](https://github.com/pfptcommunity/pfptcommunity/blob/main/npre_api_csv.gs) | Google Apps Script (GAS) Request |
| [npre_api_csv.pqs](https://github.com/pfptcommunity/pfptcommunity/blob/main/npre_api_csv.pqs) | M Code for Excel or Power BI |

<br>

------------

# PSAT API

Proofpoint Security Awareness Training Results API [Documentation](https://proofpoint.securityeducation.com/pfptcommunity/reporting/documentation/) and [this on proofpointcommunity](
https://proofpointcommunities.force.com/community/s/article/Reports-API-Results-API-Setup).

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
| [Download Spreadsheet](https://github.com/pfptcommunity/pfptcommunity/raw/main/psat_api.xlsx) | Download the psat_api.xlsx sheet FIRST DRAFT  |
| [M Code script](https://github.com/pfptcommunity/pfptcommunity/blob/main/psat_api_private.pqs) | M Code for Excel or Power BI |


<br>

Below code snippets will help you to get started with the initial authentication and get some data from an endpoint.


## Cool PSAT API Code Snippets

| Code Snippet | Language | 
| ------------- | ------------- | 
| [psat_api_private.js](https://github.com/pfptcommunity/pfptcommunity/blob/main/psat_api_private.js) | Javascript / Node.js Request  |
| [psat_api_private.py](https://github.com/pfptcommunity/pfptcommunity/blob/main/psat_api_private.py) | Python Request  |
| [psat_api_private.gs](https://github.com/pfptcommunity/pfptcommunity/blob/main/psat_api_private.gs) | Google Apps Script (GAS) Request |


```
US: results.us.securityeducation.com
EU: results.eu.securityeducation.com
AP: results.ap.securityeducation.com
```


## GitHub

Found 

[Python module to interact with the Proofpoint Security Awareness Training (PSAT) Results API](https://github.com/regg00/psat-result-api)


<br>

------------

# ETI API

Proofpoint Emerging Threat Intelligence delivers the most timely and accurate threat intelligence. Our fully verified intel provides deeper context and integrates seamlessly with your security tools to enhance your decision-making.

- [ET Intelligence API documentation](http://apidocs.emergingthreats.net)
- [Emerging Threats datasheet](https://www.proofpoint.com/us/products/et-intelligence)
- [Admin login console](https://etadmin.proofpoint.com/login)
- [ETpro vs ETopen](https://www.proofpoint.com/sites/default/files/data-sheets/pfpt-us-ds-etpro-vs-etopen-ruleset.pdf)

<br>

| Action  | Description | 
| ------------- | ------------- | 
| [Excel : Download Sample](https://github.com/pfptcommunity/pfptcommunity/raw/main/eti_api.xlsx) | Download the eti_api.xlsx sheet DRAFT   |



## Cool ET API Code Snippets

| Code Snippet | Language | 
| ------------- | ------------- | 
| [eti_api.js](https://github.com/pfptcommunity/pfptcommunity/blob/main/eti_api.js) | Javascript / Node.js Request  |
| [eti_api.py](https://github.com/pfptcommunity/pfptcommunity/blob/main/eti_api.py) | Python Request  |
| [eti_api.cs](https://github.com/pfptcommunity/pfptcommunity/blob/main/eti_api.cs) | C# (.net framework) Request |
| [eti_api.gs](https://github.com/pfptcommunity/pfptcommunity/blob/main/eti_api.gs) | Google Apps Script (GAS) Request |


<br>

## ETI GitHub Projects
- [Python Wrapper for Proofpoint's Threat Insight API](https://github.com/Derekt2/PyProofpoint)
- [An integration for VMware Carbon Black Cloud and Proofpoint Emerging Threats](https://github.com/cbcommunity/cbc-proofpoint-et-intelligence-reputation-list)
- [IPscraper query IPs for the latest data Jason Ford](https://github.com/jasonsford/IPScraper/blob/main/IPScraper.py)




------------

# POD API
The [Proofpoint on Demand (PoD) Logging API documentation](https://proofpointcommunities.force.com/community/s/article/Proofpoint-on-Demand-Pod-Log-API)

[Node.Js client subscriber for Proofpoint On-demand's (PoD) Log API](https://github.com/lambdac0de/node-proofpoint-podclient)

<br>

This is a client subscriber to Proofpoint On-demand's (PoD) Log API. The Log API is a websocket service (wss) awaiting connections from clients. You can subscibe to either filter (message) logs or MTA (maillog) logs.

https://github.com/lambdac0de/node-proofpoint-podclient


------------

# ESS-API
The Proofpoint [Essentials API documentation](https://us1.proofpointessentials.com/pfptcommunity/v1/docs/index.php)

The API is available across all stacks. As a reference point, you can get to the API documentation here:

- [API Overview](https://us1.proofpointessentials.com/pfptcommunity/v1/docs/index.php)
- [Proofpoint Essentials Interface API v1](https://us1.proofpointessentials.com/pfptcommunity/v1/docs/specification.php)



Found on Github

- [Python wrapper by miearls](https://github.com/miearls/proofpoint)
- [c# wrapper by singhkamall](https://github.com/singhkamall/ProofPointEssentialsClient  )


------------

# CASB-API
The Proofpoint [CASB API documentation](https://proofpointcommunities.force.com/community/s/article/Proofpoint-Cloud-App-Security-Broker-API-Guides) 

The CASB API uses the following request structure:

```
method                = POST
request1              = Get the Bearer Token with your API id(key)/secret
request2              = Get the Data from the endpoint
```

Some of the commands that are supported by the api:

- Alerts
- Metadata Lookup
- Events API


------------

# META-API
The Proofpoint META API documentation TODO

- [Terraform Provider for Meta Networks 1](https://github.com/mataneine/terraform-provider-metanetworks)
- [Terraform Provider for Meta Networks 2](https://github.com/nsofnetworks/terraform-provider-metanetworks)

------------

# ITM-API
The Proofpoint ITM API documentation TODO

- [Python - Drizzo's API client library for python ***](https://github.com/drizzo-tech/proofpoint_itm)
- [ITM SDK python](https://github.com/yuta519/proofpoint-itm-sdk)

- [Getting started ITM API](https://uim-se-demo.itm-stage.proofpoint.com/v2/apps/portal/getting-started)
- [Search Github](https://github.com/search?l=JavaScript&q=ObserveIT&type=Repositories)

https://documentation.observeit.com/saas/threat_library/threat_library_items.htm

https://documentation.observeit.com/configuration_guide/integration_custom.htm




------------

# Business Intelligence

Key players and their REST API support

[Microsoft Power BI](https://docs.microsoft.com/en-us/power-query/connectors/) - howto [Build](https://docs.microsoft.com/en-us/rest/pfptcommunity/power-bi/) connector

[Qlik](https://help.qlik.com/en-US/connectors/Subsystems/REST_connector_help/Content/Connectors_REST/REST-connector.htm)

[Tableau (Salesforce)](https://help.tableau.com/current/pro/desktop/en-us/exampleconnections_overview.htm) - howto [Build](https://help.tableau.com/current/pfptcommunity/rest_api/en-us/REST/rest_api.htm) connector

[Microstrategy](https://www2.microstrategy.com/producthelp/Current/RESTSDK/Content/topics/REST_API/REST_API.htm)

[Sisence](https://documentation.sisense.com/docs/connecting-to-rest)

[Google Data Studio](https://datastudio.google.com/data) - howto [Build](https://developers.google.com/datastudio/connector/build) connector







