# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
User.destroy_all
Restaurant.destroy_all
Tag.destroy_all
Tag_join.destroy_all
Review.destroy_all

tag1 = Tag.create!(tag: "Vegetarian")
tag2 = Tag.create!(tag: "Noodles")
tag3 = Tag.create!(tag: "Burgers")
tag4 = Tag.create!(tag: "Chicken")
tag5 = Tag.create!(tag: "Mexican")
tag6 = Tag.create!(tag: "Fast-food")
tag7 = Tag.create!(tag: "Pizza")
tag8 = Tag.create!(tag: "Italian")
tag9 = Tag.create!(tag: "Chinese")
tag10 = Tag.create!(tag: "Japanese")
tag11 = Tag.create!(tag: "Korean")
tag12 = Tag.create!(tag: "Indian")
tag13 = Tag.create!(tag: "Middle-Eastern")
tag14 = Tag.create!(tag: "Halal")
tag15 = Tag.create!(tag: "Deli")
tag16 = Tag.create!(tag: "Seafood")
tag17 = Tag.create!(tag: "Sandwiches")
tag18 = Tag.create!(tag: "Bar")


user1 = User.create!(email: "demo_user@gmail.com", password: "password", first_name: "David", last_name: "Johnson", zipcode: "10011")

user2 = User.create!(email: "coporate@shill.com", password: "password", first_name: "Larry", last_name: "Potts", zipcode: "10011")

user3 = User.create!(email: "l.northdale@gmail.com", password: "password", first_name: "Leah", last_name: "Northdale", zipcode: "10003")

user4 = User.create!(email: "sexybeast@hotmail.com", password: "password", first_name: "Joe", last_name: "Dayton", zipcode: "10010")

user5 = User.create!(email: "caroline143@yahoo.com", password: "password", first_name: "Caroline", last_name: "Wallace", zipcode: "10001")

user6 = User.create!(email: "aflores@yahoo.com", password: "password", first_name: "Antonio", last_name: "Flores", zipcode: "10003")

restaurant1 = Restaurant.create!(
    name: "Ippudo NY",
    owner_id: user1.id,
    website: "https://www.ippudony.com",
    address: "65 4th Ave, New York, NY 10003",
    coordinates: [40.730943, -73.990295],
    pic_count: 0,
    review_count: 10,
    review_avg: 4,
    phone: "(212) 388-0088",
    cost: "$$",
    about: "Established in 2008.

    IPPUDO started in 1985 with a seating of only ten in the city of Fukuoka. Instantly, it revolutionized the ramen world with its fashionable décor, hospitable service, and delicious bowls of ramen. It appealed to the young and old alike and kick-started a ramen craze that lasted over two decades. Today it has established itself as the market leader in Japan, with more than 70 outlets under the brand. In a fiercely competitive environment where more than 3,500 ramen restaurants come and go each year, IPPUDO has remained at the cutting edge of innovation and quality.",
)


restaurant2 = Restaurant.create!(
    name: "Popeyes Louisiana Kitchen",
    owner_id: user2.id,
    website: "https://www.popeyes.com",
    address: "47 14th St, New York, NY 10011",
    coordinates: [40.737095, -73.995843],
    pic_count: 0,
    review_count: 17,
    review_avg: 3,
    phone: "(212) 206-8405",
    cost: "$",
    about: "none",

)

restaurant3 = Restaurant.create!(
    name: "DORADO Tacos & Quesadillas",
    owner_id: user3.id,
    website: "https://www.doradotacos.com",
    address: "28 E 12th St, New York, NY 10003",
    coordinates: [40.733960, -73.993156],
    pic_count: 0,
    review_count: 7,
    review_avg: 4,
    phone: "(212) 627-0900",
    cost: "$",
    about: "Established in 2012.

    Dorado Tacos was inspired by the tacos in Ensenada, just south of San Diego on the Baja California Peninsula. A mom & pop shop in the Union Square area, Dorado Tacos has been serving NYC fresh, quick tacos for over four years. Our chef driven menu is full of clean favors with options available for our gluten free and vegan guests! Enjoy the best tacos for a great price at Dorado Tacos today!",
   
)

