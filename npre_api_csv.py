import requests
import json


def getaccesstoken(client_id, client_secret, tokenuri):
    data = {'grant_type': 'client_credentials', 'client_id': client_id, "client_secret": client_secret}
    access_token_response = requests.post(tokenuri, data=data)

    return json.loads(access_token_response.text)


def getfilename(token, apiuri, time_series):
    api_call_headers = {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token['access_token']}
    data = {"operationName": "getRiskPosture", "variables": {"time_series": time_series},
            "query": "query getRiskPosture($time_series: DateTime){getRiskPosture(time_series: $time_series){file}}"}
    api_call_response = requests.post(apiuri, headers=api_call_headers, data=json.dumps(data))

    return json.loads(api_call_response.text)


def npre():
    principal = ""
    secret = ""
    tokenuri = "https://auth.proofpoint.com/v1/token"
    apiuri = "https://api.peoplecentric.proofpoint.com/graphql"
    time_series = "20220224"

    # STEP 1: Get the Bearer Token
    token = getaccesstoken(principal, secret, tokenuri)

    # STEP 2: Get the CSV Filename Reference
    fileurl = getfilename(token, apiuri, time_series)

    # STEP 3: Print the CSV file url
    print(fileurl['data']['getRiskPosture']['file'])


if __name__ == '__main__':
    npre()
