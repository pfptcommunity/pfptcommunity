import requests
import json


########### Instructions ###########
# Go to NPRE Settings page > Connected Applications
# Click on Add Credentials
# Insert name and click Generate Service Credentials
# Copy Service principal to principal variable below.
# Copy Secret to secret variable below.
# Set the required date of the file to time_series. example: '20220516'
# set the path variable below - where would you like the file to be saved. example '/Users/Downloads/' 


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

def getfile(csv_url,path):
    download_path = path + f'risk_posture.csv'
    print('Downloading to', download_path, '...\n')
    r = requests.get(csv_url, allow_redirects=True)
    open(download_path, 'wb').write(r.content)
    


def npre():
    principal   = "••••••••"
    secret      = "••••••••"
    tokenuri    = "https://auth.proofpoint.com/v1/token"
    apiuri      = "https://api.peoplecentric.proofpoint.com/graphql"
    time_series = datetime.now().strftime("%Y%m%d")                       # ** Your time series 2022 02 24
    path        = "/Users/mypath/Desktop/"                                # ** where should the file be stored on your machine

    # STEP 1: Get the Bearer Token
    token = getaccesstoken(principal, secret, tokenuri)

    # STEP 2: Get the CSV Filename Reference
    fileurl = getfilename(token, apiuri, time_series)

    # STEP 3: Print the CSV file url
    print(fileurl['data']['getRiskPosture']['file'],'\n')
    
    # STEP 4: Download the file from the url
    getfile(fileurl['data']['getRiskPosture']['file'],path)
    
    
    print('File download successfully completed')
    


if __name__ == '__main__':
    npre()
