class Restaurant < ApplicationRecord

    validates :name, :owner_id, :website, :phone, :address, :coordinates, :about, :cost, presence: true

    belongs_to :user,
    foreign_key: :owner_id,
    class_name: :User


    has_many_attached :photos
end