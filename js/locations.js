/**
 * Locations data for Saint Laurent Boulevard Story Map
 * Each location has coordinates, title, description, image, and historical info
 */

const locations = [
    {
        id: 1,
        name: "Chinatown Gate",
        lat: 45.5078,
        lng: -73.5607,
        address: "Intersection of Saint-Laurent Blvd & René-Lévesque Blvd",
        period: "1960s - Present",
        shortDescription: "The iconic gateway to Montreal's vibrant Chinatown district.",
        fullDescription: "The Chinatown Gate (Paifang) marks the entrance to Montreal's Chinatown, one of the oldest in North America. Chinese immigrants began settling in this area in the 1860s, working on the transcontinental railway and in laundries. The elaborate traditional gate, with its green-tiled roof and red columns, was a gift from the People's Republic of China, symbolizing the lasting cultural ties between Montreal and the Chinese community. Today, the area bustles with restaurants, grocery stores, and shops selling traditional goods.",
        image: "images/chinatown.jpg",
        imageCredit: "Photo: Montreal Chinatown",
        hasPlaceholderImage: true
    },
    {
        id: 2,
        name: "Monument-National",
        lat: 45.5101,
        lng: -73.5623,
        address: "1182 Saint-Laurent Blvd",
        period: "1893 - Present",
        shortDescription: "Historic theatre that played a crucial role in French-Canadian culture.",
        fullDescription: "Built in 1893 by the Saint-Jean-Baptiste Society, the Monument-National was designed as a bastion of French-Canadian cultural identity. The magnificent building has hosted everything from vaudeville shows to political rallies. It was here that some of the most important moments in Quebec theatre history took place. The venue saw the beginnings of burlesque in Montreal and hosted legendary performers. After falling into disrepair, it was restored in the 1990s and now serves as the main theatre for the National Theatre School of Canada.",
        image: "images/monument-national.jpg",
        imageCredit: "Photo: Monument-National Theatre",
        hasPlaceholderImage: true
    },
    {
        id: 3,
        name: "Schwartz's Deli",
        lat: 45.5175,
        lng: -73.5770,
        address: "3895 Saint-Laurent Blvd",
        period: "1928 - Present",
        shortDescription: "Montreal's legendary smoked meat institution.",
        fullDescription: "Reuben Schwartz, a Jewish immigrant from Romania, opened this delicatessen in 1928, introducing Montreal to his family's smoked meat recipe. The meat is prepared using a secret blend of spices and smoked on-site for up to ten days. Schwartz's became an instant legend, attracting everyone from factory workers to celebrities. The tiny restaurant, with its simple décor and communal seating, has barely changed in nearly a century. It remains a pilgrimage site for food lovers worldwide and represents the rich Jewish heritage of the Boulevard Saint-Laurent corridor.",
        image: "images/schwartzs.jpg",
        imageCredit: "Photo: Schwartz's Delicatessen",
        hasPlaceholderImage: true
    },
    {
        id: 4,
        name: "The Main Immigrant Corridor",
        lat: 45.5130,
        lng: -73.5645,
        address: "Saint-Laurent Blvd (between Sherbrooke & Mount Royal)",
        period: "1880s - 1950s",
        shortDescription: "The historic gateway for waves of immigrants to Montreal.",
        fullDescription: "Boulevard Saint-Laurent served as the primary settlement corridor for immigrants arriving in Montreal from the late 19th to mid-20th century. Known simply as 'The Main,' this street was where Jewish, Italian, Portuguese, Greek, and Chinese communities established their first footholds in the city. Immigrants would often arrive with little more than the clothes on their backs, finding affordable housing and establishing businesses along the boulevard. The street became a vibrant tapestry of languages, foods, and traditions. Many families started here before dispersing to other neighborhoods as they prospered.",
        image: "images/immigrant-corridor.jpg",
        imageCredit: "Photo: Historical Saint-Laurent",
        hasPlaceholderImage: true
    },
    {
        id: 5,
        name: "St. Lawrence Warehouse District",
        lat: 45.5053,
        lng: -73.5582,
        address: "Old Montreal / Saint-Laurent near Old Port",
        period: "1800s - Early 1900s",
        shortDescription: "The commercial heart where The Main began.",
        fullDescription: "Near the Old Port, Boulevard Saint-Laurent's southern end was once dominated by warehouses and commercial enterprises. This was where goods from ships were stored and distributed throughout the city. The imposing stone buildings that still stand today housed textile companies, importers, and wholesale businesses. As the street developed northward, this area remained its commercial anchor. Many of these warehouses have since been converted to lofts, galleries, and restaurants, but their sturdy 19th-century architecture tells the story of Montreal's industrial heritage.",
        image: "images/warehouse-district.jpg",
        imageCredit: "Photo: St. Lawrence Warehouse District",
        hasPlaceholderImage: true
    },
    {
        id: 6,
        name: "Mile End Artists Quarter",
        lat: 45.5235,
        lng: -73.5953,
        address: "Saint-Laurent Blvd at Mile End",
        period: "1990s - Present",
        shortDescription: "The creative heart of contemporary Montreal.",
        fullDescription: "The Mile End section of Saint-Laurent has transformed from a working-class industrial area to one of North America's most vibrant creative districts. Former garment factories now house recording studios, tech startups, and artist lofts. This neighborhood gave birth to bands like Arcade Fire and has been home to writers, filmmakers, and artists from around the world. The mix of Portuguese bakeries, hipster cafés, bagel shops, and vintage boutiques creates a unique atmosphere. Murals and street art adorn many buildings, making the area an open-air gallery celebrating Montreal's artistic spirit.",
        image: "images/mile-end.jpg",
        imageCredit: "Photo: Mile End Creative District",
        hasPlaceholderImage: true
    },
    {
        id: 7,
        name: "St-Viateur Bagel",
        lat: 45.5228,
        lng: -73.5971,
        address: "263 St Viateur St W (just off Saint-Laurent)",
        period: "1957 - Present",
        shortDescription: "Home of the famous Montreal-style bagel.",
        fullDescription: "Just steps from Saint-Laurent, St-Viateur Bagel has been producing hand-rolled, wood-fired bagels since 1957. The Montreal bagel, smaller and sweeter than its New York cousin, is boiled in honey water before being baked in a wood-burning oven. The bakery operates 24 hours a day, and the aroma of fresh bagels wafts through the neighborhood at all hours. Founded by Myer Lewkowicz, a Holocaust survivor, the bakery represents the enduring legacy of the Jewish community on The Main. The friendly rivalry between St-Viateur and nearby Fairmount Bagel is a beloved Montreal tradition.",
        image: "images/st-viateur.jpg",
        imageCredit: "Photo: St-Viateur Bagel Shop",
        hasPlaceholderImage: true
    },
    {
        id: 8,
        name: "Portuguese Quarter",
        lat: 45.5195,
        lng: -73.5825,
        address: "Saint-Laurent Blvd near Rachel St",
        period: "1950s - Present",
        shortDescription: "The heart of Montreal's Portuguese community.",
        fullDescription: "Starting in the 1950s, Portuguese immigrants began settling in the area around Saint-Laurent and Rachel streets, transforming it into Little Portugal. Attracted by jobs in the textile and construction industries, they brought their traditions, language, and cuisine. Today, the neighborhood is known for its charcoal chicken restaurants (churrasqueiras), bakeries selling pastéis de nata, and the annual Portuguese festival. Many homes still feature the distinctive blue and white azulejo tiles. The Portuguese community has made lasting contributions to Montreal's cultural mosaic while maintaining strong ties to their homeland.",
        image: "images/portuguese-quarter.jpg",
        imageCredit: "Photo: Portuguese Quarter",
        hasPlaceholderImage: true
    }
];
