json.extract! review, :id, :body, :score, :user_id, :restaurant_id
json.set! :user, review.user
json.set! :review_count, review.user.review_joins.length

month = review.created_at.month
day = review.created_at.day
year = review.created_at.year
json.set! :date, "#{month}/#{day}/#{year}"
