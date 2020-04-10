class AddPhone < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :phone, :string
  end
end
