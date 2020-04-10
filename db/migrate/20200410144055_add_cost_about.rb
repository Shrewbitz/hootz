class AddCostAbout < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :about, :text
    add_column :restaurants, :cost, :string
  end
end