restaurant4 = Restaurant.create!(
    name: "Joe's Pizza",
    owner_id: user3.id,
    website:"https://www.joespizzanyc.com",
    address: "150 E 14th St, New York, NY 10003",
    coordinates: [40.733240, -73.987652],
    pic_count: 0,
    review_count: 27,
    review_avg: 4,
    phone: "(646) 559-4878",
    cost: "$",
    about: "Established in 1975.

    Since 1975, family run for three generations. Joe’s Pizza is widely considered the quintessential slice in New York City.",

)

restaurant5 = Restaurant.create!(
    name: "Taco Bell",
    owner_id: user4.id,
    website: "https://www.tacobell.com",
    address: "18 E 14th St, New York, NY 10003",
    coordinates: [40.735333, -73.992812],
    pic_count: 0,
    review_count: 48,
    review_avg: 3.5,
    phone: "(212) 645-8645",
    cost: "$",
    about: "none",

)

restaurant6 = Restaurant.create!(
    name: "Blossom",
    owner_id: user4.id,
    website: "https://www.blossomnyc.com/chelsea",
    address: "187 9th Ave, New York, NY 10011",
    coordinates: [40.745518, -74.002338],
    pic_count: 0,
    review_count: 29,
    review_avg: 4,
    phone: "(212) 627-1144",
    cost: "$$$",
    about: "Blossom, located in an historic townhouse in West Chelsea, serves gourmet organic cuisine that is one hundred percent vegan. We strive through our fresh ingredients and innovative dishes to create a unique dining experience superior to any other. Eating organic and vegan encourages a healthy lifestyle and our mission is to be the best at what we do. Blossom is first and foremost animal caring.",
   
)

restaurant7 = Restaurant.create!(
    name: "Cardamom",
    owner_id:  user2.id,              
    website: "https://www.cardamoma2.com",
    address: " 1739 Plymouth Rd, Ann Arbor, MI 48104", 
    coordinates: [42.298802, -83.721449],
    pic_count: 0,		
    review_count: 6,      
    review_avg: 4,
    phone: "(734) 662-2877",
    cost: "$$",
    about: "Freshly prepared from fresh ingredients featuring local meat and produce. House specialties include goat chops and Nepali steamed dumplings. Wine and beer list has been carefully selected for pairing with Indian foods.",
)

join11 = Tag_join.create!(
    restaurant_id: restaurant7.id,
    tag_id: tag12.id
)

join12 = Tag_join.create!(
    restaurant_id: restaurant7.id,
    tag_id: tag1.id
)




restaurant8 = Restaurant.create!(
    name: "Five Guys",
    owner_id:  user2.id,              
    website: "https://www.fiveguys.com",
    address: "5215 De Zavala Rd, San Antonio, TX 78249", 
    coordinates: [29.564859, -98.588010],
    pic_count: 0,		
    review_count: 6,      
    review_avg: 3.5,
    phone: "(210) 641-2595",
    cost: "$$",
    about: "none"
)

join13 = Tag_join.create!(
    restaurant_id: restaurant8.id,
    tag_id: tag3.id
)



restaurant9 = Restaurant.create!(
    name: "Wood's Seafood",
    owner_id:  user2.id,              
    website: "https://www.woodsseafoods.com",
    address: "15 Town Wharf, Plymouth, MA 02360", 
    coordinates: [41.962378, -70.666499],
    pic_count: 0,		
    review_count: 6,      
    review_avg: 3.5,
    phone: "(508) 746-0261",
    cost: "$$",
    about: "Woods Seafood is a full service fish market featuring the freshest fish, clams, live lobsters available. Additionaly we have a 65 seat restaurant overlooking historic harbor serving the freshest seafood from fish and chips to lobster rolls to a clambake lobster dinner.",
)

join14 = Tag_join.create!(
    restaurant_id: restaurant9.id,
    tag_id: tag16.id
)



restaurant10 = Restaurant.create!(
    name: "Mayflower Brewing Company",
    owner_id:  user2.id,              
    website: "https://www.mayflowerbrewing.com",
    address: "12 Resnik Rd # 3, Plymouth, MA 02360", 
    coordinates: [41.949636, -70.711079],
    pic_count: 0,		
    review_count: 6,      
    review_avg: 4.5,
    phone: "(508) 746-2674",
    cost: "$",
    about: "Mayflower Brewing Company - America's Hometown Brewery - is a craft beer microbrewery serving the New England market. Come join us in our tasting room at the brewery for beer tastings, pint, games, and brewery tours. We are family friendly and pet friendly!",
)

