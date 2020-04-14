class CreateTagJoins < ActiveRecord::Migration[5.2]
  def change
    create_table :tag_joins do |t|
      t.integer :tag_id
      t.integer :restaurant_id
      t.timestamps
    end
  end
end
