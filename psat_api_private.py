import http.client
import urllib
import requests
import json

req ={
    'method'          : 'GET', 
    'key'             : '•••••••••', 
    'uri'             : 'https://results.eu.securityeducation.com:443', 
    'command'         : '/api/reporting/v0.1.0/cyberstrength', 
    'parameters'      : ''
   }


headers    = {'x-apikey-token' : req['key']}
response   = requests.get(req['uri'] + req['command'] + req['parameters'], headers=headers)
res        = response.json()
print(res)


