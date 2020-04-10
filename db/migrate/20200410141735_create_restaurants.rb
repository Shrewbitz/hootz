class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.integer :owner_id
      t.string :website
      t.string :address
      t.point :coordinates
      t.integer :pic_count
      t.integer :review_count
      t.timestamps
    end
  end
end
