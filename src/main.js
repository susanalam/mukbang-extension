
//   client.search({
  //     term: 'restaurant',
  //     location: 'San Francisco, CA',
  //     limit: 10
  //   }).then(response => {
    //     console.log(response.jsonBody.businesses);
    //   }).catch(e => {
      //     console.log(e);
      //   });
      
      // const yelp = require('yelp-fusion');
      // const apiKey = 'ic79KDMtLm1Tk9-7iz7c6V2o4Z6kvLkieWsW7b4tjoLKF1D72w9pDfIVjYwsLPd3ULhYuw8I8JcluHJROsl4eh3vzm9XE7gNeHL4SJ5yBPtornbFgNL6KVAkgPwqZnYx' //Add your key here
      // // const client = yelp.client(apiKey);
      // const options = {method: 'GET', headers: {Accept: 'application/json', Authorization: `Bearer ${apiKey}`, 'x-requested-with': 'xmlhttprequest',
      // 'Access-Control-Allow-Origin': '*'}};
      // let businessSelected = 'Pho Broadway'
      // // let businessDetails = {};
      // fetch('https://api.yelp.com/v3/businesses/search?location=Denver&term=pho&radius=39000&sort_by=best_match&limit=50', options)
      // .then((response) => response.json())
      //   .then(response => { 
      //     //console.log(data)
      
      //     for(let i = 0; i< response.businesses.length; i++) {
        //         if(response.businesses[i].location) {
          //             if(response.businesses[i].name == `${businessSelected}`) {
            //                 console.log(response.businesses[i])
            //                 // businessDetails = response.businesses[i];
            //             }}
            //             // console.log(response.businesses[i].location, 'response', response.businesses)
            //         }})
            //     // }
            //     // })
            // .catch(err => console.error(err));
