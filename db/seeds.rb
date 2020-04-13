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

user1 = User.create!(email: "demo_user@gmail.com", password: "password", first_name: "David", last_name: "Johnson", zipcode: "10011")

user2 = User.create!(email: "coporate@shill.com", password: "password", first_name: "Larry", last_name: "Potts", zipcode: "10011")

user3 = User.create!(email: "l.northdale@gmail.com", password: "password", first_name: "Leah", last_name: "Northdale", zipcode: "10003")

user4 = User.create!(email: "sexybeast@hotmail.com", password: "password", first_name: "Joe", last_name: "Poopue", zipcode: "10010")

user5 = User.create!(email: "caroline143@yahoo.com", password: "password", first_name: "Caroline", last_name: "Wallace", zipcode: "10001")


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