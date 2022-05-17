#!/usr/bin/env python
# coding: utf-8



########### Instructions ###########
# Go to NPRE Settings page > Connected Applications
# Click on Add Credentials
# Insert name and click Generate Service Credentials
# Copy Service principal to api_id variable below.
# Copy Secret to api_secret variable below.
# set the path variable below - where would you like the file to be saved


import requests
import os
from datetime import datetime
import glob


api_id = '••••••••'
api_secret = '••••••••'
timeseries = datetime.now().strftime("%Y%m%d")
path = '/Users/mypath/Desktop/'


def get_risk_posture():
    # Step 1 - generate api token for NPRE access
    print('Step 1 - generate api token for NPRE access\n')
    print('fetching token from User Center...\n')

    resp = requests.post(
                'https://auth.proofpoint.com/v1/token',
                data={"grant_type": "client_credentials",
                                 "client_id": api_id,
                                 "client_secret": api_secret },
                timeout=10,
            )

    print('resp:\n')
    print(resp)

    resp.raise_for_status()

    print('resp.json\n')
    print(resp.json())

    access_token = resp.json()['access_token']

    print('Token is:\n', access_token)

    # Step 2 - fetch data from NPRE
    print('Step 2 - fetch data from NPRE\n')
    req = {
            'operationName': 'getRiskPosture',
            'variables': {'time_series': timeseries},
            'query': """query getRiskPosture($time_series: DateTime){
                   getRiskPosture(time_series: $time_series) {
                        file
                    }}""",
        }

    print('req:\n')
    print(req)

    risk_posture_res = requests.post(
            'https://api.peoplecentric.proofpoint.com/graphql',
            headers={'Authorization': f'Bearer {access_token}'},
            json=req,
        ).json()

    print('\nrisk_posture_res:\n')
    print(risk_posture_res)

    csv_path = risk_posture_res['data']['getRiskPosture']['file']
    print('CSV file path is:\n', csv_path)

    if not csv_path:
        print('cant find risk posture')
        exit()

    # Step 3 - Download file
    print('Step 3 - Download file\n')
    #download_path = path + f'risk-posture-{timeseries}.csv'
    download_path = path + f'risk-posture.csv'
    print('Downloading to', download_path, '...\n')
    r = requests.get(csv_path, allow_redirects=True)

    open(download_path, 'wb').write(r.content)
    os.system(f'open {download_path}')


get_risk_posture()






