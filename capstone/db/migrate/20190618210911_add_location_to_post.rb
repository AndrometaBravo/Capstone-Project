class AddLocationToPost < ActiveRecord::Migration[5.2]
  def change
      add_column :posts, :lat, :decimal, { precision: 10, scale: 6 }
      add_column :posts, :lng, :decimal, { precision: 10, scale: 6 }
  end
end
