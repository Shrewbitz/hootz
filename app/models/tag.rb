class Tag < ApplicationRecord

    validates :tag, presence: true

    has_many :restaurant_joins,
    foreign_key: :tag_id,
    class_name: :Tag_join

    has_many :restaurants,
    through: :restaurant_joins,
    source: :restaurant


end