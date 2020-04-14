class Tag_join < ApplicationRecord

    validates :restaurant_id, :tag_id, presence: true

    belongs_to :tag,
    foreign_key: :tag_id,
    class_name: :Tag

    belongs_to :restaurant,
    foreign_key: :restaurant_id,
    class_name: :Restaurant

end