import { Injectable } from '@angular/core'

@Injectable()
export class UserService{
  getUsers(){
    return USERS;
  }
}

//https://next.json-generator.com/VkFEviPtU
const USERS = [
  {
    "_id": "5caeb8180e18c144bf7d6006",
    "index": 0,
    "guid": "ec71796f-e1a1-4303-ac1e-d5a5782714ae",
    "isActive": false,
    "balance": "$2,162.13",
    "picture": "http://placehold.it/32x32",
    "age": 35,
    "eyeColor": "green",
    "name": {
      "first": "Elizabeth",
      "last": "Huber"
    },
    "company": "DAISU",
    "email": "elizabeth.huber@daisu.co.uk",
    "phone": "+1 (860) 416-2089",
    "address": "113 Bedford Avenue, Greenwich, Mississippi, 2540",
    "about": "Aute deserunt ea excepteur ea ea. Commodo sint in ex id voluptate labore elit cillum anim dolor id nisi consectetur sint. Non amet adipisicing exercitation ut cillum est culpa laboris id irure esse culpa laboris. Ipsum commodo mollit incididunt consequat sint. Aute dolore ipsum laboris occaecat aliqua proident. Et non mollit et voluptate irure exercitation reprehenderit consequat cillum aliqua. Voluptate magna qui pariatur elit nulla exercitation aute ea.",
    "registered": "Friday, June 19, 2015 6:20 AM",
    "latitude": "42.676032",
    "longitude": "-18.320519",
    "tags": [
      "veniam",
      "nisi",
      "consectetur",
      "labore",
      "cupidatat"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Frank Haynes"
      },
      {
        "id": 1,
        "name": "Kaufman Gould"
      },
      {
        "id": 2,
        "name": "Guzman Haley"
      }
    ],
    "greeting": "Hello, Elizabeth! You have 6 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5caeb8180829910f6913edce",
    "index": 1,
    "guid": "6a44a063-2595-42c9-9899-b4628efd9ca4",
    "isActive": false,
    "balance": "$3,575.10",
    "picture": "http://placehold.it/32x32",
    "age": 23,
    "eyeColor": "green",
    "name": {
      "first": "Francisca",
      "last": "Kelley"
    },
    "company": "TECHTRIX",
    "email": "francisca.kelley@techtrix.ca",
    "phone": "+1 (964) 459-2507",
    "address": "665 Seabring Street, Goldfield, South Carolina, 3668",
    "about": "Culpa proident esse ullamco reprehenderit labore commodo occaecat dolore laborum adipisicing aliqua pariatur. Tempor aliqua excepteur esse reprehenderit. Labore incididunt laboris officia irure ut incididunt nisi dolor velit ex et labore. Proident elit occaecat aliqua dolor.",
    "registered": "Sunday, July 26, 2015 10:33 AM",
    "latitude": "53.247639",
    "longitude": "-35.570041",
    "tags": [
      "et",
      "amet",
      "officia",
      "consequat",
      "consectetur"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Marisa Howard"
      },
      {
        "id": 1,
        "name": "Ethel Joyce"
      },
      {
        "id": 2,
        "name": "Melinda Ray"
      }
    ],
    "greeting": "Hello, Francisca! You have 10 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5caeb8183139eddf8462f75c",
    "index": 2,
    "guid": "e8e4530a-82bf-49ad-9606-a1240a46073e",
    "isActive": true,
    "balance": "$1,484.31",
    "picture": "http://placehold.it/32x32",
    "age": 21,
    "eyeColor": "blue",
    "name": {
      "first": "Tamra",
      "last": "Nelson"
    },
    "company": "CANDECOR",
    "email": "tamra.nelson@candecor.biz",
    "phone": "+1 (923) 537-3330",
    "address": "117 Elliott Place, Esmont, Vermont, 1896",
    "about": "Nulla in amet irure proident anim in enim consectetur dolore est cupidatat eiusmod. Reprehenderit in voluptate nulla pariatur esse fugiat non culpa ipsum ipsum ea. Voluptate velit dolore dolor mollit reprehenderit anim magna adipisicing non. Fugiat sint ullamco est culpa Lorem consectetur culpa officia adipisicing ut in ex. Qui pariatur anim veniam laboris consequat in labore deserunt proident minim. Dolor ea qui id eu aute esse.",
    "registered": "Thursday, January 12, 2017 7:09 AM",
    "latitude": "-29.266761",
    "longitude": "11.590357",
    "tags": [
      "officia",
      "voluptate",
      "culpa",
      "pariatur",
      "eiusmod"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Diane Marshall"
      },
      {
        "id": 1,
        "name": "Aurora Rice"
      },
      {
        "id": 2,
        "name": "Mara Mckenzie"
      }
    ],
    "greeting": "Hello, Tamra! You have 8 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5caeb818528fb589e3dc86e2",
    "index": 3,
    "guid": "8dc62352-61b2-45fd-af6b-900df5ffa87b",
    "isActive": true,
    "balance": "$1,408.80",
    "picture": "http://placehold.it/32x32",
    "age": 20,
    "eyeColor": "blue",
    "name": {
      "first": "Ebony",
      "last": "Dale"
    },
    "company": "WAZZU",
    "email": "ebony.dale@wazzu.io",
    "phone": "+1 (928) 443-3365",
    "address": "153 Nichols Avenue, Bayview, Wisconsin, 5368",
    "about": "Duis mollit id do minim reprehenderit ad nostrud est eu deserunt excepteur. Cupidatat ad cillum non consectetur eiusmod nulla Lorem laboris elit. Ea in voluptate esse cupidatat Lorem deserunt eu sit enim sit excepteur excepteur officia Lorem. Voluptate sint mollit elit pariatur aliquip exercitation. Mollit duis tempor enim esse qui exercitation qui cupidatat. Reprehenderit irure enim ullamco et pariatur adipisicing culpa in.",
    "registered": "Saturday, January 19, 2019 1:49 AM",
    "latitude": "-2.287861",
    "longitude": "142.477039",
    "tags": [
      "cillum",
      "aute",
      "incididunt",
      "exercitation",
      "do"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Harper Riddle"
      },
      {
        "id": 1,
        "name": "Janna Roach"
      },
      {
        "id": 2,
        "name": "Gonzalez Zamora"
      }
    ],
    "greeting": "Hello, Ebony! You have 9 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5caeb8186f1834961000a634",
    "index": 4,
    "guid": "48c4fc48-24d2-4daf-862d-72db38cf3ab6",
    "isActive": false,
    "balance": "$2,930.72",
    "picture": "http://placehold.it/32x32",
    "age": 30,
    "eyeColor": "green",
    "name": {
      "first": "Swanson",
      "last": "Powell"
    },
    "company": "PROWASTE",
    "email": "swanson.powell@prowaste.tv",
    "phone": "+1 (820) 425-2273",
    "address": "215 Frank Court, Manila, Puerto Rico, 7227",
    "about": "Ullamco voluptate non anim velit mollit nulla et nostrud culpa. Nostrud esse reprehenderit veniam do commodo do voluptate nulla non laboris ullamco ullamco. Aliquip cillum id adipisicing non sit occaecat quis ullamco. Elit ipsum laboris labore officia nulla quis proident irure Lorem ad veniam sunt deserunt. Cillum nisi nisi ex ullamco nisi veniam nisi. Irure elit minim amet mollit ut occaecat laborum nulla commodo dolore id cillum.",
    "registered": "Friday, December 22, 2017 5:58 PM",
    "latitude": "55.114853",
    "longitude": "-110.970666",
    "tags": [
      "laboris",
      "excepteur",
      "elit",
      "commodo",
      "ipsum"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Gena Warner"
      },
      {
        "id": 1,
        "name": "Guerra Terry"
      },
      {
        "id": 2,
        "name": "Kellie Alford"
      }
    ],
    "greeting": "Hello, Swanson! You have 8 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5caeb818264c997e139bab68",
    "index": 5,
    "guid": "3ed0aefc-3610-47de-9732-358d03b04ed2",
    "isActive": false,
    "balance": "$2,801.69",
    "picture": "http://placehold.it/32x32",
    "age": 21,
    "eyeColor": "brown",
    "name": {
      "first": "Kirby",
      "last": "Cross"
    },
    "company": "ECRAZE",
    "email": "kirby.cross@ecraze.com",
    "phone": "+1 (877) 523-3404",
    "address": "776 Columbus Place, Condon, Kentucky, 5608",
    "about": "Ullamco eu dolor ex nulla labore incididunt dolore occaecat est sunt id. Do esse et nulla et voluptate cupidatat ea voluptate eiusmod labore proident voluptate. Nulla exercitation est est cillum proident deserunt exercitation mollit esse deserunt.",
    "registered": "Friday, March 20, 2015 9:58 PM",
    "latitude": "72.644683",
    "longitude": "-108.96899",
    "tags": [
      "nisi",
      "laboris",
      "occaecat",
      "ea",
      "amet"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Ina Norman"
      },
      {
        "id": 1,
        "name": "Gracie Murray"
      },
      {
        "id": 2,
        "name": "Gabrielle Dorsey"
      }
    ],
    "greeting": "Hello, Kirby! You have 10 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5caeb8184c5d7109907fbcc1",
    "index": 6,
    "guid": "c10a6955-0c69-4b1b-9933-4253d58f5a25",
    "isActive": true,
    "balance": "$2,409.84",
    "picture": "http://placehold.it/32x32",
    "age": 29,
    "eyeColor": "brown",
    "name": {
      "first": "Tanner",
      "last": "Chandler"
    },
    "company": "EXOTERIC",
    "email": "tanner.chandler@exoteric.info",
    "phone": "+1 (847) 491-2665",
    "address": "523 Bulwer Place, Rote, Colorado, 9228",
    "about": "Duis laborum officia velit do. Aute non id duis labore tempor velit duis id irure duis culpa laboris cupidatat mollit. Consequat adipisicing veniam occaecat officia laboris tempor adipisicing. Sint deserunt eiusmod eiusmod occaecat. Eiusmod excepteur ex consequat officia non enim reprehenderit fugiat enim. Ex voluptate reprehenderit consequat deserunt ea adipisicing anim quis nostrud aliqua ut elit. Ea pariatur sint elit fugiat.",
    "registered": "Sunday, December 6, 2015 10:31 PM",
    "latitude": "1.737483",
    "longitude": "148.496543",
    "tags": [
      "fugiat",
      "minim",
      "sint",
      "dolore",
      "ut"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Leila Jenkins"
      },
      {
        "id": 1,
        "name": "Patton Dean"
      },
      {
        "id": 2,
        "name": "Melissa York"
      }
    ],
    "greeting": "Hello, Tanner! You have 10 unread messages.",
    "favoriteFruit": "apple"
  }
]
