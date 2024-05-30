/* eslint-disable import/prefer-default-export */


export const sync1 = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': '253ceb1ed13ba9248ba3baf97a5e7288b12da9ed'
  },
  body: {
   "correlation_id": "1122345",
   "input": {
       "image_url": "https://s3-ap-southeast-1.amazonaws.com/msd-cvteam-apse/images/6f115b90-c15e-5c98-b2ea-6cdfe0686db6.jpg"
   }
},
  url: 'https://blox.madstreetden.com/api/v1/infer?is_sync=true'
};

export const sync2 = {
   headers: {
     'Content-Type': 'application/json',
     'Authorization': 'cd84f8516e457597383cb182af041cefb60c337f'
   },
   body: {
    "correlation_id": "1122345",
    "input": {
        "image_url": "https://m.media-amazon.com/images/I/71U0Wo-rizL._UL1500_.jpg"
    }
 },
   url: 'https://blox.madstreetden.com/api/v1/infer?is_sync=true'
 };

export const tag3 = {
  headers: {
    'Content-Type': 'application/json'
  },
  body: {
    api_key: '21250c78a5c2480ba787e110e151667f',
    image_url: 'https://i.pinimg.com/736x/65/ef/52/65ef52b0ec7db57eadf70079b0d370c1--green-bodycon-dress-sweater-dresses.jpg',
    correlation_key: 'd1d61d5f28064151b4b00aabe657f625',
    product_metadata : {
      id : "EXT_53424"
   }
  },
  url: '{{base_url}}/tag'
};

export const tag4 = {
   headers: {
     'Content-Type': 'application/json'
   },
   body: {
     api_key: '21250c78a5c2480ba787e110e151667f',
     image_url : ["https://images-na.ssl-images-amazon.com/images/I/91mrpw%2B%2B9rL._UL1500_.jpg","https://images-na.ssl-images-amazon.com/images/I/91xjO3oOBzL._UY879_.jpg"],
     correlation_key: 'd1d61d5f28064151b4b00aabe657f625',
     product_metadata : {
       id : "EXT_53424"
    }
   },
   url: '{{base_url}}/tag'
 };

export const recommendation4 = {
  headers: {
    'x-api-key': '9ed6bd6a23db7dd422893e1e0'
  },
  body: {
    mad_uuid: 'a06ca0ed-09ba-4c61-a532-a4ebc5e8a465',
    platform: 'desktop',
    product_id: '15015286wq',
    page_name: 'Product Description Page'
  },
  url: '{{base_url}}/widgets'
};

export const recommendation5 = {
  headers: {
    'x-api-key': '9ed6bd6a23db7dd422893e1e0'
  },
  body: {
    mad_uuid: 'a06ca0ed-09ba-4c61-a532-a4ebc5e8a465',
    platform: 'desktop',
    product_id: '15015286wq',
    page_name: 'Product Description Page',
    "filters_append": [
      {
        "field": "region_code",
        "type": "exact",
        "value": [
          "US"
        ]
      }
    ]
  },
  url: '{{base_url}}/widgets'
};

export const search1 = {
  headers: {
    'x-api-key': '9ed6bd6a23db7dd422893e1e0'
  },
  body: {
    mad_uuid: 'a06ca0ed-09ba-4c61-a532-a4ebc5e8a465',
    module_name: 'default-textsearch',
    search_query: 'red dress',
    filters: [
      {
          "field": "available",
          "type": "exact",
          "value": "true"
      }
  ],
  order_by: [
      {
          "field": "relevance",
          "order": "desc"
      }
  ],
  facets: [
      "brand",
      "category",
      "ontology"
  ],
  fields: [
      "brand",
      "title",
      "product_id",
      "image_link",
      "link",
      "price"
  ],
  page_num: 1,
  facet_limit: 100,
  num_results: 5
},
  url: '{{base_url}}/widgets'
};

