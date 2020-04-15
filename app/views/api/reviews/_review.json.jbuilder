json.extract! review, :id, :body, :score, :user_id, :restaurant_id
json.set! :user, review.user
json.set! :review_count, review.user.review_joins.length