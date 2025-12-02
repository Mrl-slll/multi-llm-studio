// UW-Madison Student Life Knowledge Base
module.exports = {
  study_rooms: {
    booking: {
      system: "LibCal - library.wisc.edu",
      how_to: [
        "1. Go to library.wisc.edu in your web browser",
        "2. Click on 'Spaces & Technology' in the top navigation menu",
        "3. Select the library you want to book at (Memorial, College, Helen C. White)",
        "4. Choose your desired date and time slot",
        "5. Browse available rooms (filters available by capacity, equipment)",
        "6. Click on an available room to see details",
        "7. Click 'Book It' and log in with your UW NetID and password",
        "8. Confirm your booking and check your email for confirmation"
      ],
      tips: [
        "Book 24-48 hours in advance - popular times (evenings, weekends) fill up quickly",
        "Bring your WisCard for check-in at the library desk",
        "Cancellations must be done at least 2 hours before your booking time",
        "Most rooms have a 2-hour time limit per booking (you can rebook if available)",
        "Some rooms require 2+ people for group study room designation",
        "Check room features: whiteboards, monitors, power outlets, capacity",
        "Set reminders for your booking - no-shows may affect future booking privileges"
      ],
      locations: {
        "Memorial Library": {
          address: "728 State St, Madison, WI 53706",
          rooms: "Individual and group study rooms on floors 3-8",
          capacity: "1-8 people depending on room",
          features: "Whiteboards, wall-mounted monitors, quiet environment, natural light",
          hours: "Varies by semester; 24/7 during finals week",
          best_for: "Quiet individual study or small group projects"
        },
        
        "College Library": {
          address: "Engineering Hall, 1415 Engineering Dr",
          rooms: "Group study rooms and collaboration spaces",
          capacity: "4-8 people",
          features: "Large whiteboards, monitors, power outlets, near engineering campus",
          hours: "Typically 8 AM - 10 PM weekdays, limited weekends",
          best_for: "Engineering/CS group projects, near engineering classes"
        },
        
        "Helen C. White Library": {
          address: "Memorial Library basement, 728 State St",
          rooms: "Mix of individual and group rooms",
          capacity: "1-6 people",
          features: "Writing center nearby, quiet study areas, group collaboration spaces",
          hours: "Varies by semester",
          best_for: "Writing assignments, humanities group work, central location"
        },
        
        "Steenbock Library": {
          address: "550 Babcock Dr (Agricultural campus)",
          rooms: "Study rooms and quiet floors",
          capacity: "Varies",
          features: "Less crowded than Memorial, science-focused resources",
          best_for: "Agriculture, biology, environmental science students"
        }
      }
    },
    
    walk_in_spaces: [
      "Memorial Library quiet floors 4-8 (no booking needed)",
      "Union South study lounges and table areas",
      "Engineering Hall open study spaces",
      "Grainger Hall (business students)",
      "Discovery Building collaboration spaces",
      "Dejope Residence Hall study areas",
      "Nicholas Recreation Center quiet study room"
    ]
  },
  
  dining: {
    meal_plans: {
      overview: "Required for all dorm residents, optional for off-campus students",
      types: {
        "Unlimited": {
          description: "All-you-can-eat access to dining halls",
          cost: "~$2,400-2,600 per semester",
          includes: "Unlimited swipes at dining halls, some guest meals",
          best_for: "Students who eat 3 meals daily, live in dorms",
          dining_halls: ["Gordon's", "Four Lakes Market", "Carson's Market", "Rheta's Market"]
        },
        
        "Flex Meals": {
          description: "Set number of meal swipes per week (typically 6-12)",
          cost: "Varies based on plan ($1,800-2,200 per semester)",
          includes: "Weekly swipes + dining dollars for retail locations",
          best_for: "Lighter eaters, students who cook sometimes",
          flexibility: "Unused swipes don't roll over week-to-week"
        },
        
        "Dining Dollars": {
          description: "Declining balance account for campus dining",
          works_at: "Retail locations (Gordon's, Unions, cafes)",
          optional: "Can add to any meal plan or purchase standalone"
        }
      },
      
      dining_halls: {
        "Gordon's Dining & Event Center": {
          location: "770 W. Dayton St (Southeast dorms)",
          serves: "Witte, Sellery, Ogg, Smith residents",
          features: ["Multiple stations", "Allergen-friendly options", "Late night hours"],
          hours: "Breakfast 7-11 AM, Lunch 11 AM-2 PM, Dinner 4:30-8 PM (varies)",
          popular_items: "Gordon's burgers, stir-fry station, salad bar"
        },
        
        "Four Lakes Market": {
          location: "1301 Dayton St (Lakeshore area)",
          serves: "Lakeshore dorm residents",
          features: ["Smaller, quieter", "Lake views", "Made-to-order stations"],
          hours: "Similar to Gordon's",
          vibe: "More relaxed than Gordon's"
        },
        
        "Carson's Market": {
          location: "Inside Witte/Sellery complex",
          serves: "Southeast residents",
          features: ["Convenience store items", "Grab-and-go meals"],
          hours: "Extended hours for snacks"
        },
        
        "Rheta's Market": {
          location: "Chadbourne Hall",
          serves: "Chadbourne residents primarily",
          features: "Smaller dining hall, home-style meals"
        }
      }
    },
    
    retail_dining: {
      "Memorial Union (Der Rathskeller, Daily Scoop, Peet's Coffee)": {
        location: "800 Langdon St (on the lake)",
        payment: "Wiscard, dining dollars, cash, credit",
        hours: "Varies by venue (7 AM - 10 PM typical)",
        popular: "Rathskeller bratwurst, Daily Scoop ice cream",
        reservations: "Walk-in for casual dining; call for large groups"
      },
      
      "Union South (Ginger Root, Carte, Badger Market)": {
        location: "1308 W. Dayton St",
        payment: "Same as Memorial Union",
        hours: "7 AM - 9 PM typical",
        popular: "Ginger Root Asian food, Carte pizza and grill",
        study_friendly: "Yes - many students eat and study here"
      }
    },
    
    tips: [
      "Flex meals work at retail locations (Gordon's To-Go, Union venues)",
      "Dining halls have extensive allergen-friendly and vegetarian/vegan options",
      "Check dining.wisc.edu for current hours - they vary by semester and breaks",
      "Guest meals allow you to bring visitors to dining halls ($10-15 per guest)",
      "Late-night Gordon's (9 PM - midnight) is great for studying and light snacks",
      "Wiscard works everywhere on campus - load money onto it for convenience"
    ]
  },
  
  gym: {
    facilities: {
      "Nicholas Recreation Center (Nick)": {
        location: "1820 University Ave (near Camp Randall)",
        features: [
          "Large weight room with free weights and machines",
          "Extensive cardio equipment (treadmills, ellipticals, bikes, rowers)",
          "Basketball and volleyball courts",
          "Indoor track",
          "35-foot climbing wall",
          "Pool (lap swim and leisure)",
          "Group fitness studios",
          "Locker rooms with showers",
          "Equipment checkout (basketballs, yoga mats, etc.)"
        ],
        hours: "6 AM - 11 PM weekdays, 8 AM - 10 PM weekends (varies by semester)",
        busiest_times: "4 PM - 8 PM weekdays",
        best_times: "Early morning (6-8 AM) or late (9-11 PM) for less crowding"
      },
      
      "Southeast Rec Facility (SERF)": {
        location: "1685 Highland Ave (near southeast dorms)",
        features: [
          "Weight room with free weights and machines",
          "Cardio machines",
          "Multi-purpose courts (basketball, volleyball, badminton)",
          "Spin studio",
          "Locker rooms",
          "Smaller than Nick but less crowded"
        ],
        hours: "6 AM - 11 PM typical",
        best_for: "Students living in southeast dorms, less intimidating than Nick"
      },
      
      "Bakke Recreation & Wellbeing Center": {
        location: "1402 University Bay Dr (Lakeshore area)",
        features: [
          "Smaller facility focused on Lakeshore residents",
          "Weight room",
          "Cardio equipment",
          "Group fitness classes",
          "Wellness programming"
        ],
        hours: "6 AM - 10 PM typical",
        best_for: "Lakeshore residents, quieter atmosphere"
      },
      
      "Natatorium": {
        location: "2000 Observatory Dr",
        features: [
          "Olympic-size pool",
          "Diving well",
          "Lap swim",
          "Recreation swim times"
        ],
        hours: "Check recsports.wisc.edu for pool schedule"
      }
    },
    
    access: {
      cost: "Free with tuition (included in segregated fees)",
      required: "Bring WisCard for entry - scanned at front desk",
      guests: "Day passes available for non-students ($10-15)",
      towel_rental: "Available at Nick for small fee"
    },
    
    group_fitness: {
      types: [
        "Yoga (various levels)",
        "Spin/Cycling",
        "HIIT (High-Intensity Interval Training)",
        "Zumba",
        "Pilates",
        "Barre",
        "Boxing/Kickboxing",
        "Dance fitness"
      ],
      registration: "RecWell app or recsports.wisc.edu",
      cost: "Most classes free with WisCard, some specialty classes have small fees ($20-40/semester)",
      schedule: "Published each semester; popular classes fill quickly"
    },
    
    intramural_sports: {
      available: [
        "Basketball", "Soccer", "Volleyball", "Flag football",
        "Softball", "Ultimate frisbee", "Dodgeball", "Broomball"
      ],
      how_to_join: "Form a team or join as free agent via IMLeagues website",
      competitive_levels: "Recreational and competitive divisions",
      seasons: "Fall, winter, spring seasons"
    },
    
    tips: [
      "Download RecWell app for class schedules, facility hours, and wait times",
      "Bring lock for lockers - don't leave valuables unsecured",
      "Nick can be crowded 4-8 PM weekdays - go early morning or late night",
      "Take advantage of free group fitness classes - great way to try new activities",
      "Personal training is available through RecWell for a fee",
      "Outdoor equipment rentals available (kayaks, paddleboards, camping gear)"
    ]
  },
  
  health: {
    "University Health Services (UHS)": {
      location: "333 East Campus Mall",
      services: [
        "Primary care (cold, flu, infections, chronic conditions)",
        "Mental health counseling (CAPS)",
        "Physical therapy",
        "Travel clinic (vaccines, prescriptions for study abroad)",
        "Immunizations (flu shots, COVID, meningitis, etc.)",
        "Sexual health services",
        "Nutrition counseling",
        "On-site pharmacy",
        "Lab services (blood work, testing)",
        "X-rays and imaging"
      ],
      hours: "8 AM - 5 PM Monday-Friday (urgent care walk-in hours vary)",
      appointments: "Call 608-265-5600 or use MyUHS patient portal online",
      cost: "Covered by student health fee; some services may have additional costs",
      urgent_care: "Walk-in urgent care available during business hours for acute illnesses/injuries",
      after_hours: "24/7 nurse line: 608-265-5600",
      insurance: "UHS accepts most insurance; international students have UW-specific plan"
    },
    
    "CAPS (Counseling & Psychiatric Services)": {
      description: "Mental health services within UHS",
      services: [
        "Individual counseling (short-term therapy)",
        "Group therapy sessions",
        "Psychiatric consultation and medication management",
        "Crisis intervention",
        "Workshops on stress, anxiety, time management, etc.",
        "Let's Talk drop-in consultations (informal, no appointment needed)"
      ],
      access: "Call UHS main number (608-265-5600) to schedule initial consultation",
      emergency: "24/7 crisis line: 608-265-5600 (option 9)",
      sessions: "Typically 6-8 free sessions per academic year",
      waitlist: "Can be long, especially in fall semester - call early if needed",
      tips: [
        "Sessions are completely confidential (HIPAA protected)",
        "Don't wait for crisis - early intervention is better",
        "Let's Talk is great for quick questions or decision-making",
        "CAPS can provide referrals to off-campus therapists if needed",
        "Teletherapy options available"
      ]
    },
    
    "Urgent & Emergency": {
      "UHS Urgent Care": {
        when_to_use: "Non-life-threatening but need same-day care (sprains, minor cuts, fever, UTI)",
        hours: "Limited walk-in hours weekdays",
        call_first: "608-265-5600 to check availability"
      },
      
      "UW Hospital Emergency": {
        location: "600 Highland Ave",
        when_to_use: "Life-threatening emergencies only (chest pain, severe bleeding, loss of consciousness)",
        call_911: "For true emergencies, always call 911",
        cost: "Emergency room is expensive - use UHS urgent care when possible"
      },
      
      "Crisis Resources": {
        "UWPD (911 on campus)": "Campus police for emergencies",
        "SafeWalk (608-262-5000)": "Free walking escort service at night",
        "National Suicide Prevention Lifeline": "988 or 1-800-273-8255"
      }
    },
    
    tips: [
      "Schedule physical or check-up early in semester before flu season",
      "Get flu shot at UHS (free, usually available September-November)",
      "Use MyUHS portal to message providers, view test results, request refills",
      "Pharmacy at UHS is convenient but check prices vs. off-campus pharmacies",
      "Mental health resources are confidential - seeking help won't affect academics",
      "UHS can provide medical excuse notes if you miss class due to illness"
    ]
  },
  
  housing: {
    on_campus: {
      "Southeast Neighborhood (Witte, Sellery)": {
        location: "Near Camp Randall Stadium, Kohl Center",
        vibe: "Social, lively, party-oriented, great for making friends",
        dining: "Carson's Market, Gordon's nearby",
        distance_to_classes: "Close to engineering, business, humanities",
        room_types: "Mostly doubles, some triples",
        pros: ["Very social", "Close to athletic facilities", "Easy to make friends"],
        cons: ["Can be loud", "Strict alcohol policies", "Less privacy"],
        best_for: "Freshmen wanting social experience, athletes, extroverts"
      },
      
      "Lakeshore Neighborhood (Adams, Tripp, Phillips, Kronshage, Sullivan, Bradley, etc.)": {
        location: "On Lake Mendota shore, north campus",
        vibe: "Quieter, more studious, beautiful lake views, more upperclassmen",
        dining: "Four Lakes Market",
        distance_to_classes: "Farther from engineering, closer to sciences/social sciences",
        room_types: "Mix of singles, doubles; some suite-style",
        pros: ["Peaceful", "Beautiful scenery", "Good for studying", "More mature crowd"],
        cons: ["Farther from central campus", "Less social than southeast", "Bus dependent"],
        best_for: "Students who value quiet, nature-lovers, upperclassmen, introverts"
      },
      
      "Southwest Neighborhood (Ogg, Smith)": {
        location: "Between southeast and lakeshore",
        vibe: "Middle ground - social but not as loud as southeast",
        dining: "Four Lakes Market, Gordon's accessible",
        room_types: "Doubles, some singles",
        pros: ["Balanced social/academic atmosphere", "Near humanities buildings"],
        cons: ["Farther from engineering and sciences"],
        best_for: "Students wanting balance between social and quiet"
      },
      
      "Private Certified Housing (Statesider, Lucky, etc.)": {
        description: "Privately owned but UW-affiliated dorms",
        features: "Apartment-style, more independence, still university oversight",
        cost: "Often more expensive than residence halls",
        best_for: "Upperclassmen, students wanting more independence"
      }
    },
    
    off_campus: {
      popular_areas: {
        "State Street Area": {
          location: "Downtown, between campus and Capitol",
          pros: "Walking distance to campus, restaurants, nightlife, no bus needed",
          cons: "Expensive ($800-1,200/month per person), noisy, less parking",
          best_for: "Upperclassmen, those who want city life"
        },
        
        "Langdon Street / Mifflin Street": {
          location: "Near Lakeshore, north of campus",
          pros: "Close to campus, popular with upperclassmen, near lake",
          cons: "Party area, expensive ($700-1,000/month), parking difficult",
          best_for: "Upperclassmen, Greek life, social students"
        },
        
        "Regent Street / Monroe Street": {
          location: "South/southwest of campus",
          pros: "Quieter, near hospitals/medical school, bus routes",
          cons: "Farther from central campus, more grad students",
          best_for: "Grad students, quiet undergrads, healthcare students"
        },
        
        "Further West (Eagle Heights, West Campus)": {
          location: "West of campus",
          pros: "Cheaper ($500-700/month), quieter, more space",
          cons: "Need bus or bike, farther from campus social scene",
          best_for: "Budget-conscious students, families, grad students"
        }
      },
      
      tips: [
        "Start searching in January-February for fall leases - prime locations go fast",
        "Use UW Off-Campus Housing database (offcampushousing.wisc.edu)",
        "Read lease carefully - many are 12-month, not 9-month academic year",
        "Sublets are common in summer - plan ahead if staying",
        "Budget for utilities (heat, electric, internet) - often not included in rent",
        "Madison has tenant rights - know them (tenantresourcecenter.org)",
        "Tour apartments in person if possible - photos can be misleading",
        "Get renter's insurance - it's cheap ($10-15/month) and protects belongings",
        "Beware of scams - never send money without seeing apartment"
      ]
    }
  },
  
  transportation: {
    "Madison Metro": {
      cost: "Free with WisCard for UW students",
      routes: "80+ bus routes covering Madison and campus",
      frequency: "Major routes run every 10-15 minutes during peak times",
      apps: "Transit app, Google Maps for real-time tracking",
      popular_routes: {
        "80": "Main campus route (Memorial Union to Eagle Heights)",
        "81": "Quick campus loop",
        "82": "Campus to Hilldale and West Towne Mall"
      },
      tips: [
        "Night Owl routes run late on weekends (till 3 AM Friday/Saturday)",
        "Real-time bus tracking available on Transit app",
        "Buses can be crowded during class change times (10 AM, 1 PM, 3 PM)",
        "Winter: buses may run late due to weather - plan extra time",
        "Show WisCard to driver when boarding"
      ]
    },
    
    biking: {
      infrastructure: "Extensive bike lane network and paths around campus and lakes",
      storage: "Bike racks at every building; indoor parking in some dorms",
      winter: "Many students bike year-round - studded tires recommended for ice",
      safety: [
        "Lock your bike well - theft is common (use U-lock, not cable lock)",
        "Lock frame and both wheels to rack",
        "Register bike with UWPD (free, helps recovery if stolen)",
        "Use lights at night (required by law)",
        "Wear helmet (recommended)"
      ],
      repair: "Budget Bicycle Center offers student discounts; campus bike repair stations available",
      rental: "BCycle bike share program for short trips"
    },
    
    "Campus Shuttles": {
      description: "Free shuttles connecting different parts of campus",
      routes: "80, 81, 82 (Madison Metro routes dedicated to campus)",
      frequency: "Every 10-15 minutes during day",
      best_for: "Getting between Lakeshore and central campus, especially in winter"
    },
    
    "Car": {
      parking: "Limited and expensive on campus ($900+/year for permit)",
      necessary: "Not necessary - most students don't have cars",
      alternatives: "Zipcar car-sharing for occasional trips",
      street_parking: "Free in some areas but requires moving for street cleaning"
    }
  },
  
  campus_life: {
    "Student Organizations": {
      count: "Over 900 registered student organizations",
      types: ["Academic/professional", "Cultural", "Religious", "Service", "Special interest", "Greek life"],
      how_to_find: "Attend Student Org Fair during first week of fall semester; search win.wisc.edu",
      tips: "Join 2-3 orgs to balance involvement without overcommitting"
    },
    
    "Events & Activities": {
      "Wisconsin Union Events": "Concerts, movies, comedy shows, outdoor activities",
      "Camp Randall": "Badger football games (student tickets available)",
      "Kohl Center": "Basketball, hockey games, concerts",
      "Memorial Union Terrace": "Live music, food, lake views (iconic UW experience)",
      "Outdoor UW": "Trips, equipment rental, outdoor adventures"
    }
  }
};
