**No Token Hypixel API**

🤔 What is the difference between other Hypixel API's and No Token Hypixel API?

    No Token Hypixel API Does Not Require Any API Tokens

😋 Required Packages To Use The API

    got
    cheerio
    node-fetch
    hooman

🖐️ Contact Me

You can contact me via Discord my Discord profile: ! SıpançBet#9752


🤖 Basic Examples

You can access player information using the code below.

```js
var api = require("no-key-hypixel-api")

async function apitest() {
    var data = await api.PlayerInfo("SpongeBed")
    console.log(data)
}

apitest()
```

Output of the code given above.

```
{
  level: '11',
  parkours_Completed: '0/16',
  friends: '2',
  last_Login: 'Dec 13, 2020',
  general_Achievements: '8/34',
  achievement_Points: '400',
  guild: '-'
}
```

You can access guild information using the code below.

```js
var api = require("no-key-hypixel-api")

async function apitest() {
    var data = await api.GuildInfo("technoclan")
    console.log(data)
}

apitest()
```

Output of the code given above.

```
{
  created_At: 'Jun 30, 2015',
  guild_Master: 'Technoblade',
  member_Count: '91/125',
  guild_Level: '119',
  members: [
    'Technoblade',    'Skypowergirl',     'Jilllian',
    'JabberJaws',     'David_31',         'TBC_Miles',
    'Gr4ss',          'TTVCheeseballG',   'Fuego5',
    'WDYT',           'Slackow',          'SSJBQuinn',
    'ZeroClicks',     'DerpyWeirdowo',    'ErrorOC',
    'sdslqyer',       'jaianism',         'Ballistiq',
    'xKool',          'rotorwash47',      'DrawThatRedstone',
    'vabajaa',        'DirkDozer',        'TheMacabicSound',
    'Pandillion',     'xLengoBug5',       'LapGrap',
    'MqsterXqnder',   'Grievous_Lady',    'LeTrelle',
    'CrusaderSirDan', 'CreatorCreepy',    'Alex33856',
    'Rekt_DJ',        'DontCallMeBlues',  'Milesilesiles',
    'dumdumnoob',     'iruwukki',         'ironbot223',
    'ePigeon',        'voggly',           'MitchFanHard'...
  ]
}
```

📝 Note

    This API is not finished and new features will be added soon.

Made With ❤ By SpongeBed