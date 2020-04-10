class AddAvgReviewRestuarants < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :review_avg, :decimal, precision: 2, scale: 1
  end
end
