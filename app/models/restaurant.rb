class Restaurant < ApplicationRecord

    validates :name, :website, :phone, :address, :coordinates, :about, :cost, presence: true

    belongs_to :user,
    foreign_key: :owner_id,
    class_name: :User

    has_many :tag_joins,
    foreign_key: :restaurant_id,
    class_name: :Tag_join

    has_many :tags,
    through: :tag_joins,
    source: :tag

    has_many_attached :photos
end