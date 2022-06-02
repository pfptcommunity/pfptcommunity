'''
this script is created for Python3+,
to get it working you need to install pandas
https://pandas.pydata.org/docs/getting_started/install.html
if you have pip installed use the following command
pip install pandas or pip3 install pandas depends on version of installed python.
'''

import json
import requests
import pandas as pd

url_main_tap = 'https://tap-api-v2.proofpoint.com'
uri_tap_vap = '/v2/people/vap'


def tap_cerd():
    '''
    no entry parameters are required, function will read cred file from working directory
    create a cred.json file in the same directory with credentials
    :return: tuple (principal, secret)
    '''
    try:
        fh = open('cred.json', 'r')
        cred = json.load(fh)
        principal = list(cred.values())[0]
        secret = list(cred.values())[1]
        return principal, secret
    except:
        print('File does not exist')


def get_tap_url(u1,u2):
    '''
    :param u1: main tap URL
    :param u2: second part of URI for instance /v2/people/vap
    :return: full URL string
    '''
    try:
        url = u1 + u2
        return url
    except:
        print('one of the URL elements is not populated')



def get_response():
    '''

    :return: api data
    '''
    try:
        params = {
            'window': '90'}
        url = get_tap_url(url_main_tap,uri_tap_vap)
        response = requests.get(url, params=params, auth=(tap_cerd()[0], tap_cerd()[1]))
        response.raise_for_status()
        return response
    except requests.exceptions.HTTPError as e:
        print(e)

if __name__ == '__main__':
    try:
        res = get_response() # get data from api
        dict_size = len(res.json()['users']) # number of elements in dictionary

        tap_vaps = {}
        while dict_size > 0:
            key = res.json()['users'][dict_size - 1]['identity']['emails'][0]
            value = res.json()['users'][dict_size - 1]['threatStatistics']['attackIndex']
            tap_vaps[key] = value
            dict_size -= 1

        column_names = ["users","attackIndex"]
        df = pd.DataFrame(list(tap_vaps.items()), columns=column_names)

        print(df)
    except TypeError as typeError:
        print(typeError)

