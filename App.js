import React from "react";
import ReactDOM  from "react-dom/client";

/** 
 * Header
 *-Logo,Navitems
 * Body
 * -searchbar,Resturant card
 *footer
 Copyright
 */

const Header=()=>{
    return(
        <div className="header">
        <div className="logo">
            <img className="food-logo" src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-app-by-town-brandcrowd.png"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const resList=[{
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "410683",
      "name": "Soul Rasa",
      "uuid": "5fddc67b-5287-45a0-a252-c34eb9b290d1",
      "city": "1",
      "area": "Koramangala",
      "totalRatingsString": "5000+ ratings",
      "cloudinaryImageId": "xoth5ysuv2r6ctizaso5",
      "cuisines": [
        "Indian",
        "Healthy Food",
        "Home Food",
        "South Indian",
        "North Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 28,
      "minDeliveryTime": 28,
      "maxDeliveryTime": 28,
      "slaString": "28 MINS",
      "lastMileTravel": 2.0999999046325684,
      "slugs": {
        "restaurant": "hb-koramangala-koramangala",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "88/1,Ward No.66, Sajjapura Road, Madiwala, Jakkasandra Village Bangalore-South, 560034",
      "locality": "Jakkasandra",
      "parentId": 239281,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
          {
            "meta": "60% off | Use GUILTFREE",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹100 | Use code GUILTFREE",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use GUILTFREE",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹100 | Use code GUILTFREE",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3000,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3000",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6526054~p=1~eid=00000187-9d93-822d-2b00-12a800b1016e",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "410683",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "lastMileTravel": 2.0999999046325684,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.4",
      "totalRatings": 5000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "229",
      "name": "Meghana Foods",
      "uuid": "4fdd19e2-5d0f-4bde-9c7f-dc3e8d36021f",
      "city": "1",
      "area": "Koramangala",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "xqwpuhgnsaf18te7zvtv",
      "cuisines": [
        "Biryani",
        "Andhra",
        "South Indian",
        "North Indian",
        "Chinese",
        "Seafood"
      ],
      "tags": [
        
      ],
      "costForTwo": 50000,
      "costForTwoString": "₹500 FOR TWO",
      "deliveryTime": 36,
      "minDeliveryTime": 36,
      "maxDeliveryTime": 36,
      "slaString": "36 MINS",
      "lastMileTravel": 1.2999999523162842,
      "slugs": {
        "restaurant": "meghana-foods-5th-block-koramangala",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "124, Near Jyothi Nivas College, 1st Cross, KHB Colony, Koramangala 5th Block, Bangalore",
      "locality": "5th Block",
      "parentId": 635,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3000,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3000",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1.2 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "229",
        "deliveryTime": 36,
        "minDeliveryTime": 36,
        "maxDeliveryTime": 36,
        "lastMileTravel": 1.2999999523162842,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.3",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "428",
      "name": "Biryani Pot",
      "uuid": "6db20a8b-dd85-4148-b750-107169f7f826",
      "city": "1",
      "area": "Btm Layout",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "mdipoyzfzsa7n7igskht",
      "cuisines": [
        "North Indian",
        "Biryani"
      ],
      "tags": [
        
      ],
      "costForTwo": 50000,
      "costForTwoString": "₹500 FOR TWO",
      "deliveryTime": 22,
      "minDeliveryTime": 22,
      "maxDeliveryTime": 22,
      "slaString": "22 MINS",
      "lastMileTravel": 1.899999976158142,
      "slugs": {
        "restaurant": "biryani-pot-madiwala-junction-btm",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "14th  Cross, 4th link Road Maruthi Nagar Madiwala Bangalore 68",
      "locality": "Maruti Nagar",
      "parentId": 21798,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "20% off",
        "shortDescriptionList": [
          {
            "meta": "20% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "20% off up to ₹50 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "20% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "20% off up to ₹50 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1.8 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "428",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "lastMileTravel": 1.899999976158142,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.9",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "65797",
      "name": "Leon's - Burgers & Wings (Leon Grill)",
      "uuid": "2ecdca25-3954-4f2e-8d50-4e13e2faf73e",
      "city": "1",
      "area": "Koramangala",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "r4ufflqojich0r29efvc",
      "cuisines": [
        "American",
        "Snacks",
        "Turkish",
        "Portuguese",
        "Continental"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 26,
      "minDeliveryTime": 26,
      "maxDeliveryTime": 26,
      "slaString": "26 MINS",
      "lastMileTravel": 1.2999999523162842,
      "slugs": {
        "restaurant": "leon-grill-koramangala-koramangala",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "Plot No.123 K.H.B Colony, 5th Block , Koramangala , Bangalore -95",
      "locality": "Koramangala",
      "parentId": 371281,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3000,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3000",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6520278~p=4~eid=00000187-9d93-822d-2b00-12a900b1040e",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1.2 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "65797",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "lastMileTravel": 1.2999999523162842,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.3",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "337335",
      "name": "Kannur food kitchen",
      "uuid": "c70b61bc-0f68-4e24-996b-749fbf295c35",
      "city": "1",
      "area": "BTM Layout",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "a27weqanhnszqiuzsoik",
      "cuisines": [
        "Kerala",
        "Biryani",
        "Beverages"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 29,
      "minDeliveryTime": 29,
      "maxDeliveryTime": 29,
      "slaString": "29 MINS",
      "lastMileTravel": 2.799999952316284,
      "slugs": {
        "restaurant": "kannur-food-kitchen-btm-btm",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "kannur food point, Chocolate Factory Road, Tavarekere, Cashier Layout, 1st Stage, BTM Layout, thavrakharea, Karnataka, India",
      "locality": "1st  Stage",
      "parentId": 114756,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off on all orders",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          },
          {
            "meta": "Free Fresh Lime Juice on orders above ₹499",
            "discountType": "Freebie",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off on all orders",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          },
          {
            "meta": "Free Fresh Lime Juice on orders above ₹499",
            "discountType": "Freebie",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off on all orders",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          },
          {
            "meta": "Free Fresh Lime Juice on orders above ₹499",
            "discountType": "Freebie",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3000,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3000",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2.7 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "337335",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "lastMileTravel": 2.799999952316284,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.8",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "56589",
      "name": "Roti-Wala",
      "uuid": "257a0889-b243-4252-b84a-6c9f1760d58f",
      "city": "1",
      "area": "BTM Layout",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "ptetuqkrhmpd8tiqiztg",
      "cuisines": [
        "North Indian",
        "Home Food",
        "Thalis",
        "Chinese",
        "Punjabi",
        "South Indian",
        "Ice Cream"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 43,
      "minDeliveryTime": 43,
      "maxDeliveryTime": 43,
      "slaString": "43 MINS",
      "lastMileTravel": 4.199999809265137,
      "slugs": {
        "restaurant": "roti-wala-lavelle-road-central-bangalore",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "#239, 7TH Cross, Btm Stage 2. NS Palya, 560076",
      "locality": "2nd Stage",
      "parentId": 415860,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "20% off",
        "shortDescriptionList": [
          {
            "meta": "20% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "20% off up to ₹50 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "20% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "20% off up to ₹50 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3800,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3800,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3800",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "4.1 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "56589",
        "deliveryTime": 43,
        "minDeliveryTime": 43,
        "maxDeliveryTime": 43,
        "lastMileTravel": 4.199999809265137,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.2",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "560153",
      "name": "Rice Bowl",
      "uuid": "b5652b7d-5df8-4be5-8fe9-27648b668e79",
      "city": "1",
      "area": "Koramangala",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "z2ahvclpmdv6lekyth39",
      "cuisines": [
        "North Indian",
        "South Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 33,
      "minDeliveryTime": 33,
      "maxDeliveryTime": 33,
      "slaString": "33 MINS",
      "lastMileTravel": 2.5,
      "slugs": {
        "restaurant": "rice-bowl-koramangala-koramangala-2",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "42A, Old House List No 148/11, Katha No 296, BBMP PID No 68-327-98/1, Jakkasandra Village, Sarjapur Main Road, Bengaluru -, BTM Layout , B.B.M.P South, Karnataka - 560034",
      "locality": "Jakkasandra",
      "parentId": 169302,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "FLAT125 off",
        "shortDescriptionList": [
          {
            "meta": "FLAT125 off | Use FLATDEAL",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "FLAT125 off | Use FLATDEAL",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "₹125 OFF",
        "shortDescriptionList": [
          {
            "meta": "Use FLATDEAL",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "FLAT125 off | Use FLATDEAL",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3000,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3000",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6502961~p=7~eid=00000187-9d93-822d-2b00-12aa00b1071b",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "560153",
        "deliveryTime": 33,
        "minDeliveryTime": 33,
        "maxDeliveryTime": 33,
        "lastMileTravel": 2.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.1",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "201224",
      "name": "Asha tiffins",
      "uuid": "e32381cf-6468-4c10-9bad-47fa08e898a8",
      "city": "1",
      "area": "HSR Layout",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "n15vckntsiboiod3gpco",
      "cuisines": [
        "Indian",
        "South Indian",
        "Beverages"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 29,
      "minDeliveryTime": 29,
      "maxDeliveryTime": 29,
      "slaString": "29 MINS",
      "lastMileTravel": 4,
      "slugs": {
        "restaurant": "asha-tiffins-hsr-hsr-2",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "Asha Tiffins, 5th Main Road, Sector 7, HSR Layout, Bengaluru, Karnataka, India",
      "locality": "7th Sector",
      "parentId": 236243,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "FLAT100 off",
        "shortDescriptionList": [
          {
            "meta": "FLAT100 off | Use FLATDEAL",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "FLAT100 off | Use FLATDEAL",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "₹100 OFF",
        "shortDescriptionList": [
          {
            "meta": "Use FLATDEAL",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "FLAT100 off | Use FLATDEAL",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3800,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3800,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3800",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "4 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "201224",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "lastMileTravel": 4,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.4",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "59593",
      "name": "Al Daaz",
      "uuid": "c189b92c-d842-4595-9a1f-ff85bd67bc2a",
      "city": "1",
      "area": "Hsr Layout",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "rxsvhvcdip9dbfdijzk9",
      "cuisines": [
        "American",
        "Arabian",
        "Chinese",
        "Desserts",
        "Mughlai",
        "North Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 50,
      "minDeliveryTime": 50,
      "maxDeliveryTime": 50,
      "slaString": "50 MINS",
      "lastMileTravel": 6.300000190734863,
      "slugs": {
        "restaurant": "al-daaz-hsr-hsr",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "#64 & 65, 27th Main Rd, 1st Sector HSR Layout - 560102",
      "locality": "HSR",
      "parentId": 21640,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 5400,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 5400,
        "message": "",
        "title": "Delivery Charge",
        "amount": "5400",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 1,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "6.3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "59593",
        "deliveryTime": 50,
        "minDeliveryTime": 50,
        "maxDeliveryTime": 50,
        "lastMileTravel": 6.300000190734863,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.4",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "425",
      "name": "Hotel Empire",
      "uuid": "c0c37758-2e83-4429-aad6-eb94debb48f5",
      "city": "1",
      "area": "Koramangala",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "un4omn7rcunkmlw6vikr",
      "cuisines": [
        "North Indian",
        "Kebabs",
        "Biryani"
      ],
      "tags": [
        
      ],
      "costForTwo": 45000,
      "costForTwoString": "₹450 FOR TWO",
      "deliveryTime": 34,
      "minDeliveryTime": 34,
      "maxDeliveryTime": 34,
      "slaString": "34 MINS",
      "lastMileTravel": 1.2999999523162842,
      "slugs": {
        "restaurant": "hotel-empire-5th-block-koramangala",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "103, Industrial Area, 5th Block, Near Jyothi Nivas College, Koramangala 5th Block, Bangalore",
      "locality": "Koramangala",
      "parentId": 475,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "10% off",
        "shortDescriptionList": [
          {
            "meta": "10% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "10% off up to ₹40 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "10% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "10% off up to ₹40 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3000,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3000",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1.2 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "425",
        "deliveryTime": 34,
        "minDeliveryTime": 34,
        "maxDeliveryTime": 34,
        "lastMileTravel": 1.2999999523162842,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.0",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "219",
      "name": "Anjappar",
      "uuid": "074d027e-6496-4765-bde2-431681abe7a9",
      "city": "1",
      "area": "Koramangala",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "fa25f646f0f18e7b1d854e3e8b4a8f1b",
      "cuisines": [
        "Chettinad",
        "Thalis",
        "Biryani",
        "Chinese",
        "Tandoor",
        "South Indian",
        "North Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 60000,
      "costForTwoString": "₹600 FOR TWO",
      "deliveryTime": 28,
      "minDeliveryTime": 28,
      "maxDeliveryTime": 28,
      "slaString": "28 MINS",
      "lastMileTravel": 0.6000000238418579,
      "slugs": {
        "restaurant": "anjappar-4th-b-block-koramangala",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "4, 17th Main, Near BDA Complex, 100 Feet Road, 4th B Block,Koramangala",
      "locality": "Connaught Place",
      "parentId": 61,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "40% off",
        "shortDescriptionList": [
          {
            "meta": "40% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "40% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3000,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3000",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6488841~p=13~eid=00000187-9d93-822d-2b00-12ac00b10d11",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.6 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "219",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "lastMileTravel": 0.6000000238418579,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.0",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "319530",
      "name": "Malnad Donne Biriyani MDB",
      "uuid": "f8807990-e389-4693-bfd8-103636ae1156",
      "city": "1",
      "area": "Bommanahalli",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "kamm1so6elz9i1usjosv",
      "cuisines": [
        "Biryani",
        "Chinese",
        "South Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 19900,
      "costForTwoString": "₹199 FOR TWO",
      "deliveryTime": 37,
      "minDeliveryTime": 37,
      "maxDeliveryTime": 37,
      "slaString": "37 MINS",
      "lastMileTravel": 5,
      "slugs": {
        "restaurant": "malnad-donne-biriyani-mdb-btm-btm",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "#60/3 ganesh towers kodichikanahalli main road ",
      "locality": "Kodichikanahalli Main Road",
      "parentId": 130946,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "40% off",
        "shortDescriptionList": [
          {
            "meta": "40% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "40% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 4600,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 4600,
        "message": "",
        "title": "Delivery Charge",
        "amount": "4600",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "319530",
        "deliveryTime": 37,
        "minDeliveryTime": 37,
        "maxDeliveryTime": 37,
        "lastMileTravel": 5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.0",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "223",
      "name": "Truffles",
      "uuid": "8250cc38-4752-4f42-928b-4da5f01e5cbe",
      "city": "1",
      "area": "Koramangala",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "cd832b6167eb9f88aeb1ccdebf38d942",
      "cuisines": [
        "American",
        "Continental",
        "Desserts",
        "Italian"
      ],
      "tags": [
        
      ],
      "costForTwo": 45000,
      "costForTwoString": "₹450 FOR TWO",
      "deliveryTime": 38,
      "minDeliveryTime": 38,
      "maxDeliveryTime": 38,
      "slaString": "38 MINS",
      "lastMileTravel": 1.600000023841858,
      "slugs": {
        "restaurant": "truffles-ice-spice-5th-block-koramangala",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "93/A, Appek Building, 'A' Wing,  4th 'B' Cross,  Koramangala Industrial Layout, 5th Block, Koramangala, Bangalore - 560 095",
      "locality": "5th Block",
      "parentId": 218065,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3000,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3000",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1.6 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "223",
        "deliveryTime": 38,
        "minDeliveryTime": 38,
        "maxDeliveryTime": 38,
        "lastMileTravel": 1.600000023841858,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.4",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "671928",
      "name": "KFC",
      "uuid": "de218f49-19af-4492-8a56-3d790ba41b3c",
      "city": "1",
      "area": "Koramangla",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
      "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
      ],
      "tags": [
        
      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 30,
      "minDeliveryTime": 30,
      "maxDeliveryTime": 30,
      "slaString": "30 MINS",
      "lastMileTravel": 1.2999999523162842,
      "slugs": {
        "restaurant": "kfc-7th-block-koramangala",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "KFC - Ground Floor & first Floor, No 348, & 349, 7th Block, Koramangala,bangalore, Karanataka-560095",
      "locality": "7th Block",
      "parentId": 547,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "Get every item under 189",
        "shortDescriptionList": [
          {
            "meta": "Get every item under 189",
            "discountType": "FinalPrice",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Get every item under 189",
            "discountType": "FinalPrice",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "",
        "shortDescriptionList": [
          {
            "meta": "",
            "discountType": "FinalPrice",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Get every item under 189",
            "discountType": "FinalPrice",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3000,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3000",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6494577~p=16~eid=00000187-9d93-822d-2b00-12ad00b11068",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1.2 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "671928",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "lastMileTravel": 1.2999999523162842,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.1",
      "totalRatings": 100,
      "new": true
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "528523",
      "name": "New Ambur Biryani Point",
      "uuid": "df27b0e1-b794-4081-81e5-d1dc4b34fee5",
      "city": "1",
      "area": "Adugodi",
      "totalRatingsString": "500+ ratings",
      "cloudinaryImageId": "2b6b93195cd8e50f9e393692cf91ed7d",
      "cuisines": [
        "Biryani",
        "Chinese",
        "North Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 22,
      "minDeliveryTime": 22,
      "maxDeliveryTime": 22,
      "slaString": "22 MINS",
      "lastMileTravel": 2.5,
      "slugs": {
        "restaurant": "new-ambur-biryani-point-koramangala-koramangala",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "No. 386, Mahalingeshwara layout, oppo adugodi queries,Adugodi, Bengaluru - 560030, Karnataka.",
      "locality": "Mahalingeshwara layout",
      "parentId": 318345,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "10% off",
        "shortDescriptionList": [
          {
            "meta": "10% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "10% off up to ₹40 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "10% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "10% off up to ₹40 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3000,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3000",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "528523",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "lastMileTravel": 2.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.0",
      "totalRatings": 500,
      "new": false
    },
    "subtype": "basic"
  }
]



const ResturantCard=(props)=>{
    const{resData}=props;
    return(
    <div className="res-card">
        <img className="res-img" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" + resData.data.cloudinaryImageId}/>
        <h3>{resData.data.name}</h3>
        <h3>{resData.data.cuisines.join(", ")}</h3>
        <h3>{resData.data.avgRating} stars</h3>
        <h4> ₹{resData.data.costForTwo/100} For Two</h4>
        <h4>{resData.data.deliveryTime}minutes</h4>
    </div>)
}


const Body=()=>{
    return(
    <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
    {resList.map((restaurant)=>(
        <ResturantCard key={restaurant.data.id} resData={restaurant}/>
    ))}

        </div>
    </div>)
}

const AppLayout=()=>{
     return <div className="app">
        <Header/>
        <Body />
     </div> 
}


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);