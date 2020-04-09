// Utility
access_key = ""
document.getElementById("access_token").onkeypress = function (key) {
    if (key.key == "Enter") {
        access_key = document.getElementById("access_token").value;
        open_websockets()
    }
}


function jsonToQueryString(json) {
    return Object.keys(json).map(function (key) {
        return encodeURIComponent(key) + '=' +
            encodeURIComponent(json[key]);
    }).join('&');
}

var userPrincipalsResponse =
{
    "accessLevel": "CUS",
    "accounts": [
        {
            "accountCdDomainId": "A000000076885136",
            "accountId": "686071611",
            "acl": "BPDRDTDWESF7G1G3G5G7GKGLH1H3H5LTM1QSRFSDTETFTOTTUAUR",
            "authorizations": {
                "advancedMargin": true,
                "apex": false,
                "levelTwoQuotes": false,
                "marginTrading": false,
                "optionTradingLevel": "NONE",
                "scottradeAccount": false,
                "stockTrading": true,
                "streamerAccess": true,
                "streamingNews": false
            },
            "company": "AMER",
            "displayName": "joshnathansmith",
            "segment": "ADVNCED"
        }
    ],
    "authToken": "Gtmljyc8QlPG6GQ9qOQzXvdHC/r7zLJ+lHk7Sh7Xxcy679CKcTtBru9U5nyqAMGze8qseZMTHpmsgBJXSbQV6NPJxRfRrFUSw4ALwM1tvMR/VNAnXBrdPPc0Hd3UUJ7LGPC2mkyBiVrZLmU7Wwpn5cKHjFY9oNX/skNHcEMYu4bldFGovDMwO7mk1dG7squWH3bSSW5PwTdsPSQ3EK8lrXrS6JBaAbSewyqEXEN2veb5LpyvTeFt1lntQZ+x46siSAopp90Fi6tRS8OSAmCrV7lnsN4lVL4OF4gT1go7/mUjz9bS68NFQuIjSNCxJ7if7GhkmmRbc4jZgwSnMo5IMo4Y99ytG+OCg8LoRYsbMicPf/MZeQXJUwcaE9aoN9NbKaoqSlVIB79zPhYTsQyWm3F92f+3vWgaxPzm8R8c133l5tJnFYFfyRFtURIWwA3lEZL6mL22kG5sdmTsDf/GgtnFe3SzWaOKTNBseULlK4y02yZWED1BJk+pd9KUih/sHF37KK6MzILhSU4EtlEWoAaw2FKYSLA6rdDdKI5Bwywb8AW0v100MQuG4LYrgoVi/JHHvlK+nVqt8GUXZUFHzXrl8Rmvsz44Rb4E/n6AMoAgrGGMau58wFYqiVOoiyVKbxP7TRok3wOlEbgoTq643rwafaXagUeLIq6gR/SAqZ1dqDrU70WguwZoT/tb2HjOtQBbhbn6wJW7zs7kap3VIGsCYdx8usPav++mXxiiAjW+cwI1CATWAuwgMYUtHTJEa58O9wRsK/td9r+gwcVjYqjCT88euFbnL1KneLQu4laIEbldRZ5snTkKlpIqGEGR+aYCSGYjgSAZxfudd9a31LzK7sSGTWR/LGeQ0qjv7p1u+KQmiX0SQZ73Clqlt2peinoNydJnZ+Gf4IWxxVKeFeeEK04uDe5ISVOEoSMk1U9R5fOoerIdzyrdJrOMFDBOMlAEo7H/Voxw0gpZwXPDqNr8GUjTDcaHB65mltUTSIR7MYvOTPXtbN03ktLH6zkb/vNTkrME5wYKvLetYpngJDPLdWm9RTbbKD972IjfKfXZMmBMWWNx80YEeDmsji+uHOYdeMcYmqMXKMwe00CSL45lfHpTS1IU3/Mr92dDcGTdRixbVpkk4Q==212FD3x19z9sWBHDJACbC00B75E",
    "lastLoginTime": "2020-04-09T03:51:44+0000",
    "loginTime": "2020-04-09T03:51:44+0000",
    "primaryAccountId": "686071611",
    "professionalStatus": "UNKNOWN_STATUS",
    "quotes": {
        "isAmexDelayed": true,
        "isCmeDelayed": true,
        "isForexDelayed": true,
        "isIceDelayed": true,
        "isNasdaqDelayed": true,
        "isNyseDelayed": true,
        "isOpraDelayed": true
    },
    "stalePassword": false,
    "streamerInfo": {
        "accessLevel": "ACCT",
        "acl": "BPDRDTDWESF7G1G3G5G7GKGLH1H3H5LTM1QSRFSDTETFTOTTUAURD1D3D5D7E1E3E5E7F1F3F5H7I1",
        "appId": "joshnathansm",
        "streamerBinaryUrl": "streamer-bin.tdameritrade.com",
        "streamerSocketUrl": "streamer-ws.tdameritrade.com",
        "token": access_key,
        "tokenTimestamp": "2020-04-09T03:51:45+0000",
        "userGroup": "ACCT"
    },
    "tokenExpirationTime": "2020-04-09T04:21:44+0000",
    "userCdDomainId": "A000000076885137",
    "userId": "joshnathansmith"
}

//Converts ISO-8601 response in snapshot to ms since epoch accepted by Streamer
var tokenTimeStampAsDateObj = new Date(userPrincipalsResponse.streamerInfo.tokenTimestamp);
var tokenTimeStampAsMs = tokenTimeStampAsDateObj.getTime();

var credentials = {
    "userid": userPrincipalsResponse.accounts[0].accountId,
    "token": userPrincipalsResponse.streamerInfo.token,
    "company": userPrincipalsResponse.accounts[0].company,
    "segment": userPrincipalsResponse.accounts[0].segment,
    "cddomain": userPrincipalsResponse.accounts[0].accountCdDomainId,
    "usergroup": userPrincipalsResponse.streamerInfo.userGroup,
    "accesslevel": userPrincipalsResponse.streamerInfo.accessLevel,
    "authorized": "Y",
    "timestamp": tokenTimeStampAsMs,
    "appid": userPrincipalsResponse.streamerInfo.appId,
    "acl": userPrincipalsResponse.streamerInfo.acl
}

var request = {
    "requests": [
        {
            "service": "ADMIN",
            "command": "LOGIN",
            "requestid": 0,
            "account": userPrincipalsResponse.accounts[0].accountId,
            "source": userPrincipalsResponse.streamerInfo.appId,
            "parameters": {
                "credential": jsonToQueryString(credentials),
                "token": userPrincipalsResponse.streamerInfo.token,
                "version": "1.0"
            }
        }
    ]
}

function open_websockets() {
    var mySock = new WebSocket("wss://" + userPrincipalsResponse.streamerInfo.streamerSocketUrl + "/ws");
    mySock.onopen = function (evt) { console.log('Websocket Opened') }
    mySock.onmessage = function (evt) { console.log("evt.data"); }; mySock.onclose = function () { console.log("CLOSED"); };
}
