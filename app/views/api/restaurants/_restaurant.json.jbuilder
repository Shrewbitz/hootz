json.extract! restaurant, :id, :name, :owner_id, :website, :address, :coordinates, :pic_count, :review_count, :phone, :cost, :about, :tags

if restaurant.review_joins.length > 0
    total = 0
    restaurant.review_joins.each do |review|
        total += review.score
    end
    final_total = total / restaurant.review_joins.length
end
# final_total += 2
json.set! :review_avg, final_total