

const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    owner: "667d2502febd1d2282beb676",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259] // Example coordinates for Malibu, CA
    },
    category: "Rooms"
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    owner: "667d2502febd1d2282beb676",
    geometry: {
      type: "Point",
      coordinates: [-74.0060, 40.7128] // Example coordinates for New York City, NY
    },
    category: "Rooms"
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    owner: "667d2502febd1d2282beb676",
    geometry: {
      type: "Point",
      coordinates: [-106.837, 39.1911] // Example coordinates for Aspen, CO
    },
    category: "Mountain"
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    owner: "667d2502febd1d2282beb676",
    geometry: {
      type: "Point",
      coordinates: [11.2558, 43.7696] // Example coordinates for Florence, Italy
    },
    category: "Rooms"
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    owner: "667d2502febd1d2282beb676",
    geometry: {
      type: "Point",
      coordinates: [-122.6765, 45.5231] // Example coordinates for Portland, OR
    },
    category: "Camping"
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    owner: "667d2502febd1d2282beb676",
    geometry: {
      type: "Point",
      coordinates: [-86.8515, 21.1619] // Example coordinates for Cancun, Mexico
    },
    category: "Rooms"
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    owner: "667d2502febd1d2282beb676",
    geometry: {
      type: "Point",
      coordinates: [-119.9772, 39.0968] // Example coordinates for Lake Tahoe, NV
    },
    category: "Mountain"
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    owner: "667d2502febd1d2282beb676",
    geometry: {
      type: "Point",
      coordinates: [-118.2437, 34.0522] // Example coordinates for Los Angeles, CA
    },
    category: "Rooms"
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    owner: "667d2502febd1d2282beb676",
    geometry: {
      type: "Point",
      coordinates: [7.2286, 46.0965] // Example coordinates for Verbier, Switzerland
    },
    category: "Mountain"
  },
  {
    title: "Tropical Bungalow with Private Pool",
    description:
      "Enjoy your own private pool in this tropical bungalow, just steps from the beach. Perfect for a romantic getaway.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFuZ2Fsb3d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    owner: "667d2502febd1d2282beb676",
    geometry: {
      type: "Point",
      coordinates: [115.1889, -8.4095] // Example coordinates for Bali, Indonesia
    },
    category: "Rooms"
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of a safari while staying in this luxurious lodge, located in the heart of the Serengeti.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2FmYXJpJTIwbG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Serengeti",
    country: "Tanzania",
    owner: "667d2502febd1d2282beb676",
    geometry: {
      type: "Point",
      coordinates: [34.8233, -2.3333] // Example coordinates for Serengeti, Tanzania
    },
    category: "Camping"
  },
  {
    title: "Mountain Retreat",
    description: "A cozy mountain retreat.",
    image: {
      url: "https://unsplash.com/photos/beautiful-romantic-old-town-of-rovinj-in-croatia-the-coastal-city-of-rovinj-situated-in-istria-peninsula-east-of-croatia-europe-it-is-the-famous-travel-destination-of-croatia-LLKh53PJv8o",
      filename: "mountain1.jpg"
    },
    price: 1500,
    location: "Manali",
    country: "India",
    reviews: [],
    owner: '667d2502febd1d2282beb676',
    geometry: {
      type: 'Point',
      coordinates: [77.1887, 32.2432]
    },
    category: "Boats"
  },
  {
    title: "Luxury Room",
    description: "A luxurious room with sea view.",
    image: {
      url: "https://unsplash.com/photos/architectural-photography-of-brown-concrete-buildings-PGC4ePHMywM",
      filename: "room1.jpg"
    },
    price: 2500,
    location: "Mumbai",
    country: "India",
    reviews: [],
    owner: '667d2502febd1d2282beb676',
    geometry: {
      type: 'Point',
      coordinates: [72.8777, 19.0760]
    },
    category: "Boats"
  },
  {
    title: "Trading Hub",
    description: "A trading hub in the city center.",
    image: {
      url: "https://images.unsplash.com/photo-1719582116435-a11ea85bb2f9?q=80&w=1943&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "trading1.jpg"
    },
    price: 3000,
    location: "Delhi",
    country: "India",
    reviews: [],
    owner: '667d2502febd1d2282beb676',
    geometry: {
      type: 'Point',
      coordinates: [77.1025, 28.7041]
    },
    category: "Trending"
  },
  {
    title: "Camping Site",
    description: "A beautiful camping site in the wilderness.",
    image: {
      url: "https://images.unsplash.com/photo-1659483952077-71e8d80f07bf?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "camping1.jpg"
    },
    price: 1000,
    location: "Rishikesh",
    country: "India",
    reviews: [],
    owner: '667d2502febd1d2282beb676',
    geometry: {
      type: 'Point',
      coordinates: [78.2676, 30.0869]
    },
    category: "Trending"
  },
  {
    title: "Farm Stay",
    description: "A peaceful stay on a farm.",
    image: {
      url: "https://unsplash.com/photos/an-aerial-view-of-a-small-town-near-a-river-7pWSK-tGbEE",
      filename: "farm1.jpg"
    },
    price: 1200,
    location: "Punjab",
    country: "India",
    reviews: [],
    owner: '667d2502febd1d2282beb676',
    geometry: {
      type: 'Point',
      coordinates: [75.3412, 31.1471]
    },
    category: "Trending"
  },
  {
    title: "City Apartment",
    description: "A modern apartment in the city.",
    image: {
      url: "https://media.istockphoto.com/id/516921822/photo/abandoned-military-antenna-in-arctic.jpg?s=1024x1024&w=is&k=20&c=qF15UICplJ1zk6NgWkjuMuB0FilHyqo3XtNXWKC63dw=",
      filename: "apartment1.jpg"
    },
    price: 2000,
    location: "Bangalore",
    country: "India",
    reviews: [],
    owner: '667d2502febd1d2282beb676',
    geometry: {
      type: 'Point',
      coordinates: [77.5946, 12.9716]
    },
    category: "Arctic"
  },
  {
    title: "Beach House",
    description: "A relaxing house by the beach.",
    image: {
      url: "https://www.istockphoto.com/photo/abbandoned-coal-mine-number-2-at-spitzbergen-svalbard-gm1160909990-317916517?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2FArctic-building&utm_medium=affiliate&utm_source=unsplash&utm_term=Arctic+building%3A%3A%3A",
      filename: "beach1.jpg"
    },
    price: 3500,
    location: "Goa",
    country: "India",
    reviews: [],
    owner: '667d2502febd1d2282beb676',
    geometry: {
      type: 'Point',
      coordinates: [73.8567, 15.2993]
    },
    category: "Arctic"
  },
  {
    title: "Desert Camp",
    description: "Experience the desert in a comfortable camp.",
    image: {
      url: "https://unsplash.com/photos/brown-wooden-shed-near-lake-surrounded-by-snow-Uwrf8NGAxc8",
      filename: "desert1.jpg"
    },
    price: 1800,
    location: "Jaisalmer",
    country: "India",
    reviews: [],
    owner: '667d2502febd1d2282beb676',
    geometry: {
      type: 'Point',
      coordinates: [70.9168, 26.9157]
    },
    category: "Arctic"
  },
  {
    title: "Hill Cottage",
    description: "A charming cottage in the hills.",
    image: {
      url: "https://unsplash.com/photos/brown-concrete-building-near-swimming-pool-during-daytime-uLw_xhpDjsM",
      filename: "hill1.jpg"
    },
    price: 2200,
    location: "Shimla",
    country: "India",
    reviews: [],
    owner: '667d2502febd1d2282beb676',
    geometry: {
      type: 'Point',
      coordinates: [77.1734, 31.1048]
    },
    category: "Amazing Pool"
  },
  {
    title: "Luxury Villa",
    description: "A luxurious villa with private pool.",
    image: {
      url: "https://unsplash.com/photos/a-large-swimming-pool-with-chairs-and-umbrellas-eZ-m9WlR0rc",
      filename: "villa1.jpg"
    },
    price: 5000,
    location: "Udaipur",
    country: "India",
    reviews: [],
    owner: '667d2502febd1d2282beb676',
    geometry: {
      type: 'Point',
      coordinates: [73.7125, 24.5854]
    },
    category: "Amazing Pool"
  },
  {
    title: "Backwater Houseboat",
    description: "Stay in a houseboat on the backwaters.",
    image: {
      url: "https://unsplash.com/photos/white-and-blue-boat-on-dock-during-daytime-17Uzj_wc-TY",
      filename: "houseboat1.jpg"
    },
    price: 4000,
    location: "Alleppey",
    country: "India",
    reviews: [],
    owner: '667d2502febd1d2282beb676',
    geometry: {
      type: 'Point',
      coordinates: [76.3388, 9.4981]
    },
    category: "Amazing Pool"
  },
  {
    title: "Jungle Resort",
    description: "A resort in the middle of a jungle.",
    image: {
      url: "https://unsplash.com/photos/white-concrete-structure-9wXvgLMDetA",
      filename: "jungle1.jpg"
    },
    price: 3000,
    location: "Kerala",
    country: "India",
    reviews: [],
    owner: '667d2502febd1d2282beb676',
    geometry: {
      type: 'Point',
      coordinates: [76.2711, 10.8505]
    },
    category: "Dome"
  },
  {
    title: "Countryside Bungalow",
    description: "A bungalow in the countryside.",
    image: {
      url: "https://www.istockphoto.com/photo/ranakpur-jain-temples-india-gm184655834-17816782?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2FDome&utm_medium=affiliate&utm_source=unsplash&utm_term=Dome%3A%3A%3A",
      filename: "countryside1.jpg"
    },
    price: 2500,
    location: "Tamil Nadu",
    country: "India",
    reviews: [],
    owner: '667d2502febd1d2282beb676',
    geometry: {
      type: 'Point',
      coordinates: [78.6569, 11.1271]
    },
    category: "Dome"
  },
  {
    title: "City Penthouse",
    description: "A penthouse in the city with a great view.",
    image: {
      url: "https://www.istockphoto.com/photo/igloo-tent-house-a-home-stay-with-scenic-beauty-comfort-gm1317580530-404966168?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2FDome&utm_medium=affiliate&utm_source=unsplash&utm_term=Dome%3A%3A%3A",
      filename: "penthouse1.jpg"
    },
    price: 6000,
    location: "Hyderabad",
    country: "India",
    reviews: [],
    owner: '667d2502febd1d2282beb676',
    geometry: {
      type: 'Point',
      coordinates: [78.4867, 17.3850]
    },
    category: "Dome"
  },
  {
    title: "Forest Cabin",
    description: "A cabin in the forest.",
    image: {
      url: "https://www.istockphoto.com/photo/world-landmarks-photo-collage-on-vintage-tes-sepia-textured-background-travel-tourism-gm698902340-129472517?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2FIconic-cities&utm_medium=affiliate&utm_source=unsplash&utm_term=Iconic+cities%3A%3A%3A",
      filename: "forest1.jpg"
    },
    price: 2000,
    location: "Coorg",
    country: "India",
    reviews: [],
    owner: '667d2502febd1d2282beb676',
    geometry: {
      type: 'Point',
      coordinates: [75.7397, 12.3375]
    },
    category: "Iconic cities"
  },
  {
    title: "Mountain View Room",
    description: "A room with a view of the mountains.",
    image: {
      url: "https://unsplash.com/photos/big-ben-london-aLoN4KX1xSA",
      filename: "mountainview1.jpg"
    },
    price: 3500,
    location: "Nainital",
    country: "India",
    reviews: [],
    owner: '667d2502febd1d2282beb676',
    geometry: {
      type: 'Point',
      coordinates: [79.4590, 29.3919]
    },
    category: "Iconic cities"
  },
  {
    title: "Eco Resort",
    description: "An eco-friendly resort.",
    image: {
      url: "https://unsplash.com/photos/curved-road-during-daytime-2smDZopBMso",
      filename: "ecoresort1.jpg"
    },
    price: 4000,
    location: "Andaman",
    country: "India",
    reviews: [],
    owner: '667d2502febd1d2282beb676',
    geometry: {
      type: 'Point',
      coordinates: [92.6586, 11.7401]
    },
    category: "Iconic cities"
  },
  {
    title: "Heritage Home",
    description: "A heritage home with historic charm.",
    image: {
      url: "https://www.istockphoto.com/photo/manhattan-bridge-in-new-york-gm529119424-93223413?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2FIconic-cities&utm_medium=affiliate&utm_source=unsplash&utm_term=Iconic+cities%3A%3A%3A",
      filename: "heritage1.jpg"
    },
    price: 3200,
    location: "Jaipur",
    country: "India",
    reviews: [],
    owner: '667d2502febd1d2282beb676',
    geometry: {
      type: 'Point',
      coordinates: [75.7873, 26.9124]
    },
    category: "Iconic cities"
  },
  {
    title: "Lake House",
    description: "A serene house by the lake.",
    image: {
      url: "https://www.istockphoto.com/photo/amber-fort-and-maota-lake-jaipur-rajasthan-india-gm1135820309-302299849?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2FCastles&utm_medium=affiliate&utm_source=unsplash&utm_term=Castles%3A%3A%3A",
      filename: "lakehouse1.jpg"
    },
    price: 2800,
    location: "Uttarakhand",
    country: "India",
    reviews: [],
    owner: '667d2502febd1d2282beb676',
    geometry: {
      type: 'Point',
      coordinates: [79.3031, 30.0668]
    },
    category: "Castles"
  },
  {
    title: "Farm Cottage",
    description: "A quaint cottage on a farm.",
    image: {
      url: "https://www.istockphoto.com/photo/kilchurn-sunset-gm622204296-108903427?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2FCastles&utm_medium=affiliate&utm_source=unsplash&utm_term=Castles%3A%3A%3A",
      filename: "farmcottage1.jpg"
    },
    price: 2200,
    location: "Himachal Pradesh",
    country: "India",
    reviews: [],
    owner: '667d2502febd1d2282beb676',
    geometry: {
      type: 'Point',
      coordinates: [77.1734, 31.1048]
    },
    category: "Castles"
  },
  {
    title: "Island Villa",
    description: "A private villa on an island.",
    image: {
      url: "https://unsplash.com/photos/castle-surrounded-by-trees-on-mountain-MIOcheoVN40",
      filename: "islandvilla1.jpg"
    },
    price: 5500,
    location: "Lakshadweep",
    country: "India",
    reviews: [],
    owner: '667d2502febd1d2282beb676',
    geometry: {
      type: 'Point',
      coordinates: [72.6417, 10.5667]
    },
    category: "Castles"
  },
  {
    title: "Riverfront House",
    description: "A house with a view of the river.",
    image: {
      url: "https://unsplash.com/photos/architectural-photography-of-castle-BPq4vt-pW_E",
      filename: "riverhouse1.jpg"
    },
    price: 3000,
    location: "Kerala",
    country: "India",
    reviews: [],
    owner: '667d2502febd1d2282beb676',
    geometry: {
      type: 'Point',
      coordinates: [76.2711, 10.8505]
    },
    category: "Castles"
  },
  {
    title: "Snowy Cabin",
    description: "A cabin in the snowy mountains.",
    image: {
      url: "https://unsplash.com/photos/architectural-photography-of-gray-castle-jAThVtHa34A",
      filename: "snowycabin1.jpg"
    },
    price: 2000,
    location: "Kashmir",
    country: "India",
    reviews: [],
    owner: '667d2502febd1d2282beb676',
    geometry: {
      type: 'Point',
      coordinates: [74.7973, 34.0837]
    },
    category: "Castles"
  }
];

module.exports = { data: sampleListings };