export const event1 = {
  headers: {
    'content-Type': 'application/json'
  },
  body: {
    "data":
    {
      api_key: '9ed6bd6a23db7dd422893e156',
      mad_uuid:'2921651f-8ed9-4480-8c40-1021ddb38bc5',
      user_id:'user_abc',
      url:'https://example-site.com/',
      referrer:'',
      medium: 'vue_x',
      source:'client_name',
      platform:'desktop',
      name:'pageView',
      action:'pageView',
      non_interaction:'true',
      metadata:{
          "account_id":"c17c8af3-e92f-42e7-ba3a-5b316bc14679",
          "region":"us-east-1",
          "env":"prod",
          "currency":"USD",
          "page_type":'home'
        },
      _journey_metadata:{
          "audience_id":"1",
          "page_id":"2132",
          "experience_id":"1719",
          "journey_id":"855"
        }
    }
  },
  url: '{{base_url}}/events/track'
};


export const event2 = {
  headers: {
    'content-Type': 'application/json'
  },
  body: {
    "data":{
       "api_key":"9ed6bd6a23db7dd422893e156",
       "mad_uuid":"2921651f-8ed9-4480-8c40-1021ddb38fc6",
       "user_id":"user_abc",
       "url":"https://example-site.com/product/beige-fanny-pack-33941",
       "referrer":"https://example-site.com",
       "medium":"vue_x",
       "source":"client_name",
       "platform":"desktop",
       "name":"pageView",
       "action":"pageView",
       "non_interaction":"true",
       "metadata":{
          "account_id":"c17c8af3-e92f-42e7-ba3a-5b316bc14679",
          "region":"us-east-1",
          "env":"prod",
          "currency":"USD",
          "page_type":"pdp",
          "product_list":[
             {
                "product_id":"2019000100030423",
                "price":"79.00"
             }
          ]
       },
       "_journey_metadata":{
          "audience_id":"1",
          "page_id":"2132",
          "experience_id":"1719",
          "journey_id":"855"
       }
    }
 },
  url: '{{base_url}}/events/track'
};


export const event3 = {
  headers: {
    'content-Type': 'application/json'
  },
  body: {
    "data":{
       "api_key":"9ed6bd6a23db7dd422893e167",
       "mad_uuid":"2921651f-8ed9-4480-8c40-1021ddb38fc9",
       "user_id":"user_abc",
       "url":"https://example-site.com/product/beige-fanny-pack-33941",
       "referrer":"https://example-site.com",
       "medium":"vue_x",
       "source":"client_name",
       "platform":"desktop",
       "name":"addToCart",
       "action":"click",
       "non_interaction":"false",
       "metadata":{
          "account_id":"c17c8af3-e92f-42e7-ba3a-5b316bc14679",
          "region":"us-east-1",
          "env":"prod",
          "currency":"USD",
          "page_type":"pdp",
          "product_list":[
             {
                "product_id":"2019000100030423",
                "price":"79.00"
             }
          ]
       },
       "_journey_metadata":{
          "audience_id":"1",
          "page_id":"2132",
          "experience_id":"1719",
          "journey_id":"855"
       }
    }
 },
  url: '{{base_url}}/events/track'
};

export const event4 = {
  headers: {
    'content-Type': 'application/json'
  },
  body: {
    "data":{
       "api_key":"9ed6bd6a23db7dd422893e167",
       "mad_uuid":"4d3be7e9-0b87-41b9-94c7-b5da57cde234",
       "user_id":"user_abc",
       "url":"https://example-site.com/checkout-finished?orderId=378829558",
       "referrer":"https://example-site.com",
       "medium":"vue_x",
       "source":"client_name",
       "platform":"desktop",
       "name":"orderConfirmation",
       "action":"pageView",
       "non_interaction":"true",
       "metadata":{
          "account_id":"86a4c9b0-c27f-4a2d-ba7e-f53848da8894",
          "region":"us-east-1",
          "env":"prod",
          "currency":"USD",
          "page_type":"oc",
          "order_id":"378829558",
          "product_list":[
             {
                "price":"19",
                "quantity":"1",
                "product_id":"2019000100027007"
             },
             {
                "price":"99",
                "quantity":"1",
                "product_id":"2019000100022951"
             }
          ]
       },
       "_journey_metadata":{
          "audience_id":"1",
          "page_id":"1600",
          "experience_id":"374",
          "journey_id":"450"
       }
    }
 },
  url: '{{base_url}}/events/track'
};

