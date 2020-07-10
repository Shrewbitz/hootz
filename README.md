# Hootz

![](wright.gif)

# Background

Hootz is a Yelp clone. Yelp is such a large site now that I have decided to focus on the core functionality of reviewing restaurants. Users will be able to sign up, find, and review restaurants. 

# Functionality & MVP

- user auth and demo user
- restaurant pages with pictures, hours, other info
- search restaurants by name, address, and tags
- restaurant reviews that update the restaurant score
- host on heroku
- a production README

# Wireframes

![](wireframe.png)

The top of the screen will have a dropdown menu that lets you select what language you want the imported sentence to be translated to. Below will be a container that contains the randomly distributed words. This is all that is needed for the mvp. Other possible features would be a progress bar, to add a time limit, a score, and how many sentences you have built in the session. 

# Architecture and Technologies

I have a list of 1.3 million English sentences in a .tsv file from taboeta. I filtered down to 20,000 sentence. I put these in a database and fetch a sentence on a page load. I then send the sentence through google's translate api. The sentence string will is split and be rendered on the screen using javascript. Then it is checked to make sure each word is in the correct position. When that check is complete a new sentence will be fetched from the database and the new words will be rendered.

# Highlighted Feature

An interesting challenge was figuring out how to check if the sentence was complete. This seems as simple as matching but many problems arose. Firstly you want the words close together which means you have to find the location of each word. I do this by having each word reference the word left of it and make sure it is less than 50 pixels above or below and less than 200 to the right. Next a check was put in to check the order. This had many unforseen challenges too. Sentences with word double or tripples caused problems "The boy has **to** go **to** school." I had to make sure users could switch the two **to**'s otherwise the experience would be frustrating. For that reason I had to target the actual words and not the divs to compare. I also set an interval function to every half second so it wouldnt register correct if you dragged it past a correct spot. Finally I assigned "points" to each of these checks and filled the progress bar depending on how close they were. Below is the check code. 

```js

```

# Implementation Timeline

### project start date: 4/6/2020
### 1. New account creation, login, and guest/demo login (4/6, 4/7)
- Users can create accounts and log in and out.
- There is demo user.
- You need to be logged in for certain features. (reviews/creating restaurants)
### 2. Hosting on Heroku (4/7)
- The project is live on the internet.
### 3. Restaurant pages (4/8, 4/9)
- Logged in users can create Restaurants.
- Users can view restaurants.
- Owners can edit their restaurants.
### 4. Pictures (4/10, 4/11)
- Restaurants can have pictures uploaded to them.
- Reviews can have pictures.
- Restaurants and users show the total number of pictures associated with them.
### 5. Searches/tags (4/12, 4/13)
- Users can search for restaurants by name or tag.
### 6. reviews/ratings (4/14, 4/15)
- Users can review restaurants
- Restaurants display the average of the reviews
- Restaurants and users show the total number of pictures associated with them.
### 7. Feature map/location (4/16, 4/17)
- Restaurants have a google map API.
- Nearby restaurants show on the map.
### 8. Production README (4/17)
- Have a fully fleshed out README.