join15 = Tag_join.create!(
    restaurant_id: restaurant10.id,
    tag_id: tag18.id
)



restaurant11 = Restaurant.create!(
    name: "Zingerman's Delicatessen",
    owner_id:  user2.id,              
    website: "https://www.zingermansdeli.com",
    address: "422 Detroit St, Ann Arbor, MI 48104", 
    coordinates: [42.284928, -83.745146],
    pic_count: 0,		
    review_count: 6,      
    review_avg: 4,
    phone: "(734) 663-3354",
    cost: "$$",
    about: "Opened in March of 1982 by Paul Saginaw and Ari Weinzweig in a historic building near the Ann Arbor Farmers' Market. Serving up thousands of made-to-order sandwiches with ingredients like premium Black Angus corned beef and pastrami, free-range chicken and turkey, housemade chopped liver and chicken salad. The Deli also stocks an exceptional array of farmhouse cheeses, estate-bottled olive oils, varietal vinegar, smoked fish, salami, coffee, tea and much, much more. Today, Zingerman's Delicatessen is an Ann Arbor institution, the source of great food and great experiences for thousands of visitors every year.",
)

join16 = Tag_join.create!(
    restaurant_id: restaurant11.id,
    tag_id: tag15.id
)

join17 = Tag_join.create!(
    restaurant_id: restaurant11.id,
    tag_id: tag17.id
)


restaurant12 = Restaurant.create!(
    name: "Paesanos 1604",
    owner_id:  user2.id,              
    website: "https://www.paesanos1604.com",
    address: "3622 Paesanos Pkwy, San Antonio, TX 78231", 
    coordinates: [29.600840, -98.553619],
    pic_count: 0,		
    review_count: 6,      
    review_avg: 3.5,
    phone: "(210) 493-1604",
    cost: "$$",
    about: "Wrap yourself in the warm hospitality and scenic views that surround Paesanos 1604. We have left no detail unattended, from the sleek contemporary interiors and inviting Solarium to the tranquil courtyards. Chef Clark McDaniel ignites your taste buds with the flavors of the Mediterranean complemented by the perfect wine pairings. After 45 years as a vibrant icon of the local dining scene, Paesanos continues to set the benchmark for exceptional service and Italian dining in San Antonio. We invite you to experience Paesanos.",
)

join18 = Tag_join.create!(
    restaurant_id: restaurant12.id,
    tag_id: tag8.id
)



restaurant13 = Restaurant.create!(
    name: "Soo Bak Seoul Bowl",
    owner_id:  user2.id,              
    website: " https://www.soobakfoods.com",
    address: "111 Hermosa Dr SE, Albuquerque, NM 87108", 
    coordinates: [35.079399, -106.603894],
    pic_count: 0,		
    review_count: 6,      
    review_avg: 5,
    phone: "(505) 268-0017",
    cost: "$$",
    about: "At Soo Bak Seoul Bowl we share our traditional and innovative Korean cuisine in a fast casual
and family friendly atmosphere. A celebration of Korean and local culture while providing you a
glimpse of how our family celebrates food.",
)

join19 = Tag_join.create!(
    restaurant_id: restaurant13.id,
    tag_id: tag11.id
)



restaurant14 = Restaurant.create!(
    name: "Tomasita's Albuquerque",
    owner_id:  user2.id,              
    website: "https://www.tomasitas.com",
    address: "4949 Pan American Fwy NE, Albuquerque, NM 87109", 
    coordinates: [35.140374, -106.599702],
    pic_count: 0,		
    review_count: 6,      
    review_avg: 3.5,
    phone: "(505) 344-1204",
    cost: "$$",
    about: "Tomasita's restaurant is a New Mexican tradition serving classic Northern New Mexican Cuisine. Locally owned and operated by the Maryol/Gundrey family for over 40 years, we take great pride in quality food, friendly and fast service, and great margaritas. In 2017 we expanded from our original location in Santa Fe and came to Albuquerque!",
)

join20 = Tag_join.create!(
    restaurant_id: restaurant14.id,
    tag_id: tag5.id
)