export const event5 = {
  headers: {
    'content-Type': 'application/json'
  },
  body: {
    "data":{
       "api_key":"9ed6bd6a23db7dd422893e167",
       "mad_uuid":"2921651f-8ed9-4480-8c40-1021ddb38cdf",
       "user_id":"user_abc",
       "url":"https://example-site.com/product/beige-fanny-pack-33941",
       "referrer":"",
       "medium":"vue_x",
       "source":"client_name",
       "platform":"desktop",
       "name":"recommendationView",
       "action":"pageView",
       "non_interaction":"true",
       "metadata":{
          "account_id":"c17c8af3-e92f-42e7-ba3a-5b316bc14690",
          "region":"us-east-1",
          "env":"prod",
          "currency":"USD",
          "page_type":"pdp",
          "product_list":[
             {
                "product_id":"2019000100030423",
                "price":"79.00"
             }
          ],
          "module_id":"1645",
          "module_name":"Similar Module",
          "module_behaviour":"inline",
          "template_type":"simple-carousel",
          "recos_served":16
       },
       "_journey_metadata":{
          "audience_id":"1",
          "page_id":"2132",
          "experience_id":"1719",
          "journey_id":"855"
       }
    }
 },
  url: '{{base_url}}/events/track'
};

export const event6 = {
  headers: {
    'content-Type': 'application/json'
  },
  body: {
    "data":{
       "api_key":"9ed6bd6a23db7dd422893e167",
       "mad_uuid":"2921651f-8ed9-4480-8c40-1021ddb38c90",
       "user_id":"user_abc",
       "url":"https://example-site.com/product/beige-fanny-pack-33941",
       "referrer":"",
       "medium":"vue_x",
       "source":"client_name",
       "platform":"desktop",
       "name":"recommendedProductView",
       "action":"click",
       "non_interaction":"false",
       "metadata":{
          "account_id":"c17c8af3-e92f-42e7-ba3a-5b316bc14589",
          "region":"us-east-1",
          "env":"prod",
          "currency":"USD",
          "page_type":"pdp",
          "product_list":[
             {
                "product_id":"2018000100019623",
                "price":39
             }
          ],
          "module_id":"1645",
          "module_name":"Similar Module",
          "template_type":"simple-carousel",
          "module_behaviour":"inline",
          "strategy_id":"1578",
          "referrer_product":{
             "product_id":"2019000100030423"
          },
          "pos_of_reco":1
       },
       "_journey_metadata":{
          "audience_id":"1",
          "page_id":"2132",
          "experience_id":"1719",
          "journey_id":"855"
       }
    }
 },
  url: '{{base_url}}/events/track'
};

export const event7 = {
  headers: {
    'content-Type': 'application/json'
  },
  body: {
    "data":{
       "api_key":"9ed6bd6a23db7dd422893e167",
       "mad_uuid":"2921651f-8ed9-4480-8c40-1021ddb38cb7",
       "user_id":"user_abc",
       "url":"https://example-site.com/product/blue-geometric-print-bohemian-a-line-dress-39848",
       "referrer":"https://example-site.com/shop/dresses-12",
       "medium":"vue_x",
       "source":"client_name",
       "platform":"desktop",
       "name":"rightSwipe",
       "action":"click",
       "non_interaction":"false",
       "metadata":{
          "account_id":"c17c8af3-e92f-42e7-ba3a-5b316bc14390",
          "region":"us-east-1",
          "env":"prod",
          "currency":"USD",
          "page_type":"pdp",
          "product_list":[
             {
                "product_id":"2021000100037146",
                "price":"39.00"
             }
          ],
          "module_id":"1645",
          "module_name":"Similar Module",
          "template_type":"simple-carousel",
          "module_behaviour":"inline"
       },
       "_journey_metadata":{
          "page_id":"2132",
          "journey_id":"855",
          "experience_id":"1719",
          "audience_id":"1"
       }
    }
 },
  url: '{{base_url}}/events/track'
}
;

