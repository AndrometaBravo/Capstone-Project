class AddLocationToUser < ActiveRecord::Migration[5.2]
  def change
      add_column :users, :lat, :decimal, { precision: 10, scale: 6 }
      add_column :users, :lng, :decimal, { precision: 10, scale: 6 }
  end
end
