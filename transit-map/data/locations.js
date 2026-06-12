// Add your locations here.
// Fields: name (string), category (string), lat (number), lng (number), notes (optional string)
// Categories: restaurant, coffee, park, theatre, bar, museum, library, shop, other
const LOCATIONS_DATA = [

  // ── CAPITOL HILL (Capitol Hill Station) ─────────────────────────────────
  {
    "name": "Victrola Coffee Roasters",
    "category": "coffee",
    "lat": 47.6186,
    "lng": -122.3204,
    "notes": "Classic Capitol Hill roaster on Pine St"
  },
  {
    "name": "Lighthouse Coffee Roasters",
    "category": "coffee",
    "lat": 47.6194,
    "lng": -122.3209,
    "notes": "Light roasts, good pour-overs"
  },
  {
    "name": "Espresso Vivace",
    "category": "coffee",
    "lat": 47.6233,
    "lng": -122.3201,
    "notes": "Iconic Seattle espresso bar, Broadway location"
  },
  {
    "name": "Analog Coffee",
    "category": "coffee",
    "lat": 47.6156,
    "lng": -122.3194,
    "notes": "Cozy neighborhood cafe on Summit Ave E"
  },
  {
    "name": "Spinasse",
    "category": "restaurant",
    "lat": 47.6211,
    "lng": -122.3157,
    "notes": "Handmade pasta, one of Seattle's best Italian spots"
  },
  {
    "name": "Poppy",
    "category": "restaurant",
    "lat": 47.6231,
    "lng": -122.3199,
    "notes": "Inventive thali-style dinners on Broadway E"
  },
  {
    "name": "SIFF Cinema Egyptian",
    "category": "theatre",
    "lat": 47.6181,
    "lng": -122.3213,
    "notes": "Historic Capitol Hill cinema, host of SIFF"
  },
  {
    "name": "Cal Anderson Park",
    "category": "park",
    "lat": 47.6173,
    "lng": -122.3196,
    "notes": "Neighborhood park with reservoir and lawn"
  },
  {
    "name": "Volunteer Park",
    "category": "park",
    "lat": 47.6306,
    "lng": -122.3141,
    "notes": "Water tower views and the Asian Art Museum"
  },
  {
    "name": "Capitol Hill Branch Library",
    "category": "library",
    "lat": 47.6213,
    "lng": -122.3133,
    "notes": "Neighborhood branch on Harvard Ave E"
  },
  {
    "name": "Elliott Bay Book Company",
    "category": "shop",
    "lat": 47.6162,
    "lng": -122.3183,
    "notes": "Seattle's beloved independent bookstore"
  },
  {
    "name": "Ada's Technical Books",
    "category": "shop",
    "lat": 47.6208,
    "lng": -122.3149,
    "notes": "Tech and science books plus a cafe on 15th Ave E"
  },

  // ── U DISTRICT (U District & University of Washington Stations) ──────────
  {
    "name": "Cafe Allegro",
    "category": "coffee",
    "lat": 47.6601,
    "lng": -122.3143,
    "notes": "Seattle's oldest espresso bar, tucked in a U District alley"
  },
  {
    "name": "Zoka Coffee",
    "category": "coffee",
    "lat": 47.6589,
    "lng": -122.3149,
    "notes": "Serious roaster with a big, comfortable cafe"
  },
  {
    "name": "Thai Tom",
    "category": "restaurant",
    "lat": 47.6598,
    "lng": -122.3131,
    "notes": "Tiny, legendary Thai counter on University Way"
  },
  {
    "name": "Musashi's",
    "category": "restaurant",
    "lat": 47.6614,
    "lng": -122.3197,
    "notes": "No-frills sushi in the U District"
  },
  {
    "name": "Din Tai Fung",
    "category": "restaurant",
    "lat": 47.6524,
    "lng": -122.3041,
    "notes": "Soup dumplings at University Village"
  },
  {
    "name": "Neptune Theatre",
    "category": "theatre",
    "lat": 47.6617,
    "lng": -122.3143,
    "notes": "Restored 1921 cinema and live music venue on 45th St"
  },
  {
    "name": "Grand Illusion Cinema",
    "category": "theatre",
    "lat": 47.6614,
    "lng": -122.3138,
    "notes": "Tiny indie theater near U District"
  },
  {
    "name": "Gas Works Park",
    "category": "park",
    "lat": 47.6456,
    "lng": -122.3345,
    "notes": "Former gasification plant turned park with sweeping lake views"
  },
  {
    "name": "Ravenna Park",
    "category": "park",
    "lat": 47.6779,
    "lng": -122.3006,
    "notes": "Wooded ravine park north of the U District"
  },
  {
    "name": "Burke Museum",
    "category": "museum",
    "lat": 47.6601,
    "lng": -122.3130,
    "notes": "Washington's state natural history and culture museum, on UW campus"
  },
  {
    "name": "Henry Art Gallery",
    "category": "museum",
    "lat": 47.6558,
    "lng": -122.3101,
    "notes": "Contemporary art museum on the west edge of UW campus"
  },
  {
    "name": "UW Suzzallo Library",
    "category": "library",
    "lat": 47.6558,
    "lng": -122.3086,
    "notes": "Gothic cathedral-style research library at the heart of UW campus"
  },
  {
    "name": "University Book Store",
    "category": "shop",
    "lat": 47.6585,
    "lng": -122.3131,
    "notes": "The Ave's full-service academic bookstore"
  },

  // ── DOWNTOWN (Westlake, University Street, Pioneer Square) ───────────────
  {
    "name": "Anchorhead Coffee",
    "category": "coffee",
    "lat": 47.6071,
    "lng": -122.3362,
    "notes": "Downtown espresso bar on 2nd Ave"
  },
  {
    "name": "Elm Coffee Roasters",
    "category": "coffee",
    "lat": 47.6040,
    "lng": -122.3375,
    "notes": "Precise, minimalist espresso bar in Pioneer Square"
  },
  {
    "name": "Matt's in the Market",
    "category": "restaurant",
    "lat": 47.6082,
    "lng": -122.341,
    "notes": "Pike Place lunch spot with great views"
  },
  {
    "name": "Pike Place Chowder",
    "category": "restaurant",
    "lat": 47.6089,
    "lng": -122.3416,
    "notes": "Award-winning chowder in Pike Place Market"
  },
  {
    "name": "Taylor Shellfish Farms",
    "category": "restaurant",
    "lat": 47.6016,
    "lng": -122.3327,
    "notes": "Oysters and fresh shellfish in Pioneer Square"
  },
  {
    "name": "5th Avenue Theatre",
    "category": "theatre",
    "lat": 47.6088,
    "lng": -122.3355,
    "notes": "Stunning 1926 Chinese-inspired Broadway-style house"
  },
  {
    "name": "Moore Theatre",
    "category": "theatre",
    "lat": 47.6123,
    "lng": -122.3410,
    "notes": "Seattle's oldest theatre, opened 1907"
  },
  {
    "name": "Paramount Theatre",
    "category": "theatre",
    "lat": 47.6109,
    "lng": -122.3338,
    "notes": "Historic 1928 venue on Pine St"
  },
  {
    "name": "Benaroya Hall",
    "category": "theatre",
    "lat": 47.6072,
    "lng": -122.3348,
    "notes": "Home of the Seattle Symphony"
  },
  {
    "name": "AMC Pacific Place",
    "category": "theatre",
    "lat": 47.6123,
    "lng": -122.3354,
    "notes": "Multiplex cinema in Pacific Place mall"
  },
  {
    "name": "Westlake Park",
    "category": "park",
    "lat": 47.6103,
    "lng": -122.3374,
    "notes": "Downtown public square at 4th and Pine"
  },
  {
    "name": "Olympic Sculpture Park",
    "category": "park",
    "lat": 47.6162,
    "lng": -122.3549,
    "notes": "SAM's outdoor sculpture park on the waterfront"
  },
  {
    "name": "Victor Steinbrueck Park",
    "category": "park",
    "lat": 47.6095,
    "lng": -122.3420,
    "notes": "Small park at the north end of Pike Place Market"
  },
  {
    "name": "Waterfall Garden Park",
    "category": "park",
    "lat": 47.6018,
    "lng": -122.3328,
    "notes": "Pocket park with a 22-foot waterfall in Pioneer Square"
  },
  {
    "name": "Occidental Square",
    "category": "park",
    "lat": 47.5997,
    "lng": -122.3322,
    "notes": "Cobblestone plaza in Pioneer Square"
  },
  {
    "name": "Seattle Art Museum",
    "category": "museum",
    "lat": 47.6072,
    "lng": -122.3387,
    "notes": "SAM's main downtown location at 1st Ave and University St"
  },
  {
    "name": "Klondike Gold Rush National Historical Park",
    "category": "museum",
    "lat": 47.6013,
    "lng": -122.3342,
    "notes": "Free NPS museum in Pioneer Square covering the 1897 Gold Rush"
  },
  {
    "name": "Seattle Central Library",
    "category": "library",
    "lat": 47.6065,
    "lng": -122.3325,
    "notes": "Rem Koolhaas-designed central branch, 10 stories of glass and steel"
  },
  {
    "name": "Left Bank Books",
    "category": "shop",
    "lat": 47.6090,
    "lng": -122.3406,
    "notes": "Radical and independent titles inside Pike Place Market"
  },

  // ── INTERNATIONAL DISTRICT / CHINATOWN ──────────────────────────────────
  {
    "name": "Pho Bac Súp Shop",
    "category": "restaurant",
    "lat": 47.5987,
    "lng": -122.324,
    "notes": "ID pho institution"
  },
  {
    "name": "Tamarind Tree",
    "category": "restaurant",
    "lat": 47.5984,
    "lng": -122.3253,
    "notes": "Vietnamese, International District"
  },
  {
    "name": "Jade Garden",
    "category": "restaurant",
    "lat": 47.5993,
    "lng": -122.3221,
    "notes": "Beloved dim sum spot, expect a wait on weekends"
  },
  {
    "name": "Hing Hay Park",
    "category": "park",
    "lat": 47.5988,
    "lng": -122.3253,
    "notes": "Community gathering space in the heart of the ID"
  },
  {
    "name": "Wing Luke Museum",
    "category": "museum",
    "lat": 47.5975,
    "lng": -122.3237,
    "notes": "Smithsonian-affiliated museum of Asian Pacific American experience"
  },
  {
    "name": "International District Branch Library",
    "category": "library",
    "lat": 47.5982,
    "lng": -122.3215,
    "notes": "Branch library at 8th Ave S in the ID"
  },

  // ── JUDKINS PARK (Line 2) ────────────────────────────────────────────────
  {
    "name": "Judkins Park",
    "category": "park",
    "lat": 47.5924,
    "lng": -122.3042,
    "notes": "Neighborhood park with sports fields and open lawn"
  },
  {
    "name": "Cafe Weekend",
    "category": "coffee",
    "lat": 47.594653,
    "lng": -122.309396
  },
  {
    "name": "Anna's Cafe",
    "category": "coffee",
    "lat": 47.586325,
    "lng": -122.295009
  },
  {
    "name": "QED Espresso",
    "category": "coffee",
    "lat": 47.590163,
    "lng": -122.292321
  },
  {
    "name": "Temple Pastries",
    "category": "coffee",
    "lat": 47.599421,
    "lng": -122.298689
  },
  {
    "name": "The Dream Cafe",
    "category": "coffee",
    "lat": 47.589646,
    "lng": -122.2923
  },
  {
    "name": "Cheeky Cafe",
    "category": "coffee",
    "lat": 47.59932,
    "lng": -122.310179
  },
  {
    "name": "Broadcast Coffee",
    "category": "coffee",
    "lat": 47.601801,
    "lng": -122.306585
  },
  {
    "name": "Hello Em Viet Coffee & Roastery",
    "category": "coffee",
    "lat": 47.597504,
    "lng": -122.315608
  },

  // ── BEACON HILL ──────────────────────────────────────────────────────────
  {
    "name": "Jefferson Park",
    "category": "park",
    "lat": 47.5657,
    "lng": -122.3099,
    "notes": "Large Beacon Hill park with reservoir, golf, and city views"
  },
  {
    "name": "Beacon Hill Branch Library",
    "category": "library",
    "lat": 47.5681,
    "lng": -122.3118,
    "notes": "Beacon Ave S branch"
  },

  // ── COLUMBIA CITY / RAINIER BEACH ────────────────────────────────────────
  {
    "name": "Genesee Park",
    "category": "park",
    "lat": 47.5644,
    "lng": -122.2831,
    "notes": "Rainier Valley park on the shore of Lake Washington"
  },
  {
    "name": "Tutta Bella",
    "category": "restaurant",
    "lat": 47.5607,
    "lng": -122.2905,
    "notes": "Neapolitan pizza in Columbia City"
  },
  {
    "name": "Geraldine's Counter",
    "category": "restaurant",
    "lat": 47.5598,
    "lng": -122.2902,
    "notes": "Beloved Columbia City diner"
  },
  {
    "name": "Seward Park",
    "category": "park",
    "lat": 47.5517,
    "lng": -122.2643,
    "notes": "Old-growth forest peninsula on Lake Washington"
  },
  {
    "name": "Columbia City Branch Library",
    "category": "library",
    "lat": 47.5601,
    "lng": -122.2891,
    "notes": "Rainier Ave S branch in Columbia City"
  },

  // ── NORTHGATE ────────────────────────────────────────────────────────────
  {
    "name": "Northgate Park",
    "category": "park",
    "lat": 47.7013,
    "lng": -122.3280,
    "notes": "Neighborhood park near Northgate Station"
  },
  {
    "name": "AMC Northgate",
    "category": "theatre",
    "lat": 47.7047,
    "lng": -122.3218,
    "notes": "Multiplex cinema at Northgate"
  },
  {
    "name": "Northgate Branch Library",
    "category": "library",
    "lat": 47.7062,
    "lng": -122.3208,
    "notes": "5th Ave NE branch near Northgate Station"
  },
  {
    "name": "Third Place Books Ravenna",
    "category": "shop",
    "lat": 47.6771,
    "lng": -122.3017,
    "notes": "Community bookstore with events, near Roosevelt station"
  },

  // ── BELLEVUE DOWNTOWN (Line 2) ───────────────────────────────────────────
  {
    "name": "Caffe Ladro",
    "category": "coffee",
    "lat": 47.6163,
    "lng": -122.2017,
    "notes": "Seattle-based cafe chain, Bellevue downtown location"
  },
  {
    "name": "Facing East",
    "category": "restaurant",
    "lat": 47.6147,
    "lng": -122.1991,
    "notes": "Taiwanese comfort food, perennially packed"
  },
  {
    "name": "Bellevue Downtown Park",
    "category": "park",
    "lat": 47.6136,
    "lng": -122.2001,
    "notes": "Large urban park with a circular canal and waterfall"
  },
  {
    "name": "Lincoln Square Cinemas",
    "category": "theatre",
    "lat": 47.6168,
    "lng": -122.2003,
    "notes": "Large Bellevue multiplex in Lincoln Square"
  },
  {
    "name": "Bellevue Arts Museum",
    "category": "museum",
    "lat": 47.6165,
    "lng": -122.2009,
    "notes": "Craft, design, and art museum in downtown Bellevue"
  },
  {
    "name": "Bellevue Main Library",
    "category": "library",
    "lat": 47.6148,
    "lng": -122.2028,
    "notes": "King County main branch in downtown Bellevue"
  },
  {
    "name": "Barnes & Noble Bellevue",
    "category": "shop",
    "lat": 47.6165,
    "lng": -122.2010,
    "notes": "Bellevue Square location"
  }
];