export const event8 = {
  headers: {
    'content-Type': 'application/json'
  },
  body: {
    "data":{
       "api_key":"9ed6bd6a23db7dd422893e156",
       "mad_uuid":"2921651f-8ed9-4480-8c40-1021ddb38fc6",
       "user_id":"user_abc",
       "url":"https://example-site.com/collections/shoes",
       "referrer":"https://example-site.com",
       "medium":"vue_x",
       "source":"client_name",
       "platform":"desktop",
       "name":"pageView",
       "action":"pageView",
       "non_interaction":"true",
       "metadata":{
          "account_id":"c17c8af3-e92f-42e7-ba3a-5b316bc14679",
          "region":"us-east-1",
          "env":"prod",
          "currency":"USD",
          "category":"Dresses",
          "order_by":{
             "field":"relevance",
             "order":"desc"
          },
          "filters":[
             {
                "field":"available",
                "type":"exact",
                "value":"true"
             }
          ],
          "page_type":"cat"
       },
       "_journey_metadata":{
          "audience_id":"1",
          "page_id":"2132",
          "experience_id":"1719",
          "journey_id":"855"
       }
    }
 },
  url: '{{base_url}}/events/track'
};

export const event9 = {
  headers: {
    'content-Type': 'application/json'
  },
  body: {
    "data":{
       "api_key":"9ed6bd6a23db7dd422893e156",
       "mad_uuid":"2921651f-8ed9-4480-8c40-1021ddb38fc6",
       "user_id":"user_abc",
       "url":"https://example-site.com/collections/shoes",
       "referrer":"https://example-site.com",
       "medium":"vue_x",
       "source":"client_name",
       "platform":"desktop",
       "name":"recommendationView",
       "action":"pageView",
       "non_interaction":"true",
       "metadata":{
          "account_id":"c17c8af3-e92f-42e7-ba3a-5b316bc14679",
          "region":"us-east-1",
          "env":"prod",
          "currency":"USD",
          "category":"Dresses",
          "order_by":{
             "field":"relevance",
             "order":"desc"
          },
          "filters":[
             {
                "field":"available",
                "type":"exact",
                "value":"true"
             }
          ],
          "page_type":"cat",
          "module_id": "1645",
          "module_name": "Personalized Listing",
          "module_behaviour": "inline",
          "template_type": "simple-grid",
          "recos_served": 50
       },
       "_journey_metadata":{
          "audience_id":"1",
          "page_id":"2132",
          "experience_id":"1719",
          "journey_id":"855"
       }
    }
 },
  url: '{{base_url}}/events/track'
};

export const event10 = {
  headers: {
    'content-Type': 'application/json'
  },
  body: {
    "data":{
       "api_key":"9ed6bd6a23db7dd422893e156",
       "mad_uuid":"2921651f-8ed9-4480-8c40-1021ddb38fc6",
       "user_id":"user_abc",
       "url":"https://example-site.com/collections/shoes",
       "referrer":"https://example-site.com",
       "medium":"vue_x",
       "source":"client_name",
       "platform":"desktop",
       "name":"recommendedProductView",
       "action":"click",
       "non_interaction":"false",
       "metadata":{
          "account_id":"c17c8af3-e92f-42e7-ba3a-5b316bc14679",
          "region":"us-east-1",
          "env":"prod",
          "currency":"USD",
          "category":"Dresses",
          "pos_of_reco": 1,
          "order_by":{
             "field":"relevance",
             "order":"desc"
          },
          "filters":[
             {
                "field":"available",
                "type":"exact",
                "value":"true"
             }
          ],
          "page_type":"cat",
          "product_list": [
            {
             "product_id": "2018000100019623",
             "price": 39
            }
           ],
          "module_id": "1645",
          "module_name": "Personalized Listing",
          "module_behaviour": "inline",
          "template_type": "simple-grid",
          "recos_served": 50
       },
       "_journey_metadata":{
          "audience_id":"1",
          "page_id":"2132",
          "experience_id":"1719",
          "journey_id":"855"
       }
    }
 },
  url: '{{base_url}}/events/track'
};

