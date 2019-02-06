export const DATA_LOADED = 'DATA_LOADED'
export const ALL_DATA_LOADED = 'ALL_DATA_LOADED'
export const FOCUS_PLACE = 'FOCUS_PLACE'
export const UPDATE_FILTER = 'UPDATE_FILTER'

export const ALL_YEARS = 'all years'
export const LOCAL_AUTHORITIES = [
  'Adur',
  'Allerdale',
  'Amber Valley',
  'Arun',
  'Ashfield',
  'Ashford',
  'Aylesbury Vale',
  'Babergh',
  'Barking and Dagenham',
  'Barnet',
  'Barnsley',
  'Barrow-in-Furness',
  'Basildon',
  'Basingstoke and Deane',
  'Bassetlaw',
  'Bath and North East Somerset',
  'Bedford',
  'Bexley',
  'Birmingham',
  'Blaby',
  'Blackburn with Darwen',
  'Blackpool',
  'Bolsover',
  'Bolton',
  'Boston',
  'Bournemouth',
  'Bracknell Forest',
  'Bradford',
  'Braintree',
  'Breckland',
  'Brent',
  'Brentwood',
  'Brighton and Hove',
  'Bristol, City of',
  'Broadland',
  'Bromley',
  'Bromsgrove',
  'Broxbourne',
  'Broxtowe',
  'Buckinghamshire',
  'Burnley',
  'Bury',
  'Calderdale',
  'Cambridge',
  'Cambridgeshire',
  'Camden',
  'Cannock Chase',
  'Canterbury',
  'Carlisle',
  'Castle Point',
  'Central Bedfordshire',
  'Charnwood',
  'Chelmsford',
  'Cheltenham',
  'Cherwell',
  'Cheshire East',
  'Cheshire West and Chester',
  'Chesterfield',
  'Chichester',
  'Chiltern',
  'Chorley',
  'Christchurch',
  'City of London',
  'Colchester',
  'Copeland',
  'Corby',
  'Cornwall',
  'Cotswold',
  'County Durham',
  'Coventry',
  'Craven',
  'Crawley',
  'Croydon',
  'Cumbria',
  'Dacorum',
  'Darlington',
  'Dartford',
  'Daventry',
  'Derby',
  'Derbyshire',
  'Derbyshire Dales',
  'Devon',
  'Doncaster',
  'Dorset',
  'Dover',
  'Dudley',
  'Ealing',
  'East Cambridgeshire',
  'East Devon',
  'East Dorset',
  'East Hampshire',
  'East Hertfordshire',
  'East Lindsey',
  'East Northamptonshire',
  'East Riding of Yorkshire',
  'East Staffordshire',
  'East Sussex',
  'Eastbourne',
  'Eastleigh',
  'Eden',
  'Elmbridge',
  'Enfield',
  'Epping Forest',
  'Epsom and Ewell',
  'Erewash',
  'Essex',
  'Exeter',
  'Fareham',
  'Fenland',
  'Folkestone and Hythe',
  'Forest Heath',
  'Forest of Dean',
  'Fylde',
  'Gateshead',
  'Gedling',
  'Gloucester',
  'Gloucestershire',
  'Gosport',
  'Gravesham',
  'Great Yarmouth',
  'Greenwich',
  'Guildford',
  'Hackney',
  'Halton',
  'Hambleton',
  'Hammersmith and Fulham',
  'Hampshire',
  'Harborough',
  'Haringey',
  'Harlow',
  'Harrogate',
  'Harrow',
  'Hart',
  'Hartlepool',
  'Hastings',
  'Havant',
  'Havering',
  'Herefordshire, County of',
  'Hertfordshire',
  'Hertsmere',
  'High Peak',
  'Hillingdon',
  'Hinckley and Bosworth',
  'Horsham',
  'Hounslow',
  'Huntingdonshire',
  'Hyndburn',
  'Ipswich',
  'Isle of Wight',
  'Isles of Scilly',
  'Islington',
  'Kensington and Chelsea',
  'Kent',
  'Kettering',
  'King\'s Lynn and West Norfolk',
  'Kingston upon Hull, City of',
  'Kingston upon Thames',
  'Kirklees',
  'Knowsley',
  'Lambeth',
  'Lancashire',
  'Lancaster',
  'Leeds',
  'Leicester',
  'Leicestershire',
  'Lewes',
  'Lewisham',
  'Lichfield',
  'Lincoln',
  'Lincolnshire',
  'Liverpool',
  'Luton',
  'Maidstone',
  'Maldon',
  'Malvern Hills',
  'Manchester',
  'Mansfield',
  'Medway',
  'Melton',
  'Mendip',
  'Merton',
  'Mid Devon',
  'Mid Suffolk',
  'Mid Sussex',
  'Middlesbrough',
  'Milton Keynes',
  'Mole Valley',
  'New Forest',
  'Newark and Sherwood',
  'Newcastle upon Tyne',
  'Newcastle-under-Lyme',
  'Newham',
  'Norfolk',
  'North Devon',
  'North Dorset',
  'North East Derbyshire',
  'North East Lincolnshire',
  'North Hertfordshire',
  'North Kesteven',
  'North Lincolnshire',
  'North Norfolk',
  'North Somerset',
  'North Tyneside',
  'North Warwickshire',
  'North West Leicestershire',
  'North Yorkshire',
  'Northampton',
  'Northamptonshire',
  'Northumberland',
  'Norwich',
  'Nottingham',
  'Nottinghamshire',
  'Nuneaton and Bedworth',
  'Oadby and Wigston',
  'Oldham',
  'Oxford',
  'Oxfordshire',
  'Pendle',
  'Peterborough',
  'Plymouth',
  'Poole',
  'Portsmouth',
  'Preston',
  'Purbeck',
  'Reading',
  'Redbridge',
  'Redcar and Cleveland',
  'Redditch',
  'Reigate and Banstead',
  'Ribble Valley',
  'Richmond upon Thames',
  'Richmondshire',
  'Rochdale',
  'Rochford',
  'Rossendale',
  'Rother',
  'Rotherham',
  'Rugby',
  'Runnymede',
  'Rushcliffe',
  'Rushmoor',
  'Rutland',
  'Ryedale',
  'Salford',
  'Sandwell',
  'Scarborough',
  'Sedgemoor',
  'Sefton',
  'Selby',
  'Sevenoaks',
  'Sheffield',
  'Shropshire',
  'Slough',
  'Solihull',
  'Somerset',
  'South Bucks',
  'South Cambridgeshire',
  'South Derbyshire',
  'South Gloucestershire',
  'South Hams',
  'South Holland',
  'South Kesteven',
  'South Lakeland',
  'South Norfolk',
  'South Northamptonshire',
  'South Oxfordshire',
  'South Ribble',
  'South Somerset',
  'South Staffordshire',
  'South Tyneside',
  'Southampton',
  'Southend-on-Sea',
  'Southwark',
  'Spelthorne',
  'St Albans',
  'St Edmundsbury',
  'St. Helens',
  'Stafford',
  'Staffordshire',
  'Staffordshire Moorlands',
  'Stevenage',
  'Stockport',
  'Stockton-on-Tees',
  'Stoke-on-Trent',
  'Stratford-on-Avon',
  'Stroud',
  'Suffolk',
  'Suffolk Coastal',
  'Sunderland',
  'Surrey',
  'Surrey Heath',
  'Sutton',
  'Swale',
  'Swindon',
  'Tameside',
  'Tamworth',
  'Tandridge',
  'Taunton Deane',
  'Teignbridge',
  'Telford and Wrekin',
  'Tendring',
  'Test Valley',
  'Tewkesbury',
  'Thanet',
  'Three Rivers',
  'Thurrock',
  'Tonbridge and Malling',
  'Torbay',
  'Torridge',
  'Tower Hamlets',
  'Trafford',
  'Tunbridge Wells',
  'Uttlesford',
  'Vale of White Horse',
  'Wakefield',
  'Walsall',
  'Waltham Forest',
  'Wandsworth',
  'Warrington',
  'Warwick',
  'Warwickshire',
  'Watford',
  'Waveney',
  'Waverley',
  'Wealden',
  'Wellingborough',
  'Welwyn Hatfield',
  'West Berkshire',
  'West Devon',
  'West Dorset',
  'West Lancashire',
  'West Lindsey',
  'West Oxfordshire',
  'West Somerset',
  'West Sussex',
  'Westminster',
  'Weymouth and Portland',
  'Wigan',
  'Wiltshire',
  'Winchester',
  'Windsor and Maidenhead',
  'Wirral',
  'Woking',
  'Wokingham',
  'Wolverhampton',
  'Worcester',
  'Worcestershire',
  'Worthing',
  'Wychavon',
  'Wycombe',
  'Wyre',
  'Wyre Forest',
  'York'
]

