window.onload = function() {
  var assert = chai.assert;
  mocha.setup('tdd');

  var YELP_API_RESULT = {
    "region": {
      "span": {
        "latitude_delta": 0.1408442884808352,
        "longitude_delta": 0.2551083597018078
      },
      "center": {
        "latitude": 47.669141131127645,
        "longitude": -122.268945654681
      }
    },
    "total": 785,
    "businesses": [
      {
        "is_claimed": true,
        "rating": 4.5,
        "mobile_url": "http://m.yelp.com/biz/radiator-whiskey-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
        "rating_img_url": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
        "review_count": 675,
        "name": "Radiator Whiskey",
        "rating_img_url_small": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
        "url": "http://www.yelp.com/biz/radiator-whiskey-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
        "categories": [
          [
            "American (New)",
            "newamerican"
          ],
          [
            "Cocktail Bars",
            "cocktailbars"
          ],
          [
            "Whiskey Bars",
            "whiskeybars"
          ]
        ],
        "phone": "2064674268",
        "snippet_text": "I'm a huge fan and surprised to see I have not yet left a review. This restaurant is great across the board and is a favorite place to bring tourists. \n\nThe...",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/HvalEwV_lK4fCXMvHz4Mtw/ms.jpg",
        "snippet_image_url": "http://s3-media2.fl.yelpcdn.com/photo/IeoP9HNNDfY0Mdqx2ot4Fw/ms.jpg",
        "display_phone": "+1-206-467-4268",
        "rating_img_url_large": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
        "id": "radiator-whiskey-seattle",
        "is_closed": false,
        "location": {
          "cross_streets": "Post Aly & 1st Ave",
          "city": "Seattle",
          "display_address": [
            "94 Pike St",
            "Ste 30",
            "Downtown",
            "Seattle, WA 98101"
          ],
          "geo_accuracy": 8,
          "neighborhoods": [
            "Downtown"
          ],
          "postal_code": "98101",
          "country_code": "US",
          "address": [
            "94 Pike St",
            "Ste 30"
          ],
          "coordinate": {
            "latitude": 47.60888,
            "longitude": -122.34036
          },
          "state_code": "WA"
        }
      },
      {
        "is_claimed": true,
        "rating": 4.5,
        "mobile_url": "http://m.yelp.com/biz/woodinville-whiskey-company-woodinville?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
        "rating_img_url": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
        "review_count": 115,
        "name": "Woodinville Whiskey Company",
        "rating_img_url_small": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
        "url": "http://www.yelp.com/biz/woodinville-whiskey-company-woodinville?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
        "categories": [
          [
            "Beer, Wine & Spirits",
            "beer_and_wine"
          ],
          [
            "Distilleries",
            "distilleries"
          ]
        ],
        "phone": "4254861199",
        "snippet_text": "Okay, this place is great, and I really like the new space.  What's super cool is that it's located right next to a Tavern, some wineries, and Red Hook, so...",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/aPFCvhBBmqUjwo_d3_f2dw/ms.jpg",
        "snippet_image_url": "http://s3-media3.fl.yelpcdn.com/photo/BSMXXX8g8pqON3Lc6e2_6w/ms.jpg",
        "display_phone": "+1-425-486-1199",
        "rating_img_url_large": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
        "id": "woodinville-whiskey-company-woodinville",
        "is_closed": false,
        "location": {
          "cross_streets": "145th St",
          "city": "Woodinville",
          "display_address": [
            "14509 Woodinville Redmond Rd NE",
            "Ste 3",
            "Woodinville, WA 98072"
          ],
          "geo_accuracy": 9.5,
          "postal_code": "98072",
          "country_code": "US",
          "address": [
            "14509 Woodinville Redmond Rd NE",
            "Ste 3"
          ],
          "coordinate": {
            "latitude": 47.7331612622553,
            "longitude": -122.152987309362
          },
          "state_code": "WA"
        }
      },
      {
        "is_claimed": true,
        "rating": 4,
        "mobile_url": "http://m.yelp.com/biz/the-whisky-bar-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
        "rating_img_url": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
        "review_count": 343,
        "name": "The Whisky Bar",
        "rating_img_url_small": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
        "url": "http://www.yelp.com/biz/the-whisky-bar-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
        "categories": [
          [
            "Scottish",
            "scottish"
          ],
          [
            "British",
            "british"
          ],
          [
            "Whiskey Bars",
            "whiskeybars"
          ]
        ],
        "menu_date_updated": 1463821169,
        "phone": "2064434490",
        "snippet_text": "We came here on a busy Friday night and this place was poppin and for good reason. Although we did have to wait a few minutes for a server to come over...",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/ml508gDqb3tkMOrQyxiDrA/ms.jpg",
        "snippet_image_url": "http://s3-media2.fl.yelpcdn.com/photo/UMDpwOGnxD7sLdojL_t3vA/ms.jpg",
        "display_phone": "+1-206-443-4490",
        "rating_img_url_large": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
        "menu_provider": "single_platform",
        "id": "the-whisky-bar-seattle",
        "is_closed": false,
        "location": {
          "cross_streets": "Lenora St & Blanchard St",
          "city": "Seattle",
          "display_address": [
            "2122 2nd Ave",
            "Belltown",
            "Seattle, WA 98121"
          ],
          "geo_accuracy": 9.5,
          "neighborhoods": [
            "Belltown"
          ],
          "postal_code": "98121",
          "country_code": "US",
          "address": [
            "2122 2nd Ave"
          ],
          "coordinate": {
            "latitude": 47.613081,
            "longitude": -122.343676
          },
          "state_code": "WA"
        }
      },
      {
        "is_claimed": false,
        "rating": 4,
        "mobile_url": "http://m.yelp.com/biz/canon-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
        "rating_img_url": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
        "review_count": 516,
        "name": "Canon",
        "rating_img_url_small": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
        "url": "http://www.yelp.com/biz/canon-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
        "categories": [
          [
            "American (New)",
            "newamerican"
          ],
          [
            "Cocktail Bars",
            "cocktailbars"
          ]
        ],
        "phone": "2065529755",
        "snippet_text": "my daughter and her \"boyfriend\" dragged me here last week for some drinks when we were disappointed that the space needle was closed for a private...",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/EOlWT9CR4J6cjX0u8A8iRg/ms.jpg",
        "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/photo/Bu5zsSaRPVL4IAQ6IEAMlQ/ms.jpg",
        "display_phone": "+1-206-552-9755",
        "rating_img_url_large": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
        "id": "canon-seattle",
        "is_closed": false,
        "location": {
          "cross_streets": "Columbia St & Marion St",
          "city": "Seattle",
          "display_address": [
            "928 12th Ave",
            "Central District",
            "Seattle, WA 98122"
          ],
          "geo_accuracy": 8,
          "neighborhoods": [
            "Central District"
          ],
          "postal_code": "98122",
          "country_code": "US",
          "address": [
            "928 12th Ave"
          ],
          "coordinate": {
            "latitude": 47.6112595,
            "longitude": -122.3164673
          },
          "state_code": "WA"
        }
      },
      {
        "is_claimed": true,
        "rating": 4,
        "mobile_url": "http://m.yelp.com/biz/the-barrel-thief-seattle-2?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
        "rating_img_url": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
        "review_count": 111,
        "name": "The Barrel Thief",
        "rating_img_url_small": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
        "url": "http://www.yelp.com/biz/the-barrel-thief-seattle-2?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
        "categories": [
          [
            "Coffee & Tea",
            "coffee"
          ],
          [
            "Lounges",
            "lounges"
          ],
          [
            "Wine Bars",
            "wine_bars"
          ]
        ],
        "phone": "2064025492",
        "snippet_text": "I had a great experience for my first time at The Barrel Thief, and I can't wait to go back!\nI RSVP'd to a wine tasting being held at The Barrel Thief for...",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/Q1v6GaPh7Ta38cuXG-w5MQ/ms.jpg",
        "snippet_image_url": "https://s3-media4.fl.yelpcdn.com/assets/srv0/yelp_styleguide/cc4afe21892e/assets/img/default_avatars/user_medium_square.png",
        "display_phone": "+1-206-402-5492",
        "rating_img_url_large": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
        "id": "the-barrel-thief-seattle-2",
        "is_closed": false,
        "location": {
          "cross_streets": "35th St & 34th St",
          "city": "Seattle",
          "display_address": [
            "3417 Evanston Ave N",
            "Ste 102",
            "Fremont",
            "Seattle, WA 98103"
          ],
          "geo_accuracy": 8,
          "neighborhoods": [
            "Fremont"
          ],
          "postal_code": "98103",
          "country_code": "US",
          "address": [
            "3417 Evanston Ave N",
            "Ste 102"
          ],
          "coordinate": {
            "latitude": 47.6505279541016,
            "longitude": -122.351745605469
          },
          "state_code": "WA"
        }
      },
      {
        "is_claimed": false,
        "rating": 4,
        "mobile_url": "http://m.yelp.com/biz/bathtub-gin-and-co-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
        "rating_img_url": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
        "review_count": 698,
        "name": "Bathtub Gin & Co",
        "rating_img_url_small": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
        "url": "http://www.yelp.com/biz/bathtub-gin-and-co-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
        "categories": [
          [
            "Cocktail Bars",
            "cocktailbars"
          ]
        ],
        "phone": "2067286069",
        "snippet_text": "First impression is not necessarily the last impression. I am new to Seattle and this neighborhood, so it was weird to walk down the alley and wait outside...",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/-yVHwmUv3x8Karn-4lGMiw/ms.jpg",
        "snippet_image_url": "http://s3-media3.fl.yelpcdn.com/photo/1U8gDWIx1XnGRNJdfPqPuQ/ms.jpg",
        "display_phone": "+1-206-728-6069",
        "rating_img_url_large": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
        "id": "bathtub-gin-and-co-seattle",
        "is_closed": false,
        "location": {
          "cross_streets": "Blanchard St & Bell St",
          "city": "Seattle",
          "display_address": [
            "2205 2nd Ave",
            "Belltown",
            "Seattle, WA 98121"
          ],
          "geo_accuracy": 9.5,
          "neighborhoods": [
            "Belltown"
          ],
          "postal_code": "98121",
          "country_code": "US",
          "address": [
            "2205 2nd Ave"
          ],
          "coordinate": {
            "latitude": 47.613134384259,
            "longitude": -122.34505781259
          },
          "state_code": "WA"
        }
      },
      {
        "is_claimed": true,
        "rating": 4.5,
        "mobile_url": "http://m.yelp.com/biz/the-zig-zag-café-seattle-2?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
        "rating_img_url": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
        "review_count": 703,
        "name": "The Zig Zag Café",
        "rating_img_url_small": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
        "url": "http://www.yelp.com/biz/the-zig-zag-café-seattle-2?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
        "categories": [
          [
            "American (New)",
            "newamerican"
          ],
          [
            "Cocktail Bars",
            "cocktailbars"
          ]
        ],
        "phone": "2066251146",
        "snippet_text": "Read about this restuarant in a magazine and had to check it out. \n\nYou gotta get the Old Fashioned!",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/m2ZA0NNBzdKHpJdnxxB8GQ/ms.jpg",
        "snippet_image_url": "http://s3-media2.fl.yelpcdn.com/photo/GsYHenh0p5af617g1Q3pPQ/ms.jpg",
        "display_phone": "+1-206-625-1146",
        "rating_img_url_large": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
        "id": "the-zig-zag-café-seattle-2",
        "is_closed": false,
        "location": {
          "cross_streets": "Pike St",
          "city": "Seattle",
          "display_address": [
            "1501 Western Ave",
            "Ste 202",
            "Downtown",
            "Seattle, WA 98101"
          ],
          "geo_accuracy": 9.5,
          "neighborhoods": [
            "Downtown"
          ],
          "postal_code": "98101",
          "country_code": "US",
          "address": [
            "1501 Western Ave",
            "Ste 202"
          ],
          "coordinate": {
            "latitude": 47.6083803,
            "longitude": -122.3414779
          },
          "state_code": "WA"
        }
      },
      {
        "is_claimed": false,
        "rating": 4,
        "mobile_url": "http://m.yelp.com/biz/needle-and-thread-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
        "rating_img_url": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
        "review_count": 235,
        "name": "Needle and Thread",
        "rating_img_url_small": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
        "url": "http://www.yelp.com/biz/needle-and-thread-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
        "categories": [
          [
            "Lounges",
            "lounges"
          ],
          [
            "Cocktail Bars",
            "cocktailbars"
          ]
        ],
        "phone": "2063250133",
        "snippet_text": "This place is so cool! We were supposed to ring the doorbell according to Yelp reviews but I was confused and just stepped inside. They were fine with it,...",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/2nRAauAceCMqOWA7Zr1qQA/ms.jpg",
        "snippet_image_url": "http://s3-media3.fl.yelpcdn.com/photo/ELpLbl8xOR8QhEKrOHQlPw/ms.jpg",
        "display_phone": "+1-206-325-0133",
        "rating_img_url_large": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
        "id": "needle-and-thread-seattle",
        "is_closed": false,
        "location": {
          "cross_streets": "Union St & Pike St",
          "city": "Seattle",
          "display_address": [
            "1406 12th Ave",
            "Capitol Hill",
            "Seattle, WA 98122"
          ],
          "geo_accuracy": 8,
          "neighborhoods": [
            "Capitol Hill"
          ],
          "postal_code": "98122",
          "country_code": "US",
          "address": [
            "1406 12th Ave"
          ],
          "coordinate": {
            "latitude": 47.6132088,
            "longitude": -122.3165436
          },
          "state_code": "WA"
        }
      },
      {
        "is_claimed": true,
        "rating": 4,
        "mobile_url": "http://m.yelp.com/biz/knee-high-stocking-co-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
        "rating_img_url": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
        "review_count": 630,
        "name": "Knee High Stocking Co.",
        "rating_img_url_small": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
        "url": "http://www.yelp.com/biz/knee-high-stocking-co-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
        "categories": [
          [
            "American (New)",
            "newamerican"
          ],
          [
            "Cocktail Bars",
            "cocktailbars"
          ]
        ],
        "phone": "2069797049",
        "snippet_text": "This is a hidden gem. I visited Seattle for the first time and was referred to this place and it did not disappoint. Tucked away speakeasy vibe. They were...",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/KqS_XwsLYr155ENVKPuNHg/ms.jpg",
        "snippet_image_url": "http://s3-media1.fl.yelpcdn.com/photo/NdasFIiyQYKr_vQSw5EjqA/ms.jpg",
        "display_phone": "+1-206-979-7049",
        "rating_img_url_large": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
        "id": "knee-high-stocking-co-seattle",
        "is_closed": false,
        "location": {
          "cross_streets": "Bellevue & Melrose",
          "city": "Seattle",
          "display_address": [
            "1356 E Olive Way",
            "Capitol Hill",
            "Seattle, WA 98122"
          ],
          "geo_accuracy": 9.5,
          "neighborhoods": [
            "Capitol Hill"
          ],
          "postal_code": "98122",
          "country_code": "US",
          "address": [
            "1356 E Olive Way"
          ],
          "coordinate": {
            "latitude": 47.6168966455954,
            "longitude": -122.32731342315701
          },
          "state_code": "WA"
        }
      },
      {
        "is_claimed": true,
        "rating": 4,
        "mobile_url": "http://m.yelp.com/biz/rob-roy-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
        "rating_img_url": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
        "review_count": 282,
        "name": "Rob Roy",
        "rating_img_url_small": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
        "url": "http://www.yelp.com/biz/rob-roy-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
        "categories": [
          [
            "Lounges",
            "lounges"
          ],
          [
            "Cocktail Bars",
            "cocktailbars"
          ]
        ],
        "phone": "2069568423",
        "snippet_text": "Went there on a Saturday night with two friends at around 10 pm. Place was already packed, but we managed to get a side table with bar stools to sit at....",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/hKawO9kT7H71Y6ccCWKCkg/ms.jpg",
        "snippet_image_url": "http://s3-media3.fl.yelpcdn.com/photo/9_bx6mQKg97IX_QZBORXeg/ms.jpg",
        "display_phone": "+1-206-956-8423",
        "rating_img_url_large": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
        "id": "rob-roy-seattle",
        "is_closed": false,
        "location": {
          "cross_streets": "Battery St & Bell St",
          "city": "Seattle",
          "display_address": [
            "2332 2nd Ave",
            "Belltown",
            "Seattle, WA 98121"
          ],
          "geo_accuracy": 9.5,
          "neighborhoods": [
            "Belltown"
          ],
          "postal_code": "98121",
          "country_code": "US",
          "address": [
            "2332 2nd Ave"
          ],
          "coordinate": {
            "latitude": 47.6147561,
            "longitude": -122.3468656
          },
          "state_code": "WA"
        }
      },
      {
        "is_claimed": true,
        "rating": 4,
        "mobile_url": "http://m.yelp.com/biz/liberty-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
        "rating_img_url": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
        "review_count": 434,
        "name": "Liberty",
        "rating_img_url_small": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
        "url": "http://www.yelp.com/biz/liberty-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
        "categories": [
          [
            "Lounges",
            "lounges"
          ],
          [
            "Coffee & Tea",
            "coffee"
          ],
          [
            "Sushi Bars",
            "sushi"
          ]
        ],
        "menu_date_updated": 1441964142,
        "phone": "2063239898",
        "snippet_text": "Sushi, whiskey flights and a lesson on how it all got started. So cool that you can give a price range (minimum $15), tell a flavor profile and they'll let...",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/CnmwlPieOElXmBSjUHTo9Q/ms.jpg",
        "snippet_image_url": "http://s3-media3.fl.yelpcdn.com/photo/5n-ofvISzgAN6WxikRwimg/ms.jpg",
        "display_phone": "+1-206-323-9898",
        "rating_img_url_large": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
        "menu_provider": "single_platform",
        "id": "liberty-seattle",
        "is_closed": false,
        "location": {
          "cross_streets": "Republican St & Mercer St",
          "city": "Seattle",
          "display_address": [
            "517 15th Ave E",
            "Capitol Hill",
            "Seattle, WA 98112"
          ],
          "geo_accuracy": 9.5,
          "neighborhoods": [
            "Capitol Hill"
          ],
          "postal_code": "98112",
          "country_code": "US",
          "address": [
            "517 15th Ave E"
          ],
          "coordinate": {
            "latitude": 47.6235761995692,
            "longitude": -122.312805308912
          },
          "state_code": "WA"
        }
      },
      {
        "is_claimed": true,
        "rating": 3.5,
        "mobile_url": "http://m.yelp.com/biz/bookstore-bar-and-café-seattle-3?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
        "rating_img_url": "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/5ef3eb3cb162/ico/stars/v1/stars_3_half.png",
        "review_count": 254,
        "name": "Bookstore Bar & Café",
        "rating_img_url_small": "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/2e909d5d3536/ico/stars/v1/stars_small_3_half.png",
        "url": "http://www.yelp.com/biz/bookstore-bar-and-café-seattle-3?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
        "categories": [
          [
            "Bars",
            "bars"
          ],
          [
            "American (New)",
            "newamerican"
          ]
        ],
        "menu_date_updated": 1463946226,
        "phone": "2066243646",
        "snippet_text": "We are staying at the Alexis hotel and have visited the Bookstore Bar & Café twice now.  Both times our server has been very attentive and helpful.\n\nOur...",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/vdYR_PO_kwQGXNLOTh4NoA/ms.jpg",
        "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/photo/2gBl_hXON3gCI5vaZLyz8A/ms.jpg",
        "display_phone": "+1-206-624-3646",
        "rating_img_url_large": "https://s3-media3.fl.yelpcdn.com/assets/2/www/img/bd9b7a815d1b/ico/stars/v1/stars_large_3_half.png",
        "menu_provider": "locu",
        "id": "bookstore-bar-and-café-seattle-3",
        "is_closed": false,
        "location": {
          "city": "Seattle",
          "display_address": [
            "Alexis Hotel",
            "1007 1st Ave",
            "Downtown",
            "Seattle, WA 98104"
          ],
          "geo_accuracy": 9.5,
          "neighborhoods": [
            "Downtown"
          ],
          "postal_code": "98104",
          "country_code": "US",
          "address": [
            "Alexis Hotel",
            "1007 1st Ave"
          ],
          "coordinate": {
            "latitude": 47.605121,
            "longitude": -122.33678
          },
          "state_code": "WA"
        }
      },
      {
        "is_claimed": true,
        "rating": 3.5,
        "mobile_url": "http://m.yelp.com/biz/kickin-boot-whiskey-kitchen-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
        "rating_img_url": "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/5ef3eb3cb162/ico/stars/v1/stars_3_half.png",
        "review_count": 389,
        "name": "Kickin' Boot Whiskey Kitchen",
        "rating_img_url_small": "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/2e909d5d3536/ico/stars/v1/stars_small_3_half.png",
        "url": "http://www.yelp.com/biz/kickin-boot-whiskey-kitchen-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
        "categories": [
          [
            "Bars",
            "bars"
          ],
          [
            "Southern",
            "southern"
          ],
          [
            "Barbeque",
            "bbq"
          ]
        ],
        "phone": "2067832668",
        "snippet_text": "This place kicks ass!\n\nThe only advice I will give... whatever you order, whatever you like, whatever seems like a good idea to eat, do your taste buds a...",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/upfc6okfIAnR9CMn8yUf8w/ms.jpg",
        "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/photo/JOl4-_K9X4ACP-oT-sCJBw/ms.jpg",
        "display_phone": "+1-206-783-2668",
        "rating_img_url_large": "https://s3-media3.fl.yelpcdn.com/assets/2/www/img/bd9b7a815d1b/ico/stars/v1/stars_large_3_half.png",
        "id": "kickin-boot-whiskey-kitchen-seattle",
        "is_closed": false,
        "location": {
          "cross_streets": "N Ballard Ave & Market St",
          "city": "Seattle",
          "display_address": [
            "5309 22nd Ave NW",
            "Ballard",
            "Seattle, WA 98107"
          ],
          "geo_accuracy": 9.5,
          "neighborhoods": [
            "Ballard"
          ],
          "postal_code": "98107",
          "country_code": "US",
          "address": [
            "5309 22nd Ave NW"
          ],
          "coordinate": {
            "latitude": 47.6670989,
            "longitude": -122.384904
          },
          "state_code": "WA"
        }
      },
      {
        "is_claimed": true,
        "rating": 4.5,
        "mobile_url": "http://m.yelp.com/biz/sun-liquor-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
        "rating_img_url": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
        "review_count": 338,
        "name": "Sun Liquor",
        "rating_img_url_small": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
        "url": "http://www.yelp.com/biz/sun-liquor-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
        "categories": [
          [
            "Lounges",
            "lounges"
          ],
          [
            "Cocktail Bars",
            "cocktailbars"
          ]
        ],
        "phone": "2068601130",
        "snippet_text": "This place is amazing.\nI hope I get my hands on some of that egg nog next winter! :) \nBartenders make FANTASTIC cocktails.\nLove the ambiance. \nGreat place.",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/wDlEZ7Vu5MavtkAOkrB9xw/ms.jpg",
        "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/photo/ihmWePn0eEqrDDNMd4_Mdg/ms.jpg",
        "display_phone": "+1-206-860-1130",
        "rating_img_url_large": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
        "id": "sun-liquor-seattle",
        "is_closed": false,
        "location": {
          "cross_streets": "Mercer St & Roy St",
          "city": "Seattle",
          "display_address": [
            "607 Summit Ave E",
            "Capitol Hill",
            "Seattle, WA 98102"
          ],
          "geo_accuracy": 9.5,
          "neighborhoods": [
            "Capitol Hill"
          ],
          "postal_code": "98102",
          "country_code": "US",
          "address": [
            "607 Summit Ave E"
          ],
          "coordinate": {
            "latitude": 47.62460938971,
            "longitude": -122.32560712946
          },
          "state_code": "WA"
        }
      },
      {
        "is_claimed": true,
        "rating": 4,
        "mobile_url": "http://m.yelp.com/biz/sun-liquor-distillery-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
        "rating_img_url": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
        "review_count": 158,
        "name": "Sun Liquor Distillery",
        "rating_img_url_small": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
        "url": "http://www.yelp.com/biz/sun-liquor-distillery-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
        "categories": [
          [
            "Burgers",
            "burgers"
          ],
          [
            "Cocktail Bars",
            "cocktailbars"
          ],
          [
            "Distilleries",
            "distilleries"
          ]
        ],
        "phone": "2067201600",
        "snippet_text": "Great drinks + friendly bartender. The bartender is great with crafting up a delicious cocktail based on your boozy preferences, so don't hesitate to ask...",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/0H92g8GAnGXy1-alPB0Fbw/ms.jpg",
        "snippet_image_url": "http://s3-media3.fl.yelpcdn.com/photo/zBF6Z-70fyuCrwruUb1F4g/ms.jpg",
        "display_phone": "+1-206-720-1600",
        "rating_img_url_large": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
        "id": "sun-liquor-distillery-seattle",
        "is_closed": false,
        "location": {
          "cross_streets": "Summit Ave & Belmont Ave",
          "city": "Seattle",
          "display_address": [
            "514 E Pike St",
            "Capitol Hill",
            "Seattle, WA 98122"
          ],
          "geo_accuracy": 9.5,
          "neighborhoods": [
            "Capitol Hill"
          ],
          "postal_code": "98122",
          "country_code": "US",
          "address": [
            "514 E Pike St"
          ],
          "coordinate": {
            "latitude": 47.614496,
            "longitude": -122.324914
          },
          "state_code": "WA"
        }
      },
      {
        "is_claimed": true,
        "rating": 4,
        "mobile_url": "http://m.yelp.com/biz/quinns-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
        "rating_img_url": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
        "review_count": 1129,
        "name": "Quinn's",
        "rating_img_url_small": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
        "url": "http://www.yelp.com/biz/quinns-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
        "categories": [
          [
            "American (New)",
            "newamerican"
          ],
          [
            "Pubs",
            "pubs"
          ]
        ],
        "menu_date_updated": 1441986849,
        "phone": "2063257711",
        "snippet_text": "I have been to this place maybe 3-4 times. I only write Yelp reviews regarding restaurants of which I could either recommend without reservation or...",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/3p9MmQFGGOHO0dJjj7BxQA/ms.jpg",
        "snippet_image_url": "http://s3-media2.fl.yelpcdn.com/photo/MMR86-N585cfBU3Cp2xw0w/ms.jpg",
        "display_phone": "+1-206-325-7711",
        "rating_img_url_large": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
        "menu_provider": "single_platform",
        "id": "quinns-seattle",
        "is_closed": false,
        "location": {
          "cross_streets": "11th Ave & 10th Ave",
          "city": "Seattle",
          "display_address": [
            "1001 E Pike St",
            "Capitol Hill",
            "Seattle, WA 98122"
          ],
          "geo_accuracy": 8,
          "neighborhoods": [
            "Capitol Hill"
          ],
          "postal_code": "98122",
          "country_code": "US",
          "address": [
            "1001 E Pike St"
          ],
          "coordinate": {
            "latitude": 47.613861,
            "longitude": -122.319221
          },
          "state_code": "WA"
        }
      },
      {
        "is_claimed": true,
        "rating": 4,
        "mobile_url": "http://m.yelp.com/biz/brouwers-cafe-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
        "rating_img_url": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
        "review_count": 813,
        "name": "Brouwer's Cafe",
        "rating_img_url_small": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
        "url": "http://www.yelp.com/biz/brouwers-cafe-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
        "categories": [
          [
            "Modern European",
            "modern_european"
          ],
          [
            "Pubs",
            "pubs"
          ],
          [
            "Belgian",
            "belgian"
          ]
        ],
        "menu_date_updated": 1463819582,
        "phone": "2062672437",
        "snippet_text": "Brouwer's Cafe reminds me of my days in Belgium and I feel lucky to have stumbled upon it.\n\nI was surprised that my nearly 38 year old self was carded at...",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/hjACAluruRhPiXoeqerrRg/ms.jpg",
        "snippet_image_url": "http://s3-media3.fl.yelpcdn.com/photo/ULGz6jVkbEOfK0GM1U126A/ms.jpg",
        "display_phone": "+1-206-267-2437",
        "rating_img_url_large": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
        "menu_provider": "single_platform",
        "id": "brouwers-cafe-seattle",
        "is_closed": false,
        "location": {
          "cross_streets": "N Phinney Ave & N Evanston Ave",
          "city": "Seattle",
          "display_address": [
            "400 N 35th St",
            "Fremont",
            "Seattle, WA 98103"
          ],
          "geo_accuracy": 8,
          "neighborhoods": [
            "Fremont"
          ],
          "postal_code": "98103",
          "country_code": "US",
          "address": [
            "400 N 35th St"
          ],
          "coordinate": {
            "latitude": 47.65163,
            "longitude": -122.35423
          },
          "state_code": "WA"
        }
      },
      {
        "is_claimed": true,
        "rating": 4,
        "mobile_url": "http://m.yelp.com/biz/montana-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
        "rating_img_url": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
        "review_count": 138,
        "name": "Montana",
        "rating_img_url_small": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
        "url": "http://www.yelp.com/biz/montana-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
        "categories": [
          [
            "Dive Bars",
            "divebars"
          ],
          [
            "Cocktail Bars",
            "cocktailbars"
          ]
        ],
        "phone": "2063279362",
        "snippet_text": "My favorite Moscow Mule in the city...and it comes on tap made with Rachel's Ginger Beer!  It's one of the only places (to my knowledge) where you can get...",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/cy33s3Xr3sfA-nIDyJXTlQ/ms.jpg",
        "snippet_image_url": "http://s3-media1.fl.yelpcdn.com/photo/XkLrM3SXW5CVIChkL0bjCQ/ms.jpg",
        "display_phone": "+1-206-327-9362",
        "rating_img_url_large": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
        "id": "montana-seattle",
        "is_closed": false,
        "location": {
          "cross_streets": "Denny Way & Summit Ave",
          "city": "Seattle",
          "display_address": [
            "1506 E Olive Way",
            "Capitol Hill",
            "Seattle, WA 98122"
          ],
          "geo_accuracy": 9.5,
          "neighborhoods": [
            "Capitol Hill"
          ],
          "postal_code": "98122",
          "country_code": "US",
          "address": [
            "1506 E Olive Way"
          ],
          "coordinate": {
            "latitude": 47.6179347,
            "longitude": -122.3262903
          },
          "state_code": "WA"
        }
      },
      {
        "is_claimed": true,
        "rating": 4,
        "mobile_url": "http://m.yelp.com/biz/macleods-fish-and-chips-scottish-pub-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
        "rating_img_url": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
        "review_count": 117,
        "name": "Macleod's Fish & Chips Scottish Pub",
        "rating_img_url_small": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
        "url": "http://www.yelp.com/biz/macleods-fish-and-chips-scottish-pub-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
        "categories": [
          [
            "Pubs",
            "pubs"
          ],
          [
            "Scottish",
            "scottish"
          ],
          [
            "Fish & Chips",
            "fishnchips"
          ]
        ],
        "phone": "2066877115",
        "snippet_text": "Alan is amazing!\n\nThis is the place we visit every time we come here and we got to meet Alan!!",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/B4txyyPVcR7o3JzTxV3r9w/ms.jpg",
        "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/photo/Ky0qAHt-cS4b7383N2HGkQ/ms.jpg",
        "display_phone": "+1-206-687-7115",
        "rating_img_url_large": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
        "id": "macleods-fish-and-chips-scottish-pub-seattle",
        "is_closed": false,
        "location": {
          "cross_streets": "Vernon Pl & N 20th Ave",
          "city": "Seattle",
          "display_address": [
            "5200 Ballard Ave NW",
            "Ballard",
            "Seattle, WA 98107"
          ],
          "geo_accuracy": 8,
          "neighborhoods": [
            "Ballard"
          ],
          "postal_code": "98107",
          "country_code": "US",
          "address": [
            "5200 Ballard Ave NW"
          ],
          "coordinate": {
            "latitude": 47.6659,
            "longitude": -122.38233
          },
          "state_code": "WA"
        }
      },
      {
        "is_claimed": true,
        "rating": 4.5,
        "mobile_url": "http://m.yelp.com/biz/witness-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
        "rating_img_url": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
        "review_count": 425,
        "name": "Witness",
        "rating_img_url_small": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
        "url": "http://www.yelp.com/biz/witness-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
        "categories": [
          [
            "Southern",
            "southern"
          ],
          [
            "Cocktail Bars",
            "cocktailbars"
          ]
        ],
        "menu_date_updated": 1442170520,
        "phone": "2063290248",
        "snippet_text": "This is the best breakfast place I've ever eaten at. \n\nThe drink menu is extensive and detailed. As for the food...it was truly-next level. I did a...",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/YP0ez-LJGz901A4_2ggD7g/ms.jpg",
        "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/photo/77iSGW539vCVwZKi8KBc1Q/ms.jpg",
        "display_phone": "+1-206-329-0248",
        "rating_img_url_large": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
        "menu_provider": "single_platform",
        "id": "witness-seattle",
        "is_closed": false,
        "location": {
          "cross_streets": "Republican St & Harrison St",
          "city": "Seattle",
          "display_address": [
            "410 Broadway E",
            "Capitol Hill",
            "Seattle, WA 98102"
          ],
          "geo_accuracy": 9.5,
          "neighborhoods": [
            "Capitol Hill"
          ],
          "postal_code": "98102",
          "country_code": "US",
          "address": [
            "410 Broadway E"
          ],
          "coordinate": {
            "latitude": 47.622378,
            "longitude": -122.3207871
          },
          "state_code": "WA"
        }
      }
    ]
  };


  suite('lengths', function() {
    test('returns the lengths of strings', function() {
      assert.deepEqual(lengths([]), []);
      assert.deepEqual(lengths(['foo']), [3]);
      assert.deepEqual(lengths(['foo', 'hello', 'worlds']), [3, 5, 6]);
    });
  });

  suite('max', function() {
    test('calculates the max number in an array', function() {
      assert.strictEqual(max([1, 2, 3, 4, 3]), 4);
      assert.strictEqual(max([1, 2, 3, -4, 3]), 3);
      assert.strictEqual(max([]), -Infinity);
    });
  });

  suite('filterPassingGrades', function() {
    test('filters all passing grades', function() {
      assert.deepEqual(filterPassingGrades([]), []);
      assert.deepEqual(filterPassingGrades([100, 45, 90, 60]), [100, 90]);
      assert.deepEqual(filterPassingGrades([100, 45, 70]), [100, 70]);
      assert.deepEqual(filterPassingGrades([0, 45, 40]), []);
    });
  });

  suite('min', function() {
    test('calculates the min number in an array', function() {
      assert.strictEqual(min([1, 2, 3, 4, 3]), 1);
      assert.strictEqual(min([1, 2, 3, -4, 3]), -4);
      assert.strictEqual(min([]), Infinity);
    });
  });

  suite('pluck', function() {
    test('grabs the values from an array of object for a specific key', function() {
      var stooges = [
        { name: 'moe', age: 40 },
        { name: 'larry', age: 50 },
        { name: 'curly', age: 60 }
      ];

      assert.deepEqual(pluck([], 'foo'), []);
      assert.deepEqual(pluck(stooges, 'name'), ['moe', 'larry', 'curly']);
    });
  });

  suite('onlyEvens', function() {
    test('returns only the even numbers', function() {
      assert.deepEqual(onlyEvens([]), []);
      assert.deepEqual(onlyEvens([1, 2, 3, 4]), [2, 4]);
      assert.deepEqual(onlyEvens([12, 23, 3, 44, 10]), [12, 44, 10]);
    });
  });

  suite('businessNamesAndRatings', function() {
    test('returns the business name and rating', function() {
      assert.deepEqual(businessNamesAndRatings({ businesses: [], total: 0 }), []);
      assert.deepEqual(businessNamesAndRatings(YELP_API_RESULT), [
        {
          "name": "Radiator Whiskey",
          "rating": 4.5
        },
        {
          "name": "Woodinville Whiskey Company",
          "rating": 4.5
        },
        {
          "name": "The Whisky Bar",
          "rating": 4
        },
        {
          "name": "Canon",
          "rating": 4
        },
        {
          "name": "The Barrel Thief",
          "rating": 4
        },
        {
          "name": "Bathtub Gin & Co",
          "rating": 4
        },
        {
          "name": "The Zig Zag Café",
          "rating": 4.5
        },
        {
          "name": "Needle and Thread",
          "rating": 4
        },
        {
          "name": "Knee High Stocking Co.",
          "rating": 4
        },
        {
          "name": "Rob Roy",
          "rating": 4
        },
        {
          "name": "Liberty",
          "rating": 4
        },
        {
          "name": "Bookstore Bar & Café",
          "rating": 3.5
        },
        {
          "name": "Kickin' Boot Whiskey Kitchen",
          "rating": 3.5
        },
        {
          "name": "Sun Liquor",
          "rating": 4.5
        },
        {
          "name": "Sun Liquor Distillery",
          "rating": 4
        },
        {
          "name": "Quinn's",
          "rating": 4
        },
        {
          "name": "Brouwer's Cafe",
          "rating": 4
        },
        {
          "name": "Montana",
          "rating": 4
        },
        {
          "name": "Macleod's Fish & Chips Scottish Pub",
          "rating": 4
        },
        {
          "name": "Witness",
          "rating": 4.5
        }
      ]);
    })
  });

  suite('averageRating', function() {
    test('returns the average rating of yelp businesses in the API response', function() {
      assert.strictEqual(averageRating({ businesses: [], total: 0 }), null);
      assert.approximately(averageRating(YELP_API_RESULT), 4.075, 0.001);
    });
  });

  suite('aroundMe', function() {
    test('returns the businesses within 1 mile of me', function() {
      var coord = {
        lat: 47.599061,
        lon: -122.333853
      };
      assert.deepEqual(aroundMe({ businesses: [], total: 0 }, coord), []);
      assert.deepEqual(aroundMe(YELP_API_RESULT, coord), [
        {
          "is_claimed": true,
          "rating": 4.5,
          "mobile_url": "http://m.yelp.com/biz/radiator-whiskey-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
          "rating_img_url": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
          "review_count": 675,
          "name": "Radiator Whiskey",
          "rating_img_url_small": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
          "url": "http://www.yelp.com/biz/radiator-whiskey-seattle?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
          "categories": [
            [
              "American (New)",
              "newamerican"
            ],
            [
              "Cocktail Bars",
              "cocktailbars"
            ],
            [
              "Whiskey Bars",
              "whiskeybars"
            ]
          ],
          "phone": "2064674268",
          "snippet_text": "I'm a huge fan and surprised to see I have not yet left a review. This restaurant is great across the board and is a favorite place to bring tourists. \n\nThe...",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/HvalEwV_lK4fCXMvHz4Mtw/ms.jpg",
          "snippet_image_url": "http://s3-media2.fl.yelpcdn.com/photo/IeoP9HNNDfY0Mdqx2ot4Fw/ms.jpg",
          "display_phone": "+1-206-467-4268",
          "rating_img_url_large": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
          "id": "radiator-whiskey-seattle",
          "is_closed": false,
          "location": {
            "cross_streets": "Post Aly & 1st Ave",
            "city": "Seattle",
            "display_address": [
              "94 Pike St",
              "Ste 30",
              "Downtown",
              "Seattle, WA 98101"
            ],
            "geo_accuracy": 8,
            "neighborhoods": [
              "Downtown"
            ],
            "postal_code": "98101",
            "country_code": "US",
            "address": [
              "94 Pike St",
              "Ste 30"
            ],
            "coordinate": {
              "latitude": 47.60888,
              "longitude": -122.34036
            },
            "state_code": "WA"
          }
        },
        {
          "is_claimed": true,
          "rating": 4.5,
          "mobile_url": "http://m.yelp.com/biz/the-zig-zag-café-seattle-2?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
          "rating_img_url": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
          "review_count": 703,
          "name": "The Zig Zag Café",
          "rating_img_url_small": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
          "url": "http://www.yelp.com/biz/the-zig-zag-café-seattle-2?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
          "categories": [
            [
              "American (New)",
              "newamerican"
            ],
            [
              "Cocktail Bars",
              "cocktailbars"
            ]
          ],
          "phone": "2066251146",
          "snippet_text": "Read about this restuarant in a magazine and had to check it out. \n\nYou gotta get the Old Fashioned!",
          "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/m2ZA0NNBzdKHpJdnxxB8GQ/ms.jpg",
          "snippet_image_url": "http://s3-media2.fl.yelpcdn.com/photo/GsYHenh0p5af617g1Q3pPQ/ms.jpg",
          "display_phone": "+1-206-625-1146",
          "rating_img_url_large": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
          "id": "the-zig-zag-café-seattle-2",
          "is_closed": false,
          "location": {
            "cross_streets": "Pike St",
            "city": "Seattle",
            "display_address": [
              "1501 Western Ave",
              "Ste 202",
              "Downtown",
              "Seattle, WA 98101"
            ],
            "geo_accuracy": 9.5,
            "neighborhoods": [
              "Downtown"
            ],
            "postal_code": "98101",
            "country_code": "US",
            "address": [
              "1501 Western Ave",
              "Ste 202"
            ],
            "coordinate": {
              "latitude": 47.6083803,
              "longitude": -122.3414779
            },
            "state_code": "WA"
          }
        },
        {
          "is_claimed": true,
          "rating": 3.5,
          "mobile_url": "http://m.yelp.com/biz/bookstore-bar-and-café-seattle-3?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
          "rating_img_url": "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/5ef3eb3cb162/ico/stars/v1/stars_3_half.png",
          "review_count": 254,
          "name": "Bookstore Bar & Café",
          "rating_img_url_small": "https://s3-media1.fl.yelpcdn.com/assets/2/www/img/2e909d5d3536/ico/stars/v1/stars_small_3_half.png",
          "url": "http://www.yelp.com/biz/bookstore-bar-and-café-seattle-3?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=1Kw_DN-owURmu9hreUW2aw",
          "categories": [
            [
              "Bars",
              "bars"
            ],
            [
              "American (New)",
              "newamerican"
            ]
          ],
          "menu_date_updated": 1463946226,
          "phone": "2066243646",
          "snippet_text": "We are staying at the Alexis hotel and have visited the Bookstore Bar & Café twice now.  Both times our server has been very attentive and helpful.\n\nOur...",
          "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/vdYR_PO_kwQGXNLOTh4NoA/ms.jpg",
          "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/photo/2gBl_hXON3gCI5vaZLyz8A/ms.jpg",
          "display_phone": "+1-206-624-3646",
          "rating_img_url_large": "https://s3-media3.fl.yelpcdn.com/assets/2/www/img/bd9b7a815d1b/ico/stars/v1/stars_large_3_half.png",
          "menu_provider": "locu",
          "id": "bookstore-bar-and-café-seattle-3",
          "is_closed": false,
          "location": {
            "city": "Seattle",
            "display_address": [
              "Alexis Hotel",
              "1007 1st Ave",
              "Downtown",
              "Seattle, WA 98104"
            ],
            "geo_accuracy": 9.5,
            "neighborhoods": [
              "Downtown"
            ],
            "postal_code": "98104",
            "country_code": "US",
            "address": [
              "Alexis Hotel",
              "1007 1st Ave"
            ],
            "coordinate": {
              "latitude": 47.605121,
              "longitude": -122.33678
            },
            "state_code": "WA"
          }
        }
      ]);
    });
  });

  suite('businessRatingTable', function() {
    test('returns the average rating of yelp businesses in the API response', function() {
      var testRow = function(data, cellType, result) {
        assert.strictEqual(result.tagName, 'TR');
        assert.strictEqual(result.childNodes.length, data.length);
        for(var i = 0; i < data.length; i++) {
          assert.strictEqual(result.childNodes[i].tagName,
            cellType.toUpperCase());
          assert.strictEqual(result.childNodes[i].textContent,
            data[i].toString());
        }
      };

      var testTable = function(data, result) {
        assert.strictEqual(result.tagName, 'TABLE');
        assert.strictEqual(result.childNodes.length, 2);

        // Test the thead
        var theads = result.getElementsByTagName('thead');
        assert.strictEqual(theads.length, 1);
        assert.strictEqual(theads[0].childNodes.length, 1);
        testRow(['Name', 'Rating'], 'th', theads[0].childNodes[0]);

        // Test the tbody
        var tbodys = result.getElementsByTagName('tbody');
        assert.strictEqual(tbodys.length, 1);
        assert.strictEqual(tbodys[0].childNodes.length, data.length);
        for (var i = 0; i < data.length; i++) {
          testRow(data[i], 'td', tbodys[0].childNodes[i]);
        }
      };

      testTable([], businessRatingTable({ businesses: [], total: 0 }));
      testTable([
        ["Radiator Whiskey", 4.5],
        ["Woodinville Whiskey Company", 4.5],
        ["The Whisky Bar", 4],
        ["Canon", 4],
        ["The Barrel Thief", 4],
        ["Bathtub Gin & Co", 4],
        ["The Zig Zag Café", 4.5],
        ["Needle and Thread", 4],
        ["Knee High Stocking Co.", 4],
        ["Rob Roy", 4],
        ["Liberty", 4],
        ["Bookstore Bar & Café", 3.5],
        ["Kickin' Boot Whiskey Kitchen", 3.5],
        ["Sun Liquor", 4.5],
        ["Sun Liquor Distillery", 4],
        ["Quinn's", 4],
        ["Brouwer's Cafe", 4],
        ["Montana", 4],
        ["Macleod's Fish & Chips Scottish Pub", 4],
        ["Witness", 4.5]
      ], businessRatingTable(YELP_API_RESULT));
    });
  });

  mocha.run();
};