restaurant15 = Restaurant.create!(
    name: "McDonald's",
    owner_id:  user2.id,              
    website: "https://www.mcdonalds.com",
    address: "233 Bravo Terrace SE, Port Orchard, WA 98367", 
    coordinates: [47.506946, -122.643872],
    pic_count: 0,		
    review_count: 6,      
    review_avg: 3.5,
    phone: "(360) 876-8789",
    cost: "$",
    about: "none",
)

join21 = Tag_join.create!(
    restaurant_id: restaurant15.id,
    tag_id: tag3.id 
)


join22 = Tag_join.create!(
    restaurant_id: restaurant15.id,
    tag_id: tag6.id 
)



restaurant16 = Restaurant.create!(
    name: "China West",
    owner_id:  user2.id,              
    website: "https://www.chinawestwa.com",
    address: "1609 Harrison Ave SE, Port Orchard, WA 98366", 
    coordinates: [47.533950, -122.602165],
    pic_count: 0,		
    review_count: 6,      
    review_avg: 4,
    phone: "(360) 871-7317",
    cost: "$$",
    about: "none",
)

join23 = Tag_join.create!(
    restaurant_id: restaurant16.id,
    tag_id: tag9.id 
)



ippudopic =  open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/ippudo1.jpg")
restaurant_pic1 = restaurant1.photos.attach(io: ippudopic, filename: "i1.jpg")
restaurant_pic2 = restaurant1.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/ippudo2.jpg"), filename: "i2.jpg")
restaurant_pic3 = restaurant1.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/ippudo3.jpg"), filename: "i3.jpg")
restaurant_pic4 = restaurant1.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/ippudo4.jpg"), filename: "i4.jpg")
restaurant_pic5 = restaurant2.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/popeyes1.jpg"), filename: "p1.jpg")
restaurant_pic6 = restaurant2.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/popeyes2.jpg"), filename: "p2.jpg")
restaurant_pic7 = restaurant2.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/popeyes3.jpg"), filename: "p3.jpg")
restaurant_pic8 = restaurant2.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/popeyes4.jpg"), filename: "p4.jpg")
restaurant_pic9 = restaurant3.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/dorado1.jpg"), filename: "d1.jpg")
restaurant_pic10 = restaurant3.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/dorado2.jpg"), filename: "d2.jpg")
restaurant_pic11 = restaurant3.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/dorado3.jpg"), filename: "d3.jpg")
restaurant_pic12 = restaurant3.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/dorado4.jpg"), filename: "d4.jpg")
restaurant_pic13 = restaurant4.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/joespizza1.jpg"), filename: "j1.jpg")
restaurant_pic14 = restaurant4.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/joespizza2.jpg"), filename: "j2.jpg")
restaurant_pic15 = restaurant4.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/joespizza3.jpg"), filename: "j3.jpg")
restaurant_pic16 = restaurant4.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/joespizza4.jpg"), filename: "j4.jpg")
restaurant_pic17 = restaurant5.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/tacobell1.jpg"), filename: "t1.jpg")
restaurant_pic18 = restaurant5.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/tacobell2.jpg"), filename: "t2.jpg")
restaurant_pic19 = restaurant5.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/tacobell3.jpg"), filename: "t3.jpg")
restaurant_pic20 = restaurant5.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/tacobell4.jpg"), filename: "t4.jpg")
restaurant_pic21 = restaurant6.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/blossom1.jpg"), filename: "b1.jpg")
restaurant_pic22 = restaurant6.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/blossom2.jpg"), filename: "b2.jpg")
restaurant_pic23 = restaurant6.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/blossom3.jpg"), filename: "b3.jpg")
restaurant_pic24 = restaurant6.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/blossom4.jpg"), filename: "b4.jpg")
restaurant_pic25 = restaurant7.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/cardamom1.jpg"), filename: "card1.jpg")
restaurant_pic26 = restaurant7.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/cardamom2.jpg"), filename: "card2.jpg")
restaurant_pic27 = restaurant7.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/cardamom3.jpg"), filename: "card3.jpg")
restaurant_pic28 = restaurant7.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/cardamom4.jpg"), filename: "card4.jpg")
restaurant_pic29 = restaurant8.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/fiveguys1.jpg"), filename: "fg1.jpg")
restaurant_pic30 = restaurant8.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/fiveguys2.jpg"), filename: "fg2.jpg")
restaurant_pic31 = restaurant8.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/fiveguys3.jpg"), filename: "fg3.jpg")
restaurant_pic32 = restaurant8.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/fiveguys4.jpg"), filename: "fg4.jpg")
restaurant_pic33 = restaurant9.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/woods1.jpg"), filename: "sf1.jpg")
restaurant_pic34 = restaurant9.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/woods2.jpg"), filename: "sf2.jpg")
restaurant_pic35 = restaurant9.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/woods3.jpg"), filename: "sf3.jpg")
restaurant_pic36 = restaurant9.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/woods4.jpg"), filename: "sf4.jpg")
restaurant_pic37 = restaurant10.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/mayflower1.jpg"), filename: "mf1.jpg")
restaurant_pic38 = restaurant10.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/mayflower2.jpg"), filename: "mf2.jpg")
restaurant_pic39 = restaurant10.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/mayflower3.jpg"), filename: "mf3.jpg")
restaurant_pic40 = restaurant10.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/mayflower4.jpg"), filename: "mf4.jpg")
restaurant_pic40 = restaurant11.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/zing1.jpg"), filename: "z1.jpg")
restaurant_pic41 = restaurant11.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/zing2.jpg"), filename: "z2.jpg")
restaurant_pic42 = restaurant11.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/zing3.jpg"), filename: "z3.jpg")
restaurant_pic43 = restaurant11.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/zing4.jpg"), filename: "z4.jpg")
restaurant_pic44 = restaurant12.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/paes1.jpg"), filename: "pa1.jpg")
restaurant_pic45 = restaurant12.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/paes2.jpg"), filename: "pa2.jpg")
restaurant_pic46 = restaurant12.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/paes3.jpg"), filename: "pa3.jpg")
restaurant_pic47 = restaurant12.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/paes4.jpg"), filename: "pa4.jpg")
restaurant_pic48 = restaurant13.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/soobak1.jpg"), filename: "sb1.jpg")
restaurant_pic49 = restaurant13.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/soobak2.jpg"), filename: "sb2.jpg")
restaurant_pic50 = restaurant13.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/soobak3.jpg"), filename: "sb3.jpg")
restaurant_pic51 = restaurant13.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/soobak4.jpg"), filename: "sb4.jpg")
restaurant_pic52 = restaurant14.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/tomasita1.jpg"), filename: "tm1.jpg")
restaurant_pic53 = restaurant14.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/tomasita2.jpg"), filename: "tm2.jpg")
restaurant_pic54 = restaurant14.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/tomasita3.jpg"), filename: "tm3.jpg")
restaurant_pic55 = restaurant14.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/tomasita4.jpg"), filename: "tm4.jpg")
restaurant_pic56 = restaurant15.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/McD1.jpg"), filename: "mc1.jpg")
restaurant_pic57 = restaurant15.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/McD2.jpg"), filename: "mc2.jpg")
restaurant_pic58 = restaurant15.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/McD3.jpg"), filename: "mc3.jpg")
restaurant_pic59 = restaurant15.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/McD4.jpg"), filename: "mc4.jpg")
restaurant_pic60 = restaurant16.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/china1.jpg"), filename: "ch1.jpg")
restaurant_pic60 = restaurant16.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/china2.jpg"), filename: "ch2.jpg")
restaurant_pic60 = restaurant16.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/china3.jpg"), filename: "ch3.jpg")
restaurant_pic60 = restaurant16.photos.attach(io: open("https://hootz-seed.s3.amazonaws.com/hootz-pictures/china4.jpg"), filename: "ch4.jpg")



