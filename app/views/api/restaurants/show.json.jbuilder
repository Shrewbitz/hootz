json.partial! 'restaurant', restaurant: @restaurant
if @restaurant.photos.attached?
    json.photos @restaurant.photos.map {|photo| url_for(photo)}
end