# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user1 = User.create(email: "demo_user@gmail.com", password: "password", first_name: "David", last_name: "Johnson", zipcode: "10011")

user2 = User.create(email: "coporate@shill.com", password: "password", first_name: "Larry", last_name: "Potts", zipcode: "10011")

user3 = User.create(email: "l.northdale@gmail.com", password: "password", first_name: "Leah", last_name: "Northdale", zipcode: "10003")

user4 = User.create(email: "sexybeast@hotmail.com", password: "password", first_name: "Joe", last_name: "Poopue", zipcode: "10010")

user5 = User.create(email: "caroline143@yahoo.com", password: "password", first_name: "Caroline", last_name: "Wallace", zipcode: "10001")


restaurant1 = Restaurant.create(
    name: "Ippudo NY",
    owner_id: 5,
    website: "https://www.ippudony.com",
    address: "65 4th Ave, New York, NY 10003",
    coordinates: [40.730943, -73.990295],
    pic_count: 0,
    review_count: 10,
    review_avg: 4,
    phone: "(212) 388-0088",
    cost: "$$",
    about: "Established in 2008.

    IPPUDO started in 1985 with a seating of only ten in the city of Fukuoka. Instantly, it revolutionized the ramen world with its fashionable décor, hospitable service, and delicious bowls of ramen. It appealed to the young and old alike and kick-started a ramen craze that lasted over two decades. Today it has established itself as the market leader in Japan, with more than 70 outlets under the brand. In a fiercely competitive environment where more than 3,500 ramen restaurants come and go each year, IPPUDO has remained at the cutting edge of innovation and quality."
)

restaurant2 = Restaurant.create(
    name: "Popeyes Louisiana Kitchen",
    owner_id: 2,
    website: "https://www.popeyes.com",
    address: "47 14th St, New York, NY 10011",
    coordinates: [40.737095, -73.995843],
    pic_count: 0,
    review_count: 17,
    review_avg: 3,
    phone: "(212) 206-8405",
    cost: "$",
    about: "none"
)

restaurant3 = Restaurant.create(
    name: "DORADO Tacos & Quesadillas",
    owner_id: 3,
    website: "https://www.doradotacos.com",
    address: "28 E 12th St, New York, NY 10003",
    coordinates: [40.733960, -73.993156],
    pic_count: 0,
    review_count: 7,
    review_avg: 4,
    phone: "(212) 627-0900",
    cost: "$",
    about: "Established in 2012.

    Dorado Tacos was inspired by the tacos in Ensenada, just south of San Diego on the Baja California Peninsula. A mom & pop shop in the Union Square area, Dorado Tacos has been serving NYC fresh, quick tacos for over four years. Our chef driven menu is full of clean favors with options available for our gluten free and vegan guests! Enjoy the best tacos for a great price at Dorado Tacos today!"
)

restaurant4 = Restaurant.create(
    name: "Joe's Pizza",
    owner_id: 4,
    website:"https://www.joespizzanyc.com",
    address: "150 E 14th St, New York, NY 10003",
    coordinates: [40.733240, -73.987652],
    pic_count: 0,
    review_count: 27,
    review_avg: 4,
    phone: "(646) 559-4878",
    cost: "$",
    about: "Established in 1975.

    Since 1975, family run for three generations. Joe’s Pizza is widely considered the quintessential slice in New York City."
)

restaurant5 = Restaurant.create(
    name: "Taco Bell",
    owner_id: 2,
    website: "https://www.tacobell.com",
    address: "18 E 14th St, New York, NY 10003",
    coordinates: [40.735333, -73.992812],
    pic_count: 0,
    review_count: 48,
    review_avg: 3.5,
    phone: "(212) 645-8645",
    cost: "$",
    about: "none"
)

restaurant6 = Restaurant.create(
    name: "Blossom",
    website: "https://www.blossomnyc.com/chelsea",
    address: "187 9th Ave, New York, NY 10011",
    coordinates: [40.745518, -74.002338],
    pic_count: 0,
    review_count: 29,
    review_avg: 4,
    phone: "(212) 627-1144",
    cost: "$$$",
    about: "Blossom, located in an historic townhouse in West Chelsea, serves gourmet organic cuisine that is one hundred percent vegan. We strive through our fresh ingredients and innovative dishes to create a unique dining experience superior to any other. Eating organic and vegan encourages a healthy lifestyle and our mission is to be the best at what we do. Blossom is first and foremost animal caring."
)
