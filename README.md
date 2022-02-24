# Proofpoint API code snippets

Proofpoint APIs can be used to manage and gather information from the Proofpoint
solutions. Below code snippets and reference help you get started with the APIS.

<br>

Please **★ Star** on the top of this page if you like this page and you want to motivate us to publish more.

<br>

**TAP API**

Targeted Attack Protection (TAP) documentation is available 
on the following url: https://help.proofpoint.com/Threat_Insight_Dashboard/API_Documentation

Authenticate and request the VAPs from people endpoint
| File  | Language | 
| ------------- | ------------- | 
| [tap_api_private.js](https://github.com/pfptcommunity/api/blob/main/tap_api_private.js) | Javascript / Node.js |
| [tap_api_private.gs](https://github.com/pfptcommunity/api/blob/main/tap_api_private.gs) | Google Apps Script (GAS)|
| [tap_api_private.py](https://github.com/pfptcommunity/api/blob/main/tap_api_private.py) | Python  |


<br>


**NPRE API**

The Nexus People Risk Explorer API allows you to download a csv file usingusing an API call. 
The API is documented in the NPRE Admin Guide that can be found on the communite website.

| File  | Language | 
| ------------- | ------------- | 
| [npre_api_csv.js](https://github.com/pfptcommunity/api/blob/main/nprs_api_csv.js) | Javascript / Node.js (MMeollor?) |
| [npre_api_csv.gs](https://github.com/pfptcommunity/api/blob/main/nprs_api_csv.gs) | Google Apps Script |
| [npre_api_csv.py](https://github.com/pfptcommunity/api/blob/main/nprs_api_csv.py) | Python |



<br>

**PSAT API**

Todoite.


<br>

**Emerging Threats (ET) Intelligence API**

Emerging Threats (ET) Intelligence API documentation is available from this URL:
http://apidocs.emergingthreats.net

A datasheet for Emerging Threats is available from this URL:
https://www.proofpoint.com/us/products/et-intelligence

| File  | Language | 
| ------------- | ------------- | 
| [eti_api.js](https://github.com/pfptcommunity/api/blob/main/eti_api.js) | Javascript / Node.js (todo) |
| [eti_api.gs](https://github.com/pfptcommunity/api/blob/main/eti_api.gs) | Google Apps Script |
| [eti_api.py](https://github.com/pfptcommunity/api/blob/main/eti_api.py) | Python (todo) |


<br>

**Proofpoint PoD Logging API**
The Proofpoint PoD Logging API documentation is available from this URL:
https://proofpointcommunities.force.com/community/s/article/Proofpoint-on-Demand-Pod-Log-API


<br>


<br>

**What is REST API?**

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


