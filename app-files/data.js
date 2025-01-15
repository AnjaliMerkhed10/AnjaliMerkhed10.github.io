var APP_DATA = {
  "scenes": [
    {
      "id": "0-nashik_main",
      "name": "NASHIK_MAIN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 1.296531152896442,
        "pitch": 0.1802174907633809,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
   
        {
          "yaw": 1.296531152896442,
          "pitch": 0.1802174907633809,
          "rotation": 0,
          "target": "1-pf1-entry"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.293619888995039,
          "pitch": 0.025347762093684167,
          "title": "<img src='pin_icon/Entryexit.png' alt='Custom Icon' style='width: 40px; height: 40px;'> MAIN ENTRANCE PF1",
          "text": "Text"
        },
    
      ]
    },
    {
      "id": "1-pf1-entry",
      "name": "PF1 ENTRY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -3.094200933439229,
        "pitch": 0.0072670782132266964,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 2.841414546098018,
          "pitch": 0.30588082806378125,
          "rotation": 0,
          "target": "4-pf1-inside"
        },
        {
          "yaw": 2.842361877646674,
          "pitch": 0.5058605242265113,
          "rotation": 3.141592653589793,
          "target": "0-nashik_main"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-exit-busstand",
      "name": "EXIT BUSSTAND",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -2.510945397054858,
        "pitch": 0.09234222024371697,
        "fov": 1.325599857056214
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "3-ticket-counter-mg",
      "name": "TICKET COUNTER MG",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 1.3463823305589457,
        "pitch": -0.05256343480599668,
        "fov": 0.8107821545653882
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "4-pf1-inside",
      "name": "PF1 INSIDE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 1.586681772640799,
        "pitch": -0.01999064861874622,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 1.6395743199825112,
          "pitch": 0.14944264757424897,
          "rotation": 0,
          "target": "5-pf-1_lr"
        },
        {
          "yaw": 1.6478953257978395,
          "pitch": 0.42214515201925984,
          "rotation": 3.141592653589793,
          "target": "1-pf1-entry"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.27749223304137516,
          "pitch": 0.03753863889658504,
          "title": "<img src='pin_icon/store.png' alt='Custom Icon' style='width: 40px; height: 40px;'> GIFT STORE/OSOP",
          "text": "Text"
        },
        {
          "yaw": -2.1846958559071794,
          "pitch": 0.01630615467034069,
          "title": "<img src='pin_icon/store.png' alt='Custom Icon' style='width: 40px; height: 40px;'> KHADI STORE",
          "text": "Text"
        }
      ]
    },
    {
      "id": "5-pf-1_lr",
      "name": "PF 1_L&R",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -2.955507669199296,
        "pitch": 0.2709987354578889,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 3.1226136946915855,
          "pitch": 0.6001708231340785,
          "rotation": 10.995574287564278,
          "target": "6-l1_pf1"
        },
        {
          "yaw": -2.621333491535143,
          "pitch": 0.5998768742171237,
          "rotation": 1.5707963267948966,
          "target": "16-r1_pf1"
        },
        {
          "yaw": -2.8615689082570768,
          "pitch": 0.7812716328071616,
          "rotation": 3.141592653589793,
          "target": "4-pf1-inside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-l1_pf1",
      "name": "L1_PF1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 1.4496997673966323,
        "pitch": 0.19772750555996055,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 1.5645275369122915,
          "pitch": 0.3702912853036171,
          "rotation": 0,
          "target": "7-l2_pf1"
        },
        {
          "yaw": -1.6639211916304486,
          "pitch": 0.268024581445232,
          "rotation": 6.283185307179586,
          "target": "5-pf-1_lr"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.37656529391720994,
          "pitch": 0.01826490588424967,
          "title": "<img src='pin_icon/sleeping_pod.png' alt='Custom Icon' style='width: 40px; height: 40px;'> UPPER CLASS WAITING ROOM",
          "text": "Text"
        },
        {
          "yaw": -0.6027288304937279,
          "pitch": 0.061308346014698145,
          "title": "<img src='pin_icon/office.png' alt='Custom Icon' style='width: 40px; height: 40px;'> TCI OFFICE",
          "text": "Text"
        },
        {
          "yaw": 0.6632708550369113,
          "pitch": 0.005735486322127059,
          "title": "<img src='pin_icon/waiting.png' alt='Custom Icon' style='width: 40px; height: 40px;'> WAITING ROOM",
          "text": "Text"
        }
      ]
    },
    {
      "id": "7-l2_pf1",
      "name": "L2_PF1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 2.7153693704498396,
        "pitch": -0.055066455511029844,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 2.776363033854892,
          "pitch": 0.20096314066816667,
          "rotation": 0,
          "target": "8-l3_pf1"
        },
        {
          "yaw": -0.4504300784568258,
          "pitch": 0.33149533850217594,
          "rotation": 6.283185307179586,
          "target": "6-l1_pf1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.4955449919329187,
          "pitch": 0.04512174814222902,
          "title": "<img src='pin_icon/fruit_stall.png' alt='Custom Icon' style='width: 40px; height: 40px;'> KITAB GHAR",
          "text": "Text"
        },
        {
          "yaw": 1.483406237145843,
          "pitch": 0.03219472941925794,
          "title": "<img src='pin_icon/office.png' alt='Custom Icon' style='width: 40px; height: 40px;'> DYSS OFFICE",
          "text": "Text"
        }
      ]
    },
    {
      "id": "8-l3_pf1",
      "name": "L3_PF1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -2.1979887525096338,
        "pitch": 0.05434641692768594,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -2.1412995749798203,
          "pitch": 0.27696552096417903,
          "rotation": 0,
          "target": "9-l4_pf1"
        },
        {
          "yaw": 0.9084866273361722,
          "pitch": 0.29649298265098345,
          "rotation": 6.283185307179586,
          "target": "7-l2_pf1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.8959656430599061,
          "pitch": 0.032122126842089926,
          "title": "<img src='pin_icon/waiting.png' alt='Custom Icon' style='width: 40px; height: 40px;'> MAA TARA AC WAITING &amp; CLOAK ROOM",
          "text": "Text"
        },
        {
          "yaw": 2.189276668969401,
          "pitch": 0.048682679174305576,
          "title": "<img src='pin_icon/waiting.png' alt='Custom Icon' style='width: 40px; height: 40px;'> SLEEPER CLASS WAITING ROOM",
          "text": "Text"
        },
        {
          "yaw": 3.0388272267455143,
          "pitch": -0.0477236598101527,
          "title": "<img src='pin_icon/fruit_stall.png' alt='Custom Icon' style='width: 40px; height: 40px;'> RAIL AHAR (TEA STALL)",
          "text": "Text"
        },
        {
          "yaw": -2.9623182257782847,
          "pitch": -0.043805147944940614,
          "title": "<img src='pin_icon/fruit_stall.png' alt='Custom Icon' style='width: 40px; height: 40px;'> MULTI PURPOSE STALL",
          "text": "Text"
        }
      ]
    },
    {
      "id": "9-l4_pf1",
      "name": "L4_PF1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.560726934803558,
        "pitch": 0.029198439354251704,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 1.0534587796467498,
          "pitch": 0.22078143066858047,
          "rotation": 0,
          "target": "10-l5_pf1"
        },
        {
          "yaw": -2.731034272555757,
          "pitch": 0.23412974824907096,
          "rotation": 6.283185307179586,
          "target": "8-l3_pf1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.104433112436002,
          "pitch": 0.13240782348670344,
          "title": "<img src='pin_icon/washroom.png' alt='Custom Icon' style='width: 40px; height: 40px;'> PAY &amp; USE TOILET(M/F)&nbsp;",
          "text": "Text"
        },
        {
          "yaw": -0.5973557459971719,
          "pitch": 0.046856471501012464,
          "title": "<img src='pin_icon/office.png' alt='Custom Icon' style='width: 40px; height: 40px;'> PARCEL OFFICE",
          "text": "Text"
        }
      ]
    },
    {
      "id": "10-l5_pf1",
      "name": "L5_PF1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -1.7952378686601165,
        "pitch": 0.07008457974131588,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -1.596551797891248,
          "pitch": 0.30687982773736877,
          "rotation": 0,
          "target": "11-l6_pf1way-to_pf2"
        },
        {
          "yaw": 1.4368254700257754,
          "pitch": 0.32957670986568033,
          "rotation": 6.283185307179586,
          "target": "9-l4_pf1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-l6_pf1way-to_pf2",
      "name": "L6_PF1WAY TO_PF2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 1.4372245928591028,
        "pitch": 0.1651589094770607,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 1.4509164164101884,
          "pitch": 0.41199461990865416,
          "rotation": 0,
          "target": "12-l7_pf1_lift-way-to-pf2"
        },
        {
          "yaw": -1.815095481218286,
          "pitch": 0.32059565697123205,
          "rotation": 6.283185307179586,
          "target": "10-l5_pf1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6776948274858849,
          "pitch": 0.09224574293683929,
          "title": "<img src='pin_icon/platform.png' alt='Custom Icon' style='width: 40px; height: 40px;'> WAY TO PF2,3&amp;4",
          "text": "Text"
        }
      ]
    },
    {
      "id": "12-l7_pf1_lift-way-to-pf2",
      "name": "L7_PF1_LIFT WAY TO PF2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 1.3428376152683867,
        "pitch": 0.010012082820185952,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 1.372372719323744,
          "pitch": 0.2882056284004939,
          "rotation": 0,
          "target": "13-l8_pf1"
        },
        {
          "yaw": -1.7573531021431599,
          "pitch": 0.5393593680439537,
          "rotation": 6.283185307179586,
          "target": "11-l6_pf1way-to_pf2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.50122488335602,
          "pitch": 0.0696371511353231,
          "title": "<img src='pin_icon/lift.png' alt='Custom Icon' style='width: 40px; height: 40px;'> LIFT",
          "text": "Text"
        }
      ]
    },
    {
      "id": "13-l8_pf1",
      "name": "L8_PF1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 2.6964295383815315,
        "pitch": 0.16550105839006157,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 3.000330231414514,
          "pitch": 0.425895606530311,
          "rotation": 0,
          "target": "14-l9_pf1"
        },
        {
          "yaw": -0.18248491859573157,
          "pitch": 0.13824792903420402,
          "rotation": 0,
          "target": "12-l7_pf1_lift-way-to-pf2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.6983110388788312,
          "pitch": 0.19131970164288603,
          "title": "<img src='pin_icon/water.png' alt='Custom Icon' style='width: 40px; height: 40px;'> DRINKING WATER",
          "text": "Text"
        }
      ]
    },
    {
      "id": "14-l9_pf1",
      "name": "L9_PF1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -1.1683020299064175,
        "pitch": -0.06507853833121402,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -1.4024552745221506,
          "pitch": 0.3857729318693295,
          "rotation": 0,
          "target": "15-l10_pf1"
        },
        {
          "yaw": 1.620454107939758,
          "pitch": 0.3249782132816108,
          "rotation": 0,
          "target": "13-l8_pf1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.832284559854095,
          "pitch": 0.19420414319967882,
          "title": "<img src='pin_icon/water.png' alt='Custom Icon' style='width: 40px; height: 40px;'> DRINKING WATER",
          "text": "Text"
        }
      ]
    },
    {
      "id": "15-l10_pf1",
      "name": "L10_PF1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.13600845391318117,
        "pitch": 0.33790520032867377,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.18546131050871217,
          "pitch": 0.3752015449103272,
          "rotation": 0,
          "target": "14-l9_pf1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-r1_pf1",
      "name": "R1_PF1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -1.817233064882199,
        "pitch": -0.03014231413156132,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -2.067956974445872,
          "pitch": 0.14323090910130176,
          "rotation": 0,
          "target": "17-r2_pf1"
        },
        {
          "yaw": 1.000125290727718,
          "pitch": 0.2600608292989275,
          "rotation": 0,
          "target": "5-pf-1_lr"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.12419078029103225,
          "pitch": -0.02552234466426384,
          "title": "<img src='pin_icon/water.png' alt='Custom Icon' style='width: 40px; height: 40px;'> DRINKING WATER",
          "text": "Text"
        },
        {
          "yaw": -0.8134545676314424,
          "pitch": 0.031240692265591008,
          "title": "<img src='pin_icon/station_manager.png' alt='Custom Icon' style='width: 40px; height: 40px;'> STATION MASTER",
          "text": "Text"
        },
        {
          "yaw": -1.355665178474844,
          "pitch": 0.036604895966409146,
          "title": "<img src='pin_icon/waiting.png' alt='Custom Icon' style='width: 40px; height: 40px;'> VIP ROOM",
          "text": "Text"
        }
      ]
    },
    {
      "id": "17-r2_pf1",
      "name": "R2_PF1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.9003398407812888,
        "pitch": 0.08849606561124546,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -1.4340358113422855,
          "pitch": 0.260544633389971,
          "rotation": 0,
          "target": "18-r3_pf1_lr"
        },
        {
          "yaw": 1.7749440911917507,
          "pitch": 0.2892938389789208,
          "rotation": 0,
          "target": "17-r2_pf1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6068486536552768,
          "pitch": -0.03268987365482623,
          "title": "<img src='pin_icon/fruit_stall.png' alt='Custom Icon' style='width: 40px; height: 40px;'> IRCTC FOOD TRACK",
          "text": "Text"
        }
      ]
    },
    {
      "id": "18-r3_pf1_lr",
      "name": "R3_PF1_L&R",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 2.0338428630382905,
        "pitch": 0.1727084286482441,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 1.7634017614251887,
          "pitch": 0.3276138635128767,
          "rotation": 0,
          "target": "19-r4_pf1"
        },
        {
          "yaw": 3.0757331187414847,
          "pitch": 0.4278038332290848,
          "rotation": 12.566370614359176,
          "target": "24-r3_1_inside"
        },
        {
          "yaw": -1.545024341139186,
          "pitch": 0.36696663262274676,
          "rotation": 0,
          "target": "17-r2_pf1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-r4_pf1",
      "name": "R4_PF1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -1.809443387781883,
        "pitch": 0.012515103525213789,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -2.330525899663723,
          "pitch": 0.3039556841787636,
          "rotation": 0,
          "target": "20-r5_pf1"
        },
        {
          "yaw": 0.7927337351194979,
          "pitch": 0.220144378439457,
          "rotation": 0,
          "target": "18-r3_pf1_lr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-r5_pf1",
      "name": "R5_PF1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 2.498382747891081,
        "pitch": -0.02010167074827507,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 1.9704865226104236,
          "pitch": 0.2147229469312535,
          "rotation": 0,
          "target": "21-r6_pf1"
        },
        {
          "yaw": -1.1527099835104568,
          "pitch": 0.19916331914902585,
          "rotation": 0,
          "target": "20-r5_pf1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.782783259713895,
          "pitch": 0.10699987539393163,
          "title": "<img src='pin_icon/lift.png' alt='Custom Icon' style='width: 40px; height: 40px;'> LIFT",
          "text": "Text"
        },
        {
          "yaw": 2.3429038253792935,
          "pitch": 0.054294301432708636,
          "title": "<img src='pin_icon/water.png' alt='Custom Icon' style='width: 40px; height: 40px;'> DRINKING WATER",
          "text": "Text"
        }
      ]
    },
    {
      "id": "21-r6_pf1",
      "name": "R6_PF1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.7513388949826378,
        "pitch": 0.1880358815090375,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -1.4201905214263704,
          "pitch": 0.36451883723098,
          "rotation": 0,
          "target": "22-r7_pf1"
        },
        {
          "yaw": 2.108062829826583,
          "pitch": 0.20714984275356763,
          "rotation": 0,
          "target": "21-r6_pf1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.03811751839894306,
          "pitch": -0.11959341455203187,
          "title": "<img src='pin_icon/police_station.png' alt='Custom Icon' style='width: 40px; height: 40px;'> RAILWAY POLICE STATION",
          "text": "Text"
        },
        {
          "yaw": 1.209768273653797,
          "pitch": -0.091920665507768,
          "title": "<img src='pin_icon/police_station.png' alt='Custom Icon' style='width: 40px; height: 40px;'> R P F STATION",
          "text": "Text"
        }
      ]
    },
    {
      "id": "22-r7_pf1",
      "name": "R7_PF1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -2.550317845771314,
        "pitch": 0.3404108158863899,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -3.114035471821115,
          "pitch": 0.404939518709039,
          "rotation": 0.7853981633974483,
          "target": "23-r8_pf1"
        },
        {
          "yaw": 1.6991209766283433,
          "pitch": 0.23000450114908766,
          "rotation": 5.497787143782138,
          "target": "21-r6_pf1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.913865291367614,
          "pitch": -0.002267672306414781,
          "title": "<img src='pin_icon/washroom.png' alt='Custom Icon' style='width: 40px; height: 40px;'> PAY &amp; USE TOILET",
          "text": "Text"
        },
        {
          "yaw": -1.4230076606297217,
          "pitch": 0.017134949997092974,
          "title": "<img src='pin_icon/washroom.png' alt='Custom Icon' style='width: 40px; height: 40px;'> DIVYANGJAN TOILET",
          "text": "Text"
        },
        {
          "yaw": -2.669993840059419,
          "pitch": 0.39195413623674824,
          "title": "<img src='pin_icon/water.png' alt='Custom Icon' style='width: 40px; height: 40px;'> DRINKING WATER",
          "text": "Text"
        }
      ]
    },
    {
      "id": "23-r8_pf1",
      "name": "R8_PF1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -1.6116371275884447,
        "pitch": 0.21375891369764943,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 2.248567320903163,
          "pitch": 0.280933901269961,
          "rotation": 0,
          "target": "22-r7_pf1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-r3_1_inside",
      "name": "R3_1_INSIDE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.7978648009116966,
        "pitch": -0.0600724969211317,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -1.2555076820455788,
          "pitch": 0.18016245869120695,
          "rotation": 0,
          "target": "25-r3_2_in_ammenities"
        },
        {
          "yaw": 2.0284757944509684,
          "pitch": 0.16430908008166156,
          "rotation": 0,
          "target": "18-r3_pf1_lr"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.7351362668919315,
          "pitch": -0.07391979352376943,
          "title": "<img src='pin_icon/waiting.png' alt='Custom Icon' style='width: 40px; height: 40px;'> RELAX ZONE",
          "text": "Text"
        },
        {
          "yaw": -0.1900151572808415,
          "pitch": 0.0443343400401659,
          "title": "ATM",
          "text": "Text"
        },
        {
          "yaw": -0.3757734886419186,
          "pitch": 0.019831929759732247,
          "title": "<img src='pin_icon/waiting.png' alt='Custom Icon' style='width: 40px; height: 40px;'> GODAWARI WAITING HALL",
          "text": "Text"
        },
        {
          "yaw": -0.35629251723412736,
          "pitch": -0.1392964037373794,
          "title": "<img src='pin_icon/sleeping_pod.png' alt='Custom Icon' style='width: 40px; height: 40px;'> IRCTC DORMITORY",
          "text": "Text"
        }
      ]
    },
    {
      "id": "25-r3_2_in_ammenities",
      "name": "R3_2_IN_AMMENITIES",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -2.0017797090633245,
        "pitch": 0.06758155903625607,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -1.5633254203113456,
          "pitch": 0.29516156539576244,
          "rotation": 0,
          "target": "26-r3_3_in_lr"
        },
        {
          "yaw": 1.8810894156234355,
          "pitch": 0.2996140230468143,
          "rotation": 0,
          "target": "24-r3_1_inside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-r3_3_in_lr",
      "name": "R3_3_IN_L&R",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.5556367491078618,
        "pitch": 0.19737487900123085,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -1.0384397670135357,
          "pitch": 0.26488312711158457,
          "rotation": 0,
          "target": "27-r3_4_way-to-pf2--straight"
        },
        {
          "yaw": -2.7116161324399783,
          "pitch": 0.30093094774644413,
          "rotation": 0,
          "target": "25-r3_2_in_ammenities"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.1069679243315003,
          "pitch": 0.21781511611545312,
          "title": "EXIT",
          "text": "Text"
        }
      ]
    },
    {
      "id": "27-r3_4_way-to-pf2--straight",
      "name": "R3_4_WAY TO PF2 & STRAIGHT",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.19572970452554372,
        "pitch": 0.2028563332649096,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.42011835161195776,
          "pitch": 0.6473800465200767,
          "rotation": 0,
          "target": "28-r3_5"
        },
        {
          "yaw": -1.706246295580172,
          "pitch": 0.5363218752029422,
          "rotation": 6.283185307179586,
          "target": "30-pf1stair"
        },
        {
          "yaw": 2.882040234947773,
          "pitch": 0.2811813847738236,
          "rotation": 0,
          "target": "26-r3_3_in_lr"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.0398125198570387,
          "pitch": 0.057652641979492714,
          "title": "<img src='pin_icon/platform.png' alt='Custom Icon' style='width: 40px; height: 40px;'> WAY TO PF2,3,&amp;4",
          "text": "Text"
        },
        {
          "yaw": -1.4764060713298903,
          "pitch": 0.04754563270026679,
          "title": "<img src='pin_icon/escalator.png' alt='Custom Icon' style='width: 40px; height: 40px;'> WAY TO ESCALATOR",
          "text": "Text"
        }
      ]
    },
    {
      "id": "28-r3_5",
      "name": "R3_5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.39240189045836615,
          "pitch": 0.25308500007847634,
          "rotation": 0,
          "target": "29-r3_6"
        },
        {
          "yaw": -2.8448792623268346,
          "pitch": 0.293095141970225,
          "rotation": 0,
          "target": "27-r3_4_way-to-pf2--straight"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-r3_6",
      "name": "R3_6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.016242212447711,
          "pitch": 0.15781317322949207,
          "rotation": 0,
          "target": "28-r3_5"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.14046089911708748,
          "pitch": -0.01749812057524025,
          "title": "<img src='pin_icon/washroom.png' alt='Custom Icon' style='width: 40px; height: 40px;'> PAY &amp; USE DELUX TOILET",
          "text": "Text"
        },
        {
          "yaw": 1.0230782144422772,
          "pitch": 0.05892887238385214,
          "title": "<img src='pin_icon/pay_park' alt='Custom Icon' style='width: 40px; height: 40px;'> PAY PARKING",
          "text": "Text"
        }
      ]
    },
    {
      "id": "30-pf1stair",
      "name": "PF1STAIR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -2.388083851034704,
        "pitch": 0.0900260203374561,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -2.961933812910056,
          "pitch": 0.30223693230534465,
          "rotation": 0,
          "target": "31-pf1stair_pf2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.197206804330249,
          "pitch": 0.028242008424436804,
          "title": "<img src='pin_icon/sleeping_pod.png' alt='Custom Icon' style='width: 40px; height: 40px;'> IRCTC DOORMETRY",
          "text": "Text"
        },
        {
          "yaw": 2.194872362878429,
          "pitch": 0.19798362635871136,
          "title": "<img src='pin_icon/waiting.png' alt='Custom Icon' style='width: 40px; height: 40px;'> GODAVARI RETIERING HALL",
          "text": "Text"
        }
      ]
    },
    {
      "id": "31-pf1stair_pf2",
      "name": "PF1STAIR_PF2",
      "levels": 
      [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -2.5271655189591478,
        "pitch": 0.21275675992898435,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -2.722054892329677,
          "pitch": 0.3810469335383111,
          "rotation": 0,
          "target": "32-pf2stair"
        },
        {
          "yaw": -2.7351219916064355,
          "pitch": 0.6593583153733746,
          "rotation": 3.141592653589793,
          "target": "30-pf1stair"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.8395652907634421,
          "pitch": 0.0346808725419816,
          "title": "<img src='pin_icon/lift.png' alt='Custom Icon' style='width: 40px; height: 40px;'> PF1 LIFT MUMBAI END",
          "text": "Text"
        },
        {
          "yaw": -0.6848443758670619,
          "pitch": 0.1905097134981144,
          "title": "<img src='pin_icon/escalator.png' alt='Custom Icon' style='width: 40px; height: 40px;'> ECALATOR PF1 EXIT",
          "text": "Text"
        }
      ]
    },
    {
      "id": "32-pf2stair",
      "name": "PF2STAIR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 1.0258153685560636,
        "pitch": 0.4930558856609668,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.7164636172728578,
          "pitch": 0.456568287286121,
          "rotation": 0,
          "target": "38-pf4bridge"
        },
        {
          "yaw": 1.2066577030114551,
          "pitch": 0.7071543188743892,
          "rotation": 1.5707963267948966,
          "target": "33-pf23stairdown"
        },
        {
          "yaw": 0.6409148490097465,
          "pitch": 0.8579364939066298,
          "rotation": 3.141592653589793,
          "target": "31-pf1stair_pf2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.81212469213596,
          "pitch": 0.155037141609899,
          "title": "<img src='pin_icon/lift.png' alt='Custom Icon' style='width: 40px; height: 40px;'> LIFT PF2/3",
          "text": "Text"
        },
        {
          "yaw": 2.3946450799657875,
          "pitch": 0.36595634471500205,
          "title": "<img src='pin_icon/platform.png' alt='Custom Icon' style='width: 40px; height: 40px;'> STAIR MUMBAI END PF2/3",
          "text": "Text"
        }
      ]
    },
    {
      "id": "33-pf23stairdown",
      "name": "PF2,3STAIRDOWN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 1.022265283230098,
        "pitch": 0.38796883876269384,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.9929322164600283,
          "pitch": 0.7011040563469653,
          "rotation": 0,
          "target": "34-pf23"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7625480534506615,
          "pitch": 0.39054213364957846,
          "title": "<img src='pin_icon/platform.png' alt='Custom Icon' style='width: 40px; height: 40px;'> PF 2&amp;3 MUMBAI END",
          "text": "Text"
        }
      ]
    },
    {
      "id": "34-pf23",
      "name": "PF2,3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -1.0788730002626785,
        "pitch": 0.3021175255103614,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -1.576840121284146,
          "pitch": 0.32198507039796453,
          "rotation": 24.347343065320914,
          "target": "39-pf3_1me"
        },
        {
          "yaw": -1.3991201889194702,
          "pitch": 0.3399773525679599,
          "rotation": 7.0685834705770345,
          "target": "48-pf2_1me"
        },
        {
          "yaw": -0.7372983709760454,
          "pitch": 0.8356386060798151,
          "rotation": 20.420352248333668,
          "target": "47-pf2_1be"
        },
        {
          "yaw": -2.054421657166378,
          "pitch": 0.602171737169888,
          "rotation": 4.71238898038469,
          "target": "66-pf3_1be"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.7615888285160928,
          "pitch": 0.28877473710607227,
          "title": "<img src='pin_icon/Entryexit.png' alt='Custom Icon' style='width: 40px; height: 40px;'> TOWARDS PF3 MUMBAI END",
          "text": "Text"
        },
        {
          "yaw": -1.187930955186081,
          "pitch": 0.34446177402668354,
          "title": "<img src='pin_icon/Entryexit.png' alt='Custom Icon' style='width: 40px; height: 40px;'> TOWARDS PF2 MUMBAI END",
          "text": "Text"
        },
        {
          "yaw": -0.37911071874875546,
          "pitch": 0.5780500945730829,
          "title": "<img src='pin_icon/Entryexit.png' alt='Custom Icon' style='width: 40px; height: 40px;'> TOWARDS PF2 BHUSAWAL END",
          "text": "Text"
        },
        {
          "yaw": -2.177654244171398,
          "pitch": 0.5199885040856103,
          "title": "<img src='pin_icon/Entryexit.png' alt='Custom Icon' style='width: 40px; height: 40px;'> TOWARDS PF3 BHUSAWAL END",
          "text": "Text"
        }
      ]
    },
    {
      "id": "35-pf4rampdown",
      "name": "PF4RAMPDOWN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "36-pf4srairup",
      "name": "PF4SRAIRUP",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 2.888669893488629,
        "pitch": 0.09761780749683169,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 2.9703373020914663,
          "pitch": 0.3335878051935346,
          "rotation": 0,
          "target": "78-pf4_me6"
        },
        {
          "yaw": 2.9693434788737045,
          "pitch": 0.5533270654351234,
          "rotation": 3.141592653589793,
          "target": "37-pf4stairdownme"
        },
        {
          "yaw": -2.8416024646538958,
          "pitch": 0.47953015721331305,
          "rotation": 7.853981633974483,
          "target": "95-pf4_me5"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.791165915138775,
          "pitch": 0.34107020664270316,
          "title": "<img src='pin_icon/Entryexit.png' alt='Custom Icon' style='width: 40px; height: 40px;'> TOWARDS PF4 EXIT",
          "text": "Text"
        }
      ]
    },
    {
      "id": "37-pf4stairdownme",
      "name": "PF4STAIRDOWNME",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.4149609344027354,
        "pitch": 0.6783168205051489,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.4414056565953164,
          "pitch": 1.017931460479673,
          "rotation": 0,
          "target": "36-pf4srairup"
        },
        {
          "yaw": 0.04525455973901593,
          "pitch": 1.1562683081491656,
          "rotation": 7.853981633974483,
          "target": "32-pf2stair"
        },
        {
          "yaw": -0.8302791664131686,
          "pitch": 1.1676382449633955,
          "rotation": 3.141592653589793,
          "target": "38-pf4bridge"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.47809816653840365,
          "pitch": 0.36329866573164793,
          "title": "<img src='pin_icon/Entryexit.png' alt='Custom Icon' style='width: 40px; height: 40px;'> WAY TO PF4 MUMBAI END",
          "text": "Text"
        }
      ]
    },
    {
      "id": "38-pf4bridge",
      "name": "PF4BRIDGE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -1.731081666263762,
        "pitch": 0.16770238723814046,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 1.147846877110318,
          "pitch": 0.5582418702869631,
          "rotation": 0,
          "target": "32-pf2stair"
        },
        {
          "yaw": -0.8954531718841992,
          "pitch": 0.540413654097673,
          "rotation": 1.5707963267948966,
          "target": "37-pf4stairdownme"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.039567801228781,
          "pitch": 0.005835828626533868,
          "title": "<img src='pin_icon/lift.png' alt='Custom Icon' style='width: 40px; height: 40px;'> LIFT PF4",
          "text": "Text"
        },
        {
          "yaw": -1.0087157975127923,
          "pitch": 0.17674829232289646,
          "title": "<img src='pin_icon/escalator.png' alt='Custom Icon' style='width: 40px; height: 40px;'> ESCALATOR PF4",
          "text": "Text"
        }
      ]
    },
    {
      "id": "39-pf3_1me",
      "name": "PF3_1ME",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 3.0062405891494155,
        "pitch": 0.13766613877758793,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 2.605806085315554,
          "pitch": 0.37346775020019507,
          "rotation": 0,
          "target": "40-pf3_2me"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.8407617042125874,
          "pitch": 0.11420514789872449,
          "title": "<img src='pin_icon/water.png' alt='Custom Icon' style='width: 40px; height: 40px;'> DRINKING WATER",
          "text": "Text"
        }
      ]
    },
    {
      "id": "40-pf3_2me",
      "name": "PF3_2ME",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 2.356780295351129,
        "pitch": 0.07246016738090333,
        "fov": 1.0649791227204297
      },
      "linkHotspots": [
        {
          "yaw": 2.324950766223414,
          "pitch": 0.3372112153577156,
          "rotation": 0,
          "target": "41-pf3_3me"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4884785865797063,
          "pitch": -0.08248650835683691,
          "title": "<img src='pin_icon/fruit_stall.png' alt='Custom Icon' style='width: 40px; height: 40px;'> TEA STALL RAIL AHAR",
          "text": "Text"
        },
        {
          "yaw": 2.663724812909426,
          "pitch": -0.04606918065197263,
          "title": "<img src='pin_icon/milk.png' alt='Custom Icon' style='width: 40px; height: 40px;'> MAHANAND MILK",
          "text": "Text"
        }
      ]
    },
    {
      "id": "41-pf3_3me",
      "name": "PF3_3ME",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 2.8923925233385024,
        "pitch": 0.07831251899409963,
        "fov": 0.6397487679802966
      },
      "linkHotspots": [
        {
          "yaw": 2.891124207842596,
          "pitch": 0.22475618725341207,
          "rotation": 0,
          "target": "42-pf3_4me"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.4389671553046792,
          "pitch": 0.06260871724058958,
          "title": "<img src='pin_icon/water.png' alt='Custom Icon' style='width: 40px; height: 40px;'> DRINKING WATER",
          "text": "Text"
        },
        {
          "yaw": -3.0682642816131747,
          "pitch": 0.01331219648808002,
          "title": "<img src='pin_icon/store.png' alt='Custom Icon' style='width: 40px; height: 40px;'> OXYGEN PARLOR",
          "text": "Text"
        }
      ]
    },
    {
      "id": "42-pf3_4me",
      "name": "PF3_4ME",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -3.1398345447203226,
        "pitch": 0.04092956858466046,
        "fov": 0.9670805821184195
      },
      "linkHotspots": [
        {
          "yaw": -3.0958708833549213,
          "pitch": 0.23823864017142782,
          "rotation": 0,
          "target": "43-pf3_5me"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.3786903367588046,
          "pitch": -0.001067088946872019,
          "title": "<img src='pin_icon/store.png' alt='Custom Icon' style='width: 40px; height: 40px;'> FOOD STALL",
          "text": "Text"
        }
      ]
    },
    {
      "id": "43-pf3_5me",
      "name": "PF3_5ME",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 2.7996693647919395,
        "pitch": 0.04004833128074026,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 2.7046409091675585,
          "pitch": 0.2896818816427196,
          "rotation": 0,
          "target": "44-pf3_6me"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "44-pf3_6me",
      "name": "PF3_6ME",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 2.997332120486905,
        "pitch": 0.03002716659802651,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 2.8791129157676583,
          "pitch": 0.27353763542759424,
          "rotation": 0,
          "target": "45-pf3_7me"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.9081639811315654,
          "pitch": 0.1208604519914882,
          "title": "<img src='pin_icon/water.png' alt='Custom Icon' style='width: 40px; height: 40px;'> DRINKING WATER",
          "text": "Text"
        }
      ]
    },
    {
      "id": "45-pf3_7me",
      "name": "PF3_7ME",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 2.653089243262479,
        "pitch": 0.1076298903170052,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 2.634796094927438,
          "pitch": 0.3639685663457062,
          "rotation": 0,
          "target": "46-pf3_8me"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "46-pf3_8me",
      "name": "PF3_8ME",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 2.829959380263528,
        "pitch": 0.012475624565301047,
        "fov": 1.325599857056214
      },
      "linkHotspots": [],
      "infoHotspots": [
        {
          "yaw": -2.7285908121854483,
          "pitch": 0.09890252625098839,
          "title": "<img src='pin_icon/water.png' alt='Custom Icon' style='width: 40px; height: 40px;'> DRINKING WATER",
          "text": "Text"
        },
        {
          "yaw": -1.8778325767347255,
          "pitch": 0.05555513929741984,
          "title": "<img src='pin_icon/washroom.png' alt='Custom Icon' style='width: 40px; height: 40px;'> DIVYANGJAN TOILET",
          "text": "Text"
        }
      ]
    },
    {
      "id": "47-pf2_1be",
      "name": "PF2_1BE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 1.2277685768108384,
        "pitch": 0.16383408251215847,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.962324451909673,
          "pitch": 0.4731964244192852,
          "rotation": 0,
          "target": "49-pf2_2be"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.8122913320977911,
          "pitch": 0.07935020775629198,
          "title": "<img src='pin_icon/lift.png' alt='Custom Icon' style='width: 40px; height: 40px;'> LIFT",
          "text": "Text"
        }
      ]
    },
    {
      "id": "48-pf2_1me",
      "name": "PF2_1ME",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -1.053794817234838,
        "pitch": 0.20344988407247833,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.9276809764395679,
          "pitch": 0.5008763934626046,
          "rotation": 0,
          "target": "50-pf2_2me"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.403753565205964,
          "pitch": 0.18843175984219407,
          "title": "<img src='pin_icon/water.png' alt='Custom Icon' style='width: 40px; height: 40px;'> DRINKING WATER",
          "text": "Text"
        }
      ]
    },
    {
      "id": "49-pf2_2be",
      "name": "PF2_2BE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 2.6657290077556777,
        "pitch": 0.2588454665712412,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 2.4095435661290336,
          "pitch": 0.46013137516393776,
          "rotation": 0,
          "target": "51-pf2_3be"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.0287847807058075,
          "pitch": 0.12125640222134848,
          "title": "<img src='pin_icon/escalator.png' alt='Custom Icon' style='width: 40px; height: 40px;'> ESCALATOR",
          "text": "Text"
        },
        {
          "yaw": -1.7489340499679358,
          "pitch": 0.07623055643711041,
          "title": "<img src='pin_icon/water.png' alt='Custom Icon' style='width: 40px; height: 40px;'> DRINKING WATER",
          "text": "Text"
        },
        {
          "yaw": -2.807078417385995,
          "pitch": -0.11568338410792656,
          "title": "<img src='pin_icon/fruit_stall.png' alt='Custom Icon' style='width: 40px; height: 40px;'> FOOD AND TEA STALL",
          "text": "Text"
        }
      ]
    },
    {
      "id": "50-pf2_2me",
      "name": "PF2_2ME",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 2.8674215895153985,
        "pitch": 0.19773492200140552,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 2.7370406976094106,
          "pitch": 0.41653002830120656,
          "rotation": 0,
          "target": "52-pf2_3me"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.03427742495778219,
          "pitch": -0.006361935460210688,
          "title": "<img src='pin_icon/fruit_stall.png' alt='Custom Icon' style='width: 40px; height: 40px;'> FOOD STALL &amp; TEA",
          "text": "Text"
        },
        {
          "yaw": 1.8525867055494984,
          "pitch": -0.13857309015938313,
          "title": "<img src='pin_icon/milk.png' alt='Custom Icon' style='width: 40px; height: 40px;'> MAHANAND MILK STALL",
          "text": "Text"
        }
      ]
    },
    {
      "id": "51-pf2_3be",
      "name": "PF2_3BE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -2.272020087300781,
        "pitch": 0.08983773127938122,
        "fov": 0.6397487679802966
      },
      "linkHotspots": [
        {
          "yaw": -2.16343520312304,
          "pitch": 0.1982531015681097,
          "rotation": 0,
          "target": "53-pf2_4be"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5994066353438186,
          "pitch": -0.0509214533438076,
          "title": "<img src='pin_icon/fruit_stall.png' alt='Custom Icon' style='width: 40px; height: 40px;'> FOOD AND TEA STALL",
          "text": "Text"
        },
        {
          "yaw": -1.1079076499137415,
          "pitch": 0.05624519697026997,
          "title": "<img src='pin_icon/water.png' alt='Custom Icon' style='width: 40px; height: 40px;'> DRINKING WATER",
          "text": "Text"
        }
      ]
    },
    {
      "id": "52-pf2_3me",
      "name": "PF2_3ME",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 2.6362424139934317,
        "pitch": 0.019120650316503784,
        "fov": 0.9545992894285921
      },
      "linkHotspots": [
        {
          "yaw": 2.6519201913575507,
          "pitch": 0.22682970116070145,
          "rotation": 0,
          "target": "54-pf2_4me"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.1014887824600645,
          "pitch": 0.026771813506856645,
          "title": "<img src='pin_icon/water.png' alt='Custom Icon' style='width: 40px; height: 40px;'> DRINKING WATER",
          "text": "Text"
        }
      ]
    },
    {
      "id": "53-pf2_4be",
      "name": "PF2_4BE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.4378521283139314,
        "pitch": 0.11616519668055503,
        "fov": 0.6397487679802966
      },
      "linkHotspots": [
        {
          "yaw": -0.4301949254710813,
          "pitch": 0.23435502120184104,
          "rotation": 0,
          "target": "55-pf2_5be"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.23562868028194472,
          "pitch": 0.029595721188091062,
          "title": "<img src='pin_icon/fruit_stall.png' alt='Custom Icon' style='width: 40px; height: 40px;'> FRUIT AND JUICE STALL",
          "text": "Text"
        }
      ]
    },
    {
      "id": "54-pf2_4me",
      "name": "PF2_4ME",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.7069210111289976,
        "pitch": 0.10026152999486193,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.7251964525237771,
          "pitch": 0.3730637677392572,
          "rotation": 0,
          "target": "56-pf2_5me"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.2618986257776914,
          "pitch": 0.20206000430402504,
          "title": "DRINKING WATER",
          "text": "Text"
        },
        {
          "yaw": -2.0201960405422597,
          "pitch": 0.03076702628905892,
          "title": "OXYGEN PARLOR",
          "text": "Text"
        }
      ]
    },
    {
      "id": "55-pf2_5be",
      "name": "PF2_5BE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.44091504434375395,
        "pitch": 0.31709826260405904,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.48447714610060544,
          "pitch": 0.5425213540516864,
          "rotation": 0,
          "target": "57-pf2_6be"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.9814445459214447,
          "pitch": 0.12149923444179933,
          "title": "<img src='pin_icon/water.png' alt='Custom Icon' style='width: 40px; height: 40px;'> DRINKING WATER",
          "text": "Text"
        },
        {
          "yaw": -0.14698609778754523,
          "pitch": 0.00751490065983873,
          "title": "<img src='pin_icon/water.png' alt='Custom Icon' style='width: 40px; height: 40px;'> DRINKING WATER",
          "text": "Text"
        }
      ]
    },
    {
      "id": "56-pf2_5me",
      "name": "PF2_5ME",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 2.7205918216480036,
        "pitch": 0.25243169899397344,
        "fov": 1.0610130541964051
      },
      "linkHotspots": [
        {
          "yaw": 2.6723449779153388,
          "pitch": 0.4549977748162455,
          "rotation": 0,
          "target": "58-pf2_6me"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.4866125179944554,
          "pitch": -0.039112550194973394,
          "title": "<img src='pin_icon/fruit_stall.png' alt='Custom Icon' style='width: 40px; height: 40px;'> FOOD STALL &amp; TEA",
          "text": "Text"
        }
      ]
    },
    {
      "id": "57-pf2_6be",
      "name": "PF2_6BE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.7142696945235478,
        "pitch": 0.2750088563106807,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.5499123260893342,
          "pitch": 0.5364169280415609,
          "rotation": 0,
          "target": "59-pf2_7be"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.20774826620255737,
          "pitch": 0.08537694019211628,
          "title": "<img src='pin_icon/Entryexit.png' alt='Custom Icon' style='width: 40px; height: 40px;'> EXIT PF 1&amp;4",
          "text": "Text"
        }
      ]
    },
    {
      "id": "58-pf2_6me",
      "name": "PF2_6ME",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 3.0686197709178247,
        "pitch": 0.19026330734899233,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 3.08130931658285,
          "pitch": 0.4658193935442867,
          "rotation": 0,
          "target": "60-pf2_7me"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.3985928060955448,
          "pitch": 0.267406366674825,
          "title": "<img src='pin_icon/water.png' alt='Custom Icon' style='width: 40px; height: 40px;'> DRINKING WATER",
          "text": "Text"
        }
      ]
    },
    {
      "id": "59-pf2_7be",
      "name": "PF2_7BE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.5354437565078065,
        "pitch": 0.20329748694697614,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.29250384243044714,
          "pitch": 0.39038779096697596,
          "rotation": 0,
          "target": "61-pf2_8be"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5856158154717654,
          "pitch": 0.10507934841090538,
          "title": "<img src='pin_icon/lift.png' alt='Custom Icon' style='width: 40px; height: 40px;'> LIFT",
          "text": "Text"
        }
      ]
    },
    {
      "id": "60-pf2_7me",
      "name": "PF2_7ME",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -2.7515647079780337,
        "pitch": 0.16019332512299478,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -2.801401620253138,
          "pitch": 0.41887973750016805,
          "rotation": 0,
          "target": "62-pf2_8me"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.7170306002586386,
          "pitch": 0.16197839315754337,
          "title": "<img src='pin_icon/water.png' alt='Custom Icon' style='width: 40px; height: 40px;'> DRINKING WATER",
          "text": "Text"
        }
      ]
    },
    {
      "id": "61-pf2_8be",
      "name": "PF2_8BE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.3576684915949251,
        "pitch": -0.023329343991244755,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.3869379288997443,
          "pitch": 0.24395701872235698,
          "rotation": 0,
          "target": "63-pf2_9be"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.008624749152175,
          "pitch": 0.0522280740375205,
          "title": "<img src='pin_icon/washroom.png' alt='Custom Icon' style='width: 40px; height: 40px;'> M/F TOILET&nbsp;",
          "text": "Text"
        },
        {
          "yaw": 0.1590095089641963,
          "pitch": -0.05284499445086688,
          "title": "<img src='pin_icon/fruit_stall.png' alt='Custom Icon' style='width: 40px; height: 40px;'> FOOD AND TEA STALL",
          "text": "Text"
        }
      ]
    },
    {
      "id": "62-pf2_8me",
      "name": "PF2_8ME",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -2.5256291753064524,
        "pitch": 0.19021263818186185,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -2.563409342012296,
          "pitch": 0.4325048111608254,
          "rotation": 0,
          "target": "64-pf2_9me"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.8469449277251373,
          "pitch": 0.1725712084996509,
          "title": "<img src='pin_icon/water.png' alt='Custom Icon' style='width: 40px; height: 40px;'> DRINKING WATER",
          "text": "Text"
        }
      ]
    },
    {
      "id": "63-pf2_9be",
      "name": "PF2_9BE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.4982347105461091,
        "pitch": 0.10788700842108234,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.47380358747734164,
          "pitch": 0.3779094015696387,
          "rotation": 0,
          "target": "65-pf2_10be"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "64-pf2_9me",
      "name": "PF2_9ME",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": [
        {
          "yaw": -3.0229368649859722,
          "pitch": 0.10769736145767439,
          "title": "<img src='pin_icon/washroom.png' alt='Custom Icon' style='width: 40px; height: 40px;'> DIVYANGJAN TOILET",
          "text": "Text"
        },
        {
          "yaw": -2.5794955859280613,
          "pitch": 0.1304685144681006,
          "title": "<img src='pin_icon/water.png' alt='Custom Icon' style='width: 40px; height: 40px;'> DRINKING WATER",
          "text": "Text"
        }
      ]
    },
    {
      "id": "65-pf2_10be",
      "name": "PF2_10BE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.5864516628210481,
        "pitch": 0.17687591289630689,
        "fov": 1.325599857056214
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "66-pf3_1be",
      "name": "PF3_1BE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -1.8643694194651594,
        "pitch": 0.1902626353819734,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -1.8376664593384149,
          "pitch": 0.4346471693382199,
          "rotation": 0,
          "target": "67-pf3_2be"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.613493944172113,
          "pitch": 0.029456512934590506,
          "title": "<img src='pin_icon/lift.png' alt='Custom Icon' style='width: 40px; height: 40px;'> LIFT",
          "text": "Text"
        }
      ]
    },
    {
      "id": "67-pf3_2be",
      "name": "PF3_2BE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.6224022011608952,
        "pitch": 0.33536152334426994,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.2767139695008183,
          "pitch": 0.4458647293318201,
          "rotation": 0,
          "target": "68-pf3_3be"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.70889666249935,
          "pitch": 0.03870606678069066,
          "title": "<img src='pin_icon/escalator.png' alt='Custom Icon' style='width: 40px; height: 40px;'> ESCALATOR",
          "text": "Text"
        },
        {
          "yaw": -2.2903479801522604,
          "pitch": 0.298036754652534,
          "title": "<img src='pin_icon/water.png' alt='Custom Icon' style='width: 40px; height: 40px;'> DRINKING WATER",
          "text": "Text"
        },
        {
          "yaw": -1.4017878545441391,
          "pitch": -0.07146937417546795,
          "title": "<img src='pin_icon/fruit_stall.png' alt='Custom Icon' style='width: 40px; height: 40px;'> FOOD AND TEA STALL",
          "text": "Text"
        },
        {
          "yaw": -0.7962564517273805,
          "pitch": -0.03746010615112105,
          "title": "<img src='pin_icon/fruit_stall.png' alt='Custom Icon' style='width: 40px; height: 40px;'> FOOD AND TEA STALL",
          "text": "Text"
        }
      ]
    },
    {
      "id": "68-pf3_3be",
      "name": "PF3_3BE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.9579472088586822,
        "pitch": 0.21238230873837693,
        "fov": 1.2607415565744278
      },
      "linkHotspots": [
        {
          "yaw": -0.8163914877854701,
          "pitch": 0.3540147602444428,
          "rotation": 0,
          "target": "69-pf3_4be"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.055222114558328,
          "pitch": 0.04277665358702798,
          "title": "<img src='pin_icon/fruit_stall.png' alt='Custom Icon' style='width: 40px; height: 40px;'> FRUIT AND JUICE STALL",
          "text": "Text"
        },
        {
          "yaw": -1.3798889562027643,
          "pitch": 0.03233996454529908,
          "title": "<img src='pin_icon/water.png' alt='Custom Icon' style='width: 40px; height: 40px;'> DRINKING WATER&nbsp;",
          "text": "Text"
        }
      ]
    },
    {
      "id": "69-pf3_4be",
      "name": "PF3_4BE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -2.3876409477895244,
        "pitch": -0.02837881452854063,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -2.5555177495218313,
          "pitch": 0.25995944917350045,
          "rotation": 0,
          "target": "70-pf3_5be"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.55802455044857,
          "pitch": -0.10355542726728473,
          "title": "<img src='pin_icon/fruit_stall.png' alt='Custom Icon' style='width: 40px; height: 40px;'> FOOD AND TEA STALL",
          "text": "Text"
        }
      ]
    },
    {
      "id": "70-pf3_5be",
      "name": "PF3_5BE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -2.441558055380529,
        "pitch": 0.033380743594371154,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -2.60354515933836,
          "pitch": 0.26701260560500373,
          "rotation": 0,
          "target": "71-pf3_6be"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.0229550789109219,
          "pitch": -0.017685986928865916,
          "title": "<img src='pin_icon/fruit_stall.png' alt='Custom Icon' style='width: 40px; height: 40px;'> FOOD AND TEA STALL",
          "text": "Text"
        }
      ]
    },
    {
      "id": "71-pf3_6be",
      "name": "PF3_6BE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.6719333030027865,
        "pitch": 0.09020123744787867,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.8158734803908505,
          "pitch": 0.3102096096078597,
          "rotation": 0,
          "target": "73-pf3_8be"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.18960869884726783,
          "pitch": 0.11409739010088416,
          "title": "<img src='pin_icon/water.png' alt='Custom Icon' style='width: 40px; height: 40px;'> DRINKING WATER",
          "text": "Text"
        },
        {
          "yaw": 0.5792640546909862,
          "pitch": 0.0018000589780253762,
          "title": "<img src='pin_icon/water.png' alt='Custom Icon' style='width: 40px; height: 40px;'> DRINKING WATER",
          "text": "Text"
        }
      ]
    },
    {
      "id": "72-pf3_7be",
      "name": "PF3_7BE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "73-pf3_8be",
      "name": "PF3_8BE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 2.753352867039771,
        "pitch": 0.08009666256149472,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 2.578524968405998,
          "pitch": 0.25962233191393125,
          "rotation": 0,
          "target": "74-pf3_9be"
        },
        {
          "yaw": 2.1712179337451545,
          "pitch": 0.19491362582893856,
          "rotation": 5.497787143782138,
          "target": "72-pf3_7be"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.3115675937245541,
          "pitch": -0.011101233163214985,
          "title": "<img src='pin_icon/fruit_stall.png' alt='Custom Icon' style='width: 40px; height: 40px;'> FOOD AND TEA STALL",
          "text": "Text"
        },
        {
          "yaw": 2.067131391943259,
          "pitch": 0.1717463318661494,
          "title": "<img src='pin_icon/Entryexit.png' alt='Custom Icon' style='width: 40px; height: 40px;'> EXIT PF 1 &amp; 4",
          "text": "Text"
        }
      ]
    },
    {
      "id": "74-pf3_9be",
      "name": "PF3_9BE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.5807070674471575,
        "pitch": 0.17996883507310102,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.6118736757321805,
          "pitch": 0.39441836500111194,
          "rotation": 0,
          "target": "75-pf3_10be"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.014997464323354137,
          "pitch": 0.001840853116320318,
          "title": "<img src='pin_icon/Entryexit.png' alt='Custom Icon' style='width: 40px; height: 40px;'> LIFT EXIT PF1 &amp;4",
          "text": "Text"
        }
      ]
    },
    {
      "id": "75-pf3_10be",
      "name": "PF3_10BE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.4785925461472278,
        "pitch": 0.25627112841789845,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.6318286515524356,
          "pitch": 0.5240097627299143,
          "rotation": 0,
          "target": "76-pf3_11be"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.01997730332490022,
          "pitch": -0.047859716722989276,
          "title": "<img src='pin_icon/washroom.png' alt='Custom Icon' style='width: 40px; height: 40px;'> M/F TOILET",
          "text": "Text"
        }
      ]
    },
    {
      "id": "76-pf3_11be",
      "name": "PF3_11BE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.677988389029192,
        "pitch": 0.18801831329238006,
        "fov": 0.7729957761273831
      },
      "linkHotspots": [
        {
          "yaw": 0.6033216592408941,
          "pitch": 0.280681486889522,
          "rotation": 0,
          "target": "77-pf3_12be"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.9464521587317964,
          "pitch": 0.01037213859130759,
          "title": "<img src='pin_icon/water.png' alt='Custom Icon' style='width: 40px; height: 40px;'> DRINKING WATER",
          "text": "Text"
        },
        {
          "yaw": -2.1969858821036556,
          "pitch": -0.04333007340892436,
          "title": "<img src='pin_icon/fruit_stall.png' alt='Custom Icon' style='width: 40px; height: 40px;' FOOD &amp; TEA STALL",
          "text": "Text"
        }
      ]
    },
    {
      "id": "77-pf3_12be",
      "name": "PF3_12BE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -1.1617453735370091,
        "pitch": 0.18242044427555193,
        "fov": 1.325599857056214
      },
      "linkHotspots": [],
      "infoHotspots": [
        {
          "yaw": -2.791387785212171,
          "pitch": 0.14988266277542373,
          "title": "<img src='pin_icon/water.png' alt='Custom Icon' style='width: 40px; height: 40px;'> DRINKING WATER",
          "text": "Text"
        }
      ]
    },
    {
      "id": "78-pf4_me6",
      "name": "PF4_ME6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -2.207986534674532,
        "pitch": 0.19533111156522942,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -1.935027725944476,
          "pitch": 0.325968497300277,
          "rotation": 6.283185307179586,
          "target": "79-pf4_me7"
        },
        {
          "yaw": -1.9234484194164914,
          "pitch": 0.5873687600230539,
          "rotation": 3.141592653589793,
          "target": "36-pf4srairup"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.0181109846975076,
          "pitch": 0.018737287982208528,
          "title": "<img src='pin_icon/escalator.png' alt='Custom Icon' style='width: 40px; height: 40px;'> ESCALATOR PF1,2&amp;3",
          "text": "Text"
        }
      ]
    },
    {
      "id": "79-pf4_me7",
      "name": "PF4_ME7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.7658098614744873,
        "pitch": 0.17270842864824054,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.7294410456094322,
          "pitch": 0.25191494908176004,
          "rotation": 0,
          "target": "80-pf4_me8"
        },
        {
          "yaw": -0.7307733877086733,
          "pitch": 0.512218473537807,
          "rotation": 3.141592653589793,
          "target": "78-pf4_me6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "80-pf4_me8",
      "name": "PF4_ME8",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.38289390040724847,
        "pitch": 0.21776280133909687,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.4420308296453541,
          "pitch": 0.5749450741352664,
          "rotation": 3.141592653589793,
          "target": "79-pf4_me7"
        },
        {
          "yaw": -0.4324164395454648,
          "pitch": 0.33466801083984343,
          "rotation": 0,
          "target": "81-pf4_me9"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "81-pf4_me9",
      "name": "PF4_ME9",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.21726954915406083,
        "pitch": 0.29277017083181,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.21017139887770497,
          "pitch": 0.708813774260836,
          "rotation": 3.141592653589793,
          "target": "80-pf4_me8"
        },
        {
          "yaw": -0.19784705826175042,
          "pitch": 0.4561810390604073,
          "rotation": 0,
          "target": "82-pf4_me10"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.2515980146277563,
          "pitch": 0.00893132407230901,
          "title": "<img src='pin_icon/fruit_stall.png' alt='Custom Icon' style='width: 40px; height: 40px;'> FOOD STALL",
          "text": "Text"
        }
      ]
    },
    {
      "id": "82-pf4_me10",
      "name": "PF4_ME10",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 1.8558053148139226,
        "pitch": 0.23480613738573375,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 1.792711006672846,
          "pitch": 0.46147360104499136,
          "rotation": 3.141592653589793,
          "target": "81-pf4_me9"
        },
        {
          "yaw": 1.8062934282888232,
          "pitch": 0.17100892872716855,
          "rotation": 0,
          "target": "83-pf4_me11"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.2163866648887858,
          "pitch": 0.04409748832243565,
          "title": "<img src='pin_icon/water.png' alt='Custom Icon' style='width: 40px; height: 40px;'> DRINKING WATER",
          "text": "Text"
        }
      ]
    },
    {
      "id": "83-pf4_me11",
      "name": "PF4_ME11",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 2.055214241634138,
        "pitch": 0.18272051146841584,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 1.9501488031942635,
          "pitch": 0.5069884569197818,
          "rotation": 3.141592653589793,
          "target": "82-pf4_me10"
        },
        {
          "yaw": 1.9667405816120267,
          "pitch": 0.2931057453527526,
          "rotation": 0,
          "target": "84-pf4_me12"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "84-pf4_me12",
      "name": "PF4_ME12",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -2.591279654746689,
        "pitch": 0.1652439403148751,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -2.6136413726076917,
          "pitch": 0.538527298832701,
          "rotation": 3.141592653589793,
          "target": "83-pf4_me11"
        },
        {
          "yaw": -2.5852085467543766,
          "pitch": 0.2621414394675625,
          "rotation": 0,
          "target": "85-pf4_me13"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "85-pf4_me13",
      "name": "PF4_ME13",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -1.9427184028764835,
        "pitch": 0.18063931650036125,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -1.933364567166457,
          "pitch": 0.39524533457923106,
          "rotation": 3.141592653589793,
          "target": "84-pf4_me12"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "86-pf4_be1",
      "name": "PF4_BE1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 1.5084618462788644,
        "pitch": 0.07756552683442486,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 1.2572107809642254,
          "pitch": 0.20014858695451565,
          "rotation": 0,
          "target": "87-pf4_be2_"
        },
        {
          "yaw": 1.2282269271844708,
          "pitch": 0.48440944460333313,
          "rotation": 3.141592653589793,
          "target": "88-pf4_entry_exit"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.967379472396071,
          "pitch": 0.016783811443588093,
          "title": "<img src='pin_icon/washroom.png' alt='Custom Icon' style='width: 40px; height: 40px;'> DIVYANGJAN TOILET",
          "text": "Text"
        }
      ]
    },
    {
      "id": "87-pf4_be2_",
      "name": "PF4_BE2_",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.15672344303622054,
        "pitch": 0.06507853833121402,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.19880961513715967,
          "pitch": 0.34311171501603077,
          "rotation": 3.141592653589793,
          "target": "86-pf4_be1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.05884532578636126,
          "pitch": -0.008821469281901528,
          "title": "<img src='pin_icon/lift.png' alt='Custom Icon' style='width: 40px; height: 40px;'> LIFT PF 1,2 &amp; 3",
          "text": "Text"
        },
        {
          "yaw": 0.9344796812411218,
          "pitch": 0.00018531834997581598,
          "title": "<img src='pin_icon/lift.png' alt='Custom Icon' style='width: 40px; height: 40px;'> M/F TOILET",
          "text": "Text"
        }
      ]
    },
    {
      "id": "88-pf4_entry_exit",
      "name": "PF4_ENTRY_EXIT",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -2.5004512957143277,
        "pitch": 0.07738800264031198,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -2.654625902608762,
          "pitch": 0.22105366974327367,
          "rotation": 0,
          "target": "89-pf4_entry_exit_in"
        },
        {
          "yaw": -2.282124413608148,
          "pitch": 0.41347548346318774,
          "rotation": 1.5707963267948966,
          "target": "91-pf4_me1"
        },
        {
          "yaw": -2.9609618460255582,
          "pitch": 0.39719972100422396,
          "rotation": 4.71238898038469,
          "target": "86-pf4_be1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "89-pf4_entry_exit_in",
      "name": "PF4_ENTRY_EXIT_IN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -1.4835803803952938,
        "pitch": 0.1926615966629246,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -1.926022358665037,
          "pitch": 0.7231983735686107,
          "rotation": 3.141592653589793,
          "target": "88-pf4_entry_exit"
        },
        {
          "yaw": -2.2137547384124936,
          "pitch": 0.5246562357173818,
          "rotation": 6.283185307179586,
          "target": "90-pf4_exit_out"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.6316908746640024,
          "pitch": -0.03834505743192551,
          "title": "<img src='pin_icon/ticket_counter.png' alt='Custom Icon' style='width: 40px; height: 40px;'> RESERVATION COUNTER",
          "text": "Text"
        }
      ]
    },
    {
      "id": "90-pf4_exit_out",
      "name": "PF4_EXIT_OUT",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.18520914692307322,
        "pitch": 0.3129160314874522,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.012255677551969768,
          "pitch": 0.6943938014949804,
          "rotation": 3.141592653589793,
          "target": "89-pf4_entry_exit_in"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6382382059907314,
          "pitch": 0.1782034313682903,
          "title": "<img src='pin_icon/pay_park.png' alt='Custom Icon' style='width: 40px; height: 40px;'> PAY AND PARK",
          "text": "Text"
        },
        {
          "yaw": 0.11611488613365495,
          "pitch": 0.09148358126144984,
          "title": "<img src='pin_icon/Entryexit.png' alt='Custom Icon' style='width: 40px; height: 40px;'> WAY TO EXIT",
          "text": "Text"
        },
        {
          "yaw": -3.0850753263742092,
          "pitch": 0.07738592650324705,
          "title": "<img src='pin_icon/ticket_counter.png' alt='Custom Icon' style='width: 40px; height: 40px;'> RESERVATION COUNTER",
          "text": "Text"
        }
      ]
    },
    {
      "id": "91-pf4_me1",
      "name": "PF4_ME1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -1.4551357793139132,
        "pitch": 0.002503020705050929,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -1.626818353768904,
          "pitch": 0.4901265302670801,
          "rotation": 3.141592653589793,
          "target": "93-pf4_me2"
        },
        {
          "yaw": -1.6135346839852467,
          "pitch": 0.23846339643788994,
          "rotation": 0,
          "target": "88-pf4_entry_exit"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6165525772176252,
          "pitch": 0.06438967855831734,
          "title": "<img src='pin_icon/fruit_stall.png' alt='Custom Icon' style='width: 40px; height: 40px;'> FOOD STALL",
          "text": "Text"
        }
      ]
    },
    {
      "id": "92-pf4_me1_ramp",
      "name": "PF4_ME1_RAMP",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -3.0616748135166496,
        "pitch": 0.21044401127169365,
        "fov": 1.325599857056214
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "93-pf4_me2",
      "name": "PF4_ME2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.5823718512662008,
        "pitch": 0.12766650956643488,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 1.3248988995821414,
          "pitch": 0.3560321423352626,
          "rotation": 1.5707963267948966,
          "target": "92-pf4_me1_ramp"
        },
        {
          "yaw": 0.8576468127294863,
          "pitch": 0.5073753147530766,
          "rotation": 3.141592653589793,
          "target": "94-pf4_me3"
        },
        {
          "yaw": 0.8443732748370838,
          "pitch": 0.23126984863011124,
          "rotation": 0,
          "target": "91-pf4_me1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "94-pf4_me3",
      "name": "PF4_ME3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.8673230370397444,
        "pitch": 0.2102537392239423,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.9228369818298994,
          "pitch": 0.56236083426489,
          "rotation": 3.141592653589793,
          "target": "95-pf4_me5"
        },
        {
          "yaw": -0.9012161494056183,
          "pitch": 0.26375129083339033,
          "rotation": 0,
          "target": "93-pf4_me2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.038972815522866355,
          "pitch": 0.0617065373304122,
          "title": "<img src='pin_icon/water.png' alt='Custom Icon' style='width: 40px; height: 40px;'> DRINKING WATER",
          "text": "Text"
        }
      ]
    },
    {
      "id": "95-pf4_me5",
      "name": "PF4_ME5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 1.2413209067755613,
        "pitch": 0.2052689106328245,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 1.1859959764381571,
          "pitch": 0.310472953731054,
          "rotation": 0,
          "target": "94-pf4_me3"
        },
        {
          "yaw": 1.1885304317647378,
          "pitch": 0.6082817468139847,
          "rotation": 3.141592653589793,
          "target": "95-pf4_me5"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.2538709731132673,
          "pitch": -0.010471413289943499,
          "title": "<img src='pin_icon/help.png' alt='Custom Icon' style='width: 40px; height: 40px;'> CHILD HELP DESK",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};


