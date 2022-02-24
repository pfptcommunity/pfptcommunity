import http.client
import urllib
import requests
import json

req ={
    'method'          : 'GET', 
    'key'             : '•••••••••', 
    'uri'             : 'https://api.emergingthreats.net', 
    'command'         : '/v1/repcategories', 
    'parameters'      : ''
   }

headers    = {'Authorization' : req['key']}
response   = requests.get(req['uri'] + req['command'] + req['parameters'], headers=headers)
res        = response.json()
print(res)