join1 = Tag_join.create!(
    restaurant_id: restaurant1.id,
    tag_id: tag2.id
)
join2 = Tag_join.create!(
    restaurant_id: restaurant1.id,
    tag_id: tag10.id
)

join3 = Tag_join.create!(
    restaurant_id: restaurant2.id,
    tag_id: tag4.id
)
join4 = Tag_join.create!(
    restaurant_id: restaurant2.id,
    tag_id: tag6.id
)

join5 = Tag_join.create!(
    restaurant_id: restaurant3.id,
    tag_id: tag5.id
)

join6 = Tag_join.create!(
    restaurant_id: restaurant4.id,
    tag_id: tag7.id
)

join7 = Tag_join.create!(
    restaurant_id: restaurant4.id,
    tag_id: tag8.id
)

join8 = Tag_join.create!(
    restaurant_id: restaurant5.id,
    tag_id: tag5.id
)
join9 = Tag_join.create!(
    restaurant_id: restaurant5.id,
    tag_id: tag6.id
)

join10 = Tag_join.create!(
    restaurant_id: restaurant6.id,
    tag_id: tag1.id
)


review1 = Review.create!(
    restaurant_id: restaurant1.id,
    user_id: user2.id,
    score: 4,
    body: "The noodles were a little too soft for my taste, but the broth was excellent."
)

