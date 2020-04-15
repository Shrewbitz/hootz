class Review < ApplicationRecord

    validates :restaurant_id, :user_id, :body, :score, presence: true

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :restaurant,
    foreign_key: :restaurant_id,
    class_name: :Restaurant

end