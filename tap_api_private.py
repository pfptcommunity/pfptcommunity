import http.client
import urllib
import requests
import basicauth
import base64
import json

req ={
    'method'          : 'GET', 
    'principal'       : '•••••••••', 
    'secret'          : '•••••••••', 
    'uri'             : 'https://tap-api-v2.proofpoint.com', 
    'command'         : '/v2/people/vap', 
    'parameters'      : '?window=90'
   }

userpass   = req['principal'] + ':' + req['secret']
encoded_u  = base64.b64encode(userpass.encode()).decode()
headers    = {'Authorization' : 'Basic %s' % encoded_u}
response   = requests.get(req['uri'] + req['command'] + req['parameters'], headers=headers)
res        = response.json()
print(res)



