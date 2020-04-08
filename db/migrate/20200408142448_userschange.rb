class Userschange < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :zipcode, :string
    add_column :users, :birthdate, :date
  end
end