review2 = Review.create!(
    restaurant_id: restaurant1.id,
    user_id: user3.id,
    score: 5,
    body: "I know good ramen when I see it."
)

review3 = Review.create!(
    restaurant_id: restaurant1.id,
    user_id: user4.id,
    score: 5,
    body: "This is my go to ramen spot on a friday night after work."
)

review4 = Review.create!(
    restaurant_id: restaurant4.id,
    user_id: user5.id,
    score: 4,
    body: "I love Joe's! the slices are so big."
)

review5 = Review.create!(
    restaurant_id: restaurant4.id,
    user_id: user4.id,
    score: 3,
    body: "I love pizza as much as the next guy but this is New York. It's good pizza but it doesn't stand out in the crowd."
)

review6 = Review.create!(
    restaurant_id: restaurant3.id,
    user_id: user5.id,
    score: 4,
    body: "I reccomend their shrimp tacos."
)

review6 = Review.create!(
    restaurant_id: restaurant3.id,
    user_id: user2.id,
    score: 3,
    body: "Call me old fashioned but I rather eat at taco bell."
)

review7 = Review.create!(
    restaurant_id: restaurant3.id,
    user_id: user3.id,
    score: 5,
    body: "The guy above me is nuts! This is some of the best mexican food in the city."
)


review8 = Review.create!(
    restaurant_id: restaurant2.id,
    user_id: user3.id,
    score: 4,
    body: "The spicy chicken sandwich lives up to the hype."
)

review9 = Review.create!(
    restaurant_id: restaurant2.id,
    user_id: user4.id,
    score: 2,
    body: "It was kind of dirty and the food is meh."
)

review10 = Review.create!(
    restaurant_id: restaurant5.id,
    user_id: user5.id,
    score: 3,
    body: "It's a Taco Bell what do you expect?"
)

review10 = Review.create!(
    restaurant_id: restaurant5.id,
    user_id: user2.id,
    score: 4,
    body: "It's always open and the food is consistenly out fast."
)

review10 = Review.create!(
    restaurant_id: restaurant6.id,
    user_id: user2.id,
    score: 1,
    body: "There was no meat. :("
)

review11 = Review.create!(
    restaurant_id: restaurant6.id,
    user_id: user3.id,
    score: 5,
    body: "Blossom has everything the presentation, taste of the food, and the atmosphere. I will definitely be coming back again."
)

review12 = Review.create!(
    restaurant_id: restaurant6.id,
    user_id: user4.id,
    score: 5,
    body: "You can't go wrong with whatever you order."
)