const fetchedSampleData = [
  {id: 'HZyoqy1uucNjbq_UHSjOGw',
    alias: 'pho-haus-denver-3',
    name: 'Pho Haus',
    image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/G1y2lRDowCXFpAfcDXdlGg/o.jpg',
    is_closed: false,
    url: 'https://www.yelp.com/biz/pho-haus-denver-3?adjust_creative=bn2RuWjhbq4U9aEmIBeUag&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=bn2RuWjhbq4U9aEmIBeUag',
    review_count: 567,
    rating: 4.6,
    price: '$$',
    location:  '540 E Alameda Ave, Denver, CO 80209',
    phone: '+17207109918',
    display_phone: '(720) 710-9918',
    attributes: {
      business_temp_closed: null,
      menu_url: 'https://www.phohausco.com/menus',
      open24_hours: null,
      waitlist_reservation: true
      } 
  },
  {
    id: 'Sf-MtupitmHLB3I8qOlULg',
    alias: 'pho-95-denver',
    name: 'Pho 95',
    image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/R88NT5mzfv5Sp-jtJBPcRw/o.jpg',
    is_closed: false,
    url: 'https://www.yelp.com/biz/pho-95-denver?adjust_creative=bn2RuWjhbq4U9aEmIBeUag&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=bn2RuWjhbq4U9aEmIBeUag',
    review_count: 1492,
    rating: 4.3,
    price: '$$',
    location: '1401 S Federal Blvd, Denver, CO 80219',
    phone: '+13039363322',
    display_phone: '(303) 936-3322',
    attributes: {
      business_temp_closed: null,
      menu_url: 'https://pho95noodlehouse.com/wp-content/uploads/2020/06/Pho95menu-denver.pdf',
      open24_hours: null,
      waitlist_reservation: null
    }
  }, 
  {
    id: 'fMQ9whnje3oJ0Y8j_E1yWQ',
    alias: 'pho-and-bar-denver',
    name: 'Pho and Bar',
    image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/7BvpPrVvsuky_2Kixah45Q/o.jpg',
    is_closed: false,
    url: 'https://www.yelp.com/biz/pho-and-bar-denver?adjust_creative=bn2RuWjhbq4U9aEmIBeUag&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=bn2RuWjhbq4U9aEmIBeUag',
    review_count: 242,
    rating: 4.6,
    transactions: [ 'pickup', 'delivery' ],
    price: '$$',
    location: '1600 E 17th Ave, Denver, CO 80218',
    phone: '+17205357274',
    display_phone: '(720) 535-7274',
    attributes: {
      business_temp_closed: null,
      menu_url: 'https://www.phoandbar.com/menus',
      open24_hours: null,
      waitlist_reservation: true
    }
  },
  {
    id: 'x42G-X9plb_nH9aDFQ7VfQ',
    alias: 'pho-duy-denver-4',
    name: 'Pho Duy',
    image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/bFtkcYOrBjWyXToiIdqjJQ/o.jpg',
    is_closed: false,
    url: 'https://www.yelp.com/biz/pho-duy-denver-4?adjust_creative=bn2RuWjhbq4U9aEmIBeUag&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=bn2RuWjhbq4U9aEmIBeUag',
    review_count: 370,
    categories: [ { alias: 'vietnamese', title: 'Vietnamese' } ],
    rating: 4,
    transactions: [ 'delivery', 'pickup' ],
    price: '$$',
    location: '925 S Federal Blvd, Denver, CO 80219',
    phone: '+13039371609',
    display_phone: '(303) 937-1609',
    attributes: {
      business_temp_closed: null,
      menu_url: 'http://orderphoduyvietnamese.com/menu',
      open24_hours: null,
      waitlist_reservation: null
    }
  },
  {
    id: 'ul1rwVnfy268RQNxlaKHkQ',
    alias: 'what-the-pho-denver-3',
    name: 'What the Pho',
    image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/U_P3Wc3g9Jg1vsvjsaPvPw/o.jpg',
    is_closed: false,
    url: 'https://www.yelp.com/biz/what-the-pho-denver-3?adjust_creative=bn2RuWjhbq4U9aEmIBeUag&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=bn2RuWjhbq4U9aEmIBeUag',
    review_count: 528,
    categories: [
      { alias: 'vietnamese', title: 'Vietnamese' },
      { alias: 'soup', title: 'Soup' }
    ],
    rating: 4.1,
    coordinates: { latitude: 39.74653, longitude: -104.99366 },
    transactions: [ 'pickup', 'delivery' ],
    price: '$$',
    location: '1600 Champa St, Ste 110, Denver, CO 80202',
    phone: '+13036232702',
    display_phone: '(303) 623-2702',
    distance: 2341.3020805655133,
    attributes: {
      business_temp_closed: null,
      menu_url: null,
      open24_hours: null,
      waitlist_reservation: null
    }
  },
  {
  id: 'y7OxURprQf-8swlVXHXm6A',
  alias: 'pho-broadway-littleton-2',
  name: 'Pho Broadway',
  image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/IxtB7a0cEcDSFyGQlE7S3w/o.jpg',
  is_closed: false,
  url: 'https://www.yelp.com/biz/pho-broadway-littleton-2?adjust_creative=bn2RuWjhbq4U9aEmIBeUag&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=bn2RuWjhbq4U9aEmIBeUag',
  review_count: 121,
  categories: [ { alias: 'vietnamese', title: 'Vietnamese' } ],
  rating: 4.7,
  coordinates: { latitude: 39.59598, longitude: -104.98871 },
  transactions: [ 'delivery', 'pickup' ],
  location: '6645 S Broadway, Littleton, CO 80121',
  phone: '+13037976645',
  display_phone: '(303) 797-6645',
  distance: 15590.310690171531,
  attributes: {
    business_temp_closed: null,
    menu_url: 'https://www.phobroadwaylittleton.com/menus',
    open24_hours: null,
    waitlist_reservation: null
  }
}
]
document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const businessName = document.querySelector('#businessName');
  const yelpLink = document.querySelector('#yelpLink');
  const businessAddress = document.querySelector('businessAddress');  
  const rating = document.querySelector('#businessRating');
  const reviewCount = document.querySelector('#businessReviewCount');
  const price = document.querySelector('#businessPricePoint');
}) 
function businessSearch(){
  const businessInput = document.querySelector('#restaurantInput');
  const businessSelected = businessInput.toString();
  for(let i = 0; i< fetchedSampleData.length; i++) {
    if(fetchedSampleData[i].name == `${businessSelected}`) {
       console.log(fetchedSampleData[i])}
       // businessDetails = response.businesses[i];
       businessName.innerText = `Restaurant: ${businessSelected}`;
       yelpLink.innerHTML = `Yelp: ${fetchedSampleData[i].url}`;
       businessAddress.innerHTML = `Address: ${fetchedSampleData[i].location}`       
      }  
} 
 
  // setInterval(
  //   function() {
  //     for(let i = 0; i< fetchedSampleData.length; i++) {
  //       if(fetchedSampleData[i].name == `${businessSelected}`) {
  //          console.log(fetchedSampleData[i])}
  //          // businessDetails = response.businesses[i];
  //       }
  //     })


//   function updateBusinessSelected(event) {
//     let selection = document.getSelection ? document.getSelection().toString() :  document.selection.createRange().toString() ;
//     // businessSelected = body.substring(
//     //   event.target.selectionStart,
//     //   event.target.selectionEnd,
//     businessSelected = selection;
//     // );
//     // businessSelected = selection;
//     business.innerHTML = `Restaurant: ${businessSelected}`;
//   }
//   document.body.addEventListener("selectionchange",updateBusinessSelected);
// });

// let businessSelected = 'Pho Broadway'
// document.addEventListener("selectionchange",event=>{
//   let selection = document.getSelection ? document.getSelection().toString() :  document.selection.createRange().toString() ;
//   console.log(selection);
// })