review13 = Review.create!(     
    restaurant_id: restaurant7.id,    
    user_id: user3.id,    
    score: 5,     
    body: "Great Indian Restaurant, get there early! I would recommend ordering for the whole table and sharing." 
    )
    
    review14 = Review.create!(     
    restaurant_id: restaurant7.id,    
    user_id: user4.id,    
    score: 4,     
    body: "Chicken Tikka Masala was really good! Highly recommend this place." 
    )
    
    review15 = Review.create!(     
    restaurant_id: restaurant8.id,    
    user_id: user5.id,    
    score: 2,     
    body: "Burger was OK, prefer McDonald’s for this price. Would not eat here without a coupon."
    )
    
    review16 = Review.create!(     
    restaurant_id: restaurant8.id,    
    user_id: user6.id,    
    score: 3,     
    body: "Place was really busy, good fries and milkshakes. Great place for special treats for kids." 
    )
    
    review17 = Review.create!(     
    restaurant_id: restaurant9.id,    
    user_id: user3.id,    
    score: 3,     
    body: "Good seafood in downtown Plymouth, right on the bay. It was very crowed at lunchtime, but the food was worth it. Beer selection was not good."
    )
    
    review18 = Review.create!(     
    restaurant_id: restaurant9.id,    
    user_id: user6.id,    
    score: 4,     
    body: "Best lobster rolls around! Consistently good seafood, this is where the locals go (I’m a local)." 
    )
    
    review19 = Review.create!(     
    restaurant_id: restaurant10.id,    
    user_id: user4.id,    
    score: 4,     
    body: "Their beer is the best! Went on the tour of the brewery and then ended up in the bar sampling their beer."  
    )
    
    review20 = Review.create!(     
    restaurant_id: restaurant10.id,    
    user_id: user5.id,    
    score: 4,     
    body: "Great little bar in downtown Plymouth. Nice place to sample all the products Mayflower has out on the market currently. Friday and Saturday nights are really busy." 
    )
    
    review21 = Review.create!(     
    restaurant_id: restaurant11.id,    
    user_id: user5.id,    
    score: 5,     
    body: "Went their for breakfast and had the challah french toast. Best french toast ever! Bacon was really tasty." 
    )
    
    review22 = Review.create!(     
    restaurant_id: restaurant11.id,    
    user_id: user3.id,    
    score: 5,     
    body: "Wow, what a great deli! We could not believe all the sandwich choices, and ended up eating only half of our sandwiches as they were so big. The Reuben was to die for!" 
    )
    
    review23 = Review.create!(     
    restaurant_id: restaurant12.id,    
    user_id: user4.id,    
    score: 4,     
    body: "The Shrimp Paesano is the best item on the menu, house specialty. The food is consistently good. Parking can be tricky on Friday and Saturday nights." 
    )
    
    review24 = Review.create!(     
    restaurant_id: restaurant12.id,    
    user_id: user6.id,    
    score: 3,     
    body: "Had reservations for a birthday party celebration. Food was lukewarm, maybe because I was in a group of 20. Will try this place with a smaller group next time." 
    )
    
    review25 = Review.create!(     
    restaurant_id: restaurant13.id,    
    user_id: user3.id,    
    score: 4,     
    body: "Great Korean food, I was stationed in Seoul, SK and the food here is better than there. They will make it really spicy, if you ask. Kimchi is really good." 
    )
    
    review26 = Review.create!(     
    restaurant_id: restaurant13.id,    
    user_id: user4.id,    
    score: 2,     
    body: "Food was OK, very spicy. Dish photos on the menu were not that helpful as what I ordered did not look like the photo.." 
    )
    
    review27= Review.create!(     
    restaurant_id: restaurant14.id,    
    user_id: user5.id,    
    score: 4,     
    body: "Visiting Albuquerque, this restaurant was recommended to us. Food was good, sopapillas were really special. Would eat here again." 
    )
    
    review28 = Review.create!(     
    restaurant_id: restaurant14.id,    
    user_id: user6.id,    
    score: 5,     
    body: "My favorite place to eat!! I love the green chili enchiladas and the sopapillas are the best in the city. Would highly recommend making reservations on Friday and Saturday nights." 
    )
    
    review29 = Review.create!(     
    restaurant_id: restaurant15.id,    
    user_id: user3.id,    
    score: 1,     
    body: "This McDonald’s is the worst ever. My Big Mac was cold and the meat was red in the middle. Would not eat here again." 
    )
    
    review30 = Review.create!(     
    restaurant_id: restaurant15.id,    
    user_id: user6.id,    
    score: 2,     
    body: "Customer service stinks at this place. The drive thru window speaker didn’t work but there was no sign telling you that. When I finally got to order at the window the window kept opening and closing and the employee didn’t apologize for it. Food was the norm for McD’s." 
    )
    
    review31 = Review.create!(     
    restaurant_id: restaurant16.id,    
    user_id: user4.id,    
    score: 4,     
    body: "Really good Chinese food, a bit out of the way though. Mu Sho pork was really yummy, and they make their own fortune cookies! We pick-up take out every Friday night, order early as it gets crowded." 
    )
    
    review32 = Review.create!(     
    restaurant_id: restaurant16.id,    
    user_id: user5.id,    
    score: 3,     
    body: "We ate here on a Saturday night and it was crowded, good sign. Food was traditional Chinese, would eat here again." 
    )
    